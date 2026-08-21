/* ==========================================================================
   EstudeAI — ENEM 2019 · Exatas (estudeai-simulado-quiz-2.html)
   Ciências da Natureza e Matemática. Questões reais, extraídas da prova
   oficial aplicada pelo INEP, publicada em domínio público.
   Liberado junto com o Humanas (não há bloqueio entre os dois do mesmo ano).
   Depende de js/common.js (shuffle, logActivity, getUser).
   ========================================================================== */

const QUESTIONS_PER_ATTEMPT = 5;

const questionPool = [
  {
    area: 'Física',
    numero: 'Questão 117',
    textoBase: 'Slackline é um esporte no qual o atleta deve se equilibrar e executar manobras sobre uma fita esticada entre dois pontos fixos, a alguns centímetros do solo.',
    enunciado: 'Quando uma atleta de massa igual a 80 kg está exatamente no meio da fita, essa se desloca verticalmente, formando um ângulo de 10° com a horizontal em cada metade. Considerando g = 10 m/s², cos(10°) = 0,98 e sen(10°) = 0,17, qual é a força que a fita exerce em cada uma das extremidades fixas por causa da presença da atleta?',
    alternativas: [
      { letra: 'A', texto: '4,0 × 10² N' },
      { letra: 'B', texto: '4,1 × 10² N' },
      { letra: 'C', texto: '8,0 × 10² N' },
      { letra: 'D', texto: '2,4 × 10³ N' },
      { letra: 'E', texto: '4,7 × 10³ N' }
    ],
    correta: 'D'
  },
  {
    area: 'Química',
    numero: 'Questão 119',
    textoBase: 'Por muito tempo considerou-se que os gases nobres, por terem a camada de valência completa, não formariam compostos químicos. Em 1962, no entanto, foi realizada com sucesso a reação entre o xenônio e o hexafluoreto de platina, e desde então outros compostos de gases nobres vêm sendo sintetizados — entre os mais estáveis, o difluoreto de xenônio, no qual dois átomos de flúor se ligam covalentemente ao átomo de xenônio.',
    enunciado: 'Ao se escrever a fórmula de Lewis do difluoreto de xenônio, quantos elétrons estarão na camada de valência do átomo do gás nobre?',
    alternativas: [
      { letra: 'A', texto: '6' },
      { letra: 'B', texto: '8' },
      { letra: 'C', texto: '10' },
      { letra: 'D', texto: '12' },
      { letra: 'E', texto: '14' }
    ],
    correta: 'C'
  },
  {
    area: 'Biologia',
    numero: 'Questão 121',
    textoBase: 'A eritropoetina (EPO) é um hormônio secretado pelos rins que influencia a maturação dos eritrócitos (glóbulos vermelhos). Suas formas recombinantes, sintetizadas em laboratório, têm sido usadas por alguns atletas em esportes de resistência na busca por melhores resultados — uso proibido pelo Comitê Olímpico Internacional.',
    enunciado: 'Uma influência que esse doping pode exercer na melhoria da capacidade física desses atletas está relacionada ao transporte de',
    alternativas: [
      { letra: 'A', texto: 'lipídios, para aumento do gasto calórico.' },
      { letra: 'B', texto: 'ATP, para aumento da síntese hormonal.' },
      { letra: 'C', texto: 'oxigênio, para aumento da produção de ATP.' },
      { letra: 'D', texto: 'proteínas, para aumento da massa muscular.' },
      { letra: 'E', texto: 'vitamina C, para aumento da integridade dos vasos sanguíneos.' }
    ],
    correta: 'C'
  },
  {
    area: 'Matemática',
    numero: 'Questão 140',
    textoBase: 'A cor das flores da hortênsia (Hydrangea macrophylla) depende do pH do solo: em solos ácidos (pH < 7) as flores são azuis; em solos alcalinos (pH > 7) são rosadas. As hortênsias rosadas mais valorizadas comercialmente, em uma determinada região, são produzidas em solo com pH abaixo de 8.',
    enunciado: 'Sabendo que pH = –log₁₀x, em que x é a concentração de íons de hidrogênio (H⁺) no solo, para que as hortênsias sejam rosadas nessa região a concentração de íons de hidrogênio deve assumir',
    alternativas: [
      { letra: 'A', texto: 'qualquer valor acima de 10⁻⁸.' },
      { letra: 'B', texto: 'qualquer valor positivo abaixo de 10⁻⁷.' },
      { letra: 'C', texto: 'um valor entre 7 e 8.' },
      { letra: 'D', texto: 'um valor entre 70 e 80.' },
      { letra: 'E', texto: 'um valor entre 10⁻⁸ e 10⁻⁷.' }
    ],
    correta: 'A'
  },
  {
    area: 'Matemática',
    numero: 'Questão 137',
    textoBase: null,
    enunciado: 'Uma fábrica monta trens de brinquedo compostos por uma locomotiva e 12 vagões, cujas posições são fixas e numeradas de 1 a 12. Desses 12 vagões, 4 são vermelhos, 3 são azuis, 3 são verdes e 2 são amarelos. De quantas formas diferentes esses trens podem ser montados, considerando apenas as variações de cores entre as posições dos vagões?',
    alternativas: [
      { letra: 'A', texto: 'C(12,4) × C(8,3) × C(5,3) × C(2,2)' },
      { letra: 'B', texto: '12! / (4! × 3! × 3! × 2!)' },
      { letra: 'C', texto: 'C(12,4) + C(12,3) + C(12,3) + C(12,2)' },
      { letra: 'D', texto: '4! × 3! × 3! × 2!' },
      { letra: 'E', texto: 'C(12,12)' }
    ],
    correta: 'A'
  }
];

