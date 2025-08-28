//Funções utilitarias
const obterElemento = (id) => document.getElementById(id);
const formataMoeda = (valor) => valor.toFixed(2).replace('.',',');

export const valorNegativo = (valor) => valor < 0;

export const valorNulo = (valor) => valor === "";

export const valorZerado = (valor) => valor == 0; 

export const atualizarInterface = (gastosPorCategoria) => {

    const categorias = gastosPorCategoria.categorias;


    categorias.forEach(({nome, valor}) =>{
        const elemento = obterElemento(nome);
        elemento.textContent = `${nome}: R$ ${formataMoeda(valor)}`
    });

    const elementoTotal = obterElemento("Total");
    elementoTotal.textContent = `Total: R$ ${formataMoeda(gastosPorCategoria.obterTotal())}`
}