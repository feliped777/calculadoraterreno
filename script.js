const resultado = document.querySelector('#resultado');
const frente = document.querySelector('#frente');
const fundo = document.querySelector('#fundo');
const esquerda = document.querySelector('#esquerda');
const direita = document.querySelector('#direita');

function calcArea() {
  if (frente.value !== '' && fundo.value !== '' && esquerda.value !== '' && direita.value !== '') {
    const frente2 = parseFloat(frente.value);
    const fundo2 = parseFloat(fundo.value);
    const esquerda2 = parseFloat(esquerda.value);
    const direita2 = parseFloat(direita.value);

    if (!isNaN(frente2) && !isNaN(fundo2) && !isNaN(esquerda2) && !isNaN(direita2)) {
      var area1 = frente2 + fundo2;
      var area2 = esquerda2 + direita2;
      const result = area1/2 * area2/2;
      let classification = 'Metros Quadrados';

      resultado.innerHTML = `Área: ${result} ${classification}`;
    } else {
      resultado.innerHTML = 'Preencha todos os campos com valores numéricos';
    }
  } else {
    resultado.innerHTML = 'Preencha todos os campos';
  }
}
