import Head from 'next/head'
import { useEffect } from 'react'

export default function YuGrill() {
  useEffect(() => {
    const s1 = document.createElement('script')
    s1.textContent = `
// ══════════════ DATA ══════════════
window.staff = [
  {id:'s1',name:'แอม', emo:'👩',role:'หัวหน้าพนักงาน'},
  {id:'s2',name:'บิ๊ก',emo:'👨',role:'พนักงานเสิร์ฟ'},
  {id:'s3',name:'นุ่น',emo:'👩',role:'พนักงานเสิร์ฟ'},
  {id:'s4',name:'ต้อม',emo:'👨',role:'ผู้ช่วยครัว'},
  {id:'s5',name:'เจ',  emo:'👩',role:'พนักงานทำความสะอาด'},
];
window.tasks = [
  {id:1, name:'ล้างพื้นครัว',         zone:'ครัว',      shift:'am',freq:'ทุกวัน',        note:'ใช้น้ำยาฆ่าเชื้อทุกครั้ง',done:false,photos:[],doneBy:null,doneAt:null},
  {id:2, name:'เช็ดโต๊ะอาหารทุกตัว',  zone:'โถงอาหาร', shift:'am',freq:'ทุกวัน',        note:'',done:false,photos:[],doneBy:null,doneAt:null},
  {id:3, name:'ทำความสะอาดห้องน้ำ',    zone:'โถงอาหาร', shift:'am',freq:'ทุกวัน',        note:'เช็ดพื้น อ่าง และกระจก',done:false,photos:[],doneBy:null,doneAt:null},
  {id:4, name:'เช็ดเคาน์เตอร์บริการ',  zone:'โถงอาหาร', shift:'am',freq:'ทุกวัน',        note:'',done:false,photos:[],doneBy:null,doneAt:null},
  {id:5, name:'กวาดและถูพื้นโถงอาหาร', zone:'โถงอาหาร', shift:'am',freq:'ทุกวัน',        note:'',done:false,photos:[],doneBy:null,doneAt:null},
  {id:6, name:'ล้างพื้นครัวก่อนปิด',   zone:'ครัว',      shift:'pm',freq:'ทุกวัน',        note:'',done:false,photos:[],doneBy:null,doneAt:null},
  {id:7, name:'ล้างพื้นโถงอาหาร',      zone:'โถงอาหาร', shift:'pm',freq:'ทุกวัน',        note:'',done:false,photos:[],doneBy:null,doneAt:null},
  {id:8, name:'เช็ดกระจกร้าน',        zone:'โถงอาหาร', shift:'pm',freq:'ทุกสัปดาห์',   note:'',done:false,photos:[],doneBy:null,doneAt:null},
  {id:9, name:'ทำความสะอาดตู้เย็น',    zone:'ครัว',      shift:'pm',freq:'ทุก 2 สัปดาห์',note:'เช็ดทั้งด้านในและนอก',done:false,photos:[],doneBy:null,doneAt:null},
  {id:10,name:'ล้างห้องน้ำรอบปิดร้าน', zone:'โถงอาหาร', shift:'pm',freq:'ทุกวัน',        note:'',done:false,photos:[],doneBy:null,doneAt:null},
];
const TEMPLATES = [
  {icon:'🧹',name:'กวาดพื้น',            zone:'โถงอาหาร',shift:'am',freq:'ทุกวัน',        note:''},
  {icon:'🪣',name:'ถูพื้น',              zone:'โถงอาหาร',shift:'am',freq:'ทุกวัน',        note:''},
  {icon:'🍽️',name:'ล้างจาน',            zone:'ครัว',     shift:'am',freq:'ทุกวัน',        note:''},
  {icon:'🚿',name:'ล้างพื้นครัว',        zone:'ครัว',     shift:'am',freq:'ทุกวัน',        note:'ใช้น้ำยาฆ่าเชื้อ'},
  {icon:'🪟',name:'เช็ดกระจก',           zone:'โถงอาหาร',shift:'pm',freq:'ทุกสัปดาห์',   note:''},
  {icon:'🚽',name:'ทำความสะอาดห้องน้ำ',  zone:'โถงอาหาร',shift:'am',freq:'ทุกวัน',        note:'เช็ดพื้นและอ่าง'},
  {icon:'🧽',name:'เช็ดโต๊ะ',           zone:'โถงอาหาร',shift:'am',freq:'ทุกวัน',        note:''},
  {icon:'🧴',name:'เติมสบู่ล้างมือ',     zone:'โถงอาหาร',shift:'am',freq:'ทุกวัน',        note:''},
  {icon:'🗑️',name:'เทถังขยะ',           zone:'โถงอาหาร',shift:'pm',freq:'ทุกวัน',        note:''},
  {icon:'❄️',name:'ทำความสะอาดตู้เย็น', zone:'ครัว',     shift:'pm',freq:'ทุก 2 สัปดาห์',note:'เช็ดทั้งด้านในและนอก'},
  {icon:'🪑',name:'เช็ดเก้าอี้',        zone:'โถงอาหาร',shift:'pm',freq:'ทุกสัปดาห์',   note:''},
  {icon:'🫙',name:'ล้างอ่างเตรียมอาหาร',zone:'ครัว',     shift:'pm',freq:'ทุกวัน',        note:''},
  {icon:'🧪',name:'ล้างอุปกรณ์ครัว',   zone:'ครัว',     shift:'pm',freq:'ทุกวัน',        note:''},
  {icon:'🌬️',name:'ล้างเครื่องปรับอากาศ',zone:'โถงอาหาร',shift:'pm',freq:'ทุกเดือน',    note:''},
  {icon:'🔆',name:'เช็ดโคมไฟ',          zone:'โถงอาหาร',shift:'pm',freq:'ทุกเดือน',      note:''},
  {icon:'📦',name:'จัดเรียงของในคลัง',  zone:'ครัว',     shift:'pm',freq:'ทุกสัปดาห์',   note:''},
  {icon:'🧊',name:'ล้างถาดน้ำแข็ง',    zone:'ครัว',     shift:'am',freq:'ทุกวัน',        note:''},
  {icon:'🚪',name:'เช็ดประตูทางเข้า',   zone:'โถงอาหาร',shift:'am',freq:'ทุกวัน',        note:''},
];
const EMOJIS=['👩','👨','🧑','👩‍🍳','👨‍🍳','🧑‍🍳','👩‍💼','👨‍💼','🧹','⭐','🌟','💪','😊','🐱','🐶','🦊','🌸','⚡'];
const FREQ_ORDER=['ทุกวัน','ทุก 3 วัน','ทุกสัปดาห์','ทุก 2 สัปดาห์','ทุกเดือน'];
const ZONE_GROUPS={ front:['โถงอาหาร'], kitchen:['ครัว'] };

window.hist=[]; let nextId=20,nextSid=10; window.curTab='today'; window.fbReady=false;
let histFilter='day',histOffset=0;
let eId=null,eShift='am',eZone='front';
let seId=null,seEmo='👩';
let ci={step:1,staff:null,taskIds:[],photos:[],date:''};
let selectedTpl=null,filteredTpls=[...TEMPLATES];
let lbPhotos=[],lbIdx=0;
let alertZoneFilter='all',alertFreqFilter='all';
let todayView='list',taskView='list';
let confirmCb=null;

const getStaff=id=>window.staff.find(s=>s.id===id);
const stampNow=()=>{const n=new Date();return\`\${n.getHours().toString().padStart(2,'0')}:\${n.getMinutes().toString().padStart(2,'0')} น.\`;};
const thDays=['อาทิตย์','จันทร์','อังคาร','พุธ','พฤหัส','ศุกร์','เสาร์'];
const thMonths=['ม.ค.','ก.พ.','มี.ค.','เม.ย.','พ.ค.','มิ.ย.','ก.ค.','ส.ค.','ก.ย.','ต.ค.','พ.ย.','ธ.ค.'];
const thMonthsFull=['มกราคม','กุมภาพันธ์','มีนาคม','เมษายน','พฤษภาคม','มิถุนายน','กรกฎาคม','สิงหาคม','กันยายน','ตุลาคม','พฤศจิกายน','ธันวาคม'];
function fmtDate(d){return\`\${thDays[d.getDay()]} \${d.getDate()} \${thMonths[d.getMonth()]}\`;}
function fmtDateFull(d){return\`\${d.getDate()} \${thMonths[d.getMonth()]} \${d.getFullYear()+543}\`;}
function isSameDay(a,b){return a.getFullYear()===b.getFullYear()&&a.getMonth()===b.getMonth()&&a.getDate()===b.getDate();}

// ─── RESET TASKS BY FREQUENCY ───
function shouldResetTask(t){
  // ถ้างานไม่ได้ทำ ไม่ต้องรีเซ็ท
  if(!t.done || !t.doneAt || !t.doneBy) return false;

  // หา lastDoneDate จาก hist หรือ doneAt ใน task
  const now = new Date(); now.setHours(0,0,0,0);

  // หาวันที่ทำงานล่าสุดจาก hist
  const lastEntry = window.hist
    .filter(h => h.name === t.name)
    .sort((a,b) => b.ts - a.ts)[0];
  const lastDone = lastEntry ? new Date(lastEntry.ts) : null;
  if(!lastDone) return true; // ไม่มีประวัติ → รีเซ็ท

  lastDone.setHours(0,0,0,0);
  const diffMs = now - lastDone;
  const diffDays = Math.floor(diffMs / 86400000);

  if(t.freq === 'ทุกวัน')           return diffDays >= 1;
  if(t.freq === 'ทุก 3 วัน')        return diffDays >= 3;
  if(t.freq === 'ทุกสัปดาห์')       return diffDays >= 7;
  if(t.freq === 'ทุก 2 สัปดาห์')    return diffDays >= 14;
  if(t.freq === 'ทุกเดือน')          return diffDays >= 30;
  return false;
}

function autoResetTasks(){
  let changed = false;
  window.tasks.forEach(t => {
    if(shouldResetTask(t)){
      t.done = false; t.doneBy = null; t.doneAt = null; t.photos = [];
      changed = true;
    }
  });
  if(changed){
    if(window.fbSaveTasks) fbSaveTasks();
  }
}

// ─── INIT ───
function init(){
  document.documentElement.classList.remove('dark'); // force light mode always
  document.getElementById('datechip').textContent=fmtDate(new Date());
  document.getElementById('themeBtn').textContent='🌙';
  autoResetTasks();
  renderToday();
}

// ─── TABS ───
function goTab(t){
  window.curTab=t;
  ['today','tasks','staff','history'].forEach(x=>
    document.getElementById('tab-'+x).style.display=x===t?'block':'none');
  document.querySelectorAll('.tab').forEach((el,i)=>
    el.classList.toggle('on',['today','tasks','staff','history'][i]===t));
  document.querySelectorAll('.bni').forEach((el,i)=>
    el.classList.toggle('on',['today','tasks','staff','history'][i]===t));
  if(t==='tasks') renderTasks();
  if(t==='staff') renderStaff();
  if(t==='history'){histOffset=0;runAutoDel();renderHist();}
}

// ─── FILTER HELPERS ───
function matchFilter(t){
  if(alertZoneFilter==='front'   && !ZONE_GROUPS.front.includes(t.zone))   return false;
  if(alertZoneFilter==='kitchen' && !ZONE_GROUPS.kitchen.includes(t.zone)) return false;
  if(alertFreqFilter!=='all'){
    const cutoff=FREQ_ORDER.indexOf(alertFreqFilter);
    const tidx=FREQ_ORDER.indexOf(t.freq);
    if(tidx<0||tidx>cutoff) return false;
  }
  return true;
}
function setAlertZone(v){
  alertZoneFilter=v;
  ['all','front','kitchen'].forEach(k=>{
    const el=document.getElementById('afz-'+k);
    if(el) el.classList.toggle('on',k===v);
  });
  renderToday();
}
function setAlertFreq(v){
  alertFreqFilter=v;
  const map={'all':'all','ทุกวัน':'d1','ทุก 3 วัน':'d3','ทุกสัปดาห์':'w1','ทุก 2 สัปดาห์':'w2','ทุกเดือน':'m1'};
  Object.entries(map).forEach(([freq,k])=>{
    const el=document.getElementById('aff-'+k);
    if(el) el.classList.toggle('on',freq===v);
  });
  renderToday();
}

// ─── VIEW TOGGLE ───
function setTodayView(v){
  todayView=v;
  document.getElementById('today-vt-list').classList.toggle('on',v==='list');
  document.getElementById('today-vt-grid').classList.toggle('on',v==='grid');
  ['am-list','pm-list'].forEach(id=>{
    const el=document.getElementById(id);
    el.className='tasklist'+(v==='grid'?' grid-view':'');
  });
}
function setTaskView(v){
  taskView=v;
  document.getElementById('tasks-vt-list').classList.toggle('on',v==='list');
  document.getElementById('tasks-vt-grid').classList.toggle('on',v==='grid');
  ['mgr-am-list','mgr-pm-list'].forEach(id=>{
    const el=document.getElementById(id);
    el.className='mgr-list'+(v==='grid'?' grid-view':'');
  });
}

// ─── RENDER TODAY ───
function renderToday(){
  ['am','pm'].forEach(sh=>{
    const all=window.tasks.filter(t=>t.shift===sh);
    const list=all.filter(matchFilter);
    const done=all.filter(t=>t.done).length;
    document.getElementById(sh+'-cnt').textContent=\`\${done}/\${all.length}\`;
    const el=document.getElementById(sh+'-list');
    el.className='tasklist'+(todayView==='grid'?' grid-view':'');
    el.innerHTML=list.length
      ?list.map((t,i)=>tCard(t,i)).join('')
      :\`<div class="empty"><div class="ei">✨</div><p>ไม่มีงานที่ตรงตามตัวกรอง</p></div>\`;
  });
  const all=window.tasks.length,done=window.tasks.filter(t=>t.done).length;
  document.getElementById('s-done').textContent=done;
  document.getElementById('s-pend').textContent=all-done;
  document.getElementById('s-ph').textContent=window.tasks.filter(t=>t.done&&t.photos.length>0).length;
  document.getElementById('s-all').textContent=all;
  const p=all?Math.round(done/all*100):0;
  document.getElementById('pct').textContent=p+'%';
  document.getElementById('bar').style.width=p+'%';
  renderAlert();
}

function tCard(t,i){
  const isWarn=!t.done;
  const noteEl=t.note?\`<div class="tnote">📝 \${t.note}</div>\`:'';
  const strip=t.photos.length?\`<div class="photo-strip">\${t.photos.slice(0,3).map((p,pi)=>\`<img src="\${p}" onclick="openLB(\${t.id},\${pi})">\`).join('')}\${t.photos.length>3?\`<div class="more-ph">+\${t.photos.length-3}</div>\`:''}</div>\`:'';
  const doneInfo=t.done&&t.doneBy?\`<div class="done-info"><div class="dot"></div>ทำโดย \${(getStaff(t.doneBy)||{name:t.doneBy}).name} · \${t.doneAt} · 📸 \${t.photos.length} รูป</div>\`:'';
  const warnEl=isWarn?\`<div><span class="warn-badge">⚠️ ยังไม่เสร็จ</span></div>\`:'';
  const btn=!t.done
    ?\`<button class="ci-btn\${isWarn?' ci-btn-warn':''}" onclick="openCI(\${t.id})">📷 เช็คอิน</button>\`
    :\`<button class="undo-btn" onclick="undoTask(\${t.id})">↩ ยกเลิก</button>\`;
  const accentColor=t.done?'var(--green)':isWarn?'var(--red)':'transparent';
  return\`<div class="tcard\${t.done?' done':''}\${isWarn?' tcard-warn':''}" style="animation-delay:\${i*.04}s">
    <div class="tcard-accent" style="background:\${accentColor}"></div>
    <div class="tinfo">
      <div class="tname">\${t.name}</div>
      <div class="tmeta">
        <span class="tag \${t.zone==='ครัว'?'tz-kitchen':'tz-front'}">\${t.zone==='ครัว'?'🍳 ครัว':'🏠 หน้าบ้าน'}</span>
        <span class="tag \${t.shift==='am'?'tf':'tf-pm'}">\${t.freq}</span>
      </div>
      \${noteEl}\${warnEl}\${doneInfo}\${strip}
      <div class="tacts" style="margin-top:8px">
        <button class="tact ea" onclick="openEditModal(\${t.id})">✏️ แก้ไข</button>
        <button class="tact da" onclick="confirmDelTask(\${t.id})">🗑 ลบ</button>
      </div>
    </div>
    <div class="tright">\${btn}</div>
  </div>\`;
}

// ─── ALERT ───
function renderAlert(){
  const el=document.getElementById('alert-banner');
  const allUndone=window.tasks.filter(t=>!t.done);
  if(!allUndone.length){el.innerHTML='';return;}
  let zf=allUndone;
  if(alertZoneFilter==='front')   zf=allUndone.filter(t=>ZONE_GROUPS.front.includes(t.zone));
  if(alertZoneFilter==='kitchen') zf=allUndone.filter(t=>ZONE_GROUPS.kitchen.includes(t.zone));
  let overdue=zf;
  if(alertFreqFilter!=='all'){
    const cutoff=FREQ_ORDER.indexOf(alertFreqFilter);
    overdue=zf.filter(t=>{const i=FREQ_ORDER.indexOf(t.freq);return i>=0&&i<=cutoff;});
  }
  el.innerHTML=\`<div class="alert-banner">
    <div class="alert-head">
      <div class="ico">⚠️</div>
      <div class="title">งานที่ยังไม่เสร็จ</div>
      <div class="badge">\${overdue.length}/\${allUndone.length}</div>
    </div>
    \${overdue.length===0
      ?\`<div style="text-align:center;padding:10px 0;font-size:13px;color:var(--sub)">ไม่มีงานที่ตรงตามตัวกรอง</div>\`
      :overdue.map(t=>\`<div class="alert-item" onclick="openCI(\${t.id})">
        <div class="ai-dot"></div>
        <div class="ai-name">\${t.name}</div>
        <div class="ai-meta">\${t.shift==='am'?'🌅':'🌙'} · \${t.zone==='ครัว'?'🍳':'🏠'} · \${t.freq}</div>
        <button class="ai-ci" onclick="event.stopPropagation();openCI(\${t.id})">เช็คอิน</button>
      </div>\`).join('')}
  </div>\`;
}

// ─── TASKS TAB ───
function renderTasks(){
  const all=window.tasks.length,am=window.tasks.filter(t=>t.shift==='am'),pm=window.tasks.filter(t=>t.shift==='pm');
  document.getElementById('tasks-count-label').textContent=\`\${all} รายการ · เช้า \${am.length} · เย็น \${pm.length}\`;
  document.getElementById('mgr-am-cnt').textContent=am.length;
  document.getElementById('mgr-pm-cnt').textContent=pm.length;
  ['am','pm'].forEach(sh=>{
    const list=window.tasks.filter(t=>t.shift===sh);
    const el=document.getElementById('mgr-'+sh+'-list');
    el.className='mgr-list'+(taskView==='grid'?' grid-view':'');
    el.innerHTML=list.length?list.map((t,i)=>mgrCard(t,i)).join('')
      :\`<div class="empty"><div class="ei">✨</div><p>ยังไม่มีงาน</p></div>\`;
  });
}
function mgrCard(t,i){
  const zLabel=t.zone==='ครัว'?'🍳 ครัว':'🏠 หน้าบ้าน';
  return\`<div class="mgr-card" style="animation-delay:\${i*.04}s">
    <div class="mgr-card-info">
      <div class="mgr-card-name">\${t.name}</div>
      <div class="mgr-card-meta">
        <span class="tag \${t.zone==='ครัว'?'tz-kitchen':'tz-front'}">\${zLabel}</span>
        <span class="tag \${t.shift==='am'?'tf':'tf-pm'}">\${t.freq}</span>
      </div>
      \${t.note?\`<div class="mgr-card-note">📝 \${t.note}</div>\`:''}
    </div>
    <div class="mgr-card-acts">
      <button class="mgr-act" onclick="openEditModal(\${t.id})">✏️ แก้ไข</button>
      <button class="mgr-act del" onclick="confirmDelTask(\${t.id})">🗑</button>
    </div>
  </div>\`;
}

// ─── ADD/EDIT TASK ───
function openAddModal(){
  selectedTpl=null;filteredTpls=[...TEMPLATES];
  document.getElementById('tplSearch').value='';
  document.getElementById('addTplBtn').disabled=true;
  renderTplGrid();
  document.getElementById('addOvl').style.display='flex';
}
function renderTplGrid(){
  document.getElementById('tplGrid').innerHTML=filteredTpls.map((tpl,i)=>\`
    <div class="tpl-card\${selectedTpl===i?' on':''}" onclick="selectTpl(\${i})">
      <div class="tpl-icon">\${tpl.icon}</div>
      <div class="tpl-name">\${tpl.name}</div>
      <div class="tpl-zone">\${tpl.zone==='ครัว'?'🍳':'🏠'} \${tpl.zone}</div>
    </div>\`).join('');
}
function filterTpl(){
  const q=document.getElementById('tplSearch').value.trim().toLowerCase();
  filteredTpls=q?TEMPLATES.filter(t=>t.name.includes(q)||t.zone.includes(q)):[...TEMPLATES];
  selectedTpl=null;
  document.getElementById('addTplBtn').disabled=true;
  renderTplGrid();
}
function selectTpl(i){
  selectedTpl=i;
  document.querySelectorAll('#tplGrid .tpl-card').forEach((el,j)=>el.classList.toggle('on',j===i));
  document.getElementById('addTplBtn').disabled=false;
}
function addFromTemplate(){
  if(selectedTpl===null) return;
  closeModal('addOvl');
  openEditModalFromTpl(filteredTpls[selectedTpl]);
}
function openEditModal(id){
  eId=id;
  const t=id!==null?window.tasks.find(x=>x.id===id):null;
  document.getElementById('editTitle').textContent=t?'✏️ แก้ไขงาน':'✏️ งานใหม่';
  document.getElementById('eDelBtn').style.display=t?'':'none';
  document.getElementById('eName').value=t?t.name:'';
  document.getElementById('eNote').value=t?t.note||'':'';
  document.getElementById('eFreq').value=t?t.freq:'ทุกวัน';
  eShift=t?t.shift:'am';
  eZone=t?(ZONE_GROUPS.kitchen.includes(t.zone)?'kitchen':'front'):'front';
  refreshShiftSeg();refreshZoneSeg();
  // photos
  const hasPhotos = t&&t.photos&&t.photos.length>0;
  document.getElementById('ePhotoSec').style.display = (t&&t.done) ? '' : 'none';
  if(t&&t.done) renderEditPhotos(t);
  closeModal('addOvl');
  document.getElementById('editOvl').style.display='flex';
  setTimeout(()=>document.getElementById('eName').focus(),200);
}
function renderEditPhotos(t){
  document.getElementById('ePhotoGrid').innerHTML=t.photos.map((p,i)=>\`
    <div class="ph-item">
      <img src="\${p}" onclick="openLB(\${t.id},\${i})" style="cursor:pointer">
      <button class="ph-del" onclick="eDelPhoto(\${i})">✕</button>
    </div>\`).join('');
}
function eDelPhoto(i){
  const t=window.tasks.find(x=>x.id===eId);if(!t)return;
  t.photos.splice(i,1);
  renderEditPhotos(t);
  renderToday();
}
function eAddPhotos(e){
  const t=window.tasks.find(x=>x.id===eId);if(!t)return;
  const files=Array.from(e.target.files);if(!files.length)return;
  let n=0;
  files.forEach(f=>{
    const r=new FileReader();
    r.onload=ev=>{
      t.photos.push(ev.target.result);
      if(++n===files.length){ renderEditPhotos(t); renderToday(); }
    };
    r.readAsDataURL(f);
  });
  e.target.value='';
}

function openEditModalFromTpl(tpl){
  eId=null;
  document.getElementById('editTitle').textContent='✏️ งานใหม่';
  document.getElementById('eDelBtn').style.display='none';
  document.getElementById('eName').value=tpl.name;
  document.getElementById('eNote').value=tpl.note||'';
  document.getElementById('eFreq').value=tpl.freq;
  eShift=tpl.shift;
  eZone=ZONE_GROUPS.kitchen.includes(tpl.zone)?'kitchen':'front';
  refreshShiftSeg();refreshZoneSeg();
  document.getElementById('editOvl').style.display='flex';
}
function refreshShiftSeg(){
  document.getElementById('sh-am').className='seg-btn'+(eShift==='am'?' on-am':'');
  document.getElementById('sh-pm').className='seg-btn'+(eShift==='pm'?' on-pm':'');
}
function eSetShift(sh){eShift=sh;refreshShiftSeg();}
function refreshZoneSeg(){
  document.getElementById('zone-front').className  ='seg-btn'+(eZone==='front'?' on-am':'');
  document.getElementById('zone-kitchen').className='seg-btn'+(eZone==='kitchen'?' on-pm':'');
}
function eSetZone(z){eZone=z;refreshZoneSeg();}
function saveTask(){
  const name=document.getElementById('eName').value.trim();
  if(!name){document.getElementById('eName').classList.add('err');document.getElementById('eName').focus();return;}
  document.getElementById('eName').classList.remove('err');
  const note=document.getElementById('eNote').value.trim();
  const zone=eZone==='kitchen'?'ครัว':'โถงอาหาร';
  const freq=document.getElementById('eFreq').value;
  if(eId!==null){
    const t=window.tasks.find(x=>x.id===eId);
    if(t){t.name=name;t.note=note;t.zone=zone;t.freq=freq;t.shift=eShift;}
  } else {
    window.tasks.push({id:nextId++,name,note,zone,freq,shift:eShift,done:false,photos:[],doneBy:null,doneAt:null});
  }
  closeModal('editOvl');renderToday();
  if(window.curTab==='tasks') renderTasks();
  if(window.fbSaveTasks) fbSaveTasks();
}
function doDeleteTask(){
  const t=window.tasks.find(x=>x.id===eId); if(!t) return;
  showConfirm(\`ลบงาน "\${t.name}"?\`,()=>{
    window.tasks=window.tasks.filter(x=>x.id!==eId);
    closeModal('editOvl');renderToday();
    if(window.curTab==='tasks') renderTasks();
  });
}
function confirmDelTask(id){
  const t=window.tasks.find(x=>x.id===id); if(!t) return;
  showConfirm(\`ลบงาน "\${t.name}"?\`,()=>{window.tasks=window.tasks.filter(x=>x.id!==id);renderToday();if(window.curTab==='tasks') renderTasks();if(window.fbSaveTasks)fbSaveTasks();});
}

// ─── CHECK-IN ───
function openCI(preId=null){
  const pad=n=>n.toString().padStart(2,'0');
  const now=new Date();
  const todayStr=\`\${now.getFullYear()}-\${pad(now.getMonth()+1)}-\${pad(now.getDate())}\`;
  ci={step:1,staff:null,taskIds:preId?[preId]:[],photos:[],date:todayStr};
  renderCI();
  document.getElementById('ciOvl').style.display='flex';
}
function ciNext(){if(ci.step===3){commitCI();return;}ci.step++;renderCI();}
function ciPrev(){if(ci.step>1){ci.step--;renderCI();}}
function renderCI(){
  const bd=document.getElementById('ciBody');
  const nb=document.getElementById('ciNextBtn');
  const bb=document.getElementById('ciBackBtn');
  const dots=[1,2,3].map(n=>\`<div class="sdot\${n<ci.step?' done-s':n===ci.step?' on':''}"></div>\`).join('');
  if(ci.step===1){
    document.getElementById('ciTitle').textContent='👤 เลือกพนักงาน';
    document.getElementById('ciSub').textContent='ใครเป็นคนทำงาน?';
    bb.style.display='none';nb.textContent='ถัดไป →';nb.disabled=!ci.staff;
    bd.innerHTML=\`<div class="steps">\${dots}</div>
      <div class="staff-chips" id="ciStaffWrap">
        \${window.staff.map(s=>\`<div class="schip\${ci.staff===s.id?' on':''}" onclick="ciPickStaff('\${s.id}')">
          <div class="emo">\${s.emo}</div><div class="sn">\${s.name}</div></div>\`).join('')}
      </div>\`;
  } else if(ci.step===2){
    document.getElementById('ciTitle').textContent='📋 เลือกงาน';
    document.getElementById('ciSub').textContent=\`\${(getStaff(ci.staff)||{name:''}).name} — เลือกได้หลายงาน\`;
    bb.style.display='';nb.textContent='ถัดไป →';nb.disabled=ci.taskIds.length===0;
    const rowH=t=>{
      const sel=ci.taskIds.includes(t.id),dis=t.done;
      return\`<div class="tsel\${sel?' on':''}\${dis?' dis':''}" onclick="\${dis?'':\` ciToggle(\${t.id})\`}">
        <div class="chk">\${sel?'✓':''}</div>
        <div class="tsel-info">
          <div class="tsn">\${t.name}</div>
          <div class="tsmeta"><span class="tsz">\${t.zone==='ครัว'?'🍳':'🏠'} \${t.zone}</span>\${dis?'<span class="ts-done">✅ เสร็จแล้ว</span>':''}</div>
        </div>
      </div>\`;
    };
    bd.innerHTML=\`<div class="steps">\${dots}</div>
      <div class="tsec-hdr">🌅 ช่วงเช้า <span>\${window.tasks.filter(t=>t.shift==='am').length}</span></div>
      \${window.tasks.filter(t=>t.shift==='am').map(rowH).join('')}
      <div class="tsec-hdr">🌙 ช่วงเย็น <span>\${window.tasks.filter(t=>t.shift==='pm').length}</span></div>
      \${window.tasks.filter(t=>t.shift==='pm').map(rowH).join('')}\`;
  } else {
    const names=ci.taskIds.map(id=>window.tasks.find(x=>x.id===id)?.name).filter(Boolean).join(', ');
    document.getElementById('ciTitle').textContent='📸 ถ่ายรูปหลักฐาน';
    document.getElementById('ciSub').textContent=\`\${ci.taskIds.length} งาน\`;
    bb.style.display='';nb.textContent='✅ ยืนยัน';nb.disabled=ci.photos.length===0||!ci.date;
    bd.innerHTML=\`<div class="steps">\${dots}</div>
      <div style="font-size:12px;color:var(--sub);margin-bottom:12px;font-weight:600">งาน: \${names}</div>
      <div class="msec" style="margin-bottom:14px">
        <label style="font-size:11px;font-weight:700;color:var(--sub);text-transform:uppercase;letter-spacing:.4px;display:block;margin-bottom:6px">📅 วันที่ทำ</label>
        <input type="date" id="ciDate" value="\${ci.date}" onchange="ci.date=this.value;document.getElementById('ciNextBtn').disabled=ci.photos.length===0||!ci.date"
          style="width:100%;background:var(--bg);border:1.5px solid var(--border2);border-radius:var(--rad-s);padding:10px 12px;font-family:'Sarabun',sans-serif;font-size:13px;color:var(--text);outline:none;">
      </div>
      \${ci.photos.length?\`<div class="ph-grid">\${ci.photos.map((p,i)=>\`
        <div class="ph-item"><img src="\${p}"><button class="ph-del" onclick="ciDelPh(\${i})">✕</button></div>\`).join('')}</div>\`:''}
      <div class="photo-add-area">
        <input type="file" accept="image/*" capture="environment" multiple id="phFile" onchange="ciAddPh(event)">
        <div style="font-size:30px;margin-bottom:8px">📷</div>
        <p style="font-size:13px;font-weight:600;color:var(--text2)">\${ci.photos.length?'เพิ่มรูปอีก':'ถ่ายรูปหลักฐาน'}</p>
        <p style="font-size:11px;color:var(--sub);margin-top:3px">แตะเพื่อถ่าย หรือเลือกหลายรูป</p>
      </div>
      <div style="font-size:12px;color:var(--sub);text-align:center;font-weight:600">\${ci.photos.length} รูป</div>\`;
  }
}
function ciPickStaff(sid){
  ci.staff=sid;
  document.querySelectorAll('#ciStaffWrap .schip').forEach(el=>{
    el.classList.toggle('on',el.querySelector('.sn').textContent===(getStaff(sid)||{}).name);
  });
  document.getElementById('ciNextBtn').disabled=false;
}
function ciToggle(id){
  if(ci.taskIds.includes(id)) ci.taskIds=ci.taskIds.filter(x=>x!==id);
  else ci.taskIds.push(id);
  renderCI();
}
function ciAddPh(e){
  const files=Array.from(e.target.files);if(!files.length) return;
  let n=0;
  files.forEach(f=>{const r=new FileReader();r.onload=ev=>{ci.photos.push(ev.target.result);if(++n===files.length)renderCI();};r.readAsDataURL(f);});
}
function ciDelPh(i){ci.photos.splice(i,1);renderCI();}
function commitCI(){
  const ts=stampNow();
  const [y,m,d]=ci.date.split('-').map(Number);
  const now=new Date();now.setFullYear(y,m-1,d);
  const dateObj=new Date(now);
  ci.taskIds.forEach(id=>{
    const t=window.tasks.find(x=>x.id===id);if(!t)return;
    t.done=true;t.doneBy=ci.staff;t.doneAt=ts;t.photos=[...ci.photos];
    window.hist.unshift({name:t.name,zone:t.zone,shift:t.shift,who:ci.staff,time:ts,ts:dateObj,dateStr:fmtDateFull(dateObj),photos:[...ci.photos]});
  });
  closeModal('ciOvl');renderToday();
  if(window.curTab==='history') renderHist();
  if(window.fbSaveTasks) fbSaveTasks();
  if(window.fbSaveHist) fbSaveHist();
}
function undoTask(id){
  const t=window.tasks.find(x=>x.id===id);if(!t)return;
  showConfirm(\`ยกเลิกงาน "\${t.name}"?\`,()=>{
    window.hist=window.hist.filter(h=>!(h.name===t.name&&h.who===t.doneBy&&h.time===t.doneAt));
    t.done=false;t.photos=[];t.doneBy=null;t.doneAt=null;
    renderToday();if(window.curTab==='history') renderHist();
    if(window.fbSaveTasks) fbSaveTasks();
    if(window.fbSaveHist) fbSaveHist();
  });
}

// ─── HISTORY ───
let autoDelMonths = 0; // 0 = off

function setAutoDel(val){
  autoDelMonths = parseInt(val);
  const labels = {'0':'ปิดการลบอัตโนมัติ','1':'ลบประวัติที่เก่ากว่า 1 เดือน','3':'ลบประวัติที่เก่ากว่า 3 เดือน','6':'ลบประวัติที่เก่ากว่า 6 เดือน','12':'ลบประวัติที่เก่ากว่า 1 ปี'};
  document.getElementById('auto-del-sub').textContent = labels[val] || 'ปิดการลบอัตโนมัติ';
  if(autoDelMonths > 0) runAutoDel();
}

function runAutoDel(){
  if(!autoDelMonths) return;
  const cutoff = new Date();
  cutoff.setMonth(cutoff.getMonth() - autoDelMonths);
  const before = window.hist.length;
  window.hist = window.hist.filter(h => h.ts >= cutoff);
  const removed = before - window.hist.length;
  if(removed > 0) showToast(\`🗑️ ลบประวัติเก่า \${removed} รายการอัตโนมัติ\`);
}

function showToast(msg){
  let t = document.getElementById('toast');
  if(!t){ t = document.createElement('div'); t.id='toast'; document.body.appendChild(t); }
  t.textContent = msg;
  t.className = 'toast show';
  clearTimeout(t._timer);
  t._timer = setTimeout(()=>t.classList.remove('show'), 3000);
}
function setHistFilter(f){
  histFilter=f;histOffset=0;
  ['day','week','month','year'].forEach(x=>document.getElementById('hf-'+x).classList.toggle('on',x===f));
  renderHist();
}
function shiftHist(d){histOffset+=d;renderHist();}
function getPeriodBounds(){
  const now=new Date();now.setHours(0,0,0,0);
  let start=new Date(now),end=new Date(now);
  if(histFilter==='day'){start.setDate(start.getDate()+histOffset);end=new Date(start);end.setDate(end.getDate()+1);}
  else if(histFilter==='week'){const dow=(now.getDay()+6)%7;start.setDate(start.getDate()-dow+histOffset*7);end=new Date(start);end.setDate(end.getDate()+7);}
  else if(histFilter==='month'){start=new Date(now.getFullYear(),now.getMonth()+histOffset,1);end=new Date(now.getFullYear(),now.getMonth()+histOffset+1,1);}
  else{start=new Date(now.getFullYear()+histOffset,0,1);end=new Date(now.getFullYear()+histOffset+1,0,1);}
  return{start,end};
}
function getPeriodLabel(){
  const{start,end}=getPeriodBounds();
  if(histFilter==='day') return fmtDateFull(start);
  if(histFilter==='week'){const endD=new Date(end);endD.setDate(endD.getDate()-1);return\`\${start.getDate()} \${thMonths[start.getMonth()]} — \${endD.getDate()} \${thMonths[endD.getMonth()]}\`;}
  if(histFilter==='month') return\`\${thMonthsFull[start.getMonth()]} \${start.getFullYear()+543}\`;
  return\`ปี \${start.getFullYear()+543}\`;
}
function renderHist(){
  const{start,end}=getPeriodBounds();
  document.getElementById('hpn-label').textContent=getPeriodLabel();
  const filtered=window.hist.filter(h=>h.ts>=start&&h.ts<end);
  document.getElementById('hpn-count').textContent=filtered.length?\`\${filtered.length} รายการ\`:'';
  const el=document.getElementById('hist-list');
  if(!filtered.length){el.innerHTML=\`<div class="empty"><div class="ei">📸</div><p>ไม่มีประวัติในช่วงนี้</p></div>\`;return;}
  if(histFilter==='day'){
    el.innerHTML=filtered.map((h,hi)=>hCard(h,window.hist.indexOf(h))).join('');
  } else {
    const groups={};
    filtered.forEach(h=>{const k=h.ts.toDateString();if(!groups[k])groups[k]={label:fmtDateFull(h.ts),items:[]};groups[k].items.push(h);});
    el.innerHTML=Object.values(groups).map(g=>\`
      <div class="hist-day-group">
        <div class="hist-day-hdr">\${g.label}<span class="hist-day-cnt">\${g.items.length} รายการ</span></div>
        \${g.items.map(h=>hCard(h,window.hist.indexOf(h))).join('')}
      </div>\`).join('');
  }
}
function hCard(h,hi){
  const s=getStaff(h.who)||{emo:'👤',name:h.who||'ไม่ระบุ'};
  return\`<div class="hcard">
    <div class="hcard-top">
      <div class="hcard-info">
        <div class="hcard-name">\${h.name}</div>
        <div class="hcard-meta">\${h.zone==='ครัว'?'🍳 ครัว':'🏠 หน้าบ้าน'} · \${h.shift==='am'?'🌅 เช้า':'🌙 เย็น'}<br>\${s.emo} \${s.name} · 🕐 \${h.time}\${h.dateStr?' · '+h.dateStr:''}</div>
      </div>
      <div class="hbadge">✅ เสร็จ</div>
    </div>
    <div class="hphotos">
      \${h.photos.length
        ?h.photos.map((p,pi)=>\`<img src="\${p}" onclick="openLBArr(\${hi},\${pi})">\`).join('')
        :\`<div class="no-ph">📷</div>\`}
    </div>
  </div>\`;
}

// ─── STAFF ───
function renderStaff(){
  document.getElementById('staff-count-label').textContent=\`\${window.staff.length} คน\`;
  document.getElementById('staff-cards').innerHTML=window.staff.map(s=>{
    const myHist=window.hist.filter(h=>h.who===s.id);
    const ph=myHist.filter(h=>h.photos.length>0).length;
    return\`<div class="sc">
      <div class="sc-emo">\${s.emo}</div>
      <div class="sc-name">\${s.name}</div>
      <div class="sc-role">\${s.role||'—'}</div>
      <div class="sc-stat">✅ \${myHist.length} งาน · 📸 \${ph}</div>
      <div class="sc-acts">
        <button class="sc-act" onclick="openStaffEdit('\${s.id}')">✏️ แก้ไข</button>
        <button class="sc-act del" onclick="doDeleteStaffById('\${s.id}')">🗑</button>
      </div>
    </div>\`;
  }).join('')+\`<div class="add-staff-card" onclick="openStaffEdit(null)">
    <div class="plus">➕</div><p>เพิ่มพนักงาน</p>
  </div>\`;
}
function openStaffEdit(id){
  seId=id;const s=id?window.staff.find(x=>x.id===id):null;
  document.getElementById('seTitle').textContent=s?'✏️ แก้ไขพนักงาน':'👤 เพิ่มพนักงาน';
  document.getElementById('seDelBtn').style.display=s?'':'none';
  document.getElementById('seName').value=s?s.name:'';
  document.getElementById('seRole').value=s?s.role||'':'';
  seEmo=s?s.emo:'👩';
  document.getElementById('emojiGrid').innerHTML=EMOJIS.map(e=>\`<button class="emo-btn\${seEmo===e?' on':''}" onclick="pickEmo('\${e}')">\${e}</button>\`).join('');
  document.getElementById('staffEditOvl').style.display='flex';
  setTimeout(()=>document.getElementById('seName').focus(),200);
}
function pickEmo(e){seEmo=e;document.querySelectorAll('#emojiGrid .emo-btn').forEach(el=>el.classList.toggle('on',el.textContent===e));}
function saveStaff(){
  const name=document.getElementById('seName').value.trim();if(!name)return;
  const role=document.getElementById('seRole').value.trim();
  if(seId){const s=window.staff.find(x=>x.id===seId);if(s){s.name=name;s.role=role;s.emo=seEmo;}}
  else window.staff.push({id:'s'+nextSid++,name,role,emo:seEmo});
  closeModal('staffEditOvl');renderStaff();renderToday();
  if(window.fbSaveStaff) fbSaveStaff();
}
function doDeleteStaff(){
  const s=window.staff.find(x=>x.id===seId);if(!s)return;
  showConfirm(\`ลบพนักงาน "\${s.name}"?\`,()=>{window.staff=window.staff.filter(x=>x.id!==seId);closeModal('staffEditOvl');renderStaff();if(window.fbSaveStaff)fbSaveStaff();});
}
function doDeleteStaffById(id){
  const s=window.staff.find(x=>x.id===id);if(!s)return;
  showConfirm(\`ลบพนักงาน "\${s.name}"?\`,()=>{window.staff=window.staff.filter(x=>x.id!==id);renderStaff();if(window.fbSaveStaff)fbSaveStaff();});
}

// ─── LIGHTBOX ───
function openLB(tid,idx){const t=window.tasks.find(x=>x.id===tid);if(!t||!t.photos.length)return;lbPhotos=t.photos;lbIdx=idx;showLB();}
function openLBArr(hi,pi){if(!window.hist[hi])return;lbPhotos=window.hist[hi].photos;lbIdx=pi;showLB();}
function showLB(){
  document.getElementById('lbImg').src=lbPhotos[lbIdx];
  document.getElementById('lbInfo').textContent=\`รูปที่ \${lbIdx+1} / \${lbPhotos.length}\`;
  document.getElementById('lbNav').innerHTML=lbPhotos.length>1
    ?\`<button class="lb-btn" onclick="lbMv(-1)">‹ ก่อนหน้า</button><button class="lb-btn" onclick="lbMv(1)">ถัดไป ›</button>\`:'';
  document.getElementById('lb').style.display='flex';
}
function lbMv(d){lbIdx=(lbIdx+d+lbPhotos.length)%lbPhotos.length;showLB();}
function closeLB(){document.getElementById('lb').style.display='none';}

// ─── CONFIRM ───
function showConfirm(msg,cb){
  confirmCb=cb;
  document.getElementById('confirmMsg').textContent=msg;
  document.getElementById('confirmOkBtn').onclick=()=>{closeModal('confirmOvl');confirmCb&&confirmCb();};
  document.getElementById('confirmOvl').style.display='flex';
}

// ─── MODAL HELPERS ───
function closeModal(id){document.getElementById(id).style.display='none';}
function ovlClick(e,id){if(e.target===document.getElementById(id))closeModal(id);}

document.addEventListener('keydown',e=>{
  if(e.key==='Escape'){['addOvl','editOvl','ciOvl','staffEditOvl','confirmOvl'].forEach(closeModal);closeLB();}
  if(e.key==='ArrowLeft'&&document.getElementById('lb').style.display!=='none') lbMv(-1);
  if(e.key==='ArrowRight'&&document.getElementById('lb').style.display!=='none') lbMv(1);
});

// ─── THEME ───
function toggleTheme(){
  const isDark = document.documentElement.classList.contains('dark');
  if(isDark){
    document.documentElement.classList.remove('dark');
    document.getElementById('themeBtn').textContent='🌙';
  } else {
    document.documentElement.classList.add('dark');
    document.getElementById('themeBtn').textContent='☀️';
  }
}

init();`
    document.body.appendChild(s1)

    const s2 = document.createElement('script')
    s2.type = 'module'
    s2.textContent = `import { initializeApp }       from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
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
      window.tasks = objToArr(data).map(t=>({
        ...t,
        photos: t.photos ? Object.values(t.photos) : [],
        done: t.done ?? false, doneBy: t.doneBy ?? null, doneAt: t.doneAt ?? null,
      }));
      autoResetTasks();
      renderToday();
      if(window.curTab==='tasks') renderTasks();
    }
    window.fbReady = true;
    setStatus(true);
  }, err=>{ setStatus(false); console.error(err); });

  // SYNC staff
  onValue(ref(db,'staff'), snap => {
    if(syncing) return;
    const data = snap.val();
    if(data){
      window.staff = objToArr(data);
      renderToday();
      if(window.curTab==='staff') renderStaff();
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
      if(window.curTab==='history') renderHist();
    }
  });

  window.fbSaveTasks = () => {
    if(!window.fbReady) return;
    syncing=true;
    const obj={};
    window.tasks.forEach(t=>{
      // ไม่เก็บ base64 photos ใน tasks node (เก็บแค่ flag done)
      obj[t.id]={...t, photos:[]};
    });
    set(ref(db,'tasks'),obj).catch(e=>console.error('fbSaveTasks error:',e)).finally(()=>{ syncing=false; });
  };

  window.fbSaveStaff = () => {
    if(!window.fbReady) return;
    syncing=true;
    const obj={};
    window.staff.forEach(s=>{ obj[s.id]=s; });
    set(ref(db,'staff'),obj).catch(e=>console.error('fbSaveStaff error:',e)).finally(()=>syncing=false);
  };

  window.fbSaveHist = () => {
    if(!window.fbReady) return;
    syncing=true;
    const obj={};
    window.hist.forEach((h,i)=>{
      // บีบอัด: เก็บแค่จำนวนรูป ไม่เก็บ base64 (ป้องกัน >1MB limit)
      const key='h'+(h.ts.getTime()+'_'+i);
      obj[key]={
        name:h.name, zone:h.zone, shift:h.shift, who:h.who,
        time:h.time, ts: h.ts.toISOString(), dateStr:h.dateStr||'',
        photoCount: h.photos.length,
        // เก็บ thumbnail (รูปแรกเท่านั้น ลดขนาด)
        thumb: h.photos.length > 0 ? h.photos[0].substring(0,500)+'...' : '',
        photos: [],
      };
    });
    set(ref(db,'hist'),obj)
      .catch(e=>{ console.error('fbSaveHist error:',e); showToast('⚠️ บันทึกประวัติไม่สำเร็จ (ข้อมูลใหญ่เกิน)'); })
      .finally(()=>{ syncing=false; });
  };

  // ครั้งแรก: ถ้า Firebase ว่างให้ push ข้อมูลตั้งต้น
  onValue(ref(db,'tasks'), snap=>{
    window.fbReady = true;
    if(!snap.exists()){
      // empty DB: push current local defaults as initial seed
      const t={}; window.tasks.forEach(x=>{t[x.id]={...x,photos:x.photos.reduce((o,p,i)=>{o[i]=p;return o;},{})};});
      set(ref(db,'tasks'),t);
      const s={}; window.staff.forEach(x=>{s[x.id]=x;});
      set(ref(db,'staff'),s);
    }
  }, {onlyOnce:true});
}`
    document.body.appendChild(s2)
  }, [])

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
        <title>YuGrill</title>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon-192.png" type="image/png" sizes="192x192" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#8B1A1A" />
        <link href="https://fonts.googleapis.com/css2?family=Sarabun:wght@400;500;600;700&family=Prompt:wght@600;700;800&display=swap" rel="stylesheet" />
        <style dangerouslySetInnerHTML={{ __html: `:root {
  /* ══════════════════════════════════════
     LIGHT MODE — Soft Pastel Harmony
     Base: warm cream-lavender
  ══════════════════════════════════════ */

  /* Surfaces */
  --bg:      #f2eff9;   /* ลาเวนเดอร์นวล */
  --white:   #fefcff;   /* ขาวนวลอมม่วง */
  --card:    #f9f7ff;   /* การ์ด: ขาวนวลอ่อน */
  --border:  #e4dff5;   /* ขอบ: ม่วงอ่อน */
  --border2: #d0c8ed;   /* ขอบเข้ม */

  /* ── Accent Colors (Pastel) ── */
  /* Mint Green — เสร็จแล้ว / ยืนยัน */
  --green:     #22916a;
  --green-lt:  #dcf5ec;
  --green-mid: #5ecf9e;

  /* Sky Blue — เช็คอิน / ข้อมูล */
  --blue:      #3b72c8;
  --blue-lt:   #daeaff;
  --blue-mid:  #80aaf0;

  /* Peach Amber — รอทำ / เช้า */
  --amber:     #c07020;
  --amber-lt:  #fdeedd;
  --amber-mid: #f0b060;

  /* Rose Red — แจ้งเตือน / ลบ */
  --red:       #c84040;
  --red-lt:    #fde8e8;
  --red-mid:   #e8a0a0;

  /* Soft Violet — สถิติ / ท้ังหมด / เย็น */
  --violet:    #6e52b8;
  --violet-lt: #ece8ff;
  --violet-mid:#a890d8;

  /* Pink — label / tag */
  --pink:      #c04888;
  --pink-lt:   #fde4f2;

  /* Teal — โซน */
  --teal:      #1e9090;
  --teal-lt:   #d4f4f2;
  --teal-mid:  #58c8c4;

  /* Text */
  --text:  #1c1a30;
  --text2: #38345a;
  --sub:   #6e6a90;
  --dim:   #b0aac8;

  --rad: 16px; --rad-s: 10px;
  --shadow:    0 1px 3px rgba(60,40,120,.06), 0 1px 2px rgba(60,40,120,.04);
  --shadow-md: 0 3px 14px rgba(60,40,120,.09);
  --shadow-lg: 0 8px 32px rgba(60,40,120,.13);
}

html.dark {
  /* ══════════════════════════════════════
     DARK MODE — Deep Navy Dusty Pastel
     Base: กรมอมม่วง เทาอ่อน
  ══════════════════════════════════════ */

  /* Surfaces */
  --bg:     #1c1a2e;
  --white:  #252238;
  --card:   #2e2a44;
  --border: #3c3858;
  --border2:#4c4870;

  /* Accents — same hues, brighter/lighter for dark bg */
  --green:     #52d898;
  --green-lt:  #0c2a1e;
  --green-mid: #7ae8b8;

  --blue:      #7ab0f8;
  --blue-lt:   #0c1e3a;
  --blue-mid:  #a0c4ff;

  --amber:     #f8c060;
  --amber-lt:  #261800;
  --amber-mid: #ffd890;

  --red:       #f08080;
  --red-lt:    #2c0e0e;
  --red-mid:   #d87070;

  --violet:    #c0a8ff;
  --violet-lt: #1c1238;
  --violet-mid:#d8c4ff;

  --pink:      #f0a0c8;
  --pink-lt:   #280c1c;

  --teal:      #58d4cc;
  --teal-lt:   #0a1e1e;
  --teal-mid:  #80e4de;

  /* Text */
  --text:  #edeaf8;
  --text2: #c8c4e0;
  --sub:   #9490b8;
  --dim:   #5a5878;

  --shadow:    0 1px 4px rgba(0,0,0,.28);
  --shadow-md: 0 4px 16px rgba(0,0,0,.34);
  --shadow-lg: 0 8px 32px rgba(0,0,0,.44);
}

/* ─ Theme toggle button ─ */
.theme-btn {
  width: 34px; height: 34px;
  border-radius: 10px;
  border: 1.5px solid var(--border2);
  background: var(--bg);
  color: var(--sub);
  cursor: pointer;
  display: flex; align-items: center; justify-content: center;
  font-size: 16px;
  transition: all .2s;
  flex-shrink: 0;
}
.theme-btn:hover { border-color: var(--violet); color: var(--violet); background: var(--violet-lt); }

* { box-sizing: border-box; margin: 0; padding: 0; }
html { -webkit-tap-highlight-color: transparent; background: var(--bg); transition: background .25s, color .25s; }
body { background: var(--bg); color: var(--text); font-family: 'Sarabun', sans-serif; min-height: 100vh; padding-bottom: 80px; transition: background .25s, color .25s; }
.hdr, .tabs, .tab, .bnav, .bni, .card, .stat, .prog-box, .filter-block,
.tcard, .mgr-card, .hcard, .sc, .mbox, .period-nav,
.fchip, .schip, .tsel, .ef input, .ef select, .ef textarea {
  transition: background .25s, border-color .25s, color .25s, box-shadow .25s;
}
@keyframes fadeUp { from { opacity:0; transform:translateY(6px) } to { opacity:1; transform:none } }
@keyframes blink { 0%,100%{opacity:1} 50%{opacity:.35} }
@keyframes pop { 0%{transform:scale(.96);opacity:0} 100%{transform:scale(1);opacity:1} }

/* ─── HEADER ─── */
.hdr {
  background: var(--white);
  border-bottom: 1px solid var(--border);
  padding: 0 16px;
  position: sticky; top: 0; z-index: 300;
  display: flex; align-items: center; gap: 12px; height: 56px;
  box-shadow: var(--shadow);
}
.logo { width: 40px; height: 40px; border-radius: 10px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; overflow: hidden; box-shadow: 0 2px 8px rgba(139,26,26,.3); }
.hdr-title { flex: 1; }
.hdr-title h1 { font-family: 'Prompt', sans-serif; font-size: 15px; font-weight: 700; color: var(--text); line-height: 1.2; }
.hdr-title p { font-size: 11px; color: var(--sub); }
.date-pill { background: var(--blue-lt); color: var(--blue); border-radius: 99px; padding: 4px 12px; font-size: 12px; font-weight: 600; white-space: nowrap; }

/* ─── BOTTOM NAV ─── */
.bnav { position: fixed; bottom: 0; left: 0; right: 0; background: var(--white); border-top: 1px solid var(--border); display: flex; z-index: 300; box-shadow: 0 -2px 12px rgba(0,0,0,.06); }
.bni { flex: 1; padding: 8px 4px 6px; display: flex; flex-direction: column; align-items: center; gap: 3px; cursor: pointer; font-size: 10px; font-weight: 600; color: var(--dim); transition: color .2s; }
.bni .ic { font-size: 20px; }
.bni.on { color: var(--green); }
@media(min-width:641px) { .bnav { display: none; } }

/* ─── DESKTOP TABS ─── */
.tabs { display: flex; background: var(--white); border-bottom: 2px solid var(--border); overflow-x: auto; scrollbar-width: none; }
.tabs::-webkit-scrollbar { display: none; }
.tab { flex: 1; min-width: 80px; padding: 14px 8px; text-align: center; font-size: 13px; font-weight: 600; color: var(--sub); cursor: pointer; border-bottom: 2px solid transparent; margin-bottom: -2px; transition: all .2s; white-space: nowrap; }
.tab.on { color: var(--green); border-color: var(--green); }
.tab:hover:not(.on) { color: var(--text2); background: var(--bg); }
@media(max-width:640px) { .tabs { display: none; } }

/* ─── MAIN ─── */
.main { padding: 16px; max-width: 860px; margin: 0 auto; }

/* ─── STAT GRID ─── */
.stat-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 10px; margin-bottom: 14px; }
@media(max-width:580px) { .stat-grid { grid-template-columns: repeat(2,1fr); } }
.stat { border-radius: var(--rad); padding: 14px 12px; text-align: center; box-shadow: var(--shadow); border: 1.5px solid transparent; }
.stat .n { font-family: 'Prompt', sans-serif; font-size: 26px; font-weight: 800; line-height: 1; }
.stat .l { font-size: 10px; margin-top: 4px; font-weight: 700; opacity: .8; }
/* stat แต่ละใบมีสีพื้นต่างกัน */
.stat-done  { background: var(--green-lt);  border-color: var(--green-mid); }
.stat-pend  { background: var(--amber-lt);  border-color: var(--amber-mid); }
.stat-photo { background: var(--blue-lt);   border-color: var(--blue-mid); }
.stat-all   { background: var(--violet-lt); border-color: var(--violet-mid); }
.cg { color: var(--green); } .cb { color: var(--blue); } .co { color: var(--amber); } .cv { color: var(--violet); }

/* ─── PROGRESS ─── */
.prog-box { background: var(--card); border-radius: var(--rad); padding: 14px 16px; margin-bottom: 12px; box-shadow: var(--shadow); border: 1px solid var(--border); }
.prog-row { display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; }
.prog-row span { font-size: 13px; font-weight: 600; color: var(--text2); }
.prog-pct { font-family: 'Prompt', sans-serif; font-size: 22px; font-weight: 800; color: var(--green); }
.bar { background: var(--border); border-radius: 99px; height: 9px; overflow: hidden; }
.bar-in { height: 100%; border-radius: 99px; background: linear-gradient(90deg, var(--green), var(--teal)); transition: width .7s cubic-bezier(.4,0,.2,1); }

/* ─── FILTER BLOCK ─── */
.filter-block { background: var(--card); border-radius: var(--rad); padding: 12px 14px; margin-bottom: 12px; box-shadow: var(--shadow); border: 1px solid var(--border); }
.filter-label { font-size: 10px; font-weight: 700; color: var(--sub); text-transform: uppercase; letter-spacing: .6px; margin-bottom: 7px; }
.filter-label:not(:first-child) { margin-top: 10px; }
.filter-row { display: flex; gap: 6px; overflow-x: auto; scrollbar-width: none; padding-bottom: 1px; }
.filter-row::-webkit-scrollbar { display: none; }
.fchip { padding: 5px 12px; border-radius: 99px; border: 1.5px solid var(--border2); background: var(--bg); color: var(--sub); font-family: 'Sarabun', sans-serif; font-size: 11px; font-weight: 700; cursor: pointer; transition: all .15s; white-space: nowrap; flex-shrink: 0; }
.fchip:hover { border-color: var(--violet); color: var(--violet); }
.fchip.on { border-color: var(--violet); background: var(--violet-lt); color: var(--violet); }

/* ─── SHIFT HEADER ─── */
.shift-hdr { display: flex; align-items: center; gap: 10px; margin: 18px 0 10px; }
.shift-hdr-pill { display: flex; align-items: center; gap: 8px; padding: 9px 16px; border-radius: 99px; font-weight: 700; font-size: 13px; border: 1.5px solid transparent; }
.sh-am { background: var(--amber-lt); color: var(--amber); border-color: var(--amber-mid); }
.sh-pm { background: var(--violet-lt); color: var(--violet); border-color: var(--violet-mid); }
.shift-cnt { background: var(--white); border: 1.5px solid currentColor; border-radius: 99px; padding: 1px 8px; font-size: 11px; font-weight: 700; opacity: .85; }
.vt-wrap { margin-left: auto; display: flex; background: var(--bg); border: 1px solid var(--border2); border-radius: 8px; overflow: hidden; }
.vt-btn { width: 30px; height: 30px; background: transparent; border: none; cursor: pointer; color: var(--dim); font-size: 14px; display: flex; align-items: center; justify-content: center; transition: .15s; }
.vt-btn.on { background: var(--white); color: var(--violet); box-shadow: var(--shadow); }

/* ─── TASK CARD (list) ─── */
.tasklist { display: flex; flex-direction: column; gap: 8px; }
.tcard { background: var(--card); border: 1.5px solid var(--border); border-radius: var(--rad); padding: 14px 14px 12px; display: flex; align-items: flex-start; gap: 12px; transition: all .18s; position: relative; overflow: hidden; animation: fadeUp .22s ease both; box-shadow: var(--shadow); }
.tcard:hover { border-color: var(--border2); box-shadow: var(--shadow-md); transform: translateY(-1px); }
.tcard.done { opacity: .65; }
.tcard.done:hover { transform: none; }
.tcard-accent { position: absolute; left: 0; top: 0; bottom: 0; width: 4px; border-radius: 4px 0 0 4px; }
.tcard.done .tcard-accent { background: var(--green); }
.tcard.tcard-warn .tcard-accent { background: var(--red); }
.tinfo { flex: 1; min-width: 0; }
.tname { font-size: 14px; font-weight: 700; color: var(--text); margin-bottom: 5px; }
.tcard.done .tname { text-decoration: line-through; color: var(--sub); }
.tmeta { display: flex; gap: 5px; flex-wrap: wrap; }
.tag { font-size: 10px; font-weight: 700; padding: 2px 8px; border-radius: 99px; }
.tz-front   { background: var(--blue-lt);  color: var(--blue);  }   /* 🏠 หน้าบ้าน — ฟ้า */
.tz-kitchen { background: var(--amber-lt); color: var(--amber); }   /* 🍳 ครัว — ส้มอำพัน */
.tf   { background: var(--green-lt);  color: var(--green); }
.tf-pm{ background: var(--pink-lt);   color: var(--pink); }
.tnote { font-size: 11px; color: var(--sub); margin-top: 5px; line-height: 1.5; }
.done-info { display: flex; align-items: center; gap: 5px; margin-top: 6px; font-size: 11px; color: var(--green); font-weight: 600; }
.done-info .dot { width: 5px; height: 5px; border-radius: 50%; background: var(--green); flex-shrink: 0; }
.warn-badge { display: inline-flex; align-items: center; gap: 4px; font-size: 10px; font-weight: 700; color: var(--red); background: var(--red-lt); padding: 2px 8px; border-radius: 99px; margin-top: 5px; }
.photo-strip { display: flex; gap: 5px; margin-top: 8px; flex-wrap: wrap; }
.photo-strip img { width: 42px; height: 42px; border-radius: 8px; object-fit: cover; border: 2px solid var(--teal); cursor: pointer; transition: .15s; }
.photo-strip img:hover { transform: scale(1.07); }
.more-ph { width: 42px; height: 42px; border-radius: 8px; background: var(--bg); border: 1.5px solid var(--border2); display: flex; align-items: center; justify-content: center; font-size: 10px; color: var(--sub); font-weight: 700; }
.tright { display: flex; flex-direction: column; align-items: flex-end; gap: 8px; flex-shrink: 0; padding-top: 2px; }
.ci-btn { background: var(--blue-lt); color: var(--blue); border: 1.5px solid var(--blue-mid); border-radius: var(--rad-s); padding: 7px 13px; font-family: 'Sarabun', sans-serif; font-size: 12px; font-weight: 700; cursor: pointer; transition: all .18s; white-space: nowrap; }
.ci-btn:hover { background: var(--blue); color: var(--white); border-color: var(--blue); }
.ci-btn-warn { background: var(--red-lt); color: var(--red); border-color: var(--red-mid); }
.ci-btn-warn:hover { background: var(--red); color: var(--white); border-color: var(--red); }
.undo-btn { background: transparent; border: 1.5px solid var(--border2); border-radius: var(--rad-s); padding: 6px 10px; color: var(--sub); font-family: 'Sarabun', sans-serif; font-size: 11px; font-weight: 700; cursor: pointer; transition: all .18s; }
.undo-btn:hover { border-color: var(--amber); color: var(--amber); background: var(--amber-lt); }
.tacts { display: flex; gap: 6px; flex-wrap: wrap; }
.tact { padding: 5px 11px; border-radius: var(--rad-s); border: 1.5px solid var(--border2); background: var(--bg); color: var(--sub); font-family: 'Sarabun', sans-serif; font-size: 11px; font-weight: 700; cursor: pointer; transition: all .15s; }
.tact.ea:hover { border-color: var(--violet); color: var(--violet); background: var(--violet-lt); }
.tact.da:hover { border-color: var(--red); color: var(--red); background: var(--red-lt); }

/* ─── TASK CARD (grid) ─── */
.tasklist.grid-view { display: grid; grid-template-columns: repeat(auto-fill, minmax(155px,1fr)); gap: 10px; }
.tasklist.grid-view .tcard { flex-direction: column; padding: 12px; }
.tasklist.grid-view .tcard-accent { top: 0; bottom: auto; left: 0; right: 0; width: auto; height: 4px; border-radius: 4px 4px 0 0; }
.tasklist.grid-view .tinfo .tname { font-size: 13px; white-space: normal; }
.tasklist.grid-view .tright { flex-direction: row; justify-content: space-between; align-items: center; margin-top: 10px; }
.tasklist.grid-view .ci-btn, .tasklist.grid-view .undo-btn { font-size: 11px; padding: 5px 9px; }

/* ─── CHECKIN BUTTON ─── */
.big-ci-btn { width: 100%; background: linear-gradient(135deg, var(--green), var(--teal)); border: none; border-radius: var(--rad); padding: 16px 20px; color: var(--white); font-family: 'Sarabun', sans-serif; cursor: pointer; display: flex; align-items: center; gap: 14px; transition: all .2s; margin-bottom: 8px; box-shadow: 0 4px 16px rgba(30,140,130,.3); }
.big-ci-btn:hover { transform: translateY(-2px); box-shadow: 0 6px 24px rgba(22,163,74,.45); filter: brightness(1.1); }
.big-ci-btn:active { transform: none; }
.ci-icon { width: 44px; height: 44px; background: rgba(255,255,255,.2); border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 22px; flex-shrink: 0; }

/* ─── ALERT ─── */
.alert-banner { background: var(--card); border: 1.5px solid var(--red-mid); border-radius: var(--rad); padding: 14px; margin-bottom: 8px; box-shadow: 0 2px 10px rgba(220,38,38,.1); animation: fadeUp .3s ease both; }
.alert-head { display: flex; align-items: center; gap: 9px; margin-bottom: 10px; }
.alert-head .ico { width: 32px; height: 32px; background: var(--red-lt); border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 16px; flex-shrink: 0; }
.alert-head .title { font-family: 'Prompt', sans-serif; font-size: 14px; font-weight: 700; color: var(--red); }
.alert-head .badge { margin-left: auto; background: var(--red); color: var(--white); padding: 3px 10px; border-radius: 99px; font-size: 11px; font-weight: 700; }
.alert-item { display: flex; align-items: center; gap: 10px; padding: 9px 11px; background: var(--red-lt); border: 1px solid var(--red-mid); border-radius: var(--rad-s); margin-bottom: 6px; cursor: pointer; transition: all .15s; }
.alert-item:last-child { margin-bottom: 0; }
.alert-item:hover { background: var(--red-lt); border-color: var(--red); filter: brightness(.95); }
.ai-dot { width: 7px; height: 7px; border-radius: 50%; background: var(--red); flex-shrink: 0; animation: blink 1.5s ease-in-out infinite; }
.ai-name { flex: 1; font-size: 13px; font-weight: 600; color: var(--text2); }
.ai-meta { font-size: 10px; color: var(--sub); white-space: nowrap; }
.ai-ci { background: var(--red); color: var(--white); border: none; border-radius: 7px; padding: 5px 11px; font-family: 'Sarabun', sans-serif; font-size: 11px; font-weight: 700; cursor: pointer; white-space: nowrap; flex-shrink: 0; transition: filter .15s; }
.ai-ci:hover { filter: brightness(.85); }

/* ─── TASKS TAB ─── */
.page-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px; gap: 10px; }
.page-header h2 { font-family: 'Prompt', sans-serif; font-size: 16px; font-weight: 700; }
.page-header p { font-size: 11px; color: var(--sub); margin-top: 2px; }
.add-btn { background: var(--green); color: var(--white); border: none; border-radius: var(--rad-s); padding: 9px 16px; font-family: 'Sarabun', sans-serif; font-size: 13px; font-weight: 700; cursor: pointer; transition: all .18s; display: flex; align-items: center; gap: 6px; white-space: nowrap; box-shadow: 0 2px 8px rgba(22,163,74,.3); }
.add-btn:hover { filter: brightness(1.1); transform: translateY(-1px); }
.mgr-list { display: flex; flex-direction: column; gap: 8px; }
.mgr-card { background: var(--card); border: 1.5px solid var(--border); border-radius: var(--rad); padding: 13px 14px; display: flex; align-items: center; gap: 12px; transition: all .18s; animation: fadeUp .2s ease both; box-shadow: var(--shadow); }
.mgr-card:hover { border-color: var(--border2); box-shadow: var(--shadow-md); }
.mgr-card-info { flex: 1; min-width: 0; }
.mgr-card-name { font-size: 14px; font-weight: 700; color: var(--text); margin-bottom: 5px; }
.mgr-card-meta { display: flex; gap: 5px; flex-wrap: wrap; }
.mgr-card-note { font-size: 11px; color: var(--sub); margin-top: 4px; }
.mgr-card-acts { display: flex; gap: 6px; flex-shrink: 0; }
.mgr-act { padding: 7px 13px; border-radius: var(--rad-s); border: 1.5px solid var(--border2); background: var(--bg); color: var(--sub); font-family: 'Sarabun', sans-serif; font-size: 12px; font-weight: 700; cursor: pointer; transition: all .15s; }
.mgr-act:hover { border-color: var(--blue); color: var(--blue); background: var(--blue-lt); }
.mgr-act.del:hover { border-color: var(--red); color: var(--red); background: var(--red-lt); }
.mgr-list.grid-view { display: grid; grid-template-columns: repeat(auto-fill, minmax(155px,1fr)); gap: 10px; }
.mgr-list.grid-view .mgr-card { flex-direction: column; align-items: stretch; }
.mgr-list.grid-view .mgr-card-acts { justify-content: flex-end; margin-top: 4px; }

/* ─── TOAST ─── */
.toast { position: fixed; bottom: 90px; left: 50%; transform: translateX(-50%) translateY(10px); background: var(--text); color: var(--white); padding: 10px 20px; border-radius: 99px; font-size: 13px; font-weight: 600; opacity: 0; transition: opacity .25s, transform .25s; pointer-events: none; z-index: 999; white-space: nowrap; box-shadow: var(--shadow-lg); }
.toast.show { opacity: 1; transform: translateX(-50%) translateY(0); }

/* ─── AUTO DELETE BAR ─── */
.auto-del-bar { display: flex; align-items: center; justify-content: space-between; gap: 12px; background: var(--card); border: 1.5px solid var(--border); border-radius: var(--rad); padding: 12px 14px; margin-bottom: 12px; box-shadow: var(--shadow); }
.auto-del-left { display: flex; align-items: center; gap: 10px; min-width: 0; }
.auto-del-icon { font-size: 20px; flex-shrink: 0; }
.auto-del-title { font-size: 13px; font-weight: 700; color: var(--text2); }
.auto-del-sub { font-size: 11px; color: var(--sub); margin-top: 2px; }
.auto-del-sel { background: var(--bg); border: 1.5px solid var(--border2); border-radius: var(--rad-s); padding: 7px 10px; color: var(--text); font-family: 'Sarabun', sans-serif; font-size: 12px; font-weight: 700; cursor: pointer; outline: none; transition: border-color .2s; flex-shrink: 0; }
.auto-del-sel:focus { border-color: var(--violet); }
.auto-del-sel option { background: var(--white); }
.period-filter { display: flex; gap: 6px; margin-bottom: 12px; }
.pf-btn { flex: 1; padding: 8px 6px; border-radius: var(--rad-s); border: 1.5px solid var(--border2); background: var(--bg); color: var(--sub); font-family: 'Sarabun', sans-serif; font-size: 12px; font-weight: 700; cursor: pointer; text-align: center; transition: all .15s; }
.pf-btn.on { border-color: var(--green); background: var(--green-lt); color: var(--green); }
.period-nav { display: flex; align-items: center; gap: 10px; margin-bottom: 14px; background: var(--card); border-radius: var(--rad); padding: 10px 14px; box-shadow: var(--shadow); border: 1px solid var(--border); }
.pnav-btn { width: 32px; height: 32px; background: var(--bg); border: 1.5px solid var(--border2); color: var(--sub); border-radius: 8px; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 16px; transition: all .15s; flex-shrink: 0; }
.pnav-btn:hover { border-color: var(--blue); color: var(--blue); }
.pnav-label { flex: 1; text-align: center; font-size: 14px; font-weight: 700; color: var(--text); }
.pnav-count { font-size: 11px; color: var(--sub); white-space: nowrap; font-weight: 600; }
.hcard { background: var(--card); border: 1.5px solid var(--border); border-radius: var(--rad); padding: 14px; margin-bottom: 8px; box-shadow: var(--shadow); }
.hcard-top { display: flex; align-items: flex-start; gap: 12px; margin-bottom: 10px; }
.hcard-info { flex: 1; min-width: 0; }
.hcard-name { font-size: 14px; font-weight: 700; color: var(--text); }
.hcard-meta { font-size: 11px; color: var(--sub); margin-top: 3px; line-height: 1.6; }
.hbadge { background: var(--green-lt); color: var(--green); padding: 4px 11px; border-radius: 99px; font-size: 11px; font-weight: 700; white-space: nowrap; flex-shrink: 0; }
.hphotos { display: flex; gap: 6px; flex-wrap: wrap; }
.hphotos img { width: 56px; height: 56px; object-fit: cover; border-radius: 9px; border: 2px solid var(--green); cursor: pointer; transition: .15s; }
.hphotos img:hover { transform: scale(1.05); }
.no-ph { width: 56px; height: 56px; border-radius: 9px; background: var(--bg); border: 1.5px solid var(--border2); display: flex; align-items: center; justify-content: center; font-size: 22px; }
.hist-day-group { margin-bottom: 18px; }
.hist-day-hdr { font-size: 11px; font-weight: 700; color: var(--sub); text-transform: uppercase; letter-spacing: .5px; padding: 6px 0; border-bottom: 1.5px solid var(--border); margin-bottom: 10px; display: flex; justify-content: space-between; align-items: center; }
.hist-day-cnt { background: var(--bg); border: 1px solid var(--border2); border-radius: 6px; padding: 2px 8px; font-size: 10px; color: var(--dim); font-weight: 700; }

/* ─── STAFF ─── */
.staff-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(165px,1fr)); gap: 10px; }
.sc { background: var(--card); border: 1.5px solid var(--border); border-radius: var(--rad); padding: 18px 14px; text-align: center; box-shadow: var(--shadow); transition: all .18s; }
.sc:hover { box-shadow: var(--shadow-md); transform: translateY(-1px); }
.sc-emo { font-size: 34px; margin-bottom: 8px; }
.sc-name { font-family: 'Prompt', sans-serif; font-size: 15px; font-weight: 700; color: var(--text); }
.sc-role { font-size: 11px; color: var(--sub); margin-top: 2px; }
.sc-stat { font-size: 11px; color: var(--sub); margin-top: 6px; }
.sc-acts { display: flex; gap: 6px; margin-top: 12px; }
.sc-act { flex: 1; padding: 7px 4px; border-radius: var(--rad-s); border: 1.5px solid var(--border2); background: var(--bg); color: var(--sub); font-family: 'Sarabun', sans-serif; font-size: 11px; font-weight: 700; cursor: pointer; transition: all .15s; }
.sc-act:hover { border-color: var(--blue); color: var(--blue); background: var(--blue-lt); }
.sc-act.del:hover { border-color: var(--red); color: var(--red); background: var(--red-lt); }
.add-staff-card { background: var(--card); border: 2px dashed var(--border2); border-radius: var(--rad); min-height: 130px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 6px; cursor: pointer; transition: all .2s; box-shadow: var(--shadow); }
.add-staff-card:hover { border-color: var(--green); background: var(--green-lt); }
.add-staff-card .plus { font-size: 28px; color: var(--dim); }
.add-staff-card p { font-size: 12px; color: var(--sub); font-weight: 600; }

/* ─── LIGHTBOX ─── */
.lightbox { position: fixed; inset: 0; background: rgba(0,0,0,.92); z-index: 700; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 20px; }
.lb-img { max-width: 100%; max-height: 78vh; border-radius: 14px; object-fit: contain; }
.lb-info { color: rgba(255,255,255,.7); font-size: 13px; margin-top: 14px; text-align: center; }
.lb-nav { display: flex; gap: 12px; margin-top: 14px; }
.lb-btn { background: rgba(255,255,255,.15); backdrop-filter: blur(4px); border: 1px solid rgba(255,255,255,.2); color: #fff; padding: 9px 22px; border-radius: 9px; cursor: pointer; font-size: 13px; font-weight: 700; transition: .2s; }
.lb-btn:hover { background: rgba(255,255,255,.25); }
.lb-close { position: fixed; top: 18px; right: 18px; background: rgba(0,0,0,.5); backdrop-filter: blur(4px); border: 1px solid rgba(255,255,255,.15); color: #fff; width: 38px; height: 38px; border-radius: 50%; cursor: pointer; font-size: 18px; display: flex; align-items: center; justify-content: center; }

/* ─── MODALS ─── */
@keyframes fo { from{opacity:0} to{opacity:1} }
@keyframes su { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:none} }
.ovl { position: fixed; inset: 0; background: rgba(0,0,0,.45); backdrop-filter: blur(4px); z-index: 400; display: flex; align-items: flex-end; justify-content: center; animation: fo .2s ease; }
@media(min-width:600px) { .ovl { align-items: center; padding: 20px; } }
.mbox { background: var(--white); border-radius: 22px 22px 0 0; width: 100%; max-width: 500px; display: flex; flex-direction: column; max-height: 93vh; overflow: hidden; animation: su .22s ease; box-shadow: var(--shadow-lg); }
@media(min-width:600px) { .mbox { border-radius: 22px; } }
.mhead { padding: 18px 20px 14px; border-bottom: 1.5px solid var(--border); display: flex; align-items: flex-start; justify-content: space-between; flex-shrink: 0; }
.mhead h2 { font-family: 'Prompt', sans-serif; font-size: 16px; font-weight: 700; color: var(--text); }
.mhead p { font-size: 11px; color: var(--sub); margin-top: 3px; }
.close-x { width: 30px; height: 30px; background: var(--bg); border: 1.5px solid var(--border2); color: var(--sub); border-radius: 8px; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 15px; transition: all .15s; flex-shrink: 0; margin-left: 8px; }
.close-x:hover { border-color: var(--red); color: var(--red); background: var(--red-lt); }
.mbody { padding: 18px 20px; overflow-y: auto; flex: 1; }
.mfoot { padding: 14px 20px; border-top: 1.5px solid var(--border); display: flex; gap: 9px; flex-shrink: 0; }
.mbtn { flex: 1; padding: 12px; border-radius: 11px; border: none; cursor: pointer; font-family: 'Sarabun', sans-serif; font-size: 14px; font-weight: 700; transition: all .2s; }
.mbtn-p { background: var(--green); color: var(--white); box-shadow: 0 2px 8px rgba(22,163,74,.3); }
.mbtn-p:hover { filter: brightness(1.1); }
.mbtn-p:disabled { background: var(--border2); color: var(--dim); cursor: not-allowed; box-shadow: none; filter: none; }
.mbtn-g { background: var(--bg); border: 1.5px solid var(--border2); color: var(--sub); }
.mbtn-g:hover { border-color: var(--text2); color: var(--text2); }
.del-btn2 { padding: 12px 16px; border-radius: 11px; border: 1.5px solid var(--red-mid); background: var(--red-lt); color: var(--red); cursor: pointer; font-family: 'Sarabun', sans-serif; font-size: 13px; font-weight: 700; transition: all .2s; white-space: nowrap; }
.del-btn2:hover { background: var(--red); color: var(--white); border-color: var(--red); }
.msec { margin-bottom: 20px; }
.msec-title { font-size: 11px; font-weight: 700; color: var(--sub); text-transform: uppercase; letter-spacing: .6px; margin-bottom: 10px; display: flex; align-items: center; gap: 8px; }
.msec-title::after { content:''; flex:1; height:1.5px; background: var(--border); }
.fg2 { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
@media(max-width:460px) { .fg2 { grid-template-columns: 1fr; } }
.ef label { display: block; font-size: 11px; font-weight: 700; color: var(--sub); text-transform: uppercase; letter-spacing: .4px; margin-bottom: 6px; }
.ef input, .ef select, .ef textarea { width: 100%; background: var(--bg); border: 1.5px solid var(--border2); border-radius: var(--rad-s); padding: 10px 12px; color: var(--text); font-family: 'Sarabun', sans-serif; font-size: 13px; outline: none; transition: border-color .2s; resize: none; }
.ef input:focus, .ef select:focus, .ef textarea:focus { border-color: var(--green); background: var(--white); }
.ef select option { background: var(--white); }
.ef.full { grid-column: 1/-1; }
.ef input.err { border-color: var(--red); background: var(--red-lt); }
.seg { display: flex; gap: 8px; }
.seg-btn { flex: 1; padding: 10px 6px; border-radius: var(--rad-s); border: 1.5px solid var(--border2); background: var(--bg); cursor: pointer; font-family: 'Sarabun', sans-serif; font-size: 13px; font-weight: 700; color: var(--sub); text-align: center; transition: all .15s; }
.seg-btn.on-am { border-color: var(--green); background: var(--green-lt); color: var(--green); }
.seg-btn.on-pm { border-color: var(--blue); background: var(--blue-lt); color: var(--blue); }
.staff-chips { display: grid; grid-template-columns: repeat(3,1fr); gap: 8px; }
@media(max-width:380px) { .staff-chips { grid-template-columns: repeat(2,1fr); } }
.schip { background: var(--bg); border: 1.5px solid var(--border2); border-radius: var(--rad-s); padding: 11px 6px; text-align: center; cursor: pointer; transition: all .15s; }
.schip:hover { border-color: var(--green); }
.schip.on { border-color: var(--green); background: var(--green-lt); }
.schip .emo { font-size: 22px; margin-bottom: 4px; }
.schip .sn { font-size: 12px; font-weight: 700; color: var(--text2); }
.schip.on .sn { color: var(--green); }
.steps { display: flex; gap: 6px; margin-bottom: 18px; }
.sdot { flex: 1; height: 4px; border-radius: 99px; background: var(--border2); transition: .3s; }
.sdot.on { background: var(--green); }
.sdot.done-s { background: var(--blue); }
.tsel { display: flex; align-items: center; gap: 10px; padding: 10px 12px; background: var(--bg); border: 1.5px solid var(--border2); border-radius: var(--rad-s); cursor: pointer; transition: all .15s; margin-bottom: 6px; }
.tsel:hover { border-color: var(--green-mid); background: var(--green-lt); }
.tsel.on { border-color: var(--green); background: var(--green-lt); }
.tsel.on .tsn { color: var(--green); }
.tsel.dis { opacity: .45; cursor: not-allowed; }
.chk { width: 20px; height: 20px; border-radius: 6px; border: 1.5px solid var(--border2); display: flex; align-items: center; justify-content: center; font-size: 11px; flex-shrink: 0; transition: .15s; color: transparent; }
.tsel.on .chk { background: var(--green); border-color: var(--green); color: var(--white); }
.tsel-info { flex: 1; min-width: 0; }
.tsn { font-size: 13px; font-weight: 600; color: var(--text2); }
.tsmeta { display: flex; gap: 5px; margin-top: 3px; flex-wrap: wrap; }
.tsz { font-size: 10px; background: var(--blue-lt); color: var(--blue); padding: 1px 6px; border-radius: 99px; font-weight: 700; }
.ts-done { font-size: 10px; background: var(--green-lt); color: var(--green); padding: 1px 6px; border-radius: 99px; font-weight: 700; }
.tsec-hdr { font-size: 11px; font-weight: 700; color: var(--sub); text-transform: uppercase; letter-spacing: .5px; margin: 14px 0 8px; display: flex; align-items: center; gap: 7px; }
.tsec-hdr span { background: var(--bg); border: 1px solid var(--border2); border-radius: 6px; padding: 1px 7px; font-size: 10px; color: var(--dim); }
.photo-add-area { width: 100%; background: var(--bg); border: 2px dashed var(--border2); border-radius: var(--rad); padding: 24px 16px; text-align: center; cursor: pointer; transition: all .2s; position: relative; margin-bottom: 12px; }
.photo-add-area:hover { border-color: var(--blue); background: var(--blue-lt); }
.photo-add-area input { position: absolute; inset: 0; opacity: 0; cursor: pointer; width: 100%; height: 100%; }
.ph-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 8px; margin-bottom: 12px; }
.ph-item { position: relative; aspect-ratio: 1; }
.ph-item img { width: 100%; height: 100%; object-fit: cover; border-radius: 9px; border: 2px solid var(--green); }
.ph-del { position: absolute; top: 4px; right: 4px; background: rgba(0,0,0,.6); color: var(--white); border: none; border-radius: 50%; width: 22px; height: 22px; font-size: 12px; cursor: pointer; display: flex; align-items: center; justify-content: center; }
.tpl-search { width: 100%; background: var(--bg); border: 1.5px solid var(--border2); border-radius: var(--rad-s); padding: 10px 12px; color: var(--text); font-family: 'Sarabun', sans-serif; font-size: 13px; outline: none; margin-bottom: 10px; transition: .2s; }
.tpl-search:focus { border-color: var(--green); }
.tpl-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(128px,1fr)); gap: 8px; max-height: 220px; overflow-y: auto; margin-bottom: 12px; }
.tpl-card { background: var(--bg); border: 1.5px solid var(--border2); border-radius: var(--rad-s); padding: 11px; cursor: pointer; transition: all .15s; }
.tpl-card:hover { border-color: var(--green-mid); background: var(--green-lt); }
.tpl-card.on { border-color: var(--green); background: var(--green-lt); }
.tpl-card .tpl-icon { font-size: 24px; margin-bottom: 6px; }
.tpl-card .tpl-name { font-size: 12px; font-weight: 700; color: var(--text2); line-height: 1.3; }
.tpl-card .tpl-zone { font-size: 10px; color: var(--sub); margin-top: 3px; }
.tpl-or { text-align: center; font-size: 12px; color: var(--dim); margin: 10px 0; position: relative; font-weight: 600; }
.tpl-or::before, .tpl-or::after { content:''; position: absolute; top: 50%; width: 43%; height: 1.5px; background: var(--border); }
.tpl-or::before { left: 0; } .tpl-or::after { right: 0; }
.scratch-btn { width: 100%; background: var(--bg); border: 1.5px dashed var(--border2); border-radius: var(--rad-s); padding: 11px; color: var(--sub); font-family: 'Sarabun', sans-serif; font-size: 13px; font-weight: 700; cursor: pointer; transition: all .2s; }
.scratch-btn:hover { border-color: var(--violet); color: var(--violet); background: var(--violet-lt); }
.emoji-grid { display: grid; grid-template-columns: repeat(6,1fr); gap: 8px; }
.emo-btn { aspect-ratio: 1; background: var(--bg); border: 1.5px solid var(--border2); border-radius: 9px; font-size: 20px; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: .15s; }
.emo-btn:hover { border-color: var(--green-mid); background: var(--green-lt); }
.emo-btn.on { border-color: var(--green); background: var(--green-lt); }
.confirm-ovl { position: fixed; inset: 0; background: rgba(0,0,0,.4); backdrop-filter: blur(4px); z-index: 500; display: flex; align-items: center; justify-content: center; padding: 20px; animation: fo .18s ease; }
.confirm-box { background: var(--white); border-radius: 20px; padding: 24px; width: 100%; max-width: 340px; box-shadow: var(--shadow-lg); animation: pop .22s ease; text-align: center; }
.confirm-box .icon { font-size: 40px; margin-bottom: 12px; }
.confirm-box h3 { font-family: 'Prompt', sans-serif; font-size: 16px; font-weight: 700; margin-bottom: 8px; }
.confirm-box p { font-size: 13px; color: var(--sub); line-height: 1.6; margin-bottom: 20px; }
.confirm-btns { display: flex; gap: 8px; }
.empty { text-align: center; padding: 40px 20px; color: var(--sub); }
.empty .ei { font-size: 40px; margin-bottom: 10px; }
.empty p { font-size: 13px; line-height: 1.8; font-weight: 500; }` }} />
      </Head>
      <div dangerouslySetInnerHTML={{ __html: `<!-- HEADER -->
<div class="hdr">
  <div class="logo"><img src="/logo.png" alt="YuGrill" style="width:100%;height:100%;object-fit:cover;border-radius:10px"></div>
  <div class="hdr-title">
    <h1>YuGrill</h1>
    <p>ระบบจัดการร้านอาหาร</p>
  </div>
  <div style="display:flex;align-items:center;gap:8px">
    <div class="date-pill" id="datechip"></div>
    <button class="theme-btn" id="themeBtn" onclick="toggleTheme()" title="สลับโหมดสว่าง/มืด">🌙</button>
  </div>
</div>

<!-- DESKTOP TABS -->
<div class="tabs">
  <div class="tab on" onclick="goTab('today')">🏠 รายการ</div>
  <div class="tab" onclick="goTab('tasks')">📋 งาน</div>
  <div class="tab" onclick="goTab('staff')">👥 พนักงาน</div>
  <div class="tab" onclick="goTab('history')">📸 ประวัติ</div>
</div>

<div class="main">

  <!-- ══ TODAY ══ -->
  <div id="tab-today">
    <div class="stat-grid">
      <div class="stat stat-done"><div class="n cg" id="s-done">0</div><div class="l" style="color:var(--green)">✅ เสร็จแล้ว</div></div>
      <div class="stat stat-pend"><div class="n co" id="s-pend">0</div><div class="l" style="color:var(--amber)">⏳ รอทำ</div></div>
      <div class="stat stat-photo"><div class="n cb" id="s-ph">0</div><div class="l" style="color:var(--blue)">📸 มีรูป</div></div>
      <div class="stat stat-all"><div class="n cv" id="s-all">0</div><div class="l" style="color:var(--violet)">📋 ทั้งหมด</div></div>
    </div>
    <div class="prog-box">
      <div class="prog-row"><span>ความคืบหน้าวันนี้</span><span class="prog-pct" id="pct">0%</span></div>
      <div class="bar"><div class="bar-in" id="bar" style="width:0%"></div></div>
    </div>
    <!-- Filter block -->
    <div class="filter-block">
      <div class="filter-label">📍 โซน</div>
      <div class="filter-row">
        <div class="fchip on" id="afz-all"     onclick="setAlertZone('all')">ทั้งหมด</div>
        <div class="fchip"    id="afz-front"   onclick="setAlertZone('front')">🏠 หน้าบ้าน</div>
        <div class="fchip"    id="afz-kitchen" onclick="setAlertZone('kitchen')">🍳 ครัว</div>
      </div>
      <div class="filter-label">🔄 ความถี่</div>
      <div class="filter-row">
        <div class="fchip on" id="aff-all" onclick="setAlertFreq('all')">ทั้งหมด</div>
        <div class="fchip"    id="aff-d1"  onclick="setAlertFreq('ทุกวัน')">ทุกวัน</div>
        <div class="fchip"    id="aff-d3"  onclick="setAlertFreq('ทุก 3 วัน')">ทุก 3 วัน</div>
        <div class="fchip"    id="aff-w1"  onclick="setAlertFreq('ทุกสัปดาห์')">ทุกสัปดาห์</div>
        <div class="fchip"    id="aff-w2"  onclick="setAlertFreq('ทุก 2 สัปดาห์')">ทุก 2 สัปดาห์</div>
        <div class="fchip"    id="aff-m1"  onclick="setAlertFreq('ทุกเดือน')">ทุกเดือน</div>
      </div>
    </div>
    <!-- Alert -->
    <div id="alert-banner"></div>
    <!-- Big CTA -->
    <button class="big-ci-btn" onclick="openCI(null)">
      <div class="ci-icon">📷</div>
      <div>
        <div style="font-size:16px;font-weight:800;font-family:'Prompt',sans-serif">เช็คอินงาน</div>
        <div style="font-size:11px;opacity:.85;margin-top:3px">เลือกพนักงาน → เลือกงาน → ถ่ายรูป</div>
      </div>
      <div style="margin-left:auto;font-size:20px;opacity:.7">›</div>
    </button>
    <!-- Task lists -->
    <div class="shift-hdr">
      <div class="shift-hdr-pill sh-am">🌅 เช้า <span class="shift-cnt" id="am-cnt">0/0</span></div>
      <div class="vt-wrap">
        <button class="vt-btn on" id="today-vt-list" onclick="setTodayView('list')" title="รายการ">☰</button>
        <button class="vt-btn" id="today-vt-grid" onclick="setTodayView('grid')" title="กริด">⊞</button>
      </div>
    </div>
    <div class="tasklist" id="am-list"></div>
    <div class="shift-hdr" style="margin-top:20px">
      <div class="shift-hdr-pill sh-pm">🌙 เย็น <span class="shift-cnt" id="pm-cnt">0/0</span></div>
    </div>
    <div class="tasklist" id="pm-list"></div>
  </div>

  <!-- ══ TASKS ══ -->
  <div id="tab-tasks" style="display:none">
    <div class="page-header">
      <div>
        <h2>รายการงาน</h2>
        <p id="tasks-count-label"></p>
      </div>
      <div style="display:flex;gap:8px;align-items:center">
        <div class="vt-wrap">
          <button class="vt-btn on" id="tasks-vt-list" onclick="setTaskView('list')">☰</button>
          <button class="vt-btn" id="tasks-vt-grid" onclick="setTaskView('grid')">⊞</button>
        </div>
        <button class="add-btn" onclick="openAddModal()">
          <span>＋</span> เพิ่มงาน
        </button>
      </div>
    </div>
    <div class="shift-hdr" style="margin-top:0">
      <div class="shift-hdr-pill sh-am">🌅 เช้า <span class="shift-cnt" id="mgr-am-cnt">0</span></div>
    </div>
    <div class="mgr-list" id="mgr-am-list"></div>
    <div class="shift-hdr">
      <div class="shift-hdr-pill sh-pm">🌙 เย็น <span class="shift-cnt" id="mgr-pm-cnt">0</span></div>
    </div>
    <div class="mgr-list" id="mgr-pm-list"></div>
  </div>

  <!-- ══ STAFF ══ -->
  <div id="tab-staff" style="display:none">
    <div class="page-header">
      <div><h2>พนักงาน</h2><p id="staff-count-label"></p></div>
      <button class="add-btn" onclick="openStaffEdit(null)"><span>＋</span> เพิ่มพนักงาน</button>
    </div>
    <div class="staff-grid" id="staff-cards"></div>
  </div>

  <!-- ══ HISTORY ══ -->
  <div id="tab-history" style="display:none">
    <div class="period-filter">
      <button class="pf-btn on" id="hf-day"   onclick="setHistFilter('day')">วัน</button>
      <button class="pf-btn"    id="hf-week"  onclick="setHistFilter('week')">สัปดาห์</button>
      <button class="pf-btn"    id="hf-month" onclick="setHistFilter('month')">เดือน</button>
      <button class="pf-btn"    id="hf-year"  onclick="setHistFilter('year')">ปี</button>
    </div>
    <!-- Auto-delete setting -->
    <div class="auto-del-bar">
      <div class="auto-del-left">
        <span class="auto-del-icon">🗑️</span>
        <div>
          <div class="auto-del-title">ลบประวัติอัตโนมัติ</div>
          <div class="auto-del-sub" id="auto-del-sub">ไม่มีการลบอัตโนมัติ</div>
        </div>
      </div>
      <select class="auto-del-sel" id="autoDelSel" onchange="setAutoDel(this.value)">
        <option value="0">ปิด</option>
        <option value="1">หลัง 1 เดือน</option>
        <option value="3">หลัง 3 เดือน</option>
        <option value="6">หลัง 6 เดือน</option>
        <option value="12">หลัง 1 ปี</option>
      </select>
    </div>
    <div class="period-nav">
      <button class="pnav-btn" onclick="shiftHist(-1)">‹</button>
      <div class="pnav-label" id="hpn-label">—</div>
      <div class="pnav-count" id="hpn-count"></div>
      <button class="pnav-btn" onclick="shiftHist(1)">›</button>
    </div>
    <div id="hist-list"></div>
  </div>
</div>

<!-- BOTTOM NAV -->
<nav class="bnav">
  <div class="bni on" onclick="goTab('today')"><div class="ic">🏠</div>รายการ</div>
  <div class="bni" onclick="goTab('tasks')"><div class="ic">📋</div>งาน</div>
  <div class="bni" onclick="goTab('staff')"><div class="ic">👥</div>พนักงาน</div>
  <div class="bni" onclick="goTab('history')"><div class="ic">📸</div>ประวัติ</div>
</nav>

<!-- ════ ADD TASK MODAL ════ -->
<div class="ovl" id="addOvl" style="display:none" onclick="ovlClick(event,'addOvl')">
  <div class="mbox" style="max-width:540px">
    <div class="mhead">
      <div><h2>➕ เพิ่มงาน</h2><p>เลือกจาก template หรือสร้างใหม่</p></div>
      <button class="close-x" onclick="closeModal('addOvl')">✕</button>
    </div>
    <div class="mbody">
      <input class="tpl-search" id="tplSearch" placeholder="🔍 ค้นหางาน..." oninput="filterTpl()">
      <div class="tpl-grid" id="tplGrid"></div>
      <div class="tpl-or">หรือ</div>
      <button class="scratch-btn" onclick="openEditModal(null)">✏️ สร้างงานใหม่เอง</button>
    </div>
    <div class="mfoot">
      <button class="mbtn mbtn-g" onclick="closeModal('addOvl')">ยกเลิก</button>
      <button class="mbtn mbtn-p" id="addTplBtn" onclick="addFromTemplate()" disabled>✅ เพิ่มงานที่เลือก</button>
    </div>
  </div>
</div>

<!-- ════ EDIT TASK MODAL ════ -->
<div class="ovl" id="editOvl" style="display:none" onclick="ovlClick(event,'editOvl')">
  <div class="mbox" style="max-width:500px">
    <div class="mhead">
      <div><h2 id="editTitle">✏️ แก้ไขงาน</h2></div>
      <button class="close-x" onclick="closeModal('editOvl')">✕</button>
    </div>
    <div class="mbody">
      <div class="msec">
        <div class="msec-title">ข้อมูลงาน</div>
        <div class="fg2">
          <div class="ef full"><label>ชื่องาน *</label><input id="eName" placeholder="เช่น ล้างพื้นครัว"></div>
          <div class="ef full"><label>รายละเอียด</label><textarea id="eNote" rows="2" placeholder="เช่น ใช้น้ำยาฆ่าเชื้อ..."></textarea></div>
          <div class="ef">
            <label>ความถี่</label>
            <select id="eFreq">
              <option>ทุกวัน</option><option>ทุก 3 วัน</option><option>ทุกสัปดาห์</option>
              <option>ทุก 2 สัปดาห์</option><option>ทุกเดือน</option>
            </select>
          </div>
        </div>
      </div>
      <div class="msec">
        <div class="msec-title">โซน / พื้นที่</div>
        <div class="seg">
          <button class="seg-btn" id="zone-front"   onclick="eSetZone('front')">🏠 หน้าบ้าน</button>
          <button class="seg-btn" id="zone-kitchen" onclick="eSetZone('kitchen')">🍳 ครัว</button>
        </div>
      </div>
      <div class="msec">
        <div class="msec-title">ช่วงเวลา</div>
        <div class="seg">
          <button class="seg-btn" id="sh-am" onclick="eSetShift('am')">🌅 เช้า</button>
          <button class="seg-btn" id="sh-pm" onclick="eSetShift('pm')">🌙 เย็น</button>
        </div>
      </div>
      <div class="msec" id="ePhotoSec" style="display:none">
        <div class="msec-title">📸 รูปภาพหลักฐาน</div>
        <div class="ph-grid" id="ePhotoGrid"></div>
        <div class="photo-add-area" style="padding:14px">
          <input type="file" accept="image/*" capture="environment" multiple id="ePhotoFile" onchange="eAddPhotos(event)">
          <div style="font-size:20px;margin-bottom:4px">➕</div>
          <p style="font-size:12px;color:var(--sub)">เพิ่มรูปใหม่</p>
        </div>
      </div>
    </div>
    <div class="mfoot">
      <button class="del-btn2" id="eDelBtn" onclick="doDeleteTask()" style="display:none">🗑 ลบ</button>
      <button class="mbtn mbtn-g" onclick="closeModal('editOvl')">ยกเลิก</button>
      <button class="mbtn mbtn-p" onclick="saveTask()">💾 บันทึก</button>
    </div>
  </div>
</div>

<!-- ════ CHECK-IN MODAL ════ -->
<div class="ovl" id="ciOvl" style="display:none" onclick="ovlClick(event,'ciOvl')">
  <div class="mbox">
    <div class="mhead">
      <div><h2 id="ciTitle">📸 เช็คอิน</h2><p id="ciSub"></p></div>
      <button class="close-x" onclick="closeModal('ciOvl')">✕</button>
    </div>
    <div class="mbody" id="ciBody"></div>
    <div class="mfoot">
      <button class="mbtn mbtn-g" id="ciBackBtn" onclick="ciPrev()" style="display:none">← ย้อนกลับ</button>
      <button class="mbtn mbtn-g" onclick="closeModal('ciOvl')">ยกเลิก</button>
      <button class="mbtn mbtn-p" id="ciNextBtn" onclick="ciNext()" disabled>ถัดไป →</button>
    </div>
  </div>
</div>

<!-- ════ STAFF EDIT MODAL ════ -->
<div class="ovl" id="staffEditOvl" style="display:none" onclick="ovlClick(event,'staffEditOvl')">
  <div class="mbox" style="max-width:420px">
    <div class="mhead">
      <div><h2 id="seTitle">👤 เพิ่มพนักงาน</h2></div>
      <button class="close-x" onclick="closeModal('staffEditOvl')">✕</button>
    </div>
    <div class="mbody">
      <div class="msec">
        <div class="msec-title">ข้อมูลพนักงาน</div>
        <div class="fg2">
          <div class="ef full"><label>ชื่อ *</label><input id="seName" placeholder="เช่น สมชาย"></div>
          <div class="ef full"><label>ตำแหน่ง</label><input id="seRole" placeholder="เช่น พ่อครัว"></div>
        </div>
      </div>
      <div class="msec">
        <div class="msec-title">เลือก Emoji</div>
        <div class="emoji-grid" id="emojiGrid"></div>
      </div>
    </div>
    <div class="mfoot">
      <button class="del-btn2" id="seDelBtn" onclick="doDeleteStaff()" style="display:none">🗑 ลบ</button>
      <button class="mbtn mbtn-g" onclick="closeModal('staffEditOvl')">ยกเลิก</button>
      <button class="mbtn mbtn-p" onclick="saveStaff()">💾 บันทึก</button>
    </div>
  </div>
</div>

<!-- ════ CONFIRM ════ -->
<div class="confirm-ovl" id="confirmOvl" style="display:none">
  <div class="confirm-box">
    <div class="icon">🗑️</div>
    <h3>ยืนยันการลบ</h3>
    <p id="confirmMsg"></p>
    <div class="confirm-btns">
      <button class="mbtn mbtn-g" onclick="closeModal('confirmOvl')">ยกเลิก</button>
      <button class="mbtn" id="confirmOkBtn" style="background:var(--red);color:var(--white)">ลบ</button>
    </div>
  </div>
</div>

<!-- LIGHTBOX -->
<div class="lightbox" id="lb" style="display:none">
  <button class="lb-close" onclick="closeLB()">✕</button>
  <img class="lb-img" id="lbImg" src="" alt="">
  <div class="lb-info" id="lbInfo"></div>
  <div class="lb-nav" id="lbNav"></div>
</div>` }} />
    </>
  )
}
