
const form = document.getElementById('form-gasto');
const inputDescricao = document.getElementById('descricao');
const inputValor = document.getElementById('valor');
const selectCategoria = document.getElementById('categoria');
const listaGastos = document.getElementById('lista-gastos');
const mensagemVazia = document.getElementById('mensagem-vazia');
const totalGeral = document.getElementById('total-geral');
const totaisCategoria = document.getElementById('totais-categoria');
const filtroCategoria = document.getElementById('filtro-categoria');

let gastos = JSON.parse(localStorage.getItem('gastos')) || [];

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
  salvarGastos();
  form.reset();
  mostrarGastos();
});

function mostrarGastos() {
  listaGastos.innerHTML = '';

  const categoriaEscolhida = filtroCategoria.value;

const gastosFiltrados = gastos.filter(function (gasto) {
  return categoriaEscolhida === 'todas' || gasto.categoria === categoriaEscolhida;
});

  gastosFiltrados.forEach(function (gasto) {
    const li = document.createElement('li');
    li.classList.add('gasto');
    li.innerHTML = `
      <div class="gasto-info">
        <strong></strong>
        <span class="gasto-categoria"></span>
      </div>
      <span class="gasto-valor"></span>
      <button class="btn-remover" aria-label="Remover gasto">✕</button>
    `;

    li.querySelector('strong').textContent = gasto.descricao;
    li.querySelector('.gasto-categoria').textContent = gasto.categoria;
    li.querySelector('.gasto-valor').textContent = formatarMoeda(gasto.valor);
    li.querySelector('.btn-remover').dataset.id = gasto.id;
    listaGastos.appendChild(li);
  });

    mensagemVazia.hidden = gastosFiltrados.length > 0;
  calcularTotal(gastosFiltrados);
  calcularTotaisPorCategoria();
}

mostrarGastos();

function removerGasto(id) {
  gastos = gastos.filter(function (gasto) {
    return gasto.id !== id;
  });
  salvarGastos();
  mostrarGastos();
}

filtroCategoria.addEventListener('change', mostrarGastos);

listaGastos.addEventListener('click', function (evento) {
  if (evento.target.classList.contains('btn-remover')) {
    const id = Number(evento.target.dataset.id);
    removerGasto(id);
  }
});

function calcularTotal(lista) {
  const total = lista.reduce(function (soma, gasto) {
    return soma + gasto.valor;
  }, 0);

  totalGeral.textContent = formatarMoeda(total);
}

function calcularTotaisPorCategoria() {
  const totais = {};

  gastos.forEach(function (gasto) {
    totais[gasto.categoria] = (totais[gasto.categoria] || 0) + gasto.valor;
  });

    totaisCategoria.innerHTML = '';

  Object.keys(totais).forEach(function (categoria) {
    const chip = document.createElement('div');
    chip.classList.add('chip');
    chip.innerHTML = `
      <span>${categoria}</span>
      <strong>${formatarMoeda(totais[categoria])}</strong>
    `;
    totaisCategoria.appendChild(chip);
  });
}

function salvarGastos() {
  localStorage.setItem('gastos', JSON.stringify(gastos));
} 