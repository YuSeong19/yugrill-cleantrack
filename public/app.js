document.getElementById('app-root').outerHTML = "<!-- HEADER -->\n<div class=\"hdr\">\n  <div class=\"logo\"><img src=\"/logo.png\" alt=\"YuGrill\" style=\"width:100%;height:100%;object-fit:cover;border-radius:10px\"></div>\n  <div class=\"hdr-title\">\n    <h1>YuGrill</h1>\n    <p>\u0e23\u0e30\u0e1a\u0e1a\u0e08\u0e31\u0e14\u0e01\u0e32\u0e23\u0e23\u0e49\u0e32\u0e19\u0e2d\u0e32\u0e2b\u0e32\u0e23</p>\n  </div>\n  <div style=\"display:flex;align-items:center;gap:8px\">\n    <div class=\"date-pill\" id=\"datechip\"></div>\n    <button class=\"theme-btn\" id=\"themeBtn\" onclick=\"toggleTheme()\" title=\"\u0e2a\u0e25\u0e31\u0e1a\u0e42\u0e2b\u0e21\u0e14\u0e2a\u0e27\u0e48\u0e32\u0e07/\u0e21\u0e37\u0e14\">\ud83c\udf19</button>\n  </div>\n</div>\n\n<!-- DESKTOP TABS -->\n<div class=\"tabs\">\n  <div class=\"tab on\" onclick=\"goTab('today')\">\ud83c\udfe0 \u0e23\u0e32\u0e22\u0e01\u0e32\u0e23</div>\n  <div class=\"tab\" onclick=\"goTab('tasks')\">\ud83d\udccb \u0e07\u0e32\u0e19</div>\n  <div class=\"tab\" onclick=\"goTab('staff')\">\ud83d\udc65 \u0e1e\u0e19\u0e31\u0e01\u0e07\u0e32\u0e19</div>\n  <div class=\"tab\" onclick=\"goTab('history')\">\ud83d\udcf8 \u0e1b\u0e23\u0e30\u0e27\u0e31\u0e15\u0e34</div>\n</div>\n\n<div class=\"main\">\n\n  <!-- \u2550\u2550 TODAY \u2550\u2550 -->\n  <div id=\"tab-today\">\n    <div class=\"stat-grid\">\n      <div class=\"stat stat-done\"><div class=\"n cg\" id=\"s-done\">0</div><div class=\"l\" style=\"color:var(--green)\">\u2705 \u0e40\u0e2a\u0e23\u0e47\u0e08\u0e41\u0e25\u0e49\u0e27</div></div>\n      <div class=\"stat stat-pend\"><div class=\"n co\" id=\"s-pend\">0</div><div class=\"l\" style=\"color:var(--amber)\">\u23f3 \u0e23\u0e2d\u0e17\u0e33</div></div>\n      <div class=\"stat stat-photo\"><div class=\"n cb\" id=\"s-ph\">0</div><div class=\"l\" style=\"color:var(--blue)\">\ud83d\udcf8 \u0e21\u0e35\u0e23\u0e39\u0e1b</div></div>\n      <div class=\"stat stat-all\"><div class=\"n cv\" id=\"s-all\">0</div><div class=\"l\" style=\"color:var(--violet)\">\ud83d\udccb \u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14</div></div>\n    </div>\n    <div class=\"prog-box\">\n      <div class=\"prog-row\"><span>\u0e04\u0e27\u0e32\u0e21\u0e04\u0e37\u0e1a\u0e2b\u0e19\u0e49\u0e32\u0e27\u0e31\u0e19\u0e19\u0e35\u0e49</span><span class=\"prog-pct\" id=\"pct\">0%</span></div>\n      <div class=\"bar\"><div class=\"bar-in\" id=\"bar\" style=\"width:0%\"></div></div>\n    </div>\n    <!-- Filter block -->\n    <div class=\"filter-block\">\n      <div class=\"filter-label\">\ud83d\udccd \u0e42\u0e0b\u0e19</div>\n      <div class=\"filter-row\">\n        <div class=\"fchip on\" id=\"afz-all\"     onclick=\"setAlertZone('all')\">\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14</div>\n        <div class=\"fchip\"    id=\"afz-front\"   onclick=\"setAlertZone('front')\">\ud83c\udfe0 \u0e2b\u0e19\u0e49\u0e32\u0e1a\u0e49\u0e32\u0e19</div>\n        <div class=\"fchip\"    id=\"afz-kitchen\" onclick=\"setAlertZone('kitchen')\">\ud83c\udf73 \u0e04\u0e23\u0e31\u0e27</div>\n      </div>\n      <div class=\"filter-label\">\ud83d\udd04 \u0e04\u0e27\u0e32\u0e21\u0e16\u0e35\u0e48</div>\n      <div class=\"filter-row\">\n        <div class=\"fchip on\" id=\"aff-all\" onclick=\"setAlertFreq('all')\">\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14</div>\n        <div class=\"fchip\"    id=\"aff-d1\"  onclick=\"setAlertFreq('\u0e17\u0e38\u0e01\u0e27\u0e31\u0e19')\">\u0e17\u0e38\u0e01\u0e27\u0e31\u0e19</div>\n        <div class=\"fchip\"    id=\"aff-d3\"  onclick=\"setAlertFreq('\u0e17\u0e38\u0e01 3 \u0e27\u0e31\u0e19')\">\u0e17\u0e38\u0e01 3 \u0e27\u0e31\u0e19</div>\n        <div class=\"fchip\"    id=\"aff-w1\"  onclick=\"setAlertFreq('\u0e17\u0e38\u0e01\u0e2a\u0e31\u0e1b\u0e14\u0e32\u0e2b\u0e4c')\">\u0e17\u0e38\u0e01\u0e2a\u0e31\u0e1b\u0e14\u0e32\u0e2b\u0e4c</div>\n        <div class=\"fchip\"    id=\"aff-w2\"  onclick=\"setAlertFreq('\u0e17\u0e38\u0e01 2 \u0e2a\u0e31\u0e1b\u0e14\u0e32\u0e2b\u0e4c')\">\u0e17\u0e38\u0e01 2 \u0e2a\u0e31\u0e1b\u0e14\u0e32\u0e2b\u0e4c</div>\n        <div class=\"fchip\"    id=\"aff-m1\"  onclick=\"setAlertFreq('\u0e17\u0e38\u0e01\u0e40\u0e14\u0e37\u0e2d\u0e19')\">\u0e17\u0e38\u0e01\u0e40\u0e14\u0e37\u0e2d\u0e19</div>\n      </div>\n    </div>\n    <!-- Alert -->\n    <div id=\"alert-banner\"></div>\n    <!-- Big CTA -->\n    <button class=\"big-ci-btn\" onclick=\"openCI(null)\">\n      <div class=\"ci-icon\">\ud83d\udcf7</div>\n      <div>\n        <div style=\"font-size:16px;font-weight:800;font-family:'Prompt',sans-serif\">\u0e40\u0e0a\u0e47\u0e04\u0e2d\u0e34\u0e19\u0e07\u0e32\u0e19</div>\n        <div style=\"font-size:11px;opacity:.85;margin-top:3px\">\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e1e\u0e19\u0e31\u0e01\u0e07\u0e32\u0e19 \u2192 \u0e40\u0e25\u0e37\u0e2d\u0e01\u0e07\u0e32\u0e19 \u2192 \u0e16\u0e48\u0e32\u0e22\u0e23\u0e39\u0e1b</div>\n      </div>\n      <div style=\"margin-left:auto;font-size:20px;opacity:.7\">\u203a</div>\n    </button>\n    <!-- Task lists -->\n    <div class=\"shift-hdr\">\n      <div class=\"shift-hdr-pill sh-am\">\ud83c\udf05 \u0e40\u0e0a\u0e49\u0e32 <span class=\"shift-cnt\" id=\"am-cnt\">0/0</span></div>\n      <div class=\"vt-wrap\">\n        <button class=\"vt-btn on\" id=\"today-vt-list\" onclick=\"setTodayView('list')\" title=\"\u0e23\u0e32\u0e22\u0e01\u0e32\u0e23\">\u2630</button>\n        <button class=\"vt-btn\" id=\"today-vt-grid\" onclick=\"setTodayView('grid')\" title=\"\u0e01\u0e23\u0e34\u0e14\">\u229e</button>\n      </div>\n    </div>\n    <div class=\"tasklist\" id=\"am-list\"></div>\n    <div class=\"shift-hdr\" style=\"margin-top:20px\">\n      <div class=\"shift-hdr-pill sh-pm\">\ud83c\udf19 \u0e40\u0e22\u0e47\u0e19 <span class=\"shift-cnt\" id=\"pm-cnt\">0/0</span></div>\n    </div>\n    <div class=\"tasklist\" id=\"pm-list\"></div>\n  </div>\n\n  <!-- \u2550\u2550 TASKS \u2550\u2550 -->\n  <div id=\"tab-tasks\" style=\"display:none\">\n    <div class=\"page-header\">\n      <div>\n        <h2>\u0e23\u0e32\u0e22\u0e01\u0e32\u0e23\u0e07\u0e32\u0e19</h2>\n        <p id=\"tasks-count-label\"></p>\n      </div>\n      <div style=\"display:flex;gap:8px;align-items:center\">\n        <div class=\"vt-wrap\">\n          <button class=\"vt-btn on\" id=\"tasks-vt-list\" onclick=\"setTaskView('list')\">\u2630</button>\n          <button class=\"vt-btn\" id=\"tasks-vt-grid\" onclick=\"setTaskView('grid')\">\u229e</button>\n        </div>\n        <button class=\"add-btn\" onclick=\"openAddModal()\">\n          <span>\uff0b</span> \u0e40\u0e1e\u0e34\u0e48\u0e21\u0e07\u0e32\u0e19\n        </button>\n      </div>\n    </div>\n    <div class=\"shift-hdr\" style=\"margin-top:0\">\n      <div class=\"shift-hdr-pill sh-am\">\ud83c\udf05 \u0e40\u0e0a\u0e49\u0e32 <span class=\"shift-cnt\" id=\"mgr-am-cnt\">0</span></div>\n    </div>\n    <div class=\"mgr-list\" id=\"mgr-am-list\"></div>\n    <div class=\"shift-hdr\">\n      <div class=\"shift-hdr-pill sh-pm\">\ud83c\udf19 \u0e40\u0e22\u0e47\u0e19 <span class=\"shift-cnt\" id=\"mgr-pm-cnt\">0</span></div>\n    </div>\n    <div class=\"mgr-list\" id=\"mgr-pm-list\"></div>\n  </div>\n\n  <!-- \u2550\u2550 STAFF \u2550\u2550 -->\n  <div id=\"tab-staff\" style=\"display:none\">\n    <div class=\"page-header\">\n      <div><h2>\u0e1e\u0e19\u0e31\u0e01\u0e07\u0e32\u0e19</h2><p id=\"staff-count-label\"></p></div>\n      <button class=\"add-btn\" onclick=\"openZoneMgr()\" style=\"margin-left:auto\">\ud83d\udccd \u0e08\u0e31\u0e14\u0e01\u0e32\u0e23\u0e42\u0e0b\u0e19</button>\n      <button class=\"add-btn\" onclick=\"openStaffEdit(null)\"><span>\uff0b</span> \u0e40\u0e1e\u0e34\u0e48\u0e21\u0e1e\u0e19\u0e31\u0e01\u0e07\u0e32\u0e19</button>\n    </div>\n    <div class=\"staff-grid\" id=\"staff-cards\"></div>\n  </div>\n\n  <!-- \u2550\u2550 HISTORY \u2550\u2550 -->\n  <div id=\"tab-history\" style=\"display:none\">\n    <div class=\"period-filter\">\n      <button class=\"pf-btn on\" id=\"hf-day\"   onclick=\"setHistFilter('day')\">\u0e27\u0e31\u0e19</button>\n      <button class=\"pf-btn\"    id=\"hf-week\"  onclick=\"setHistFilter('week')\">\u0e2a\u0e31\u0e1b\u0e14\u0e32\u0e2b\u0e4c</button>\n      <button class=\"pf-btn\"    id=\"hf-month\" onclick=\"setHistFilter('month')\">\u0e40\u0e14\u0e37\u0e2d\u0e19</button>\n      <button class=\"pf-btn\"    id=\"hf-year\"  onclick=\"setHistFilter('year')\">\u0e1b\u0e35</button>\n    </div>\n    <!-- Auto-delete setting -->\n    <div class=\"auto-del-bar\">\n      <div class=\"auto-del-left\">\n        <span class=\"auto-del-icon\">\ud83d\uddd1\ufe0f</span>\n        <div>\n          <div class=\"auto-del-title\">\u0e25\u0e1a\u0e1b\u0e23\u0e30\u0e27\u0e31\u0e15\u0e34\u0e2d\u0e31\u0e15\u0e42\u0e19\u0e21\u0e31\u0e15\u0e34</div>\n          <div class=\"auto-del-sub\" id=\"auto-del-sub\">\u0e44\u0e21\u0e48\u0e21\u0e35\u0e01\u0e32\u0e23\u0e25\u0e1a\u0e2d\u0e31\u0e15\u0e42\u0e19\u0e21\u0e31\u0e15\u0e34</div>\n        </div>\n      </div>\n      <select class=\"auto-del-sel\" id=\"autoDelSel\" onchange=\"setAutoDel(this.value)\">\n        <option value=\"0\">\u0e1b\u0e34\u0e14</option>\n        <option value=\"1\">\u0e2b\u0e25\u0e31\u0e07 1 \u0e40\u0e14\u0e37\u0e2d\u0e19</option>\n        <option value=\"3\">\u0e2b\u0e25\u0e31\u0e07 3 \u0e40\u0e14\u0e37\u0e2d\u0e19</option>\n        <option value=\"6\">\u0e2b\u0e25\u0e31\u0e07 6 \u0e40\u0e14\u0e37\u0e2d\u0e19</option>\n        <option value=\"12\">\u0e2b\u0e25\u0e31\u0e07 1 \u0e1b\u0e35</option>\n      </select>\n    </div>\n    <div class=\"period-nav\">\n      <button class=\"pnav-btn\" onclick=\"shiftHist(-1)\">\u2039</button>\n      <div class=\"pnav-label\" id=\"hpn-label\">\u2014</div>\n      <div class=\"pnav-count\" id=\"hpn-count\"></div>\n      <button class=\"pnav-btn\" onclick=\"shiftHist(1)\">\u203a</button>\n    </div>\n    <div id=\"hist-list\"></div>\n  </div>\n</div>\n\n<!-- BOTTOM NAV -->\n<nav class=\"bnav\">\n  <div class=\"bni on\" onclick=\"goTab('today')\"><div class=\"ic\">\ud83c\udfe0</div>\u0e23\u0e32\u0e22\u0e01\u0e32\u0e23</div>\n  <div class=\"bni\" onclick=\"goTab('tasks')\"><div class=\"ic\">\ud83d\udccb</div>\u0e07\u0e32\u0e19</div>\n  <div class=\"bni\" onclick=\"goTab('staff')\"><div class=\"ic\">\ud83d\udc65</div>\u0e1e\u0e19\u0e31\u0e01\u0e07\u0e32\u0e19</div>\n  <div class=\"bni\" onclick=\"goTab('history')\"><div class=\"ic\">\ud83d\udcf8</div>\u0e1b\u0e23\u0e30\u0e27\u0e31\u0e15\u0e34</div>\n</nav>\n\n<!-- \u2550\u2550\u2550\u2550 ADD TASK MODAL \u2550\u2550\u2550\u2550 -->\n<div class=\"ovl\" id=\"addOvl\" style=\"display:none\" onclick=\"ovlClick(event,'addOvl')\">\n  <div class=\"mbox\" style=\"max-width:540px\">\n    <div class=\"mhead\">\n      <div><h2>\u2795 \u0e40\u0e1e\u0e34\u0e48\u0e21\u0e07\u0e32\u0e19</h2><p>\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e08\u0e32\u0e01 template \u0e2b\u0e23\u0e37\u0e2d\u0e2a\u0e23\u0e49\u0e32\u0e07\u0e43\u0e2b\u0e21\u0e48</p></div>\n      <button class=\"close-x\" onclick=\"closeModal('addOvl')\">\u2715</button>\n    </div>\n    <div class=\"mbody\">\n      <input class=\"tpl-search\" id=\"tplSearch\" placeholder=\"\ud83d\udd0d \u0e04\u0e49\u0e19\u0e2b\u0e32\u0e07\u0e32\u0e19...\" oninput=\"filterTpl()\">\n      <div class=\"tpl-grid\" id=\"tplGrid\"></div>\n      <div class=\"tpl-or\">\u0e2b\u0e23\u0e37\u0e2d</div>\n      <button class=\"scratch-btn\" onclick=\"openEditModal(null)\">\u270f\ufe0f \u0e2a\u0e23\u0e49\u0e32\u0e07\u0e07\u0e32\u0e19\u0e43\u0e2b\u0e21\u0e48\u0e40\u0e2d\u0e07</button>\n    </div>\n    <div class=\"mfoot\">\n      <button class=\"mbtn mbtn-g\" onclick=\"closeModal('addOvl')\">\u0e22\u0e01\u0e40\u0e25\u0e34\u0e01</button>\n      <button class=\"mbtn mbtn-p\" id=\"addTplBtn\" onclick=\"addFromTemplate()\" disabled>\u2705 \u0e40\u0e1e\u0e34\u0e48\u0e21\u0e07\u0e32\u0e19\u0e17\u0e35\u0e48\u0e40\u0e25\u0e37\u0e2d\u0e01</button>\n    </div>\n  </div>\n</div>\n\n<!-- \u2550\u2550\u2550\u2550 EDIT TASK MODAL \u2550\u2550\u2550\u2550 -->\n<div class=\"ovl\" id=\"editOvl\" style=\"display:none\" onclick=\"ovlClick(event,'editOvl')\">\n  <div class=\"mbox\" style=\"max-width:500px\">\n    <div class=\"mhead\">\n      <div><h2 id=\"editTitle\">\u270f\ufe0f \u0e41\u0e01\u0e49\u0e44\u0e02\u0e07\u0e32\u0e19</h2></div>\n      <button class=\"close-x\" onclick=\"closeModal('editOvl')\">\u2715</button>\n    </div>\n    <div class=\"mbody\">\n      <div class=\"msec\">\n        <div class=\"msec-title\">\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e07\u0e32\u0e19</div>\n        <div class=\"fg2\">\n          <div class=\"ef full\"><label>\u0e0a\u0e37\u0e48\u0e2d\u0e07\u0e32\u0e19 *</label><input id=\"eName\" placeholder=\"\u0e40\u0e0a\u0e48\u0e19 \u0e25\u0e49\u0e32\u0e07\u0e1e\u0e37\u0e49\u0e19\u0e04\u0e23\u0e31\u0e27\"></div>\n          <div class=\"ef full\"><label>\u0e23\u0e32\u0e22\u0e25\u0e30\u0e40\u0e2d\u0e35\u0e22\u0e14</label><textarea id=\"eNote\" rows=\"2\" placeholder=\"\u0e40\u0e0a\u0e48\u0e19 \u0e43\u0e0a\u0e49\u0e19\u0e49\u0e33\u0e22\u0e32\u0e06\u0e48\u0e32\u0e40\u0e0a\u0e37\u0e49\u0e2d...\"></textarea></div>\n          <div class=\"ef\">\n            <label>\u0e04\u0e27\u0e32\u0e21\u0e16\u0e35\u0e48</label>\n            <select id=\"eFreq\">\n              <option>\u0e17\u0e38\u0e01\u0e27\u0e31\u0e19</option><option>\u0e17\u0e38\u0e01 3 \u0e27\u0e31\u0e19</option><option>\u0e17\u0e38\u0e01\u0e2a\u0e31\u0e1b\u0e14\u0e32\u0e2b\u0e4c</option>\n              <option>\u0e17\u0e38\u0e01 2 \u0e2a\u0e31\u0e1b\u0e14\u0e32\u0e2b\u0e4c</option><option>\u0e17\u0e38\u0e01\u0e40\u0e14\u0e37\u0e2d\u0e19</option>\n            </select>\n          </div>\n        </div>\n      </div>\n      <div class=\"msec\">\n        <div class=\"msec-title\">\u0e42\u0e0b\u0e19 / \u0e1e\u0e37\u0e49\u0e19\u0e17\u0e35\u0e48</div>\n        <div class=\"seg\">\n          <button class=\"seg-btn\" id=\"zone-front\"   onclick=\"eSetZone('front')\">\ud83c\udfe0 \u0e2b\u0e19\u0e49\u0e32\u0e1a\u0e49\u0e32\u0e19</button>\n          <button class=\"seg-btn\" id=\"zone-kitchen\" onclick=\"eSetZone('kitchen')\">\ud83c\udf73 \u0e04\u0e23\u0e31\u0e27</button>\n        </div>\n      </div>\n      <div class=\"msec\">\n        <div class=\"msec-title\">\u0e0a\u0e48\u0e27\u0e07\u0e40\u0e27\u0e25\u0e32</div>\n        <div class=\"seg\">\n          <button class=\"seg-btn\" id=\"sh-am\" onclick=\"eSetShift('am')\">\ud83c\udf05 \u0e40\u0e0a\u0e49\u0e32</button>\n          <button class=\"seg-btn\" id=\"sh-pm\" onclick=\"eSetShift('pm')\">\ud83c\udf19 \u0e40\u0e22\u0e47\u0e19</button>\n        </div>\n      </div>\n      <div class=\"msec\" id=\"ePhotoSec\" style=\"display:none\">\n        <div class=\"msec-title\">\ud83d\udcf8 \u0e23\u0e39\u0e1b\u0e20\u0e32\u0e1e\u0e2b\u0e25\u0e31\u0e01\u0e10\u0e32\u0e19</div>\n        <div class=\"ph-grid\" id=\"ePhotoGrid\"></div>\n        <div class=\"photo-add-area\" style=\"padding:14px\">\n          <input type=\"file\" accept=\"image/*\" capture=\"environment\" multiple id=\"ePhotoFile\" onchange=\"eAddPhotos(event)\">\n          <div style=\"font-size:20px;margin-bottom:4px\">\u2795</div>\n          <p style=\"font-size:12px;color:var(--sub)\">\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e23\u0e39\u0e1b\u0e43\u0e2b\u0e21\u0e48</p>\n        </div>\n      </div>\n    </div>\n    <div class=\"mfoot\">\n      <button class=\"del-btn2\" id=\"eDelBtn\" onclick=\"doDeleteTask()\" style=\"display:none\">\ud83d\uddd1 \u0e25\u0e1a</button>\n      <button class=\"mbtn mbtn-g\" onclick=\"closeModal('editOvl')\">\u0e22\u0e01\u0e40\u0e25\u0e34\u0e01</button>\n      <button class=\"mbtn mbtn-p\" onclick=\"saveTask()\">\ud83d\udcbe \u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01</button>\n    </div>\n  </div>\n</div>\n\n<!-- \u2550\u2550\u2550\u2550 CHECK-IN MODAL \u2550\u2550\u2550\u2550 -->\n<div class=\"ovl\" id=\"ciOvl\" style=\"display:none\" onclick=\"ovlClick(event,'ciOvl')\">\n  <div class=\"mbox\">\n    <div class=\"mhead\">\n      <div><h2 id=\"ciTitle\">\ud83d\udcf8 \u0e40\u0e0a\u0e47\u0e04\u0e2d\u0e34\u0e19</h2><p id=\"ciSub\"></p></div>\n      <button class=\"close-x\" onclick=\"closeModal('ciOvl')\">\u2715</button>\n    </div>\n    <div class=\"mbody\" id=\"ciBody\"></div>\n    <div class=\"mfoot\">\n      <button class=\"mbtn mbtn-g\" id=\"ciBackBtn\" onclick=\"ciPrev()\" style=\"display:none\">\u2190 \u0e22\u0e49\u0e2d\u0e19\u0e01\u0e25\u0e31\u0e1a</button>\n      <button class=\"mbtn mbtn-g\" onclick=\"closeModal('ciOvl')\">\u0e22\u0e01\u0e40\u0e25\u0e34\u0e01</button>\n      <button class=\"mbtn mbtn-p\" id=\"ciNextBtn\" onclick=\"ciNext()\" disabled>\u0e16\u0e31\u0e14\u0e44\u0e1b \u2192</button>\n    </div>\n  </div>\n</div>\n\n<!-- \u2550\u2550\u2550\u2550 STAFF EDIT MODAL \u2550\u2550\u2550\u2550 -->\n<div class=\"ovl\" id=\"staffEditOvl\" style=\"display:none\" onclick=\"ovlClick(event,'staffEditOvl')\">\n  <div class=\"mbox\" style=\"max-width:420px\">\n    <div class=\"mhead\">\n      <div><h2 id=\"seTitle\">\ud83d\udc64 \u0e40\u0e1e\u0e34\u0e48\u0e21\u0e1e\u0e19\u0e31\u0e01\u0e07\u0e32\u0e19</h2></div>\n      <button class=\"close-x\" onclick=\"closeModal('staffEditOvl')\">\u2715</button>\n    </div>\n    <div class=\"mbody\">\n      <div class=\"msec\">\n        <div class=\"msec-title\">\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e1e\u0e19\u0e31\u0e01\u0e07\u0e32\u0e19</div>\n        <div class=\"fg2\">\n          <div class=\"ef full\"><label>\u0e0a\u0e37\u0e48\u0e2d *</label><input id=\"seName\" placeholder=\"\u0e40\u0e0a\u0e48\u0e19 \u0e2a\u0e21\u0e0a\u0e32\u0e22\"></div>\n          <div class=\"ef full\"><label>\u0e15\u0e33\u0e41\u0e2b\u0e19\u0e48\u0e07</label><input id=\"seRole\" placeholder=\"\u0e40\u0e0a\u0e48\u0e19 \u0e1e\u0e48\u0e2d\u0e04\u0e23\u0e31\u0e27\"></div>\n        </div>\n      </div>\n      <div class=\"msec\">\n        <div class=\"msec-title\">\u0e40\u0e25\u0e37\u0e2d\u0e01 Emoji</div>\n        <div class=\"emoji-grid\" id=\"emojiGrid\"></div>\n      </div>\n    </div>\n    <div class=\"mfoot\">\n      <button class=\"del-btn2\" id=\"seDelBtn\" onclick=\"doDeleteStaff()\" style=\"display:none\">\ud83d\uddd1 \u0e25\u0e1a</button>\n      <button class=\"mbtn mbtn-g\" onclick=\"closeModal('staffEditOvl')\">\u0e22\u0e01\u0e40\u0e25\u0e34\u0e01</button>\n      <button class=\"mbtn mbtn-p\" onclick=\"saveStaff()\">\ud83d\udcbe \u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01</button>\n    </div>\n  </div>\n</div>\n\n<!-- \u2550\u2550\u2550\u2550 CONFIRM \u2550\u2550\u2550\u2550 -->\n<div class=\"confirm-ovl\" id=\"confirmOvl\" style=\"display:none\">\n  <div class=\"confirm-box\">\n    <div class=\"icon\">\ud83d\uddd1\ufe0f</div>\n    <h3>\u0e22\u0e37\u0e19\u0e22\u0e31\u0e19\u0e01\u0e32\u0e23\u0e25\u0e1a</h3>\n    <p id=\"confirmMsg\"></p>\n    <div class=\"confirm-btns\">\n      <button class=\"mbtn mbtn-g\" onclick=\"closeModal('confirmOvl')\">\u0e22\u0e01\u0e40\u0e25\u0e34\u0e01</button>\n      <button class=\"mbtn\" id=\"confirmOkBtn\" style=\"background:var(--red);color:var(--white)\">\u0e25\u0e1a</button>\n    </div>\n  </div>\n</div>\n\n<!-- LIGHTBOX -->\n<div class=\"lightbox\" id=\"lb\" style=\"display:none\">\n  <button class=\"lb-close\" onclick=\"closeLB()\">\u2715</button>\n  <img class=\"lb-img\" id=\"lbImg\" src=\"\" alt=\"\">\n  <div class=\"lb-info\" id=\"lbInfo\"></div>\n  <div class=\"lb-nav\" id=\"lbNav\"></div>\n</div>";


