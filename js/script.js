const formulario = document.querySelector(".form");
const nome = document.querySelector(".name");
const numero = document.querySelector(".number");
//const btn = document.querySelector(".cadastrar");
const tabela = document.querySelector(".table");
let maisLinhas = "";

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  let linha = "<tr>";
  linha += `<td>${nome.value}</td> `;
  linha += `<td>${numero.value}</td>`;
  linha += "</tr>";

  maisLinhas += linha;
  tabela.innerHTML = maisLinhas;

  nome.value = "";
  numero.value = "";
});
