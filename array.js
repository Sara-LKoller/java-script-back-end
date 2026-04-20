function buscarTermo(array, termo) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === termo) {
      return true;
    }
  }
  return false;
}

const frutas = ["Maçã", "Banana", "Uva", "Manga"];
const termoProcurado = "Uva";

console.log(`O termo "${termoProcurado}" existe no array? ${buscarTermo(frutas, termoProcurado)}`);