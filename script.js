// ==========================================================
// CONTROLE DE GASTOS - script.js
// Agora é com você! Siga os passos na ordem e teste a cada um.
// Dica: abra o console do navegador (F12) para ver erros e testar.
// ==========================================================

// ----------------------------------------------------------
// PASSO 1: PEGAR OS ELEMENTOS DA PÁGINA
// (já feito para você ver o padrão: document.getElementById("id"))
// ----------------------------------------------------------
const form = document.getElementById('form-gasto');
const inputDescricao = document.getElementById('descricao');
const inputValor = document.getElementById('valor');
const selectCategoria = document.getElementById('categoria');
const listaGastos = document.getElementById('lista-gastos');
const mensagemVazia = document.getElementById('mensagem-vazia');
const totalGeral = document.getElementById('total-geral');
const totaisCategoria = document.getElementById('totais-categoria');
const filtroCategoria = document.getElementById('filtro-categoria');

// ----------------------------------------------------------
// PASSO 2: OS DADOS
// Os gastos ficam numa lista (array) de objetos.
// Cada gasto vai ter esta forma:
// { id: 1, descricao: 'Almoço', valor: 25.5, categoria: 'Comida' }
// ----------------------------------------------------------
let gastos = [];

// Função pronta: transforma 25.5 em "R$ 25,50".
function formatarMoeda(valor) {
  return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

form.addEventListener('submit', function (evento) {
  evento.preventDefault();
  console.log('formulário enviado!');
  console.log(inputDescricao.value);
  console.log(inputValor.value);
  console.log(selectCategoria.value);
  const novoGasto = {
    id: Date.now(),
    descricao: inputDescricao.value,
    valor: Number(inputValor.value),
    categoria: selectCategoria.value
  };
  gastos.push(novoGasto);
  form.reset();
  mostrarGastos();
});

function mostrarGastos() {
  listaGastos.innerHTML = '';

  gastos.forEach(function (gasto) {
    const li = document.createElement('li');
    li.classList.add('gasto');
    li.innerHTML = `
  <div class="gasto-info">
    <strong>${gasto.descricao}</strong>
    <span class="gasto-categoria">${gasto.categoria}</span>
  </div>
  <span class="gasto-valor">${formatarMoeda(gasto.valor)}</span>
  <button class="btn-remover" data-id="${gasto.id}" aria-label="Remover gasto">✕</button>
`;
    listaGastos.appendChild(li);
  });

    mensagemVazia.hidden = gastos.length > 0;
  calcularTotal();
}

mostrarGastos();

function removerGasto(id) {
  gastos = gastos.filter(function (gasto) {
    return gasto.id !== id;
  });
  mostrarGastos();
}

listaGastos.addEventListener('click', function (evento) {
  if (evento.target.classList.contains('btn-remover')) {
    const id = Number(evento.target.dataset.id);
    removerGasto(id);
  }
});

function calcularTotal() {
  const total = gastos.reduce(function (soma, gasto) {
    return soma + gasto.valor;
  }, 0);

  totalGeral.textContent = formatarMoeda(total);
}