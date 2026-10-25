# Controle de Gastos

Aplicação web simples para anotar gastos, ver o total e acompanhar quanto foi gasto em cada categoria. Feita com HTML, CSS e JavaScript puro, sem frameworks.

**Veja funcionando:** [caiohenriquesousa96.github.io/controle-de-gastos](https://caiohenriquesousa96.github.io/controle-de-gastos/)

![Prévia do controle de Gastos](imagens/Screenshot_13.png)   

## Funcionalidades

- Adicionar gastos com descrição, valor e categoria
- Remover gastos da lista
- Total geral dos gastos
- Total por categoria
- Filtrar a lista por categoria (o total acompanha o filtro)
- Dados salvos no navegador, então não somem ao atualizar a página
- Layout responsivo, para computador e celular

## Tecnologias

- HTML5
- CSS3 (variáveis, Flexbox, Grid e media queries)
- JavaScript (manipulação do DOM, eventos, `filter`, `reduce`, `forEach` e `localStorage`)
- Git e GitHub Pages

## Como rodar no seu computador

1. Clone o repositório:

   ```bash
   git clone https://github.com/caiohenriquesousa96/controle-de-gastos.git
   ```

2. Abra a pasta e dê dois cliques no `index.html`, ou use a extensão Live Server do VS Code.

Não precisa instalar nada.

## Observações

Os gastos ficam salvos apenas no navegador de quem usa (`localStorage`). Não há servidor nem banco de dados, então a lista não aparece em outro navegador ou computador.

## O que eu aprendi

- Ler dados de um formulário e guardar em uma lista de objetos
- Criar elementos na tela com JavaScript e reagir a cliques e mudanças
- Usar `filter` e `reduce` para remover itens, somar valores e filtrar a lista
- Guardar e carregar dados com `localStorage`
- Publicar um projeto com Git, GitHub e GitHub Pages

## Próximos passos

- [ ] Importar gastos de um arquivo CSV
- [ ] Mostrar um gráfico por categoria com Chart.js
- [ ] Editar um gasto já cadastrado

## Sobre o projeto

Projeto de estudo, feito passo a passo com a ajuda do Claude (IA) como tutor. A estrutura inicial de HTML e CSS veio dele, e o JavaScript fui montando e testando por etapas.

## Autor

**Caio Henrique Sousa**

[GitHub](https://github.com/caiohenriquesousa96) · [LinkedIn](https://www.linkedin.com/in/caio-henrique-a35077245/)
