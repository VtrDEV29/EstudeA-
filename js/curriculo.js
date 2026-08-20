/* ==========================================================================
   EstudeAI — dados do currículo
   Compartilhado por dashboard.js, trilha.js e desempenho.js.
   ========================================================================== */

const CURRICULO = {
  'Matemática': {
    '1º ano': ['Conjuntos e Funções', 'Razão e Proporção', 'Geometria Plana Básica'],
    '2º ano': ['Funções Quadráticas', 'Trigonometria', 'Progressões (PA e PG)'],
    '3º ano': ['Geometria Analítica', 'Estatística e Probabilidade', 'Análise Combinatória']
  },
  'Português': {
    '1º ano': ['Interpretação de Texto', 'Gêneros Textuais', 'Fonética e Ortografia'],
    '2º ano': ['Sintaxe', 'Figuras de Linguagem', 'Literatura: Barroco ao Romantismo'],
    '3º ano': ['Literatura Contemporânea', 'Redação Dissertativa-Argumentativa', 'Coesão e Coerência']
  },
  'Química': {
    '1º ano': ['Estrutura Atômica', 'Tabela Periódica', 'Ligações Químicas'],
    '2º ano': ['Estequiometria', 'Soluções', 'Termoquímica'],
    '3º ano': ['Química Orgânica', 'Eletroquímica', 'Radioatividade']
  },
  'Biologia': {
    '1º ano': ['Citologia', 'Ecologia Básica', 'Classificação dos Seres Vivos'],
    '2º ano': ['Genética', 'Fisiologia Humana', 'Evolução'],
    '3º ano': ['Biotecnologia', 'Ecologia Avançada', 'Imunologia']
  },
  'História': {
    '1º ano': ['Pré-História e Antiguidade', 'Idade Média', 'Formação de Portugal e Espanha'],
    '2º ano': ['Brasil Colônia', 'Iluminismo e Revoluções', 'Independência do Brasil'],
    '3º ano': ['Era Vargas e Ditadura Militar', 'Guerra Fria', 'Brasil Contemporâneo']
  }
};

const ESTAGIO_POR_ANO = {
  '1º ano': 'Base',
  '2º ano': 'Consolidação',
  '3º ano': 'Reta final'
};

const MATERIA_SLUG = {
  'Matemática': 'matematica',
  'Português': 'portugues',
  'Química': 'quimica',
  'Biologia': 'biologia',
  'História': 'historia'
};

const ANO_NUM = { '1º ano': '1', '2º ano': '2', '3º ano': '3' };

function getModulosConcluidos(){
  try { return JSON.parse(localStorage.getItem('estudeai_modulos_concluidos') || '[]'); }
  catch(e){ return []; }
}
