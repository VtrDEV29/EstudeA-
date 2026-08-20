/* ==========================================================================
   EstudeAI — Banco de atividades da trilha (estudeai-atividade.html)
   Conteúdo de revisão próprio (não são questões de vestibular reais como
   nos simulados) para o primeiro módulo de cada matéria, nos 3 anos.
   ========================================================================== */

const ATIVIDADES = {
  'matematica-1': { materia: 'Matemática', modulo: 'Conjuntos e Funções', ano: '1º ano', questoes: [
    { enunciado: 'Dado o conjunto A = {1, 2, 3, 4} e B = {3, 4, 5, 6}, qual é A ∩ B?', alternativas: [{letra:'A',texto:'{1, 2, 3, 4, 5, 6}'},{letra:'B',texto:'{3, 4}'},{letra:'C',texto:'{1, 2}'},{letra:'D',texto:'{5, 6}'}], correta:'B' },
    { enunciado: 'Considere a função f(x) = 2x + 3. Qual é o valor de f(4)?', alternativas: [{letra:'A',texto:'7'},{letra:'B',texto:'8'},{letra:'C',texto:'11'},{letra:'D',texto:'14'}], correta:'C' },
    { enunciado: 'Em uma função f: A → B, para que f seja de fato uma função, cada elemento de A deve estar associado a', alternativas: [{letra:'A',texto:'pelo menos um elemento de B.'},{letra:'B',texto:'exatamente um elemento de B.'},{letra:'C',texto:'no máximo um elemento de B.'},{letra:'D',texto:'todos os elementos de B.'}], correta:'B' },
    { enunciado: 'O conjunto A = {x ∈ ℕ | x < 5} é igual a', alternativas: [{letra:'A',texto:'{0, 1, 2, 3, 4}'},{letra:'B',texto:'{1, 2, 3, 4, 5}'},{letra:'C',texto:'{1, 2, 3, 4}'},{letra:'D',texto:'{0, 1, 2, 3, 4, 5}'}], correta:'A' }
  ]},
  'matematica-2': { materia: 'Matemática', modulo: 'Funções Quadráticas', ano: '2º ano', questoes: [
    { enunciado: 'A função f(x) = x² − 4x + 3 tem raízes', alternativas: [{letra:'A',texto:'1 e 3'},{letra:'B',texto:'−1 e −3'},{letra:'C',texto:'2 e 2'},{letra:'D',texto:'0 e 4'}], correta:'A' },
    { enunciado: 'O vértice da parábola f(x) = x² − 4x + 3 tem coordenadas', alternativas: [{letra:'A',texto:'(2, −1)'},{letra:'B',texto:'(2, 1)'},{letra:'C',texto:'(−2, −1)'},{letra:'D',texto:'(4, 3)'}], correta:'A' },
    { enunciado: 'Se a > 0 em uma função quadrática f(x) = ax² + bx + c, a parábola tem concavidade voltada para', alternativas: [{letra:'A',texto:'cima.'},{letra:'B',texto:'baixo.'},{letra:'C',texto:'a esquerda.'},{letra:'D',texto:'a direita.'}], correta:'A' },
    { enunciado: 'O discriminante (Δ) de uma função quadrática permite saber', alternativas: [{letra:'A',texto:'o valor máximo da função.'},{letra:'B',texto:'o número de raízes reais.'},{letra:'C',texto:'a inclinação da reta.'},{letra:'D',texto:'o domínio da função.'}], correta:'B' }
  ]},
  'matematica-3': { materia: 'Matemática', modulo: 'Geometria Analítica', ano: '3º ano', questoes: [
    { enunciado: 'A distância entre os pontos A(1, 2) e B(4, 6) é', alternativas: [{letra:'A',texto:'4'},{letra:'B',texto:'5'},{letra:'C',texto:'6'},{letra:'D',texto:'7'}], correta:'B' },
    { enunciado: 'O ponto médio entre A(2, 4) e B(6, 8) é', alternativas: [{letra:'A',texto:'(4, 6)'},{letra:'B',texto:'(3, 5)'},{letra:'C',texto:'(8, 12)'},{letra:'D',texto:'(4, 4)'}], correta:'A' },
    { enunciado: 'A equação geral de uma reta é dada por', alternativas: [{letra:'A',texto:'ax + by + c = 0'},{letra:'B',texto:'y = ax² + b'},{letra:'C',texto:'x² + y² = r²'},{letra:'D',texto:'ax + b = 0'}], correta:'A' },
    { enunciado: 'O coeficiente angular de uma reta que passa por A(1, 1) e B(3, 5) é', alternativas: [{letra:'A',texto:'1'},{letra:'B',texto:'2'},{letra:'C',texto:'3'},{letra:'D',texto:'4'}], correta:'B' }
  ]},
  'portugues-1': { materia: 'Português', modulo: 'Interpretação de Texto', ano: '1º ano', questoes: [
    { textoBase: 'A tecnologia mudou a forma como estudamos. Hoje, um aluno pode acessar aulas, exercícios e simulados pelo celular, no ônibus ou em casa, no horário que for mais conveniente para ele.', enunciado: 'Segundo o texto, a principal mudança trazida pela tecnologia no estudo é', alternativas: [{letra:'A',texto:'o aumento do número de provas.'},{letra:'B',texto:'a flexibilidade de tempo e lugar para estudar.'},{letra:'C',texto:'a substituição total dos professores.'},{letra:'D',texto:'a redução do conteúdo estudado.'}], correta:'B' },
    { textoBase: 'A tecnologia mudou a forma como estudamos. Hoje, um aluno pode acessar aulas, exercícios e simulados pelo celular, no ônibus ou em casa, no horário que for mais conveniente para ele.', enunciado: 'A expressão "no horário que for mais conveniente para ele" reforça a ideia de', alternativas: [{letra:'A',texto:'obrigatoriedade.'},{letra:'B',texto:'autonomia do estudante.'},{letra:'C',texto:'dificuldade de acesso.'},{letra:'D',texto:'padronização do ensino.'}], correta:'B' },
    { textoBase: 'A tecnologia mudou a forma como estudamos. Hoje, um aluno pode acessar aulas, exercícios e simulados pelo celular, no ônibus ou em casa, no horário que for mais conveniente para ele.', enunciado: 'O termo "Hoje", no início da segunda frase, tem função de', alternativas: [{letra:'A',texto:'comparar dois espaços físicos.'},{letra:'B',texto:'indicar um marcador temporal.'},{letra:'C',texto:'indicar uma relação de causa.'},{letra:'D',texto:'indicar uma concessão.'}], correta:'B' },
    { textoBase: 'A tecnologia mudou a forma como estudamos. Hoje, um aluno pode acessar aulas, exercícios e simulados pelo celular, no ônibus ou em casa, no horário que for mais conveniente para ele.', enunciado: 'Quanto ao tipo textual predominante, o texto é', alternativas: [{letra:'A',texto:'narrativo.'},{letra:'B',texto:'dissertativo-expositivo.'},{letra:'C',texto:'descritivo-poético.'},{letra:'D',texto:'injuntivo (instrucional).'}], correta:'B' }
  ]},
  'portugues-2': { materia: 'Português', modulo: 'Sintaxe', ano: '2º ano', questoes: [
    { enunciado: 'Na frase "O aluno estudou a matéria com dedicação", o termo "com dedicação" exerce a função de', alternativas: [{letra:'A',texto:'sujeito.'},{letra:'B',texto:'objeto direto.'},{letra:'C',texto:'adjunto adverbial.'},{letra:'D',texto:'predicativo do sujeito.'}], correta:'C' },
    { enunciado: 'Em "Os alunos entregaram os trabalhos ao professor", o termo "ao professor" é', alternativas: [{letra:'A',texto:'objeto direto.'},{letra:'B',texto:'objeto indireto.'},{letra:'C',texto:'sujeito.'},{letra:'D',texto:'aposto.'}], correta:'B' },
    { enunciado: 'A oração destacada em "Espero que você estude" é uma oração subordinada', alternativas: [{letra:'A',texto:'adjetiva.'},{letra:'B',texto:'substantiva.'},{letra:'C',texto:'adverbial.'},{letra:'D',texto:'coordenada.'}], correta:'B' },
    { enunciado: 'Em "Maria, minha melhor amiga, passou no vestibular", o termo "minha melhor amiga" é', alternativas: [{letra:'A',texto:'vocativo.'},{letra:'B',texto:'aposto.'},{letra:'C',texto:'predicativo.'},{letra:'D',texto:'objeto direto.'}], correta:'B' }
  ]},
  'portugues-3': { materia: 'Português', modulo: 'Literatura Contemporânea', ano: '3º ano', questoes: [
    { enunciado: 'A literatura brasileira contemporânea, de modo geral, se caracteriza por', alternativas: [{letra:'A',texto:'rigidez das formas clássicas.'},{letra:'B',texto:'pluralidade de temas, vozes e formas.'},{letra:'C',texto:'exclusividade de temas rurais.'},{letra:'D',texto:'ausência de crítica social.'}], correta:'B' },
    { enunciado: 'Autores contemporâneos frequentemente exploram, entre outros temas,', alternativas: [{letra:'A',texto:'apenas o amor cortês medieval.'},{letra:'B',texto:'questões urbanas, identitárias e sociais.'},{letra:'C',texto:'somente mitologia greco-romana.'},{letra:'D',texto:'exclusivamente a vida na corte portuguesa.'}], correta:'B' },
    { enunciado: 'Em relação às formas narrativas, a literatura contemporânea', alternativas: [{letra:'A',texto:'mantém-se presa a um único gênero.'},{letra:'B',texto:'admite hibridismo entre gêneros e linguagens.'},{letra:'C',texto:'rejeita completamente a prosa.'},{letra:'D',texto:'só aceita o verso clássico.'}], correta:'B' },
    { enunciado: 'A crônica contemporânea costuma se caracterizar por', alternativas: [{letra:'A',texto:'linguagem rebuscada e distante do cotidiano.'},{letra:'B',texto:'observação do cotidiano, com tom próximo do leitor.'},{letra:'C',texto:'ausência total de humor.'},{letra:'D',texto:'foco exclusivo em fatos históricos.'}], correta:'B' }
  ]},
  'quimica-1': { materia: 'Química', modulo: 'Estrutura Atômica', ano: '1º ano', questoes: [
    { enunciado: 'O átomo é formado basicamente por', alternativas: [{letra:'A',texto:'prótons, nêutrons e elétrons.'},{letra:'B',texto:'apenas prótons e elétrons.'},{letra:'C',texto:'apenas nêutrons.'},{letra:'D',texto:'apenas elétrons.'}], correta:'A' },
    { enunciado: 'Os prótons possuem carga', alternativas: [{letra:'A',texto:'negativa.'},{letra:'B',texto:'positiva.'},{letra:'C',texto:'neutra.'},{letra:'D',texto:'variável.'}], correta:'B' },
    { enunciado: 'O número atômico (Z) de um elemento corresponde ao número de', alternativas: [{letra:'A',texto:'nêutrons.'},{letra:'B',texto:'prótons.'},{letra:'C',texto:'elétrons na última camada.'},{letra:'D',texto:'massa total do átomo.'}], correta:'B' },
    { enunciado: 'Íons com carga negativa, formados pelo ganho de elétrons, são chamados de', alternativas: [{letra:'A',texto:'cátions.'},{letra:'B',texto:'ânions.'},{letra:'C',texto:'isótopos.'},{letra:'D',texto:'isóbaros.'}], correta:'B' }
  ]},
  'quimica-2': { materia: 'Química', modulo: 'Estequiometria', ano: '2º ano', questoes: [
    { textoBase: 'Considere a equação balanceada: 2H₂ + O₂ → 2H₂O', enunciado: 'Quantos mols de H₂ são necessários para reagir completamente com 1 mol de O₂?', alternativas: [{letra:'A',texto:'1'},{letra:'B',texto:'2'},{letra:'C',texto:'3'},{letra:'D',texto:'4'}], correta:'B' },
    { textoBase: 'Considere a equação balanceada: 2H₂ + O₂ → 2H₂O', enunciado: 'Se 2 mols de H₂ reagem completamente com O₂, quantos mols de água são formados?', alternativas: [{letra:'A',texto:'1'},{letra:'B',texto:'2'},{letra:'C',texto:'3'},{letra:'D',texto:'4'}], correta:'B' },
    { enunciado: 'O reagente que é totalmente consumido primeiro em uma reação, limitando a quantidade de produto formado, é chamado de', alternativas: [{letra:'A',texto:'reagente em excesso.'},{letra:'B',texto:'reagente limitante.'},{letra:'C',texto:'catalisador.'},{letra:'D',texto:'produto secundário.'}], correta:'B' },
    { enunciado: 'Estequiometria é a área da Química que estuda', alternativas: [{letra:'A',texto:'a velocidade das reações.'},{letra:'B',texto:'as relações quantitativas entre reagentes e produtos.'},{letra:'C',texto:'a estrutura eletrônica dos átomos.'},{letra:'D',texto:'as propriedades físicas dos gases.'}], correta:'B' }
  ]},
  'quimica-3': { materia: 'Química', modulo: 'Química Orgânica', ano: '3º ano', questoes: [
    { enunciado: 'O elemento químico central presente em todos os compostos orgânicos é', alternativas: [{letra:'A',texto:'o oxigênio.'},{letra:'B',texto:'o carbono.'},{letra:'C',texto:'o nitrogênio.'},{letra:'D',texto:'o hidrogênio.'}], correta:'B' },
    { enunciado: 'Um hidrocarboneto é um composto orgânico formado exclusivamente por', alternativas: [{letra:'A',texto:'carbono e oxigênio.'},{letra:'B',texto:'carbono e hidrogênio.'},{letra:'C',texto:'carbono e nitrogênio.'},{letra:'D',texto:'hidrogênio e oxigênio.'}], correta:'B' },
    { enunciado: 'Álcoois são compostos orgânicos caracterizados pela presença do grupo funcional', alternativas: [{letra:'A',texto:'carboxila (–COOH).'},{letra:'B',texto:'hidroxila (–OH) ligada a carbono saturado.'},{letra:'C',texto:'carbonila (–CO–).'},{letra:'D',texto:'amina (–NH₂).'}], correta:'B' },
    { enunciado: 'O átomo de carbono, nos compostos orgânicos, forma tipicamente quantas ligações covalentes?', alternativas: [{letra:'A',texto:'2'},{letra:'B',texto:'3'},{letra:'C',texto:'4'},{letra:'D',texto:'5'}], correta:'C' }
  ]},
  'biologia-1': { materia: 'Biologia', modulo: 'Citologia', ano: '1º ano', questoes: [
    { enunciado: 'A unidade básica de todo ser vivo é', alternativas: [{letra:'A',texto:'o tecido.'},{letra:'B',texto:'a célula.'},{letra:'C',texto:'o órgão.'},{letra:'D',texto:'o átomo.'}], correta:'B' },
    { enunciado: 'A estrutura celular responsável por controlar a entrada e saída de substâncias na célula é', alternativas: [{letra:'A',texto:'o núcleo.'},{letra:'B',texto:'a membrana plasmática.'},{letra:'C',texto:'o citoplasma.'},{letra:'D',texto:'a mitocôndria.'}], correta:'B' },
    { enunciado: 'Células que não possuem núcleo organizado (envolto por membrana) são chamadas de', alternativas: [{letra:'A',texto:'eucariontes.'},{letra:'B',texto:'procariontes.'},{letra:'C',texto:'autótrofas.'},{letra:'D',texto:'heterótrofas.'}], correta:'B' },
    { enunciado: 'A organela responsável pela produção de energia (ATP) na célula é', alternativas: [{letra:'A',texto:'o ribossomo.'},{letra:'B',texto:'a mitocôndria.'},{letra:'C',texto:'o complexo de Golgi.'},{letra:'D',texto:'o retículo endoplasmático.'}], correta:'B' }
  ]},
  'biologia-2': { materia: 'Biologia', modulo: 'Genética', ano: '2º ano', questoes: [
    { textoBase: 'Considere o cruzamento entre dois indivíduos heterozigotos: Aa × Aa.', enunciado: 'A proporção genotípica esperada na descendência é', alternativas: [{letra:'A',texto:'1 AA : 2 Aa : 1 aa'},{letra:'B',texto:'3 AA : 1 aa'},{letra:'C',texto:'todos Aa'},{letra:'D',texto:'1 AA : 1 aa'}], correta:'A' },
    { textoBase: 'Considere o cruzamento Aa × Aa, sendo A dominante sobre a.', enunciado: 'A proporção fenotípica esperada na descendência é', alternativas: [{letra:'A',texto:'1:1'},{letra:'B',texto:'1:2:1'},{letra:'C',texto:'3:1'},{letra:'D',texto:'9:3:3:1'}], correta:'C' },
    { enunciado: 'Um indivíduo com genótipo Aa é chamado de', alternativas: [{letra:'A',texto:'homozigoto dominante.'},{letra:'B',texto:'heterozigoto.'},{letra:'C',texto:'homozigoto recessivo.'},{letra:'D',texto:'hemizigoto.'}], correta:'B' },
    { enunciado: 'O conjunto de genes de um indivíduo é chamado de', alternativas: [{letra:'A',texto:'fenótipo.'},{letra:'B',texto:'genótipo.'},{letra:'C',texto:'cariótipo.'},{letra:'D',texto:'alelo.'}], correta:'B' }
  ]},
  'biologia-3': { materia: 'Biologia', modulo: 'Biotecnologia', ano: '3º ano', questoes: [
    { enunciado: 'A técnica que permite copiar e multiplicar um trecho específico de DNA em laboratório é chamada de', alternativas: [{letra:'A',texto:'PCR (reação em cadeia da polimerase).'},{letra:'B',texto:'fotossíntese.'},{letra:'C',texto:'mitose.'},{letra:'D',texto:'osmose.'}], correta:'A' },
    { enunciado: 'Organismos que tiveram seu material genético alterado por engenharia genética são chamados de', alternativas: [{letra:'A',texto:'híbridos.'},{letra:'B',texto:'transgênicos.'},{letra:'C',texto:'mutantes espontâneos.'},{letra:'D',texto:'fósseis.'}], correta:'B' },
    { enunciado: 'A produção de insulina humana por bactérias geneticamente modificadas é um exemplo de aplicação da biotecnologia na área', alternativas: [{letra:'A',texto:'agrícola.'},{letra:'B',texto:'farmacêutica/médica.'},{letra:'C',texto:'ambiental.'},{letra:'D',texto:'exclusivamente alimentícia.'}], correta:'B' },
    { enunciado: 'A clonagem é uma técnica que tem como objetivo', alternativas: [{letra:'A',texto:'misturar genes de espécies diferentes aleatoriamente.'},{letra:'B',texto:'produzir um organismo geneticamente idêntico a outro.'},{letra:'C',texto:'eliminar genes recessivos.'},{letra:'D',texto:'acelerar a fotossíntese.'}], correta:'B' }
  ]},
  'historia-1': { materia: 'História', modulo: 'Pré-História e Antiguidade', ano: '1º ano', questoes: [
    { enunciado: 'O período da Pré-História marcado pelo desenvolvimento da agricultura e da domesticação de animais é conhecido como', alternativas: [{letra:'A',texto:'Paleolítico.'},{letra:'B',texto:'Neolítico.'},{letra:'C',texto:'Idade dos Metais.'},{letra:'D',texto:'Idade Média.'}], correta:'B' },
    { enunciado: 'Uma das principais características das primeiras civilizações da Antiguidade (como Egito e Mesopotâmia) foi', alternativas: [{letra:'A',texto:'o nomadismo generalizado.'},{letra:'B',texto:'o surgimento às margens de grandes rios.'},{letra:'C',texto:'a ausência de organização política.'},{letra:'D',texto:'a rejeição à agricultura.'}], correta:'B' },
    { enunciado: 'Na Grécia Antiga, a cidade-estado é conhecida pelo termo', alternativas: [{letra:'A',texto:'polis.'},{letra:'B',texto:'civitas.'},{letra:'C',texto:'império.'},{letra:'D',texto:'satrapia.'}], correta:'A' },
    { enunciado: 'O sistema político-social baseado em cidadãos com direitos plenos e uma grande parcela da população excluída (como escravos) caracterizou', alternativas: [{letra:'A',texto:'apenas o Egito Antigo.'},{letra:'B',texto:'as cidades-estado da Antiguidade Clássica.'},{letra:'C',texto:'exclusivamente Roma.'},{letra:'D',texto:'somente a Mesopotâmia.'}], correta:'B' }
  ]},
  'historia-2': { materia: 'História', modulo: 'Brasil Colônia', ano: '2º ano', questoes: [
    { enunciado: 'O sistema de exploração econômica predominante no Brasil Colônia, baseado na monocultura para exportação, latifúndio e mão de obra escrava, ficou conhecido como', alternativas: [{letra:'A',texto:'economia de subsistência.'},{letra:'B',texto:'plantation.'},{letra:'C',texto:'economia industrial.'},{letra:'D',texto:'economia de mercado interno.'}], correta:'B' },
    { enunciado: 'A principal fonte de mão de obra utilizada nos engenhos de açúcar durante boa parte do período colonial foi', alternativas: [{letra:'A',texto:'o trabalho assalariado livre.'},{letra:'B',texto:'a mão de obra escrava africana.'},{letra:'C',texto:'o trabalho voluntário indígena remunerado.'},{letra:'D',texto:'máquinas a vapor.'}], correta:'B' },
    { enunciado: 'O ciclo econômico que se desenvolveu principalmente em Minas Gerais no século XVIII foi', alternativas: [{letra:'A',texto:'o ciclo do açúcar.'},{letra:'B',texto:'o ciclo do ouro.'},{letra:'C',texto:'o ciclo do café.'},{letra:'D',texto:'o ciclo da borracha.'}], correta:'B' },
    { enunciado: 'As Capitanias Hereditárias foram um sistema de administração colonial que dividia o território em', alternativas: [{letra:'A',texto:'estados autônomos independentes.'},{letra:'B',texto:'faixas de terra doadas a donatários.'},{letra:'C',texto:'municípios eleitos.'},{letra:'D',texto:'reinos separados.'}], correta:'B' }
  ]},
  'historia-3': { materia: 'História', modulo: 'Era Vargas e Ditadura Militar', ano: '3º ano', questoes: [
    { enunciado: 'Getúlio Vargas governou o Brasil, com uma interrupção, entre', alternativas: [{letra:'A',texto:'1930 e 1945, e depois 1951 a 1954.'},{letra:'B',texto:'1889 e 1910.'},{letra:'C',texto:'1945 e 1960.'},{letra:'D',texto:'1964 e 1985.'}], correta:'A' },
    { enunciado: 'O período do governo Vargas conhecido como "Estado Novo" (1937–1945) foi marcado por', alternativas: [{letra:'A',texto:'eleições diretas frequentes.'},{letra:'B',texto:'um regime autoritário e centralizador.'},{letra:'C',texto:'descentralização total do poder.'},{letra:'D',texto:'ausência de censura.'}], correta:'B' },
    { enunciado: 'O golpe civil-militar que deu início à ditadura militar no Brasil ocorreu em', alternativas: [{letra:'A',texto:'1954.'},{letra:'B',texto:'1961.'},{letra:'C',texto:'1964.'},{letra:'D',texto:'1968.'}], correta:'C' },
    { enunciado: 'O Ato Institucional nº 5 (AI-5), de 1968, ficou marcado por', alternativas: [{letra:'A',texto:'ampliar as liberdades democráticas.'},{letra:'B',texto:'endurecer a repressão e suspender garantias constitucionais.'},{letra:'C',texto:'encerrar a ditadura.'},{letra:'D',texto:'restaurar o Congresso imediatamente.'}], correta:'B' }
  ]}
};
