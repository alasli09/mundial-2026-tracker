
const SUPABASE_URL = 'https://0ec90b57d6e95fcbda19832f.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJib2x0IiwicmVmIjoiMGVjOTBiNTdkNmU5NWZjYmRhMTk4MzJmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg4ODE1NzQsImV4cCI6MTc1ODg4MTU3NH0.9I8-U0x86Ak8t2DGaIk0HfvTSLsAyzdnz-Nw00mMkKw';

const flags = {
  'México':'🇲🇽','Sudáfrica':'🇿🇦','Corea del Sur':'🇰🇷','Chequia':'🇨🇿',
  'Canadá':'🇨🇦','Bosnia y Herzegovina':'🇧🇦','Qatar':'🇶🇦','Suiza':'🇨🇭',
  'Brasil':'🇧🇷','Marruecos':'🇲🇦','Haití':'🇭🇹','Escocia':'🏴󠁧󠁢󠁳󠁣󠁴󠁿',
  'Estados Unidos':'🇺🇸','Paraguay':'🇵🇾','Australia':'🇦🇺','Turquía':'🇹🇷',
  'Alemania':'🇩🇪','Curazao':'🇨🇼','Costa de Marfil':'🇨🇮','Ecuador':'🇪🇨',
  'Países Bajos':'🇳🇱','Japón':'🇯🇵','Suecia':'🇸🇪','Túnez':'🇹🇳',
  'Bélgica':'🇧🇪','Egipto':'🇪🇬','Irán':'🇮🇷','Nueva Zelanda':'🇳🇿',
  'España':'🇪🇸','Cabo Verde':'🇨🇻','Arabia Saudita':'🇸🇦','Uruguay':'🇺🇾',
  'Francia':'🇫🇷','Senegal':'🇸🇳','Irak':'🇮🇶','Noruega':'🇳🇴',
  'Argentina':'🇦🇷','Argelia':'🇩🇿','Austria':'🇦🇹','Jordania':'🇯🇴',
  'Portugal':'🇵🇹','RD Congo':'🇨🇩','Uzbekistán':'🇺🇿','Colombia':'🇨🇴',
  'Inglaterra':'🏴󠁧󠁢󠁥󠁮󠁧󠁿','Croacia':'🇭🇷','Ghana':'🇬🇭','Panamá':'🇵🇦'
};

function teamName(name){
  const f = flags[name];
  return f ? `${name} <span class="flag">${f}</span>` : name;
}

const groups = {
  A: ["México","Sudáfrica","Corea del Sur","Chequia"],
  B: ["Canadá","Bosnia y Herzegovina","Qatar","Suiza"],
  C: ["Brasil","Marruecos","Haití","Escocia"],
  D: ["Estados Unidos","Paraguay","Australia","Turquía"],
  E: ["Alemania","Curazao","Costa de Marfil","Ecuador"],
  F: ["Países Bajos","Japón","Suecia","Túnez"],
  G: ["Bélgica","Egipto","Irán","Nueva Zelanda"],
  H: ["España","Cabo Verde","Arabia Saudita","Uruguay"],
  I: ["Francia","Senegal","Irak","Noruega"],
  J: ["Argentina","Argelia","Austria","Jordania"],
  K: ["Portugal","RD Congo","Uzbekistán","Colombia"],
  L: ["Inglaterra","Croacia","Ghana","Panamá"]
};