// ─── DEBUG ERROR CATCHER ───
window._errs=[];
window.onerror=function(msg,src,line,col,err){
  window._errs.push((err?err.message:msg)+' L'+line);
  showDebug();
};
window.onunhandledrejection=function(e){
  window._errs.push('Promise: '+(e.reason&&e.reason.message||e.reason));
  showDebug();
};
function showDebug(){
  var d=document.getElementById('_dbg');
  if(!d){
    d=document.createElement('div');
    d.id='_dbg';
    d.style.cssText='position:fixed;bottom:80px;left:8px;right:8px;background:#1e293b;color:#f87171;font-size:11px;padding:10px;border-radius:12px;z-index:9999;max-height:200px;overflow-y:auto;font-family:monospace;white-space:pre-wrap;';
    document.body.appendChild(d);
  }
  d.textContent='🐛 JS Errors:\n'+window._errs.join('\n');
}

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
window.zones = [
  {id:'front',   name:'หน้าบ้าน', icon:'🏠', color:'blue'},
  {id:'kitchen', name:'ครัว',     icon:'🍳', color:'amber'},
];
function getZone(id){ return window.zones.find(z=>z.id===id)||{id,name:id,icon:'📍',color:'blue'}; }
function getZoneByName(name){ return window.zones.find(z=>z.name===name)||null; }


