/* ==========================================================================
   EstudeAI — ENEM 2019 · Humanas (estudeai-simulado-quiz.html)
   Linguagens e Ciências Humanas. Questões reais, extraídas da prova oficial
   aplicada pelo INEP, publicada em domínio público para fins educacionais.
   Depende de js/common.js (shuffle, logActivity, getUser).
   ========================================================================== */

const QUESTIONS_PER_ATTEMPT = 5;

const questionPool = [
  {
    area: 'Linguagens',
    numero: 'Questão 6',
    textoBase: '"Um amor desse / Era 24 horas lado a lado / Um radar na pele, aquele sentimento alucinado..." — trecho da canção "Coração pede socorro", de Azevedo, Leão e Quadros, composta para uma campanha de combate à violência contra a mulher.',
    enunciado: 'A estratégia argumentativa empregada nessa canção para tratar do tema da violência contra a mulher consiste em',
    alternativas: [
      { letra: 'A', texto: 'revelar a submissão das mulheres à violência que sofrem.' },
      { letra: 'B', texto: 'reforçar a importância de ouvir os apelos de mulheres agredidas.' },
      { letra: 'C', texto: 'explorar a ambiguidade de sentidos para evidenciar que dominação não é amor.' },
      { letra: 'D', texto: 'expor a importância da denúncia da violência doméstica.' },
      { letra: 'E', texto: 'naturalizar situações de opressão vividas numa sociedade patriarcal.' }
    ],
    correta: 'C',
    dificuldade: 'facil'
  },
  {
    area: 'Linguagens',
    numero: 'Questão 11',
    textoBase: 'Cartaz de campanha com a imagem de um par de sapatos e o texto: "Vamos calçar os sapatos dos refugiados e dar o primeiro passo para entender sua situação."',
    enunciado: 'Nessa peça publicitária, a articulação entre a imagem do sapato e o texto verbal tem como objetivo',
    alternativas: [
      { letra: 'A', texto: 'criticar as condições de vida difíceis enfrentadas pelos refugiados.' },
      { letra: 'B', texto: 'revelar a longa trajetória percorrida pelos refugiados.' },
      { letra: 'C', texto: 'incentivar campanhas de doação de calçados para refugiados.' },
      { letra: 'D', texto: 'denunciar a situação de necessidade vivida pelos refugiados.' },
      { letra: 'E', texto: 'simbolizar a necessidade de adesão à causa dos refugiados.' }
    ],
    correta: 'E',
    dificuldade: 'facil'
  },
  {
    area: 'Ciências Humanas',
    numero: 'Questão 46',
    textoBase: '"A hospitalidade pura consiste em acolher aquele que chega antes de lhe impor condições, antes de saber e indagar o que quer que seja, ainda que seja um nome ou um \'documento\' de identidade." — DERRIDA, J. Papel-máquina.',
    enunciado: 'Associado ao contexto migratório contemporâneo, o conceito de hospitalidade proposto pelo autor impõe a necessidade de',
    alternativas: [
      { letra: 'A', texto: 'anulação da diferença.' },
      { letra: 'B', texto: 'cristalização da biografia.' },
      { letra: 'C', texto: 'incorporação da alteridade.' },
      { letra: 'D', texto: 'supressão da comunicação.' },
      { letra: 'E', texto: 'verificação da proveniência.' }
    ],
    correta: 'C',
    dificuldade: 'dificil'
  },
  {
    area: 'Ciências Humanas',
    numero: 'Questão 47',
    textoBase: '"Em sentido geral e fundamental, Direito é a técnica da coexistência humana, isto é, a técnica voltada a tornar possível a coexistência dos homens." — ABBAGNANO, N. Dicionário de Filosofia.',
    enunciado: 'O sentido geral e fundamental do Direito, segundo o texto, refere-se à',
    alternativas: [
      { letra: 'A', texto: 'aplicação de códigos legais.' },
      { letra: 'B', texto: 'regulação do convívio social.' },
      { letra: 'C', texto: 'legitimação de decisões políticas.' },
      { letra: 'D', texto: 'mediação de conflitos econômicos.' },
      { letra: 'E', texto: 'representação da autoridade constituída.' }
    ],
    correta: 'B',
    dificuldade: 'dificil'
  },
  {
    area: 'Linguagens',
    numero: 'Questão 8',
    textoBase: 'Artigo sobre mídias na educação física escolar, que analisa como a televisão constrói uma nova modalidade de consumo: o "esporte telespetáculo".',
    enunciado: 'A reflexão trazida pelo texto, que aborda o esporte telespetáculo, está fundamentada na',
    alternativas: [
      { letra: 'A', texto: 'distorção da experiência de ser atleta transmitida aos espectadores.' },
      { letra: 'B', texto: 'interpretação livre dos espectadores sobre o conteúdo transmitido.' },
      { letra: 'C', texto: 'utilização de equipamentos audiovisuais de última geração.' },
      { letra: 'D', texto: 'valorização de uma visão ampliada da prática esportiva.' },
      { letra: 'E', texto: 'equiparação entre a forma da transmissão e o conteúdo esportivo.' }
    ],
    correta: 'A',
    dificuldade: 'medio'
  },
  {
    area: 'Linguagens',
    numero: 'Questão 10',
    textoBase: '"Uma ouriça", poema de João Cabral de Melo Neto, metaforiza mudanças de atitude por meio da imagem de um ouriço que ora se fecha, ora se abre.',
    enunciado: 'Com apuro formal, o poema tece um conjunto semântico que metaforiza a atitude feminina de',
    alternativas: [
      { letra: 'A', texto: 'tenacidade transformada em brandura.' },
      { letra: 'B', texto: 'obstinação traduzida em isolamento.' },
      { letra: 'C', texto: 'inércia provocada pelo desejo platônico.' },
      { letra: 'D', texto: 'irreverência cultivada de forma cautelosa.' },
      { letra: 'E', texto: 'desconfiança consumada pela intolerância.' }
    ],
    correta: 'A',
    dificuldade: 'dificil'
  },
  {
    area: 'Linguagens',
    numero: 'Questão 16',
    textoBase: 'Dois textos comparam história e memória das línguas: um trata da sedimentação linguística ao longo do tempo, outro da influência árabe na formação do português.',
    enunciado: 'Relacionando-se as ideias dos textos a respeito da história e da memória das línguas, quanto à formação da língua portuguesa, constata-se que',
    alternativas: [
      { letra: 'A', texto: 'a presença de elementos de outras línguas foi historicamente avaliada como índice de riqueza.' },
      { letra: 'B', texto: 'o estudioso pode identificar com precisão os elementos deixados por outras línguas.' },
      { letra: 'C', texto: 'o português carrega marcas de outras línguas em suas múltiplas camadas históricas.' },
      { letra: 'D', texto: 'o árabe e o latim estão presentes na formação escolar e na memória dos falantes brasileiros.' },
      { letra: 'E', texto: 'a influência de outras línguas ocorreu de maneira uniforme ao longo da história.' }
    ],
    correta: 'C',
    dificuldade: 'facil'
  },
  {
    area: 'Ciências Humanas',
    numero: 'Questão 48',
    textoBase: 'O processamento da mandioca já era feito pelos povos nativos do Brasil antes da chegada de portugueses e africanos. Ao longo da colonização, a produção da farinha foi aperfeiçoada e ampliada, tornando-se comum em toda a colônia. Com a consolidação do comércio atlântico, a farinha atravessou os mares e chegou aos mercados africanos.',
    enunciado: 'Considerando a formação do espaço atlântico, esse produto exemplifica historicamente a',
    alternativas: [
      { letra: 'A', texto: 'difusão de hábitos alimentares.' },
      { letra: 'B', texto: 'disseminação de rituais festivos.' },
      { letra: 'C', texto: 'ampliação dos saberes autóctones.' },
      { letra: 'D', texto: 'apropriação de costumes guerreiros.' },
      { letra: 'E', texto: 'diversificação de oferendas religiosas.' }
    ],
    correta: 'A',
    dificuldade: 'facil'
  },
  {
    area: 'Ciências Humanas',
    numero: 'Questão 55',
    textoBase: '"A cidade medieval é, antes de mais nada, uma sociedade de abundância, concentrada num pequeno espaço em meio a vastas regiões pouco povoadas. É também um lugar de produção e de trocas [...] um sistema de organização de um espaço fechado com muralhas."',
    enunciado: 'No texto, o espaço descrito se caracteriza pela associação entre a ampliação das atividades urbanas e a',
    alternativas: [
      { letra: 'A', texto: 'emancipação do poder hegemônico da realeza.' },
      { letra: 'B', texto: 'aceitação das práticas usurárias dos religiosos.' },
      { letra: 'C', texto: 'independência da produção alimentar em relação aos campos.' },
      { letra: 'D', texto: 'superação do ordenamento corporativo dos ofícios.' },
      { letra: 'E', texto: 'permanência dos elementos arquitetônicos de proteção.' }
    ],
    correta: 'E',
    dificuldade: 'medio'
  },
  {
    area: 'Ciências Humanas',
    numero: 'Questão 71',
    textoBase: '"A soberania dos cidadãos dotados de plenos direitos era imprescindível para a existência da cidade-estado. Segundo os regimes políticos, a proporção desses cidadãos em relação à população total dos homens livres podia variar muito, sendo bastante pequena nas aristocracias e oligarquias e maior nas democracias."',
    enunciado: 'Nas cidades-estado da Antiguidade Clássica, a proporção de cidadãos descrita no texto é explicada pela adoção do seguinte critério para a participação política:',
    alternativas: [
      { letra: 'A', texto: 'controle da terra.' },
      { letra: 'B', texto: 'liberdade de culto.' },
      { letra: 'C', texto: 'igualdade de gênero.' },
      { letra: 'D', texto: 'exclusão dos militares.' },
      { letra: 'E', texto: 'exigência de alfabetização.' }
    ],
    correta: 'A',
    dificuldade: 'medio'
  }
];