function pickQuestions(){
  return shuffle(questionPool).slice(0, QUESTIONS_PER_ATTEMPT);
}

let questions = pickQuestions();
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
  document.getElementById('q-area').textContent = q.area;

  const ctx = document.getElementById('q-context');
  if(q.textoBase){
    ctx.style.display = 'block';
    ctx.textContent = q.textoBase;
  } else {
    ctx.style.display = 'none';
  }

  document.getElementById('q-enunciado').textContent = `${q.numero} (ENEM 2019) — ${q.enunciado}`;

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
  document.getElementById('btn-next').textContent = current === questions.length - 1 ? 'Finalizar simulado →' : 'Próxima →';

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

function finishQuiz(){
  let score = 0;
  questions.forEach((q, i) => { if(answers[i] === q.correta) score++; });
  const passScore = Math.ceil(questions.length / 2);

  try {
    const prevScore = Number(localStorage.getItem('estudeai_sim2_score') || 0);
    if(score > prevScore){
      localStorage.setItem('estudeai_sim2_score', score);
      localStorage.setItem('estudeai_sim2_total', questions.length);
    }
  } catch(e){}

  logActivity({
    label: `ENEM 2019 · Exatas: ${score}/${questions.length} acertos`,
    correta: score >= passScore
  });

  document.getElementById('quiz-view').style.display = 'none';
  document.getElementById('results-view').style.display = 'block';
  document.getElementById('score-num').textContent = score;
  document.getElementById('score-of').textContent = `/ ${questions.length}`;

  const banner = document.getElementById('unlock-banner');
  if(banner){
    if(score >= passScore){
      banner.className = 'unlock-banner pass';
      banner.innerHTML = `<span>🎉 Você acertou ${score} de ${questions.length} — mais da metade. Esse é o tipo de resultado que vai liberar os simulados de 2020 quando chegarem.</span>`;
    } else {
      banner.className = 'unlock-banner fail';
      banner.innerHTML = `<span>Acerte pelo menos ${passScore} de ${questions.length} para ficar no ritmo de liberar os próximos anos de simulado. Você acertou ${score}.</span>`;
    }
  }

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
        <div class="result-q">${q.numero} · ${q.area}</div>
        <div class="result-detail">Sua resposta: <b>${given || '—'}</b> · Gabarito: <b>${q.correta}</b></div>
      </div>
    `;
    list.appendChild(row);
  });
}

function restartQuiz(){
  questions = pickQuestions();
  current = 0;
  Object.keys(answers).forEach(k => delete answers[k]);
  document.getElementById('results-view').style.display = 'none';
  document.getElementById('quiz-view').style.display = 'block';
  renderQuestion();
}

renderQuestion();
