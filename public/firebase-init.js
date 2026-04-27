import { initializeApp }       from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getDatabase, ref, onValue, set }
                                from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";
import { getAuth, signInAnonymously, onAuthStateChanged }
                                from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey:            "AIzaSyBasAI5ikIAPCilxV-A0yHy7jmWJX5tuyQ",
  authDomain:        "cleantrack-restaurant.firebaseapp.com",
  databaseURL:       "https://cleantrack-restaurant-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId:         "cleantrack-restaurant",
  storageBucket:     "cleantrack-restaurant.firebasestorage.app",
  messagingSenderId: "583662191232",
  appId:             "1:583662191232:web:4b7b41c56ead53fae9dc65"
};

const app  = initializeApp(firebaseConfig);
const db   = getDatabase(app);
const auth = getAuth(app);



// ════════════════════════════════
// AUTH → then connect DB
// ════════════════════════════════
onAuthStateChanged(auth, user => {
  if(!user) {
    signInAnonymously(auth).catch(e => console.error('Auth error:', e));
  } else {
    connectDB();
  }
});

function connectDB(){
  const objToArr = obj => obj ? Object.values(obj) : [];
  let syncing = false;

  function setStatus(online){
    let el = document.getElementById('fb-status');
    if(!el){
      el = document.createElement('div');
      el.id = 'fb-status';
      el.style.cssText = 'position:fixed;top:60px;right:12px;z-index:500;font-size:11px;font-weight:700;padding:4px 10px;border-radius:99px;transition:all .4s;pointer-events:none;';
      document.body.appendChild(el);
    }
    if(online){
      el.style.opacity='1';
      el.textContent='🟢 ออนไลน์';
      el.style.background='var(--green-lt)';
      el.style.color='var(--green)';
      setTimeout(()=>el.style.opacity='0', 3000);
    } else {
      el.style.opacity='1';
      el.textContent='🔴 ออฟไลน์';
      el.style.background='var(--red-lt)';
      el.style.color='var(--red)';
    }
  }

  // SYNC tasks
  onValue(ref(db,'tasks'), snap => {
    if(syncing) return;
    const data = snap.val();
    if(data){
      // Migrate old photos (base64 in tasks node) → /photos node
      const needsMigration = [];
      window.tasks = objToArr(data).map(t=>{
        const oldPhotos = t.photos ? Object.values(t.photos) : [];
        if(oldPhotos.length > 0) needsMigration.push({id:t.id, photos:oldPhotos});
        const {photos,...rest} = t;
        return {...rest, photos:oldPhotos,
          done: t.done ?? false, doneBy: t.doneBy ?? null, doneAt: t.doneAt ?? null, doneDate: t.doneDate ?? null};
      });
      // Move old photos to /photos node and clear from tasks
      if(needsMigration.length){
        needsMigration.forEach(({id,photos})=>{
          const obj={}; photos.forEach((p,i)=>{obj['p'+i]=p;});
          set(ref(db,'photos/'+id), obj);
        });
        // Clear photos from tasks node
        setTimeout(()=>{ if(window.fbSaveTasks) window.fbSaveTasks(); }, 500);
      }
      if(window.renderToday) window.renderToday();
      if(window.curTab==='tasks' && window.renderTasks) window.renderTasks();
    }
    window.fbReady=true;
    setStatus(true);
  }, err=>{ setStatus(false); console.error(err); });

  // SYNC photos separately (large data, separate node)
  onValue(ref(db,'photos'), snap => {
    if(syncing) return;
    const data = snap.val();
    if(data){
      window.tasks.forEach(t=>{
        const ph=data[t.id];
        t.photos = ph ? Object.values(ph) : [];
      });
      if(window.renderToday) window.renderToday();
      if(window.curTab==='tasks' && window.renderTasks) window.renderTasks();
    }
  });

  // SYNC staff
  onValue(ref(db,'staff'), snap => {
    if(syncing) return;
    const data = snap.val();
    if(data){
      window.staff = objToArr(data);
      if(window.renderToday) window.renderToday();
      if(window.curTab==='staff' && window.renderStaff) window.renderStaff();
    }
  });

  // SYNC hist
  onValue(ref(db,'hist'), snap => {
    if(syncing) return;
    const data = snap.val();
    if(data){
      window.hist = objToArr(data).map(h=>({
        ...h, ts: new Date(h.ts),
        photos: h.photos ? Object.values(h.photos) : [],
      })).sort((a,b)=>b.ts-a.ts);
      if(window.curTab==='history' && window.renderHist) window.renderHist();
    }
  });

  window.fbSaveTasks = () => {
    if(!window.fbReady) return;
    syncing=true;
    const obj={};
    window.tasks.forEach(t=>{
      obj[t.id]={...t, photos:t.photos.reduce((o,p,i)=>{o[i]=p;return o;},{})};
    });
    set(ref(db,'tasks'),obj).finally(()=>syncing=false);
  };

  window.fbSaveStaff = () => {
    if(!window.fbReady) return;
    syncing=true;
    const obj={};
    window.staff.forEach(s=>{ obj[s.id]=s; });
    set(ref(db,'staff'),obj).finally(()=>syncing=false);
  };

  window.fbSaveZones = () => {
    if(!window.fbReady) return;
    syncing=true;
    var obj={};
    window.zones.forEach(z=>{obj[z.id]=z;});
    set(ref(db,'zones'),obj).finally(()=>syncing=false);
  };

  window.fbSavePhotos = (taskId, photosArr) => {
    if(!window.fbReady) return;
    const obj={};
    photosArr.forEach((p,i)=>{obj['p'+i]=p;});
    if(photosArr.length===0){
      set(ref(db,'photos/'+taskId), null);
    } else {
      set(ref(db,'photos/'+taskId), obj);
    }
  };

  // SYNC zones
  onValue(ref(db,'zones'), snap => {
    if(syncing) return;
    const data = snap.val();
    if(data){
      window.zones = Object.values(data);
      if(window.renderZoneSeg) window.renderZoneSeg();
    }
  });

  window.fbSaveHist = () => {
    if(!window.fbReady) return;
    syncing=true;
    const obj={};
    window.hist.forEach((h,i)=>{
      obj['h'+(h.ts.getTime()+'_'+i)]={
        ...h, ts: h.ts.toISOString(),
        photos: h.photos.reduce((o,p,j)=>{o[j]=p;return o;},{}),
      };
    });
    set(ref(db,'hist'),obj).finally(()=>syncing=false);
  };

  // ครั้งแรก: ถ้า Firebase ว่างให้ push ข้อมูลตั้งต้น
  onValue(ref(db,'tasks'), snap=>{
    window.fbReady=true;
    if(!snap.exists()){
      var _t={}; window.tasks.forEach(function(x){const {photos,...rest}=x;_t[x.id]=rest;});
      set(ref(db,'tasks'),_t);
      var _s={}; window.staff.forEach(function(x){_s[x.id]=x;});
      set(ref(db,'staff'),_s);
      var _z={}; window.zones.forEach(function(z){_z[z.id]=z;});
      set(ref(db,'zones'),_z);
    }
  }, {onlyOnce:true});
