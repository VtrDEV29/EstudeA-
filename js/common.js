/* ==========================================================================
   EstudeAI — utilitários comuns
   Usado por todas as páginas do app.
   ========================================================================== */

function toggleTheme(){
  const html = document.documentElement;
  const isDark = html.getAttribute('data-theme') === 'dark';
  html.setAttribute('data-theme', isDark ? 'light' : 'dark');
  const label = document.getElementById('theme-label');
  if(label) label.textContent = isDark ? 'Modo escuro' : 'Modo claro';
}

function getUser(){
  try { return JSON.parse(localStorage.getItem('estudeai_user') || 'null'); }
  catch(e){ return null; }
}

/* Preenche avatar/nome/meta da sidebar com os dados da conta.
   O dashboard define sua própria versão estendida (mais campos),
   que substitui esta ao carregar depois de common.js. */
function applyUserProfile(){
  const user = getUser();
  if(!user || !user.nome) return;

  const primeiroNome = user.nome.split(' ')[0];
  const inicial = user.nome.trim().charAt(0).toUpperCase();

  const avatarEl = document.getElementById('profile-avatar');
  const nameEl = document.getElementById('profile-name');
  const metaEl = document.getElementById('profile-meta');
  const tagEl = document.getElementById('sidebar-logo-tag');

  if(avatarEl) avatarEl.textContent = inicial;
  if(nameEl) nameEl.textContent = primeiroNome;
  if(metaEl) metaEl.textContent = `${user.ano} · ${user.vestibular}`;
  if(tagEl) tagEl.textContent = `${user.ano} · ${user.vestibular}`;
}
applyUserProfile();

function shuffle(arr){
  const a = arr.slice();
  for(let i = a.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function logActivity(entry){
  try {
    const log = JSON.parse(localStorage.getItem('estudeai_activity_log') || '[]');
    log.unshift(Object.assign({ ts: Date.now() }, entry));
    localStorage.setItem('estudeai_activity_log', JSON.stringify(log.slice(0, 20)));
  } catch(e){}
}