const fixtureMeta = {
  A:[["2026-06-11","20:00"],["2026-06-11","21:00"],["2026-06-18","11:00"],["2026-06-18","20:00"],["2026-06-24","20:00"],["2026-06-24","20:00"]],
  B:[["2026-06-12","14:00"],["2026-06-13","14:00"],["2026-06-18","14:00"],["2026-06-18","17:00"],["2026-06-24","14:00"],["2026-06-24","14:00"]],
  C:[["2026-06-13","17:00"],["2026-06-13","20:00"],["2026-06-19","17:00"],["2026-06-19","20:00"],["2026-06-24","17:00"],["2026-06-24","17:00"]],
  D:[["2026-06-12","20:00"],["2026-06-13","23:00"],["2026-06-19","23:00"],["2026-06-19","14:00"],["2026-06-25","21:00"],["2026-06-25","21:00"]],
  E:[["2026-06-14","12:00"],["2026-06-14","18:00"],["2026-06-20","15:00"],["2026-06-20","19:00"],["2026-06-25","15:00"],["2026-06-25","15:00"]],
  F:[["2026-06-14","15:00"],["2026-06-14","21:00"],["2026-06-20","12:00"],["2026-06-20","23:00"],["2026-06-25","18:00"],["2026-06-25","18:00"]],
  G:[["2026-06-15","20:00"],["2026-06-15","14:00"],["2026-06-21","14:00"],["2026-06-21","20:00"],["2026-06-26","22:00"],["2026-06-26","22:00"]],
  H:[["2026-06-15","11:00"],["2026-06-15","17:00"],["2026-06-21","11:00"],["2026-06-21","17:00"],["2026-06-26","19:00"],["2026-06-26","19:00"]],
  I:[["2026-06-16","14:00"],["2026-06-16","17:00"],["2026-06-22","16:00"],["2026-06-22","19:00"],["2026-06-26","14:00"],["2026-06-26","14:00"]],
  J:[["2026-06-16","20:00"],["2026-06-16","23:00"],["2026-06-22","12:00"],["2026-06-22","22:00"],["2026-06-27","21:00"],["2026-06-27","21:00"]],
  K:[["2026-06-17","12:00"],["2026-06-17","21:00"],["2026-06-23","12:00"],["2026-06-23","21:00"],["2026-06-27","18:30"],["2026-06-27","18:30"]],
  L:[["2026-06-17","15:00"],["2026-06-17","18:00"],["2026-06-23","15:00"],["2026-06-23","18:00"],["2026-06-27","16:00"],["2026-06-27","16:00"]]
};

const fixtures = {
  A:[["México","Sudáfrica"],["Corea del Sur","Chequia"],["Chequia","Sudáfrica"],["México","Corea del Sur"],["Chequia","México"],["Sudáfrica","Corea del Sur"]],
  B:[["Canadá","Bosnia y Herzegovina"],["Qatar","Suiza"],["Suiza","Bosnia y Herzegovina"],["Canadá","Qatar"],["Suiza","Canadá"],["Bosnia y Herzegovina","Qatar"]],
  C:[["Brasil","Marruecos"],["Haití","Escocia"],["Escocia","Marruecos"],["Brasil","Haití"],["Escocia","Brasil"],["Marruecos","Haití"]],
  D:[["Estados Unidos","Paraguay"],["Australia","Turquía"],["Turquía","Paraguay"],["Estados Unidos","Australia"],["Turquía","Estados Unidos"],["Paraguay","Australia"]],
  E:[["Alemania","Curazao"],["Costa de Marfil","Ecuador"],["Alemania","Costa de Marfil"],["Ecuador","Curazao"],["Ecuador","Alemania"],["Curazao","Costa de Marfil"]],
  F:[["Países Bajos","Japón"],["Suecia","Túnez"],["Países Bajos","Suecia"],["Túnez","Japón"],["Japón","Suecia"],["Túnez","Países Bajos"]],
  G:[["Irán","Nueva Zelanda"],["Bélgica","Egipto"],["Bélgica","Irán"],["Nueva Zelanda","Egipto"],["Egipto","Irán"],["Nueva Zelanda","Bélgica"]],
  H:[["España","Cabo Verde"],["Arabia Saudita","Uruguay"],["España","Arabia Saudita"],["Uruguay","Cabo Verde"],["Cabo Verde","Arabia Saudita"],["Uruguay","España"]],
  I:[["Francia","Senegal"],["Irak","Noruega"],["Francia","Irak"],["Noruega","Senegal"],["Noruega","Francia"],["Senegal","Irak"]],
  J:[["Argentina","Argelia"],["Austria","Jordania"],["Argentina","Austria"],["Jordania","Argelia"],["Argelia","Austria"],["Jordania","Argentina"]],
  K:[["Portugal","RD Congo"],["Uzbekistán","Colombia"],["Portugal","Uzbekistán"],["Colombia","RD Congo"],["Colombia","Portugal"],["RD Congo","Uzbekistán"]],
  L:[["Inglaterra","Croacia"],["Ghana","Panamá"],["Inglaterra","Ghana"],["Panamá","Croacia"],["Panamá","Inglaterra"],["Croacia","Ghana"]]
};

const state = {
  scores: {},
  knockout: { r32:{}, r16:{}, qf:{}, sf:{}, final:{} },
  simulated: {},
  viewMode: 'groups',
  zoom: 1
};

