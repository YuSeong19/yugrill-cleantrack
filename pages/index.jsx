import Head from 'next/head'
import Script from 'next/script'

export default function YuGrill() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
        <title>YuGrill</title>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#8B1A1A" />
        <link href="https://fonts.googleapis.com/css2?family=Sarabun:wght@400;500;600;700&family=Prompt:wght@600;700;800&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="/styles.css" />
      </Head>
      <div id="app-root" />
      {/* ZONE MANAGER MODAL */}
      <div className="ovl" id="zoneMgrOvl" style={{display:'none'}} onClick={(e)=>{if(e.target.id==='zoneMgrOvl')e.target.style.display='none'}}>
        <div className="modal" style={{maxWidth:'400px'}}>
          <div className="mhdr"><h2>📍 จัดการโซน</h2><button className="close-btn" onClick={()=>document.getElementById('zoneMgrOvl').style.display='none'}>✕</button></div>
          <div className="mbody">
            <div id="zoneMgrList" style={{marginBottom:'12px'}}></div>
            <button className="add-btn" style={{width:'100%'}} onClick={()=>window.openZoneEdit(null)}>＋ เพิ่มโซนใหม่</button>
          </div>
        </div>
      </div>
      {/* ZONE EDIT MODAL */}
      <div className="ovl" id="zEditOvl" style={{display:'none'}} onClick={(e)=>{if(e.target.id==='zEditOvl')e.target.style.display='none'}}>
        <div className="modal" style={{maxWidth:'360px'}}>
          <div className="mhdr"><h2>✏️ แก้ไขโซน</h2><button className="close-btn" onClick={()=>document.getElementById('zEditOvl').style.display='none'}>✕</button></div>
          <div className="mbody">
            <div className="ef full"><label>ชื่อโซน *</label><input id="zNameInput" placeholder="เช่น ห้องครัว" /></div>
            <div className="ef full"><label>ไอคอน</label><input id="zIconInput" placeholder="🍳" maxLength={2} style={{fontSize:'24px',textAlign:'center'}} /></div>
            <div className="ef full"><label>สี</label><div id="zColorWrap" style={{display:'flex',gap:'8px',flexWrap:'wrap',marginTop:'6px'}}></div></div>
          </div>
          <div className="mftr"><button className="mbtn mbtn-g" onClick={()=>window.saveZone()}>💾 บันทึก</button></div>
        </div>
      </div>
      <Script src="/app.js" strategy="afterInteractive" />
      <Script src="/firebase-init.js" strategy="afterInteractive" type="module" />
    </>
  )
}
