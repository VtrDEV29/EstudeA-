/* ==========================================================================
   EstudeAI — Atividade de trilha (estudeai-atividade.html)
   Depende de js/common.js e js/atividades-dados.js (ATIVIDADES).
   ========================================================================== */

const params = new URLSearchParams(window.location.search);
const id = params.get('id');
const atividade = ATIVIDADES[id];

if(!atividade){
  document.getElementById('quiz-view').style.display = 'none';
  document.getElementById('not-found-view').style.display = 'block';
} else {

document.getElementById('activity-eyebrow').textContent = `${atividade.materia} · ${atividade.ano}`;
document.getElementById('activity-title').textContent = atividade.modulo;
document.getElementById('q-area').textContent = atividade.materia;

const questions = atividade.questoes;
let current = 0;
const answers = {};

function renderDots(){
  const dots = document.getElementById('quiz-dots');
  dots.innerHTML = '';
  questions.forEach((q, i) => {
    const d = document.createElement('span');
    d.className = 'quiz-dot' + (answers[i] ? ' answered' : '') + (i === current ? ' current' : '');
    d.textContent = i + 1;
    dots.appendChild(d);
  });
}

function renderQuestion(){
  const q = questions[current];
  document.getElementById('q-position').textContent = `Questão ${current + 1} de ${questions.length}`;

  const ctx = document.getElementById('q-context');
  if(q.textoBase){
    ctx.style.display = 'block';
    ctx.textContent = q.textoBase;
  } else {
    ctx.style.display = 'none';
  }

  document.getElementById('q-enunciado').textContent = q.enunciado;

  const opts = document.getElementById('q-options');
  opts.innerHTML = '';
  q.alternativas.forEach(alt => {
    const row = document.createElement('div');
    row.className = 'option' + (answers[current] === alt.letra ? ' selected' : '');
    row.onclick = () => selectOption(alt.letra);
    row.innerHTML = `<span class="opt-letter">${alt.letra}</span><span class="opt-text">${alt.texto}</span>`;
    opts.appendChild(row);
  });

  document.getElementById('btn-prev').disabled = current === 0;
  document.getElementById('btn-next').textContent = current === questions.length - 1 ? 'Finalizar →' : 'Próxima →';

  renderDots();
}

function selectOption(letra){
  answers[current] = letra;
  renderQuestion();
}

function goPrev(){
  if(current > 0){ current--; renderQuestion(); }
}

function goNext(){
  if(current < questions.length - 1){ current++; renderQuestion(); }
  else { finishQuiz(); }
}

function marcarModuloConcluido(){
  try {
    const raw = localStorage.getItem('estudeai_modulos_concluidos');
    const concluidos = raw ? JSON.parse(raw) : [];
    if(!concluidos.includes(id)){
      concluidos.push(id);
      localStorage.setItem('estudeai_modulos_concluidos', JSON.stringify(concluidos));
    }
  } catch(e){}
}

function finishQuiz(){
  let score = 0;
  questions.forEach((q, i) => { if(answers[i] === q.correta) score++; });

  marcarModuloConcluido();
  logActivity({
    label: `Concluiu o módulo de ${atividade.modulo} — ${atividade.materia}`,
    correta: true
  });

  document.getElementById('quiz-view').style.display = 'none';
  document.getElementById('results-view').style.display = 'block';
  document.getElementById('score-num').textContent = score;
  document.getElementById('score-of').textContent = `/ ${questions.length}`;

  const list = document.getElementById('results-list');
  list.innerHTML = '';
  questions.forEach((q, i) => {
    const given = answers[i];
    const isCorrect = given === q.correta;
    const dotClass = !given ? '' : (isCorrect ? 'correct' : 'wrong');
    const row = document.createElement('div');
    row.className = 'result-row';
    row.innerHTML = `
      <span class="result-dot ${dotClass}"></span>
      <div>
        <div class="result-q">Questão ${i + 1}</div>
        <div class="result-detail">Sua resposta: <b>${given || '—'}</b> · Correta: <b>${q.correta}</b></div>
      </div>
    `;
    list.appendChild(row);
  });
}

function restartQuiz(){
  current = 0;
  Object.keys(answers).forEach(k => delete answers[k]);
  document.getElementById('results-view').style.display = 'none';
  document.getElementById('quiz-view').style.display = 'block';
  renderQuestion();
}

renderQuestion();

}