const statusEl = document.getElementById('status');
let saveTimeout = null;

function setStatus(t){ statusEl.textContent = t; }
function matchKey(g, i){ return `${g}-${i}`; }
function isColombia(t){ return t === 'Colombia'; }
function fmtDate(d){ const dt = new Date(d+'T00:00:00'); return dt.toLocaleDateString('es-CO',{day:'2-digit',month:'short'}); }

function randScore(){
  return { home: String(Math.floor(Math.random()*4)), away: String(Math.floor(Math.random()*4)) };
}

function simulateRemaining(){
  Object.entries(fixtures).forEach(([g, list]) => {
    list.forEach((_, i) => {
      const key = matchKey(g, i);
      const s = state.scores[key];
      if(s.home === '' && s.away === ''){
        state.scores[key] = randScore();
        state.simulated[key] = true;
      }
    });
  });
  scheduleSave();
  rerender();
  setStatus('Simulación aplicada a partidos pendientes.');
}

function clearSimulated(){
  Object.keys(state.simulated).forEach(key => {
    if(state.simulated[key]){
      state.scores[key] = { home:'', away:'' };
    }
  });
  state.simulated = {};
  scheduleSave();
  rerender();
  setStatus('Simulación limpiada.');
}

function ensureState(){
  Object.entries(fixtures).forEach(([g, list]) => {
    list.forEach((_,i) => {
      if(!state.scores[matchKey(g,i)]) state.scores[matchKey(g,i)] = {home:'', away:''};
    });
  });
  ['r32','r16','qf','sf','final'].forEach(round => {
    const n = {r32:16,r16:8,qf:4,sf:2,final:1}[round];
    for(let i=0;i<n;i++){
      if(!state.knockout[round][i]) state.knockout[round][i] = {home:'',away:'',homePen:'',awayPen:''};
    }
  });
}

function basicStats(group){
  const rows = groups[group].map(team => ({team,pj:0,g:0,e:0,p:0,gf:0,gc:0,dif:0,pts:0}));
  const map = Object.fromEntries(rows.map(r=>[r.team,r]));
  fixtures[group].forEach((m,i)=>{
    const s = state.scores[matchKey(group,i)];
    if(s.home===''||s.away==='') return;
    const [hTeam,aTeam]=m; const h=Number(s.home), a=Number(s.away);
    const H=map[hTeam], A=map[aTeam];
    H.pj++;A.pj++;H.gf+=h;H.gc+=a;A.gf+=a;A.gc+=h;
    if(h>a){H.g++;H.pts+=3;A.p++;}
    else if(h<a){A.g++;A.pts+=3;H.p++;}
    else {H.e++;A.e++;H.pts++;A.pts++;}
  });
  rows.forEach(r=>r.dif=r.gf-r.gc);
  return rows;
}

function headToHeadMiniTable(group, tiedTeams){
  const mini = tiedTeams.map(team => ({team, pts:0, dif:0, gf:0}));
  const map = Object.fromEntries(mini.map(r=>[r.team,r]));
  fixtures[group].forEach((m,i)=>{
    const [hTeam,aTeam] = m;
    if(!map[hTeam] || !map[aTeam]) return;
    const s = state.scores[matchKey(group,i)];
    if(s.home===''||s.away==='') return;
    const h=Number(s.home), a=Number(s.away);
    const H=map[hTeam], A=map[aTeam];
    H.gf+=h; H.dif+=h-a; A.gf+=a; A.dif+=a-h;
    if(h>a){ H.pts+=3; } else if(h<a){ A.pts+=3; } else { H.pts+=1; A.pts+=1; }
  });
  return mini;
}

function fifaSortGroup(group){
  const rows = basicStats(group);
  rows.sort((a,b)=>b.pts-a.pts || a.team.localeCompare(b.team));
  let i=0;
  while(i<rows.length){
    let j=i+1;
    while(j<rows.length && rows[j].pts===rows[i].pts) j++;
    if(j-i>1){
      const tied = rows.slice(i,j).map(r=>r.team);
      const mini = headToHeadMiniTable(group, tied);
      const miniMap = Object.fromEntries(mini.map(m=>[m.team,m]));
      rows.slice(i,j).sort((a,b)=>
        (miniMap[b.team].pts-miniMap[a.team].pts) ||
        (miniMap[b.team].dif-miniMap[a.team].dif) ||
        (miniMap[b.team].gf-miniMap[a.team].gf) ||
        (b.dif-a.dif)||(b.gf-a.gf)||a.team.localeCompare(b.team)
      ).forEach((r,idx)=> rows[i+idx]=r);
    }
    i=j;
  }
  return rows.map((r, idx)=>({...r, pos: idx+1}));
}