// ─── COMPRESS PHOTO ───
function compressPhoto(file, cb){
  var MAX=800, QUALITY=0.55;
  var img=new Image();
  var url=URL.createObjectURL(file);
  img.onload=function(){
    URL.revokeObjectURL(url);
    var w=img.width,h=img.height;
    if(w>h){ if(w>MAX){h=Math.round(h*MAX/w);w=MAX;} }
    else    { if(h>MAX){w=Math.round(w*MAX/h);h=MAX;} }
    var canvas=document.createElement('canvas');
    canvas.width=w; canvas.height=h;
    var ctx=canvas.getContext('2d');
    ctx.drawImage(img,0,0,w,h);
    cb(canvas.toDataURL('image/jpeg',QUALITY));
  };
  img.onerror=function(){
    // fallback: read as-is but still compress via canvas
    var r=new FileReader();
    r.onload=function(ev){ cb(ev.target.result); };
    r.readAsDataURL(file);
  };
  img.src=url;
}

// ─── FREQUENCY RESET ───
function freqToDays(freq){
  if(freq==='ทุกวัน')         return 1;
  if(freq==='ทุก 3 วัน')     return 3;
  if(freq==='ทุกสัปดาห์')    return 7;
  if(freq==='ทุก 2 สัปดาห์') return 14;
  if(freq==='ทุกเดือน')      return 30;
  return 1;
}
function taskStatus(t){
  var days=freqToDays(t.freq);
  if(!t.done||!t.doneDate) return 'due';
  var today=new Date(); today.setHours(0,0,0,0);
  var doneD=new Date(t.doneDate); doneD.setHours(0,0,0,0);
  var daysSince=Math.round((today-doneD)/86400000);
  if(daysSince<days)  return 'done';
  if(daysSince===days) return 'due';
  return 'overdue';
}
function applyFreqReset(){
  if(!window.fbReady) return;
  var changed=false;
  window.tasks.forEach(function(t){
    var st=taskStatus(t);
    if((st==='due'||st==='overdue')&&t.done){
      t.done=false;t.photos=[];t.doneBy=null;t.doneAt=null;t.doneDate=null;
    if(window.fbSavePhotos) window.fbSavePhotos(t.id,[]);
      changed=true;
    }
  });
  if(changed&&window.fbSaveTasks) window.fbSaveTasks();
}


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
const stampNow=()=>{const n=new Date();return`${n.getHours().toString().padStart(2,'0')}:${n.getMinutes().toString().padStart(2,'0')} น.`;};
const thDays=['อาทิตย์','จันทร์','อังคาร','พุธ','พฤหัส','ศุกร์','เสาร์'];
const thMonths=['ม.ค.','ก.พ.','มี.ค.','เม.ย.','พ.ค.','มิ.ย.','ก.ค.','ส.ค.','ก.ย.','ต.ค.','พ.ย.','ธ.ค.'];
const thMonthsFull=['มกราคม','กุมภาพันธ์','มีนาคม','เมษายน','พฤษภาคม','มิถุนายน','กรกฎาคม','สิงหาคม','กันยายน','ตุลาคม','พฤศจิกายน','ธันวาคม'];
function fmtDate(d){return`${thDays[d.getDay()]} ${d.getDate()} ${thMonths[d.getMonth()]}`;}
function fmtDateFull(d){return`${d.getDate()} ${thMonths[d.getMonth()]} ${d.getFullYear()+543}`;}
function isSameDay(a,b){return a.getFullYear()===b.getFullYear()&&a.getMonth()===b.getMonth()&&a.getDate()===b.getDate();}

