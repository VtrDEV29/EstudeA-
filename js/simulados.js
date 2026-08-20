/* ==========================================================================
   EstudeAI — Catálogo de simulados (estudeai-simulados.html)
   Depende de js/common.js.
   ========================================================================== */

function applyVestibularFilter(){
  const user = getUser();
  const vestibular = user && user.vestibular;

  if(!vestibular || vestibular === 'ENEM' || vestibular === 'Ainda não sei') return;

  const grid = document.getElementById('exam-grid');
  const matchCard = grid.querySelector(`.exam-card[data-vestibular="${vestibular}"]`);
  if(matchCard) grid.prepend(matchCard);

  const notice = document.getElementById('vestibular-notice');
  notice.style.display = 'block';
  notice.innerHTML = `Você escolheu <b>${vestibular}</b> no cadastro. Os simulados de ${vestibular} ainda estão em produção — assim que lançarmos, aparecem aqui primeiro. Enquanto isso, pratique com as questões reais do ENEM abaixo.`;
}
applyVestibularFilter();

const SIM1_PASS_SCORE = 3;
let sim1Score = null;
let sim1Total = 5;
try {
  sim1Score = localStorage.getItem('estudeai_sim1_score');
  sim1Total = Number(localStorage.getItem('estudeai_sim1_total') || 5);
} catch(e){}

if(sim1Score !== null){
  const note = document.getElementById('sim1-score-note');
  note.textContent = `Sua pontuação: ${sim1Score}/${sim1Total}`;

  if(Number(sim1Score) >= SIM1_PASS_SCORE){
    document.getElementById('sim2-badge').textContent = 'Questões reais';
    document.getElementById('sim2-badge').classList.remove('soon');

    const btn = document.getElementById('sim2-btn');
    btn.removeAttribute('disabled');
    btn.textContent = 'Iniciar simulado';
    btn.outerHTML = `<a href="estudeai-simulado-quiz-2.html" class="btn btn-solid">Iniciar simulado</a>`;

    document.getElementById('sim2-lock-note').remove();
  }
}