function allMatchesChronological(){
  const out = [];
  Object.keys(fixtures).forEach(g=>{
    fixtures[g].forEach((m,i)=>{
      out.push({group:g,index:i,home:m[0],away:m[1],date:fixtureMeta[g][i][0],time:fixtureMeta[g][i][1]});
    });
  });
  out.sort((a,b)=>(a.date+a.time).localeCompare(b.date+b.time));
  return out;
}

function computeClassification(){
  const all = [];
  Object.keys(groups).forEach(g => fifaSortGroup(g).forEach(r => all.push({...r, group:g})));
  const bestThird = all.filter(r=>r.pos===3)
    .sort((a,b)=>b.pts-a.pts||b.dif-a.dif||b.gf-a.gf||a.team.localeCompare(b.team))
    .slice(0,8).map(r=>r.team);
  return { all, bestThird };
}

function renderGroups(){
  const root = document.getElementById('view-grupos');
  const chronological = state.viewMode === 'chrono';
  root.innerHTML = `
    <div class="toolbar">
      <div class="toolbar-left">
        <button class="toggle-btn ${!chronological?'active':''}" data-mode="groups">Ver por grupos</button>
        <button class="toggle-btn ${chronological?'active':''}" data-mode="chrono">Ver cronológico</button>
      </div>
      <div class="toolbar-right">
        <button id="simulateBtn" class="btn sim-btn">Simular pendientes</button>
        <button id="clearSimBtn" class="btn secondary">Limpiar simulación</button>
      </div>
    </div>
    <div id="groupsContainer"></div>`;

  root.querySelectorAll('.toggle-btn').forEach(btn => btn.addEventListener('click', ()=>{
    state.viewMode = btn.dataset.mode; scheduleSave(); renderGroups();
  }));
  root.querySelector('#simulateBtn').addEventListener('click', simulateRemaining);
  root.querySelector('#clearSimBtn').addEventListener('click', clearSimulated);

  const container = root.querySelector('#groupsContainer');

  if(!chronological){
    container.innerHTML = '<div class="group-grid"></div>';
    const grid = container.firstElementChild;
    Object.keys(groups).forEach(g => {
      const table = fifaSortGroup(g);
      const card = document.createElement('article');
      card.className='group-card';
      card.innerHTML = `
        <div class="group-head"><h3>Grupo ${g}</h3><span class="small">Criterio FIFA 2026</span></div>
        <div class="table-wrap">
          <h4>Partidos</h4>
          <table><thead><tr><th>Fecha</th><th>Local</th><th>GL</th><th>GV</th><th>Visitante</th></tr></thead><tbody>
          ${fixtures[g].map((m,i)=>{
            const s=state.scores[matchKey(g,i)];
            const rowCls=(isColombia(m[0])||isColombia(m[1]))?'colombia':'';
            const simCls=state.simulated[matchKey(g,i)]?' simulated':'';
            return `<tr class="${rowCls}${simCls}"><td>${fmtDate(fixtureMeta[g][i][0])} ${fixtureMeta[g][i][1]}</td><td class="team-col">${teamName(m[0])}</td><td><input class="input-score" type="number" min="0" value="${s.home}" data-group="${g}" data-index="${i}" data-side="home"></td><td><input class="input-score" type="number" min="0" value="${s.away}" data-group="${g}" data-index="${i}" data-side="away"></td><td class="team-col">${teamName(m[1])}</td></tr>`;
          }).join('')}</tbody></table>
        </div>
        <div class="table-wrap">
          <h4>Posiciones</h4>
          <table><thead><tr><th>#</th><th>Equipo</th><th>PTS</th><th>DIF</th><th>GF</th><th>PJ</th></tr></thead><tbody>
          ${table.map(t=>`<tr class="${isColombia(t.team)?'colombia':''}"><td>${t.pos}</td><td class="team-col">${teamName(t.team)}</td><td>${t.pts}</td><td>${t.dif}</td><td>${t.gf}</td><td>${t.pj}</td></tr>`).join('')}</tbody></table>
        </div>`;
      grid.appendChild(card);
    });
  } else {
    const list = allMatchesChronological();
    container.innerHTML = '<div class="match-list"></div>';
    const listEl = container.firstElementChild;
    list.forEach(item => {
      const s = state.scores[matchKey(item.group,item.index)];
      const card = document.createElement('article');
      card.className='match-card';
      const rowCls = (isColombia(item.home)||isColombia(item.away)) ? 'colombia' : '';
      const simCls = state.simulated[matchKey(item.group,item.index)] ? ' simulated' : '';
      card.innerHTML = `
        <div class="match-body ${rowCls}${simCls}">
          <div class="meta"><span>Grupo ${item.group}</span><span>${fmtDate(item.date)}</span><span>${item.time}</span></div>
          <div class="match-row">
            <div class="team-col">${teamName(item.home)}</div>
            <input class="input-score" type="number" min="0" value="${s.home}" data-group="${item.group}" data-index="${item.index}" data-side="home">
            <input class="input-score" type="number" min="0" value="${s.away}" data-group="${item.group}" data-index="${item.index}" data-side="away">
            <div class="team-col">${teamName(item.away)}</div>
          </div>
        </div>`;
      listEl.appendChild(card);
    });
  }

  root.querySelectorAll('.input-score').forEach(input=>input.addEventListener('input', e=>{
    const {group,index,side}=e.target.dataset;
    const key = matchKey(group,index);
    state.scores[key][side]=e.target.value;
    delete state.simulated[key];
    scheduleSave();
    rerender();
  }));
}

