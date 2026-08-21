/* ==========================================================================
   EstudeAI — Landing page (estudeai-menu-principal.html)
   ========================================================================== */

const CHAVES_PROGRESSO = [
  'estudeai_sim1_score', 'estudeai_sim1_total',
  'estudeai_sim2_score', 'estudeai_sim2_total',
  'estudeai_modulos_concluidos', 'estudeai_activity_log'
];

function emailLocalPartValida(email){
  const localPart = email.split('@')[0] || '';
  return localPart.length >= 6;
}

function criarConta(e){
  e.preventDefault();

  const emailInput = document.getElementById('cad-email');
  const emailError = document.getElementById('cad-email-error');
  const email = emailInput.value.trim();

  if(!emailLocalPartValida(email)){
    emailInput.classList.add('invalid');
    emailError.textContent = 'A parte antes do @ precisa ter pelo menos 6 caracteres.';
    emailError.style.display = 'block';
    emailInput.focus();
    return false;
  }
  emailInput.classList.remove('invalid');
  emailError.style.display = 'none';

  const user = {
    nome: document.getElementById('cad-nome').value.trim(),
    ano: document.getElementById('cad-ano').value,
    vestibular: document.getElementById('cad-vestibular').value,
    email: email
  };
  try {
    CHAVES_PROGRESSO.forEach(chave => localStorage.removeItem(chave));
    localStorage.setItem('estudeai_user', JSON.stringify(user));
  } catch(err){}
  window.location.href = 'estudeai-dashboard.html';
  return false;
}

function fazerLogin(e){
  e.preventDefault();
  window.location.href = 'estudeai-dashboard.html';
  return false;
}

function toggleTheme(){
  const html = document.documentElement;
  const isDark = html.getAttribute('data-theme') === 'dark';
  html.setAttribute('data-theme', isDark ? 'light' : 'dark');
  document.getElementById('theme-label').textContent = isDark ? 'Modo escuro' : 'Modo claro';
}

function showAuth(which){
  document.getElementById('tab-login').classList.toggle('active', which==='login');
  document.getElementById('tab-cadastro').classList.toggle('active', which==='cadastro');
  document.getElementById('panel-login').classList.toggle('active', which==='login');
  document.getElementById('panel-cadastro').classList.toggle('active', which==='cadastro');
}

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
  if(target < now){
    target = firstSundayOfNovember(year + 1);
  }
  return target;
}

function updateCountdown(){
  const target = nextEnemDate();
  const now = new Date();
  let diff = Math.max(0, target - now);

  const days = Math.floor(diff / (1000*60*60*24));
  const hours = Math.floor((diff / (1000*60*60)) % 24);
  const min = Math.floor((diff / (1000*60)) % 60);
  const sec = Math.floor((diff / 1000) % 60);

  document.getElementById('cd-days').textContent = days;
  document.getElementById('cd-hours').textContent = String(hours).padStart(2,'0');
  document.getElementById('cd-min').textContent = String(min).padStart(2,'0');
  document.getElementById('cd-sec').textContent = String(sec).padStart(2,'0');
}
updateCountdown();
setInterval(updateCountdown, 1000);

/* ---------- animações ao rolar a página ---------- */
function initScrollReveal(){
  const targets = document.querySelectorAll('.reveal, .reveal-stagger');
  if(!('IntersectionObserver' in window)){
    targets.forEach(el => el.classList.add('visible'));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  targets.forEach(el => observer.observe(el));
}
initScrollReveal();
