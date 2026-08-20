/* ==========================================================================
   EstudeAI — Perfil (estudeai-perfil.html)
   Depende de js/common.js (toggleTheme, getUser, applyUserProfile).
   ========================================================================== */

function renderPerfil(){
  const user = getUser();

  if(!user || !user.nome){
    document.getElementById('no-account-view').style.display = 'block';
    document.getElementById('account-view').style.display = 'none';
    return;
  }

  document.getElementById('no-account-view').style.display = 'none';
  document.getElementById('account-view').style.display = 'block';

  const inicial = user.nome.trim().charAt(0).toUpperCase();
  document.getElementById('hero-avatar').textContent = inicial;
  document.getElementById('hero-name').textContent = user.nome;
  document.getElementById('hero-email').textContent = user.email || '—';
  document.getElementById('hero-ano').textContent = user.ano;
  document.getElementById('hero-vestibular').textContent = user.vestibular;

  document.getElementById('f-nome').value = user.nome;
  document.getElementById('f-email').value = user.email || '';
  document.getElementById('f-ano').value = user.ano;
  document.getElementById('f-vestibular').value = user.vestibular;
}
renderPerfil();

document.getElementById('profile-form').addEventListener('submit', function(e){
  e.preventDefault();
  const user = getUser() || {};
  user.nome = document.getElementById('f-nome').value.trim();
  user.email = document.getElementById('f-email').value.trim();
  user.ano = document.getElementById('f-ano').value;
  user.vestibular = document.getElementById('f-vestibular').value;

  try { localStorage.setItem('estudeai_user', JSON.stringify(user)); } catch(err){}

  applyUserProfile();
  renderPerfil();

  const msg = document.getElementById('save-msg');
  msg.classList.add('show');
  setTimeout(() => msg.classList.remove('show'), 2500);
});

function sair(){
  try { localStorage.removeItem('estudeai_user'); } catch(e){}
  window.location.href = 'estudeai-menu-principal.html';
}

function apagarProgresso(){
  const ok = confirm('Isso vai zerar seus módulos concluídos, notas dos simulados e atividade recente. Sua conta continua. Confirmar?');
  if(!ok) return;
  const chaves = [
    'estudeai_sim1_score', 'estudeai_sim1_total',
    'estudeai_sim2_score', 'estudeai_sim2_total',
    'estudeai_modulos_concluidos', 'estudeai_activity_log'
  ];
  try { chaves.forEach(c => localStorage.removeItem(c)); } catch(e){}
  alert('Progresso apagado.');
}
