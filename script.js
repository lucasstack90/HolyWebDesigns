// ===============================
// BASE DE DADOS DOS SALMOS
// ===============================
const salmos = {
  1: {
    titulo: "Salmo 1",
    texto: `
      <p>Bem-aventurado o homem que não anda no conselho dos ímpios,
      não se detém no caminho dos pecadores,
      nem se assenta na roda dos escarnecedores.</p>

      <p>Antes, o seu prazer está na lei do Senhor,
      e na sua lei medita de dia e de noite.</p>
    `,
    comentario: `
      <p>Este salmo nos ensina que a verdadeira felicidade
      está em escolher o caminho de Deus.</p>
    `
  },

  2: {
    titulo: "Salmo 2",
    texto: `
      <p>Por que se amotinam as nações
      e os povos tramam em vão?</p>
    `,
    comentario: `
      <p>Este salmo fala sobre a soberania de Deus
      acima de todos os reinos.</p>
    `
  },

  3: {
    titulo: "Salmo 3",
    texto: `
      <p>Senhor, como têm crescido os meus adversários!
      Muitos se levantam contra mim.</p>
    `,
    comentario: `
      <p>Um salmo de clamor e confiança
      em meio à aflição.</p>
    `
  },

  /* ===== NOVOS SALMOS ===== */

  4: {
    titulo: "Salmo 4",
    texto: `
      <p>Responde-me quando clamo, ó Deus da minha justiça.
      Na angústia me deste alívio.</p>
    `,
    comentario: `
      <p>Um salmo que expressa confiança em Deus
      mesmo em tempos de ansiedade.</p>
    `
  },

};

// ===============================
// GERAR LISTA DE SALMOS
// ===============================
const listaSalmos = document.getElementById("lista-salmos");

Object.keys(salmos).forEach(id => {
  const textoLimpo = salmos[id].texto
    .replace(/<[^>]*>/g, "")
    .slice(0, 90);

  listaSalmos.innerHTML += `
    <div class="col-12 col-lg-6">
      <div class="folha salmo-card" role="button" onclick="abrirSalmo(${id})">
        <h2 class="titulo-folha">${salmos[id].titulo}</h2>
        <p>${textoLimpo}...</p>
      </div>
    </div>
  `;
});

// ===============================
// ABRIR SALMO
// ===============================
function abrirSalmo(id) {
  const salmo = salmos[id];
  if (!salmo) return;

  document.getElementById("lista-salmos").classList.add("d-none");
  document.getElementById("leitura-salmo").classList.remove("d-none");

  document.getElementById("titulo-salmo").innerText = salmo.titulo;
  document.getElementById("texto-salmo").innerHTML = salmo.texto;
  document.getElementById("comentario-salmo").innerHTML = salmo.comentario;

  // impede pulo de tela
  document.getElementById("leitura-salmo").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

// ===============================
// VOLTAR PARA LISTA
// ===============================
function voltarLista() {
  document.getElementById("leitura-salmo").classList.add("d-none");
  document.getElementById("lista-salmos").classList.remove("d-none");

  document.getElementById("lista-salmos").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}
