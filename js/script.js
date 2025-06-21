// Função que aplica o tema claro
function aplicarTemaClaro() {
  localStorage.setItem("tema", "light");
  document.body.style.backgroundColor = "#F5F5F5";
  document.documentElement.style.backgroundColor = "#F5F5F5";
  document.documentElement.style.color = "black";
  document.querySelector("header").style.backgroundColor = "rgb(235, 235, 235)";
  document.querySelectorAll(".imagens_header button, .bloco, .formulario")
    .forEach(el => el.style.backgroundColor = "rgb(235, 235, 235)");
  document.querySelectorAll(".formulario input, .formulario textarea, .formulario select")
    .forEach(el => {
      el.style.backgroundColor = "rgb(220, 220, 220)";
      el.style.color = "black";
    });
  document.querySelectorAll(".divisor").forEach(el => el.style.backgroundColor = "#000");
  document.querySelectorAll(".divisor_h").forEach(el => el.style.backgroundColor = "#d4d4d4");
  document.querySelectorAll("footer")
    .forEach(el => el.style.backgroundColor = "rgb(235, 235, 235)");
  document.querySelectorAll(".footer-icons img, #cadeado, .bloco img, .imagens_header img")
    .forEach(img => img.style.filter = "invert(0)");
  document.querySelectorAll("h2, h3, p, li, #nome, label, option, select, input, .links_paginas a, #ciber, footer p")
    .forEach(el => el.style.color = "black");
  document.querySelectorAll(".fundoepd").forEach(el => {
    el.style.backgroundImage = "";
    el.style.backgroundRepeat = "";
    el.style.backgroundPosition = "";
    el.style.backgroundSize = "";
  });
  const logo = document.querySelector(".logo_upf");
  if (logo) logo.src = "img/logo UPF.png";
}

// Função que aplica o tema escuro
function aplicarTemaEscuro() {
  localStorage.setItem("tema", "dark");
  document.body.style.backgroundColor = "#181818";
  document.documentElement.style.backgroundColor = "#181818";
  document.documentElement.style.color = "white";
  document.querySelector("header").style.backgroundColor = "#1f1f1f";
  document.querySelectorAll(".imagens_header button, .bloco, .formulario")
    .forEach(el => el.style.backgroundColor = "#1f1f1f");
  document.querySelectorAll(".formulario input, .formulario textarea, .formulario select")
    .forEach(el => {
      el.style.backgroundColor = "#292929";
      el.style.color = "white";
    });
  document.querySelectorAll(".divisor, .divisor_h")
    .forEach(el => {
      el.style.backgroundColor = "#292929";
      el.style.color = "white";
    });
  document.querySelectorAll("footer")
    .forEach(el => el.style.backgroundColor = "#1f1f1f");
  document.querySelectorAll(".footer-icons img, #cadeado, .bloco img, .imagens_header img")
    .forEach(img => img.style.filter = "invert(1)");
  document.querySelectorAll("h2, h3, p, li, #nome, label, option, select, input, .links_paginas a, #ciber, footer p")
    .forEach(el => el.style.color = "white");
  document.querySelectorAll(".fundoepd").forEach(el => {
  el.style.backgroundImage =
    'linear-gradient(rgba(24, 24, 24, 0.8), rgba(24, 24, 24, 0.8)), url("img/wpp site cibersegurança epd.png")';
  el.style.backgroundRepeat = "no-repeat";
  el.style.backgroundPosition = "bottom left";
  el.style.backgroundSize = "25% auto";
});
  const logo = document.querySelector(".logo_upf");
  if (logo) logo.src = "img/upf logo white.png";
}

// Alterna tema
function mudarTema() {
  const temaAtual = localStorage.getItem("tema");
  if (temaAtual === "dark") aplicarTemaClaro();
  else aplicarTemaEscuro();
}

// Mantém carregada a página
document.addEventListener("DOMContentLoaded", () => {
  const temaSalvo = localStorage.getItem("tema");
  if (temaSalvo === "dark") aplicarTemaEscuro();
  else aplicarTemaClaro();
});
 
// chama a função de notificação quando clicar no btnEnviar
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btnEnviar");
  if (btn) btn.addEventListener("click", botaoEnviar);
});
function botaoEnviar(event) {
  event.preventDefault();
  const btn = event.currentTarget;
  const rect = btn.getBoundingClientRect();
  const notif = document.createElement("div");
  notif.classList.add("notificacao");
  notif.style.visibility = "hidden";
  notif.innerHTML = `
    <img src="img/pc-display.svg" alt="Página em construção">
    <p>Página em construção</p>
  `;
  document.body.appendChild(notif);
  const nW = notif.offsetWidth;
  const nH = notif.offsetHeight;
  const top  = window.scrollY + rect.top - nH - 10;
  const left = window.scrollX + rect.left + (rect.width - nW) / 2;
  notif.style.top = `${top}px`;
  notif.style.left = `${left}px`;
  notif.style.visibility = "visible";
  function removeNotif() {
    notif.classList.add("fadeOut");
    notif.addEventListener("animationend", () => {
      notif.remove();
      document.removeEventListener("click", outsideClick);
    });
  }
  function outsideClick(e) {
    if (!notif.contains(e.target) && e.target !== btn) removeNotif();
  }
  document.addEventListener("click", outsideClick);
  setTimeout(removeNotif, 3000);
}

// acessibilidade
function acessibilidadeNavegador() {
    document.body.classList.toggle('acessibilidade');

    // Salvar no localStorage se está ativado ou não
    if (document.body.classList.contains('acessibilidade')) {
        localStorage.setItem('acessibilidadeAtiva', 'true');
    } else {
        localStorage.setItem('acessibilidadeAtiva', 'false');
    }
}

// Verificar quando a página carrega
window.addEventListener('DOMContentLoaded', function() {
    if (localStorage.getItem('acessibilidadeAtiva') === 'true') {
        document.body.classList.add('acessibilidade');
    }
});