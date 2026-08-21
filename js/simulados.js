/* ==========================================================================
   EstudeAI — Catálogo de simulados (estudeai-simulados.html)
   Depende de js/common.js.
   ========================================================================== */

function applyVestibularFilter(){
  const user = getUser();
  const vestibular = user && user.vestibular;

  if(!vestibular || vestibular === 'ENEM' || vestibular === 'Ainda não sei') return;

  const notice = document.getElementById('vestibular-notice');
  notice.style.display = 'block';
  notice.innerHTML = `Você escolheu <b>${vestibular}</b> no cadastro. Ainda não temos simulados específicos de ${vestibular} — por enquanto, os simulados reais disponíveis são do ENEM.`;
}
applyVestibularFilter();

function mostrarPontuacao(elId, scoreKey, totalKey, totalPadrao){
  let score = null;
  let total = totalPadrao;
  try {
    score = localStorage.getItem(scoreKey);
    total = Number(localStorage.getItem(totalKey) || totalPadrao);
  } catch(e){}

  if(score === null) return;

  const note = document.getElementById(elId);
  if(!note) return;
  note.textContent = `Sua pontuação: ${score}/${total}`;

  const passScore = Math.ceil(total / 2);
  if(Number(score) >= passScore) note.classList.add('unlocked');
}
mostrarPontuacao('sim1-score-note', 'estudeai_sim1_score', 'estudeai_sim1_total', 5);
mostrarPontuacao('sim2-score-note', 'estudeai_sim2_score', 'estudeai_sim2_total', 5);