function renderClassification(){
  const root = document.getElementById('view-clasificacion');
  const { all, bestThird } = computeClassification();
  const ordered = [...all].sort((a,b)=>b.pts-a.pts||b.dif-a.dif||b.gf-a.gf||a.group.localeCompare(b.group)||a.pos-b.pos);
  root.innerHTML = `
    <div class="panel">
      <h2>Clasificación general</h2>
      <div class="legend">
        <span class="chip pos-1">1° de grupo</span>
        <span class="chip pos-2">2° de grupo</span>
        <span class="chip pos-3">3° de grupo</span>
        <span class="chip best-third">Mejor 3° que clasifica</span>
      </div>
      <table>
        <thead><tr><th>Grp</th><th>Pos</th><th>Equipo</th><th>PTS</th><th>DIF</th><th>GF</th><th>PJ</th></tr></thead>
        <tbody>
          ${ordered.map(r=>{
            const cls=[r.pos===1?'pos-1':'',r.pos===2?'pos-2':'',r.pos===3?'pos-3':'',(r.pos===3&&bestThird.includes(r.team))?'best-third':'',isColombia(r.team)?'colombia':''].join(' ');
            return `<tr class="${cls}"><td>${r.group}</td><td>${r.pos}</td><td class="team-col">${teamName(r.team)}</td><td>${r.pts}</td><td>${r.dif}</td><td>${r.gf}</td><td>${r.pj}</td></tr>`;
          }).join('')}
        </tbody>
      </table>
    </div>`;
}

function buildQualifiedTeams(){
  const byGroup = {};
  Object.keys(groups).forEach(g => byGroup[g] = fifaSortGroup(g));
  const { bestThird } = computeClassification();
  return {
    first:  Object.fromEntries(Object.keys(byGroup).map(g=>[g,byGroup[g][0]?.team||`1${g}`])),
    second: Object.fromEntries(Object.keys(byGroup).map(g=>[g,byGroup[g][1]?.team||`2${g}`])),
    bestThird
  };
}

function roundWinner(round, i, home, away){
  const s = state.knockout[round][i] || {home:'',away:'',homePen:'',awayPen:''};
  if(s.home===''||s.away==='') return '';
  const h=Number(s.home), a=Number(s.away);
  if(h>a) return home;
  if(a>h) return away;
  if(s.homePen===''||s.awayPen==='') return '';
  return Number(s.homePen) > Number(s.awayPen) ? home : away;
}