function getUserAno(){
  const user = getUser();
  return user && user.ano;
}

function poolForAno(ano){
  const facil = questionPool.filter(q => q.dificuldade === 'facil');
  const medio = questionPool.filter(q => q.dificuldade === 'medio');

  if(ano === '1º ano') return { pool: facil, count: Math.min(3, facil.length) };
  if(ano === '2º ano') return { pool: [...facil, ...medio], count: QUESTIONS_PER_ATTEMPT };
  return { pool: questionPool, count: QUESTIONS_PER_ATTEMPT };
}

function pickQuestions(){
  const { pool, count } = poolForAno(getUserAno());
  return shuffle(pool).slice(0, count);
}

function updateEyebrow(){
  const ano = getUserAno();
  const nivel = ano === '1º ano' ? ' · nível 1º ano, questões mais leves'
    : ano === '2º ano' ? ' · nível 2º ano, dificuldade intermediária'
    : ano === '3º ano' ? ' · nível 3º ano, dificuldade completa'
    : '';
  const el = document.getElementById('quiz-eyebrow');
  if(el) el.textContent = `ENEM 2019 · Humanas${nivel}`;
}
updateEyebrow();

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
    const prevScore = Number(localStorage.getItem('estudeai_sim1_score') || 0);
    if(score > prevScore){
      localStorage.setItem('estudeai_sim1_score', score);
      localStorage.setItem('estudeai_sim1_total', questions.length);
    }
  } catch(e){}

  logActivity({
    label: `ENEM 2019 · Humanas: ${score}/${questions.length} acertos`,
    correta: score >= passScore
  });

  document.getElementById('quiz-view').style.display = 'none';
  document.getElementById('results-view').style.display = 'block';
  document.getElementById('score-num').textContent = score;
  document.getElementById('score-of').textContent = `/ ${questions.length}`;

  const banner = document.getElementById('unlock-banner');
  if(score >= passScore){
    banner.className = 'unlock-banner pass';
    banner.innerHTML = `<span>🎉 Você acertou ${score} de ${questions.length} — mais da metade. Esse é o tipo de resultado que vai liberar os simulados de 2020 quando chegarem.</span>`;
  } else {
    banner.className = 'unlock-banner fail';
    banner.innerHTML = `<span>Acerte pelo menos ${passScore} de ${questions.length} para ficar no ritmo de liberar os próximos anos de simulado. Você acertou ${score}.</span>`;
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
