/* ==========================================================================
   EstudeAI — Trilha (estudeai-trilha.html)
   Depende de js/common.js e js/curriculo.js.
   ========================================================================== */

function renderTrilha(){
  const user = getUser();
  const ano = (user && user.ano) || '3º ano';
  const vestibular = (user && user.vestibular) || 'ENEM';
  const estagio = ESTAGIO_POR_ANO[ano] || 'Reta final';
  const concluidos = getModulosConcluidos();

  document.getElementById('trilha-title').textContent = `Trilha ${ano} — ${estagio}`;
  document.getElementById('trilha-sub').textContent = `Conteúdo organizado por matéria, no ritmo do ${ano} e com foco em ${vestibular}.`;

  document.querySelectorAll('.stage-card').forEach(card => {
    card.classList.toggle('active', card.dataset.ano === ano);
  });

  const container = document.getElementById('subjects');
  container.innerHTML = '';

  Object.keys(CURRICULO).forEach(materia => {
    const modulos = CURRICULO[materia][ano] || CURRICULO[materia]['3º ano'];
    const slug = MATERIA_SLUG[materia];
    const anoNum = ANO_NUM[ano] || '3';
    const concluidosNestaMateria = modulos.filter((_, i) => i === 0 && concluidos.includes(`${slug}-${anoNum}`)).length;

    const card = document.createElement('div');
    card.className = 'card subject-card';

    const head = document.createElement('div');
    head.className = 'subject-head';
    head.innerHTML = `<h3>${materia}</h3><span class="subject-progress-label">${concluidosNestaMateria}/${modulos.length} módulos</span>`;
    card.appendChild(head);

    const bar = document.createElement('div');
    bar.className = 'progress-bar';
    bar.innerHTML = `<div class="fill" style="width:${Math.round((concluidosNestaMateria / modulos.length) * 100)}%"></div>`;
    card.appendChild(bar);

    modulos.forEach((nome, i) => {
      const atividadeId = i === 0 ? `${slug}-${anoNum}` : null;
      const concluido = atividadeId && concluidos.includes(atividadeId);

      const row = document.createElement('div');
      row.className = 'module-row';

      const bubble = concluido ? '<span class="bubble filled"></span>' : '<span class="bubble"></span>';
      const status = concluido ? 'concluído' : (atividadeId ? 'não iniciado' : 'em breve');
      const botao = atividadeId
        ? `<a href="estudeai-atividade.html?id=${atividadeId}" class="btn ${concluido ? 'btn-ghost' : 'btn-solid'} btn-sm">${concluido ? 'Revisar' : 'Começar'}</a>`
        : `<button class="btn btn-ghost btn-sm" disabled>Em breve</button>`;

      row.innerHTML = `
        ${bubble}
        <div class="module-info">
          <div class="module-name">${nome}</div>
          <div class="module-meta">Módulo ${i + 1} de ${modulos.length} · ${status}</div>
        </div>
        ${botao}
      `;
      card.appendChild(row);
    });

    container.appendChild(card);
  });
}
renderTrilha();