function renderMatchBox(title, round, i, home, away){
  const s = state.knockout[round][i] || {home:'',away:'',homePen:'',awayPen:''};
  const winner = roundWinner(round,i,home,away);
  return `
    <div class="bracket-match">
      <h4>${title}</h4>
      <div class="team-slot"><span class="name">${teamName(home)}</span><span class="score-pair"><input class="input-score ko-score" type="number" min="0" value="${s.home}" data-round="${round}" data-index="${i}" data-side="home"><input class="penalty-score ko-score" type="number" min="0" value="${s.homePen}" data-round="${round}" data-index="${i}" data-side="homePen" placeholder="P"></span></div>
      <div class="team-slot"><span class="name">${teamName(away)}</span><span class="score-pair"><input class="input-score ko-score" type="number" min="0" value="${s.away}" data-round="${round}" data-index="${i}" data-side="away"><input class="penalty-score ko-score" type="number" min="0" value="${s.awayPen}" data-round="${round}" data-index="${i}" data-side="awayPen" placeholder="P"></span></div>
      <div class="winner-line">Ganador: <strong>${winner ? teamName(winner) : 'Por definir'}</strong></div>
    </div>`;
}

function renderBracket(){
  const root = document.getElementById('view-bracket');
  const q = buildQualifiedTeams();
  const r32 = [
    [q.first.A, q.second.B],[q.first.C, q.second.D],[q.first.E, q.second.F],[q.first.G, q.second.H],
    [q.first.I, q.second.J],[q.first.K, q.second.L],[q.first.B, q.second.A],[q.first.D, q.second.C],
    [q.first.F, q.second.E],[q.first.H, q.second.G],[q.first.J, q.second.I],[q.first.L, q.second.K],
    [q.bestThird[0]||'3° mejor 1', q.bestThird[1]||'3° mejor 2'],
    [q.bestThird[2]||'3° mejor 3', q.bestThird[3]||'3° mejor 4'],
    [q.bestThird[4]||'3° mejor 5', q.bestThird[5]||'3° mejor 6'],
    [q.bestThird[6]||'3° mejor 7', q.bestThird[7]||'3° mejor 8']
  ];
  const r16 = Array.from({length:8}, (_,i)=>[
    roundWinner('r32',i*2,r32[i*2][0],r32[i*2][1]) || `Ganador R32 ${i*2+1}`,
    roundWinner('r32',i*2+1,r32[i*2+1][0],r32[i*2+1][1]) || `Ganador R32 ${i*2+2}`
  ]);
  const qf = Array.from({length:4}, (_,i)=>[
    roundWinner('r16',i*2,r16[i*2][0],r16[i*2][1]) || `Ganador R16 ${i*2+1}`,
    roundWinner('r16',i*2+1,r16[i*2+1][0],r16[i*2+1][1]) || `Ganador R16 ${i*2+2}`
  ]);
  const sf = Array.from({length:2}, (_,i)=>[
    roundWinner('qf',i*2,qf[i*2][0],qf[i*2][1]) || `Ganador QF ${i*2+1}`,
    roundWinner('qf',i*2+1,qf[i*2+1][0],qf[i*2+1][1]) || `Ganador QF ${i*2+2}`
  ]);
  const final = [[
    roundWinner('sf',0,sf[0][0],sf[0][1]) || 'Ganador SF1',
    roundWinner('sf',1,sf[1][0],sf[1][1]) || 'Ganador SF2'
  ]];
  const champion = roundWinner('final',0,final[0][0],final[0][1]);
  const zoomPct = Math.round(state.zoom * 100);

  root.innerHTML = `
    <div class="bracket-toolbar">
      <div>
        <h2>Bracket</h2>
        <p class="small">Clasificados automáticos desde grupos. Llena penales si hay empate en fase eliminatoria.</p>
      </div>
      <div class="zoom-controls">
        <button id="zoomOut" class="btn secondary zoom-btn">−</button>
        <input id="zoomSlider" type="range" min="40" max="150" step="5" value="${zoomPct}" class="zoom-slider" aria-label="Zoom del bracket">
        <span id="zoomLabel" class="zoom-label">${zoomPct}%</span>
        <button id="zoomIn" class="btn secondary zoom-btn">+</button>
        <button id="zoomReset" class="btn secondary">Reset</button>
      </div>
    </div>
    <div class="bracket-stage">
      <div id="bracketCanvas" class="bracket-canvas" style="transform:scale(${state.zoom})">
        <div class="bracket-grid">
          <div class="round-col"><div class="round-title">Ronda de 32</div>${r32.map((m,i)=>renderMatchBox(`R32 ${i+1}`,'r32',i,m[0],m[1])).join('')}</div>
          <div class="round-col"><div class="round-title">Octavos</div>${r16.map((m,i)=>renderMatchBox(`Octavos ${i+1}`,'r16',i,m[0],m[1])).join('')}</div>
          <div class="round-col"><div class="round-title">Cuartos</div>${qf.map((m,i)=>renderMatchBox(`Cuartos ${i+1}`,'qf',i,m[0],m[1])).join('')}</div>
          <div class="round-col"><div class="round-title">Semifinales</div>${sf.map((m,i)=>renderMatchBox(`Semifinal ${i+1}`,'sf',i,m[0],m[1])).join('')}</div>
          <div class="round-col"><div class="round-title">Final</div><div class="final-box">${renderMatchBox('Final','final',0,final[0][0],final[0][1])}<div class="winner-line champion">Campeón: ${champion ? teamName(champion) : 'Por definir'}</div></div></div>
        </div>
      </div>
    </div>`;

  root.querySelectorAll('.ko-score').forEach(input=>input.addEventListener('input', e=>{
    const {round,index,side}=e.target.dataset;
    state.knockout[round][index][side]=e.target.value;
    scheduleSave();
    rerender();
  }));

  function applyZoom(val){
    state.zoom = val;
    const canvas = document.getElementById('bracketCanvas');
    if(canvas) canvas.style.transform = `scale(${val})`;
    const label = document.getElementById('zoomLabel');
    if(label) label.textContent = `${Math.round(val*100)}%`;
    const slider = document.getElementById('zoomSlider');
    if(slider) slider.value = Math.round(val*100);
    scheduleSave();
  }

  document.getElementById('zoomIn').onclick = ()=> applyZoom(Math.min(1.5, +(state.zoom+0.1).toFixed(2)));
  document.getElementById('zoomOut').onclick = ()=> applyZoom(Math.max(0.4, +(state.zoom-0.1).toFixed(2)));
  document.getElementById('zoomReset').onclick = ()=> applyZoom(1);
  document.getElementById('zoomSlider').oninput = e => applyZoom(Number(e.target.value)/100);
}

