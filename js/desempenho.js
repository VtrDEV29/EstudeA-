/* ==========================================================================
   EstudeAI — Desempenho (estudeai-desempenho.html)
   Depende de js/common.js e js/curriculo.js (MATERIA_SLUG, ANO_NUM,
   getModulosConcluidos).
   ========================================================================== */

function renderSubjects(){
  const user = getUser();
  const ano = (user && user.ano) || '3º ano';
  const anoNum = ANO_NUM[ano] || '3';
  const concluidos = getModulosConcluidos();

  const container = document.getElementById('subjects-card');
  container.innerHTML = '';
  let totalConcluidos = 0;

  Object.keys(MATERIA_SLUG).forEach(materia => {
    const slug = MATERIA_SLUG[materia];
    const id = `${slug}-${anoNum}`;
    const concluido = concluidos.includes(id);
    if(concluido) totalConcluidos++;
    const pct = concluido ? 33 : 0;

    const row = document.createElement('div');
    row.className = 'subject-row';
    row.innerHTML = `
      <span class="sname">${materia}</span>
      <div class="sbar"><div class="sfill" style="width:${pct}%"></div></div>
      <span class="spct">${pct}%</span>
    `;
    container.appendChild(row);
  });

  document.getElementById('stat-modulos').textContent = `${totalConcluidos}/5`;
}

function renderSimulados(){
  const container = document.getElementById('sim-cards');
  container.innerHTML = '';

  let sim1Score = null, sim1Total = 10;
  let sim2Score = null, sim2Total = 5;
  try {
    sim1Score = localStorage.getItem('estudeai_sim1_score');
    sim1Total = Number(localStorage.getItem('estudeai_sim1_total') || 10);
    sim2Score = localStorage.getItem('estudeai_sim2_score');
    sim2Total = Number(localStorage.getItem('estudeai_sim2_total') || 5);
  } catch(e){}

  const sims = [
    { nome: 'ENEM 2019 — Humanas', area: 'Linguagens e Ciências Humanas', score: sim1Score, total: sim1Total, passScore: Math.ceil(sim1Total / 2), link: 'estudeai-simulado-quiz.html' },
    { nome: 'ENEM 2019 — Exatas', area: 'Ciências da Natureza e Matemática', score: sim2Score, total: sim2Total, passScore: Math.ceil(sim2Total / 2), link: 'estudeai-simulado-quiz-2.html' }
  ];

  let realizados = 0;
  let somaPct = 0;
  let comNota = 0;

  sims.forEach(sim => {
    const card = document.createElement('div');
    card.className = 'card sim-card';

    if(sim.score === null){
      card.innerHTML = `
        <div class="sim-card-head">
          <div>
            <h3>${sim.nome}</h3>
            <div class="sim-area">${sim.area}</div>
          </div>
          <span class="sim-status pending">Não feito</span>
        </div>
        <div class="sim-score">—</div>
        <div class="sim-pct">Você ainda não tentou esse simulado.</div>
        <a href="${sim.link}" class="btn btn-solid btn-sm">Iniciar simulado</a>
      `;
    } else {
      realizados++;
      const score = Number(sim.score);
      const pct = Math.round((score / sim.total) * 100);
      somaPct += pct;
      comNota++;
      const passou = sim.passScore !== null ? score >= sim.passScore : null;
      const statusClass = passou === null ? 'ok' : (passou ? 'ok' : 'warn');
      const statusText = passou === null ? 'Feito' : (passou ? 'Aprovado' : 'Abaixo do mínimo');

      card.innerHTML = `
        <div class="sim-card-head">
          <div>
            <h3>${sim.nome}</h3>
            <div class="sim-area">${sim.area}</div>
          </div>
          <span class="sim-status ${statusClass}">${statusText}</span>
        </div>
        <div class="sim-score">${score}<span class="of">/${sim.total}</span></div>
        <div class="sim-pct">${pct}% de acerto (melhor tentativa)</div>
        <a href="${sim.link}" class="btn btn-ghost btn-sm">Refazer</a>
      `;
    }

    container.appendChild(card);
  });

  document.getElementById('stat-simulados').textContent = `${realizados}/2`;
  document.getElementById('stat-simulados-sub').textContent = realizados === 0
    ? 'nenhum simulado feito ainda'
    : `${realizados} de 2 simulados disponíveis`;
  document.getElementById('stat-media').textContent = comNota > 0 ? `${Math.round(somaPct / comNota)}%` : '—';
}

renderSubjects();
renderSimulados();