// ─── INIT ───
function init(){
  document.documentElement.classList.remove('dark');
  document.getElementById('datechip').textContent=fmtDate(new Date());
  document.getElementById('themeBtn').textContent='🌙';
  renderZoneSeg();
  renderToday();
  goTab('today');
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
  if(alertZoneFilter!=='all'){
    const _z=getZone(alertZoneFilter);
    if(t.zone!==_z.name) return false;
  }
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
  applyFreqReset();
  ['am','pm'].forEach(sh=>{
    const all=window.tasks.filter(t=>t.shift===sh);
    const list=all.filter(matchFilter);
    const done=all.filter(t=>t.done).length;
    document.getElementById(sh+'-cnt').textContent=`${done}/${all.length}`;
    const el=document.getElementById(sh+'-list');
    el.className='tasklist'+(todayView==='grid'?' grid-view':'');
    el.innerHTML=list.length
      ?list.map((t,i)=>tCard(t,i)).join('')
      :`<div class="empty"><div class="ei">✨</div><p>ไม่มีงานที่ตรงตามตัวกรอง</p></div>`;
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
  var _st=taskStatus(t);
  var isOverdue=_st==='overdue';
  var isDone=_st==='done';
  var isWarn=!isDone;
  var _zo=getZoneByName(t.zone)||{id:'other',icon:'📍'};
  const noteEl=t.note?`<div class="tnote">📝 ${t.note}</div>`:'';
  const strip=t.photos.length?`<div class="photo-strip">${t.photos.slice(0,3).map((p,pi)=>`<img src="${p}" onclick="openLB(${t.id},${pi})">`).join('')}${t.photos.length>3?`<div class="more-ph">+${t.photos.length-3}</div>`:''}</div>`:'';
  var overdueTag=isOverdue?'<div class="overdue-tag">⚠️ ไม่ได้ทำตามกำหนด</div>':'';
  const doneInfo=isDone&&t.doneBy?`<div class="done-info"><div class="dot"></div>ทำโดย ${(getStaff(t.doneBy)||{name:t.doneBy}).name} · ${t.doneAt} · 📸 ${t.photos.length} รูป</div>`:'';
  const warnEl=(isWarn&&!isOverdue)?`<div><span class="warn-badge">⚠️ ยังไม่เสร็จ</span></div>`:'';
  const btn=!isDone
    ?`<button class="ci-btn${isWarn?' ci-btn-warn':''}" onclick="openCI(${t.id})">📷 เช็คอิน</button>`
    :`<button class="undo-btn" onclick="undoTask(${t.id})">↩ ยกเลิก</button>`;
  const accentColor=isDone?'var(--green)':isOverdue?'var(--orange,#f97316)':isWarn?'var(--red)':'transparent';
  return`<div class="tcard${t.done?' done':''}${isWarn?' tcard-warn':''}" style="animation-delay:${i*.04}s">
    <div class="tcard-accent" style="background:${accentColor}"></div>
    <div class="tinfo">
      <div class="tname">${t.name}</div>
      <div class="tmeta">
        <span class="tag ${t.zone==='ครัว'?'tz-kitchen':'tz-front'}">${t.zone==='ครัว'?'🍳 ครัว':'🏠 หน้าบ้าน'}</span>
        <span class="tag ${t.shift==='am'?'tf':'tf-pm'}">${t.freq}</span>
      </div>
      ${noteEl}${warnEl}${doneInfo}${strip}
      <div class="tacts" style="margin-top:8px">
        <button class="tact ea" onclick="openEditModal(${t.id})">✏️ แก้ไข</button>
        <button class="tact da" onclick="confirmDelTask(${t.id})">🗑 ลบ</button>
      </div>
    </div>
    <div class="tright">${btn}</div>
  </div>`;
}

// ─── ALERT ───
function renderAlert(){
  const el=document.getElementById('alert-banner');
  const allUndone=window.tasks.filter(t=>!t.done);
  if(!allUndone.length){el.innerHTML='';return;}
  let zf=allUndone;
  if(alertZoneFilter!=='all'){
    const _zn=getZone(alertZoneFilter).name;
    zf=allUndone.filter(t=>t.zone===_zn);
  }
  let overdue=zf;
  if(alertFreqFilter!=='all'){
    const cutoff=FREQ_ORDER.indexOf(alertFreqFilter);
    overdue=zf.filter(t=>{const i=FREQ_ORDER.indexOf(t.freq);return i>=0&&i<=cutoff;});
  }
  el.innerHTML=`<div class="alert-banner">
    <div class="alert-head">
      <div class="ico">⚠️</div>
      <div class="title">งานที่ยังไม่เสร็จ</div>
      <div class="badge">${overdue.length}/${allUndone.length}</div>
    </div>
    ${overdue.length===0
      ?`<div style="text-align:center;padding:10px 0;font-size:13px;color:var(--sub)">ไม่มีงานที่ตรงตามตัวกรอง</div>`
      :overdue.map(t=>`<div class="alert-item" onclick="openCI(${t.id})">
        <div class="ai-dot"></div>
        <div class="ai-name">${t.name}</div>
        <div class="ai-meta">${t.shift==='am'?'🌅':'🌙'} · ${t.zone==='ครัว'?'🍳':'🏠'} · ${t.freq}</div>
        <button class="ai-ci" onclick="event.stopPropagation();openCI(${t.id})">เช็คอิน</button>
      </div>`).join('')}
  </div>`;
}

// ─── TASKS TAB ───
function renderTasks(){
  const all=window.tasks.length,am=window.tasks.filter(t=>t.shift==='am'),pm=window.tasks.filter(t=>t.shift==='pm');
  document.getElementById('tasks-count-label').textContent=`${all} รายการ · เช้า ${am.length} · เย็น ${pm.length}`;
  document.getElementById('mgr-am-cnt').textContent=am.length;
  document.getElementById('mgr-pm-cnt').textContent=pm.length;
  ['am','pm'].forEach(sh=>{
    const list=window.tasks.filter(t=>t.shift===sh);
    const el=document.getElementById('mgr-'+sh+'-list');
    el.className='mgr-list'+(taskView==='grid'?' grid-view':'');
    el.innerHTML=list.length?list.map((t,i)=>mgrCard(t,i)).join('')
      :`<div class="empty"><div class="ei">✨</div><p>ยังไม่มีงาน</p></div>`;
  });
}
function mgrCard(t,i){
  const zLabel=t.zone==='ครัว'?'🍳 ครัว':'🏠 หน้าบ้าน';
  return`<div class="mgr-card" style="animation-delay:${i*.04}s">
    <div class="mgr-card-info">
      <div class="mgr-card-name">${t.name}</div>
      <div class="mgr-card-meta">
        <span class="tag ${t.zone==='ครัว'?'tz-kitchen':'tz-front'}">${zLabel}</span>
        <span class="tag ${t.shift==='am'?'tf':'tf-pm'}">${t.freq}</span>
      </div>
      ${t.note?`<div class="mgr-card-note">📝 ${t.note}</div>`:''}
    </div>
    <div class="mgr-card-acts">
      <button class="mgr-act" onclick="openEditModal(${t.id})">✏️ แก้ไข</button>
      <button class="mgr-act del" onclick="confirmDelTask(${t.id})">🗑</button>
    </div>
  </div>`;
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
  document.getElementById('tplGrid').innerHTML=filteredTpls.map((tpl,i)=>`
    <div class="tpl-card${selectedTpl===i?' on':''}" onclick="selectTpl(${i})">
      <div class="tpl-icon">${tpl.icon}</div>
      <div class="tpl-name">${tpl.name}</div>
      <div class="tpl-zone">${tpl.zone==='ครัว'?'🍳':'🏠'} ${tpl.zone}</div>
    </div>`).join('');
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
  var _zobj=t?getZoneByName(t.zone):null;
  eZone=_zobj?_zobj.id:(window.zones[0]?window.zones[0].id:'front');
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
  document.getElementById('ePhotoGrid').innerHTML=t.photos.map((p,i)=>`
    <div class="ph-item">
      <img src="${p}" onclick="openLB(${t.id},${i})" style="cursor:pointer">
      <button class="ph-del" onclick="eDelPhoto(${i})">✕</button>
    </div>`).join('');
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
  if(t.photos.length+files.length>5){alert('อัพโหลดได้สูงสุด 5 รูป');e.target.value='';return;}
  let n=0;
  files.forEach(f=>{
    compressPhoto(f, function(dataUrl){
      t.photos.push(dataUrl);
      if(++n===files.length){ renderEditPhotos(t); renderToday(); if(window.fbSavePhotos) window.fbSavePhotos(t.id,t.photos); }
    });
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
  var _tzobj=getZoneByName(tpl.zone);
  eZone=_tzobj?_tzobj.id:(window.zones[0]?window.zones[0].id:'front');
  refreshShiftSeg();refreshZoneSeg();
  document.getElementById('editOvl').style.display='flex';
}
function refreshShiftSeg(){
  document.getElementById('sh-am').className='seg-btn'+(eShift==='am'?' on-am':'');
  document.getElementById('sh-pm').className='seg-btn'+(eShift==='pm'?' on-pm':'');
}
function eSetShift(sh){eShift=sh;refreshShiftSeg();}
function refreshZoneSeg(){
  window.zones.forEach(function(z){
    var el=document.getElementById('zone-seg-'+z.id);
    if(el) el.className='seg-btn'+(eZone===z.id?' on-am':'');
  });
}
function eSetZone(z){eZone=z;refreshZoneSeg();}
function saveTask(){
  const name=document.getElementById('eName').value.trim();
  if(!name){document.getElementById('eName').classList.add('err');document.getElementById('eName').focus();return;}
  document.getElementById('eName').classList.remove('err');
  const note=document.getElementById('eNote').value.trim();
  const zone=getZone(eZone).name;
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
  showConfirm(`ลบงาน "${t.name}"?`,()=>{
    window.tasks=window.tasks.filter(x=>x.id!==eId);
    closeModal('editOvl');renderToday();
    if(window.curTab==='tasks') renderTasks();
  });
}
function confirmDelTask(id){
  const t=window.tasks.find(x=>x.id===id); if(!t) return;
  showConfirm(`ลบงาน "${t.name}"?`,()=>{window.tasks=window.tasks.filter(x=>x.id!==id);renderToday();if(window.curTab==='tasks') renderTasks();if(window.fbSaveTasks)fbSaveTasks();});
}

// ─── CHECK-IN ───
function openCI(preId=null){
  const pad=n=>n.toString().padStart(2,'0');
  const now=new Date();
  const todayStr=`${now.getFullYear()}-${pad(now.getMonth()+1)}-${pad(now.getDate())}`;
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
  const dots=[1,2,3].map(n=>`<div class="sdot${n<ci.step?' done-s':n===ci.step?' on':''}"></div>`).join('');
  if(ci.step===1){
    document.getElementById('ciTitle').textContent='👤 เลือกพนักงาน';
    document.getElementById('ciSub').textContent='ใครเป็นคนทำงาน?';
    bb.style.display='none';nb.textContent='ถัดไป →';nb.disabled=!ci.staff;
    bd.innerHTML=`<div class="steps">${dots}</div>
      <div class="staff-chips" id="ciStaffWrap">
        ${window.staff.map(s=>`<div class="schip${ci.staff===s.id?' on':''}" onclick="ciPickStaff('${s.id}')">
          <div class="emo">${s.emo}</div><div class="sn">${s.name}</div></div>`).join('')}
      </div>`;
  } else if(ci.step===2){
    document.getElementById('ciTitle').textContent='📋 เลือกงาน';
    document.getElementById('ciSub').textContent=`${(getStaff(ci.staff)||{name:''}).name} — เลือกได้หลายงาน`;
    bb.style.display='';nb.textContent='ถัดไป →';nb.disabled=ci.taskIds.length===0;
    const rowH=t=>{
      const sel=ci.taskIds.includes(t.id),dis=t.done;
      return`<div class="tsel${sel?' on':''}${dis?' dis':''}" onclick="${dis?'':` ciToggle(${t.id})`}">
        <div class="chk">${sel?'✓':''}</div>
        <div class="tsel-info">
          <div class="tsn">${t.name}</div>
          <div class="tsmeta"><span class="tsz">${t.zone==='ครัว'?'🍳':'🏠'} ${t.zone}</span>${dis?'<span class="ts-done">✅ เสร็จแล้ว</span>':''}</div>
        </div>
      </div>`;
    };
    bd.innerHTML=`<div class="steps">${dots}</div>
      <div class="tsec-hdr">🌅 ช่วงเช้า <span>${window.tasks.filter(t=>t.shift==='am').length}</span></div>
      ${window.tasks.filter(t=>t.shift==='am').map(rowH).join('')}
      <div class="tsec-hdr">🌙 ช่วงเย็น <span>${window.tasks.filter(t=>t.shift==='pm').length}</span></div>
      ${window.tasks.filter(t=>t.shift==='pm').map(rowH).join('')}`;
  } else {
    const names=ci.taskIds.map(id=>window.tasks.find(x=>x.id===id)?.name).filter(Boolean).join(', ');
    document.getElementById('ciTitle').textContent='📸 ถ่ายรูปหลักฐาน';
    document.getElementById('ciSub').textContent=`${ci.taskIds.length} งาน`;
    bb.style.display='';nb.textContent='✅ ยืนยัน';nb.disabled=ci.photos.length===0||!ci.date;
    bd.innerHTML=`<div class="steps">${dots}</div>
      <div style="font-size:12px;color:var(--sub);margin-bottom:12px;font-weight:600">งาน: ${names}</div>
      <div class="msec" style="margin-bottom:14px">
        <label style="font-size:11px;font-weight:700;color:var(--sub);text-transform:uppercase;letter-spacing:.4px;display:block;margin-bottom:6px">📅 วันที่ทำ</label>
        <input type="date" id="ciDate" value="${ci.date}" onchange="ci.date=this.value;document.getElementById('ciNextBtn').disabled=ci.photos.length===0||!ci.date"
          style="width:100%;background:var(--bg);border:1.5px solid var(--border2);border-radius:var(--rad-s);padding:10px 12px;font-family:'Sarabun',sans-serif;font-size:13px;color:var(--text);outline:none;">
      </div>
      ${ci.photos.length?`<div class="ph-grid">${ci.photos.map((p,i)=>`
        <div class="ph-item"><img src="${p}"><button class="ph-del" onclick="ciDelPh(${i})">✕</button></div>`).join('')}</div>`:''}
      <div class="photo-add-area">
        <input type="file" accept="image/*" capture="environment" multiple id="phFile" onchange="ciAddPh(event)">
        <div style="font-size:30px;margin-bottom:8px">📷</div>
        <p style="font-size:13px;font-weight:600;color:var(--text2)">${ci.photos.length?'เพิ่มรูปอีก':'ถ่ายรูปหลักฐาน'}</p>
        <p style="font-size:11px;color:var(--sub);margin-top:3px">แตะเพื่อถ่าย หรือเลือกหลายรูป</p>
      </div>
      <div style="font-size:12px;color:var(--sub);text-align:center;font-weight:600">${ci.photos.length} รูป</div>`;
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
  if(ci.photos.length+files.length>5){alert('อัพโหลดได้สูงสุด 5 รูป');e.target.value='';return;}
  let n=0;
  files.forEach(f=>{compressPhoto(f,function(dataUrl){ci.photos.push(dataUrl);if(++n===files.length)renderCI();});});
}
function ciDelPh(i){ci.photos.splice(i,1);renderCI();}
function commitCI(){
  const ts=stampNow();
  const [y,m,d]=ci.date.split('-').map(Number);
  const now=new Date();now.setFullYear(y,m-1,d);
  const dateObj=new Date(now);
  ci.taskIds.forEach(id=>{
    const t=window.tasks.find(x=>x.id===id);if(!t)return;
    t.done=true;t.doneBy=ci.staff;t.doneAt=ts;t.doneDate=ci.date;t.photos=[...ci.photos];
    if(window.fbSavePhotos) window.fbSavePhotos(id, ci.photos);
    window.hist.unshift({name:t.name,zone:t.zone,shift:t.shift,who:ci.staff,time:ts,ts:dateObj,dateStr:fmtDateFull(dateObj),photos:[...ci.photos]});
  });
  closeModal('ciOvl');renderToday();
  if(window.curTab==='history') renderHist();
  if(window.fbSaveTasks) fbSaveTasks();
  if(window.fbSaveHist) fbSaveHist();
}
function undoTask(id){
  const t=window.tasks.find(x=>x.id===id);if(!t)return;
  showConfirm(`ยกเลิกงาน "${t.name}"?`,()=>{
    window.hist=window.hist.filter(h=>!(h.name===t.name&&h.who===t.doneBy&&h.time===t.doneAt));
    t.done=false;t.photos=[];t.doneBy=null;t.doneAt=null;t.doneDate=null;
    if(window.fbSavePhotos) window.fbSavePhotos(t.id,[]);
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
  if(removed > 0) showToast(`🗑️ ลบประวัติเก่า ${removed} รายการอัตโนมัติ`);
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
  if(histFilter==='week'){const endD=new Date(end);endD.setDate(endD.getDate()-1);return`${start.getDate()} ${thMonths[start.getMonth()]} — ${endD.getDate()} ${thMonths[endD.getMonth()]}`;}
  if(histFilter==='month') return`${thMonthsFull[start.getMonth()]} ${start.getFullYear()+543}`;
  return`ปี ${start.getFullYear()+543}`;
}
function renderHist(){
  const{start,end}=getPeriodBounds();
  document.getElementById('hpn-label').textContent=getPeriodLabel();
  const filtered=window.hist.filter(h=>h.ts>=start&&h.ts<end);
  document.getElementById('hpn-count').textContent=filtered.length?`${filtered.length} รายการ`:'';
  const el=document.getElementById('hist-list');
  if(!filtered.length){el.innerHTML=`<div class="empty"><div class="ei">📸</div><p>ไม่มีประวัติในช่วงนี้</p></div>`;return;}
  if(histFilter==='day'){
    el.innerHTML=filtered.map((h,hi)=>hCard(h,window.hist.indexOf(h))).join('');
  } else {
    const groups={};
    filtered.forEach(h=>{const k=h.ts.toDateString();if(!groups[k])groups[k]={label:fmtDateFull(h.ts),items:[]};groups[k].items.push(h);});
    el.innerHTML=Object.values(groups).map(g=>`
      <div class="hist-day-group">
        <div class="hist-day-hdr">${g.label}<span class="hist-day-cnt">${g.items.length} รายการ</span></div>
        ${g.items.map(h=>hCard(h,window.hist.indexOf(h))).join('')}
      </div>`).join('');
  }
}
function hCard(h,hi){
  const s=getStaff(h.who)||{emo:'👤',name:h.who||'ไม่ระบุ'};
  return`<div class="hcard">
    <div class="hcard-top">
      <div class="hcard-info">
        <div class="hcard-name">${h.name}</div>
        <div class="hcard-meta">${(getZoneByName(h.zone)||{icon:'📍',name:h.zone}).icon+' '+h.zone} · ${h.shift==='am'?'🌅 เช้า':'🌙 เย็น'}<br>${s.emo} ${s.name} · 🕐 ${h.time}${h.dateStr?' · '+h.dateStr:''}</div>
      </div>
      <div class="hbadge">✅ เสร็จ</div>
    </div>
    <div class="hphotos">
      ${h.photos.length
        ?h.photos.map((p,pi)=>`<img src="${p}" onclick="openLBArr(${hi},${pi})">`).join('')
        :`<div class="no-ph">📷</div>`}
    </div>
  </div>`;
}

// ─── STAFF ───
function renderStaff(){
  document.getElementById('staff-count-label').textContent=`${window.staff.length} คน`;
  document.getElementById('staff-cards').innerHTML=window.staff.map(s=>{
    const myHist=window.hist.filter(h=>h.who===s.id);
    const ph=myHist.filter(h=>h.photos.length>0).length;
    return`<div class="sc">
      <div class="sc-emo">${s.emo}</div>
      <div class="sc-name">${s.name}</div>
      <div class="sc-role">${s.role||'—'}</div>
      <div class="sc-stat">✅ ${myHist.length} งาน · 📸 ${ph}</div>
      <div class="sc-acts">
        <button class="sc-act" onclick="openStaffEdit('${s.id}')">✏️ แก้ไข</button>
        <button class="sc-act del" onclick="doDeleteStaffById('${s.id}')">🗑</button>
      </div>
    </div>`;
  }).join('')+`<div class="add-staff-card" onclick="openStaffEdit(null)">
    <div class="plus">➕</div><p>เพิ่มพนักงาน</p>
  </div>`;
}
function openStaffEdit(id){
  seId=id;const s=id?window.staff.find(x=>x.id===id):null;
  document.getElementById('seTitle').textContent=s?'✏️ แก้ไขพนักงาน':'👤 เพิ่มพนักงาน';
  document.getElementById('seDelBtn').style.display=s?'':'none';
  document.getElementById('seName').value=s?s.name:'';
  document.getElementById('seRole').value=s?s.role||'':'';
  seEmo=s?s.emo:'👩';
  document.getElementById('emojiGrid').innerHTML=EMOJIS.map(e=>`<button class="emo-btn${seEmo===e?' on':''}" onclick="pickEmo('${e}')">${e}</button>`).join('');
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
  showConfirm(`ลบพนักงาน "${s.name}"?`,()=>{window.staff=window.staff.filter(x=>x.id!==seId);closeModal('staffEditOvl');renderStaff();if(window.fbSaveStaff)fbSaveStaff();});
}
function doDeleteStaffById(id){
  const s=window.staff.find(x=>x.id===id);if(!s)return;
  showConfirm(`ลบพนักงาน "${s.name}"?`,()=>{window.staff=window.staff.filter(x=>x.id!==id);renderStaff();if(window.fbSaveStaff)fbSaveStaff();});
}


// ─── ZONE MANAGER ───
var zEdit=null;
function renderZoneSeg(){
  var wrap=document.getElementById('zone-seg-wrap');
  if(wrap) wrap.innerHTML=window.zones.map(function(z){
    return '<button class="seg-btn'+(eZone===z.id?' on-am':'')+'" id="zone-seg-'+z.id+'" onclick="eSetZone(\''+z.id+'\')">'+z.icon+' '+z.name+'</button>';
  }).join('');
  var af=document.getElementById('alert-zone-chips');
  if(af) af.innerHTML='<div class="fchip'+(alertZoneFilter==='all'?' on':'')+'" onclick="setAlertZone(\'all\')">ทั้งหมด</div>'
    +window.zones.map(function(z){
      return '<div class="fchip'+(alertZoneFilter===z.id?' on':'')+'" onclick="setAlertZone(\''+z.id+'\')">'+z.icon+' '+z.name+'</div>';
    }).join('');
}
function openZoneMgr(){
  renderZoneMgrList();
  document.getElementById('zoneMgrOvl').style.display='flex';
}
function renderZoneMgrList(){
  var list=document.getElementById('zoneMgrList');
  if(!list) return;
  list.innerHTML=window.zones.map(function(z){
    return '<div class="zone-row">'
      +'<span style="font-size:22px">'+z.icon+'</span>'
      +'<div style="flex:1;padding:0 8px"><strong>'+z.name+'</strong></div>'
      +'<button class="zbtn zbtn-edit" onclick="openZoneEdit(\''+z.id+'\')">✏️</button>'
      +'<button class="zbtn zbtn-del"  onclick="deleteZone(\''+z.id+'\')">🗑️</button>'
      +'</div>';
  }).join('');
}
function openZoneEdit(zid){
  zEdit=zid?window.zones.find(function(z){return z.id===zid;}):null;
  document.getElementById('zNameInput').value=zEdit?zEdit.name:'';
  document.getElementById('zIconInput').value=zEdit?zEdit.icon:'📍';
  var COLOR_OPTS=['blue','amber','teal','pink','purple','green'];
  var curColor=zEdit?zEdit.color:'blue';
  window._zPickedColor=curColor;
  document.getElementById('zColorWrap').innerHTML=COLOR_OPTS.map(function(col){
    return '<button class="zcol-btn tz-col-'+col+(curColor===col?' zcol-on':'')+'" onclick="pickZoneColor(\''+col+'\')">'+col+'</button>';
  }).join('');
  document.getElementById('zEditOvl').style.display='flex';
}
function pickZoneColor(col){
  window._zPickedColor=col;
  document.querySelectorAll('.zcol-btn').forEach(function(b){b.classList.remove('zcol-on');});
  var sel=document.querySelector('.tz-col-'+col);
  if(sel) sel.classList.add('zcol-on');
}
function saveZone(){
  var name=document.getElementById('zNameInput').value.trim();
  var icon=document.getElementById('zIconInput').value.trim()||'📍';
  var color=window._zPickedColor||'blue';
  if(!name){alert('กรุณาใส่ชื่อโซน');return;}
  if(zEdit){
    var oldName=zEdit.name;
    zEdit.name=name;zEdit.icon=icon;zEdit.color=color;
    window.tasks.forEach(function(t){if(t.zone===oldName)t.zone=name;});
    window.hist.forEach(function(h){if(h.zone===oldName)h.zone=name;});
    if(window.fbSaveTasks) window.fbSaveTasks();
    if(window.fbSaveHist)  window.fbSaveHist();
  } else {
    window.zones.push({id:'z'+Date.now(),name:name,icon:icon,color:color});
  }
  if(window.fbSaveZones) window.fbSaveZones();
  document.getElementById('zEditOvl').style.display='none';
  renderZoneMgrList();renderZoneSeg();renderToday();
  if(window.curTab==='tasks') renderTasks();
}
function deleteZone(zid){
  var z=window.zones.find(function(x){return x.id===zid;});
  if(!z) return;
  var inUse=window.tasks.filter(function(t){return t.zone===z.name;}).length;
  var msg=inUse
    ? 'ลบโซน "'+z.name+'"? มีงาน '+inUse+' รายการใช้โซนนี้ (จะย้ายไปโซนแรก)'
    : 'ลบโซน "'+z.name+'"?';
  showConfirm(msg,function(){
    var fallback=window.zones.find(function(x){return x.id!==zid;});
    window.tasks.forEach(function(t){if(t.zone===z.name)t.zone=fallback?fallback.name:'ไม่ระบุ';});
    window.zones=window.zones.filter(function(x){return x.id!==zid;});
    if(eZone===zid) eZone=window.zones[0]?window.zones[0].id:'front';
    if(window.fbSaveZones) window.fbSaveZones();
    if(window.fbSaveTasks) window.fbSaveTasks();
    renderZoneMgrList();renderZoneSeg();renderToday();
    if(window.curTab==='tasks') renderTasks();
  });
}

// ─── LIGHTBOX ───
function openLB(tid,idx){const t=window.tasks.find(x=>x.id===tid);if(!t||!t.photos.length)return;lbPhotos=t.photos;lbIdx=idx;showLB();}
function openLBArr(hi,pi){if(!window.hist[hi])return;lbPhotos=window.hist[hi].photos;lbIdx=pi;showLB();}
function showLB(){
  document.getElementById('lbImg').src=lbPhotos[lbIdx];
  document.getElementById('lbInfo').textContent=`รูปที่ ${lbIdx+1} / ${lbPhotos.length}`;
  document.getElementById('lbNav').innerHTML=lbPhotos.length>1
    ?`<button class="lb-btn" onclick="lbMv(-1)">‹ ก่อนหน้า</button><button class="lb-btn" onclick="lbMv(1)">ถัดไป ›</button>`:'';
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

// ─── EXPOSE ALL FUNCTIONS TO WINDOW (required for Next.js + inline onclick + module scope) ───
window.goTab=goTab;
window.toggleTheme=toggleTheme;
window.renderToday=renderToday;
window.renderTasks=renderTasks;
window.renderStaff=renderStaff;
window.renderHist=renderHist;
window.renderZoneSeg=renderZoneSeg;
window.setTodayView=setTodayView;
window.setTaskView=setTaskView;
window.setAlertZone=setAlertZone;
window.setAlertFreq=setAlertFreq;
window.openCI=openCI;
window.ciNext=ciNext;
window.ciPrev=ciPrev;
window.ciPickStaff=ciPickStaff;
window.ciToggle=ciToggle;
window.ciAddPh=ciAddPh;
window.ciDelPh=ciDelPh;
window.openAddModal=openAddModal;
window.openEditModal=openEditModal;
window.filterTpl=filterTpl;
window.selectTpl=selectTpl;
window.addFromTemplate=addFromTemplate;
window.saveTask=saveTask;
window.doDeleteTask=doDeleteTask;
window.confirmDelTask=confirmDelTask;
window.eSetShift=eSetShift;
window.eSetZone=eSetZone;
window.eDelPhoto=eDelPhoto;
window.eAddPhotos=eAddPhotos;
window.undoTask=undoTask;
window.openStaffEdit=openStaffEdit;
window.saveStaff=saveStaff;
window.doDeleteStaff=doDeleteStaff;
window.doDeleteStaffById=doDeleteStaffById;
window.pickEmo=pickEmo;
window.openZoneMgr=openZoneMgr;
window.openZoneEdit=openZoneEdit;
window.saveZone=saveZone;
window.deleteZone=deleteZone;
window.pickZoneColor=pickZoneColor;
window.openLB=openLB;
window.openLBArr=openLBArr;
window.lbMv=lbMv;
window.closeLB=closeLB;
window.closeModal=closeModal;
window.ovlClick=ovlClick;
window.setHistFilter=setHistFilter;
window.shiftHist=shiftHist;
window.setAutoDel=setAutoDel;
window.showToast=showToast;

init();