function rerender(){ renderGroups(); renderClassification(); renderBracket(); }

async function saveState(){
  try {
    const payload = {
      id: 'default',
      scores: state.scores,
      knockout: state.knockout,
      simulated: state.simulated,
      view_mode: state.viewMode,
      zoom: state.zoom,
      updated_at: new Date().toISOString()
    };
    const res = await fetch(`${SUPABASE_URL}/rest/v1/mundial_state`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
        'Prefer': 'resolution=merge-duplicates'
      },
      body: JSON.stringify(payload)
    });
    if(res.ok) setStatus('Guardado automaticamente.');
    else setStatus('Error al guardar.');
  } catch(e){
    setStatus('Error al guardar.');
  }
}

function scheduleSave(){
  if(saveTimeout) clearTimeout(saveTimeout);
  saveTimeout = setTimeout(saveState, 800);
}

async function loadState(){
  try {
    setStatus('Cargando...');
    const res = await fetch(`${SUPABASE_URL}/rest/v1/mundial_state?id=eq.default&select=*`, {
      headers: { 'apikey': SUPABASE_ANON_KEY, 'Authorization': `Bearer ${SUPABASE_ANON_KEY}` }
    });
    const data = await res.json();
    if(data && data[0]){
      const row = data[0];
      if(row.scores && Object.keys(row.scores).length) state.scores = row.scores;
      if(row.knockout && Object.keys(row.knockout).length) state.knockout = row.knockout;
      if(row.simulated) state.simulated = row.simulated;
      if(row.view_mode) state.viewMode = row.view_mode;
      if(row.zoom) state.zoom = row.zoom;
    }
    setStatus('Listo.');
  } catch(e){
    setStatus('Error al cargar. Trabajando sin conexión.');
  }
}

function setupNav(){
  document.querySelectorAll('.nav-btn').forEach(btn=>btn.addEventListener('click',()=>{
    document.querySelectorAll('.nav-btn').forEach(b=>b.classList.remove('active'));
    document.querySelectorAll('.view').forEach(v=>v.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(`view-${btn.dataset.view}`).classList.add('active');
  }));
}

function setupTheme(){
  const root=document.documentElement;
  const toggle=document.getElementById('themeToggle');
  let mode=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';
  root.setAttribute('data-theme',mode);
  toggle.onclick=()=>{ mode=mode==='dark'?'light':'dark'; root.setAttribute('data-theme',mode); };
}

async function init(){
  ensureState();
  await loadState();
  ensureState();
  setupNav();
  setupTheme();
  rerender();
}

init();
