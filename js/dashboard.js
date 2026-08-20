/* ==========================================================================
   EstudeAI — Dashboard (estudeai-dashboard.html)
   Depende de js/common.js (toggleTheme, getUser) e js/curriculo.js
   (CURRICULO, ESTAGIO_POR_ANO).
   ========================================================================== */

function applyUserProfile(){
  const user = getUser();
  if(!user || !user.nome) return;

  const primeiroNome = user.nome.split(' ')[0];
  const inicial = user.nome.trim().charAt(0).toUpperCase();
  const ano = user.ano || '3º ano';
  const vestibular = user.vestibular || 'ENEM';
  const estagio = ESTAGIO_POR_ANO[ano] || 'Reta final';
  const primeiroModulo = (CURRICULO['Matemática'][ano] || CURRICULO['Matemática']['3º ano'])[0];

  const avatarEl = document.getElementById('profile-avatar');
  const nameEl = document.getElementById('profile-name');
  const metaEl = document.getElementById('profile-meta');
  const tagEl = document.getElementById('sidebar-logo-tag');
  const greetingEl = document.getElementById('dash-greeting');
  const countdownVestibularEl = document.getElementById('countdown-vestibular');
  const trilhaTitleEl = document.getElementById('trilha-card-title');
  const trilhaAnoEl = document.getElementById('trilha-tag-ano');
  const trilhaVestibularEl = document.getElementById('trilha-tag-vestibular');
  const trilhaModuloEl = document.getElementById('trilha-current-module');
  const trilhaDescEl = document.getElementById('trilha-current-desc');

  if(avatarEl) avatarEl.textContent = inicial;
  if(nameEl) nameEl.textContent = primeiroNome;
  if(metaEl) metaEl.textContent = `${ano} · ${vestibular}`;
  if(tagEl) tagEl.textContent = `${ano} · ${vestibular}`;
  if(greetingEl) greetingEl.textContent = `Olá, ${primeiroNome}!`;
  if(countdownVestibularEl) countdownVestibularEl.textContent = vestibular;
  if(trilhaTitleEl) trilhaTitleEl.textContent = `Sua trilha — ${estagio}`;
  if(trilhaAnoEl) trilhaAnoEl.textContent = ano;
  if(trilhaVestibularEl) trilhaVestibularEl.textContent = vestibular;
  if(trilhaModuloEl) trilhaModuloEl.textContent = primeiroModulo;
  if(trilhaDescEl) trilhaDescEl.textContent = `Você está na frente de Matemática. Comece pelo primeiro módulo da sua trilha do ${ano}.`;
}
applyUserProfile();

function tempoRelativo(ts){
  const diffMin = Math.floor((Date.now() - ts) / 60000);
  if(diffMin < 1) return 'agora mesmo';
  if(diffMin < 60) return `${diffMin} min atrás`;
  const diffH = Math.floor(diffMin / 60);
  if(diffH < 24) return `${diffH}h atrás`;
  const diffD = Math.floor(diffH / 24);
  if(diffD === 1) return 'ontem';
  return `${diffD} dias atrás`;
}

function calcularSequencia(log){
  if(log.length === 0) return 0;
  const dias = [...new Set(log.map(e => new Date(e.ts).toDateString()))].map(d => new Date(d)).sort((a, b) => b - a);
  let streak = 1;
  for(let i = 0; i < dias.length - 1; i++){
    const diffDias = Math.round((dias[i] - dias[i + 1]) / 86400000);
    if(diffDias === 1) streak++; else break;
  }
  return streak;
}

function renderDesempenho(){
  let log = [];
  let sim1Score = null, sim1Total = 5;
  let sim2Score = null, sim2Total = 4;
  try {
    log = JSON.parse(localStorage.getItem('estudeai_activity_log') || '[]');
    sim1Score = localStorage.getItem('estudeai_sim1_score');
    sim1Total = Number(localStorage.getItem('estudeai_sim1_total') || 5);
    sim2Score = localStorage.getItem('estudeai_sim2_score');
    sim2Total = Number(localStorage.getItem('estudeai_sim2_total') || 4);
  } catch(e){}

  const simuladosFeitos = (sim1Score !== null ? 1 : 0) + (sim2Score !== null ? 1 : 0);
  document.getElementById('stat-simulados-feitos').textContent = `${simuladosFeitos}/2`;

  const pcts = [];
  if(sim1Score !== null) pcts.push((Number(sim1Score) / sim1Total) * 100);
  if(sim2Score !== null) pcts.push((Number(sim2Score) / sim2Total) * 100);
  document.getElementById('stat-media-geral').textContent = pcts.length > 0
    ? `${Math.round(pcts.reduce((a, b) => a + b, 0) / pcts.length)}%`
    : '—';

  const streak = calcularSequencia(log);
  document.getElementById('stat-sequencia').textContent = streak > 0 ? `${streak} dia${streak > 1 ? 's' : ''}` : '—';

  if(log.length > 0){
    const list = document.getElementById('activity-list');
    list.innerHTML = '';
    log.slice(0, 4).forEach(entry => {
      const item = document.createElement('div');
      item.className = 'activity-item';
      item.innerHTML = `
        <div class="activity-dot${entry.correta ? '' : ' wrong'}"></div>
        <div>
          <div class="a-title">${entry.label}</div>
          <div class="a-time">${tempoRelativo(entry.ts)}</div>
        </div>
      `;
      list.appendChild(item);
    });
  }
}
renderDesempenho();

function nextEnemDate(){
  const now = new Date();
  let year = now.getFullYear();
  function firstSundayOfNovember(y){
    const d = new Date(y, 10, 1);
    const day = d.getDay();
    const offset = day === 0 ? 0 : (7 - day);
    return new Date(y, 10, 1 + offset, 13, 0, 0);
  }
  let target = firstSundayOfNovember(year);
  if(target < now){ target = firstSundayOfNovember(year + 1); }
  return target;
}
function updateCountdownPill(){
  const diff = Math.max(0, nextEnemDate() - new Date());
  const days = Math.floor(diff / (1000*60*60*24));
  document.getElementById('cd-days-pill').textContent = days;
}
updateCountdownPill();
setInterval(updateCountdownPill, 60000);
