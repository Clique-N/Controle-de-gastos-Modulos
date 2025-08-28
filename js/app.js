import { Categoria, ListaGastosPorCategoria } from "./classes.js";
import { valorNegativo, valorNulo, valorZerado, atualizarInterface } from "./utils.js";
const gastosPorCategoria = new ListaGastosPorCategoria (
    new Categoria("Alimentação"),
    new Categoria("Transporte"),
    new Categoria("Lazer"),
    new Categoria("Outros"),
)

const formulario = document.querySelector("form");

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault(); //Prevenção do comportamento padrão

    const valorInformado = formulario.elements.valor.value;
    const categoriaInformada = formulario.elements.categoria.value;

    if(valorNegativo(valorInformado)){
        alert("Valor inválido. O valor não pode ser negativo.");
        return;
    }
    if(valorNulo(valorInformado)){
        alert("Insira um valor númerico.");
        return;
    }
    if(valorZerado(valorInformado)){
        alert("Insira um número válido.");
        return;
    }
    const categoria = gastosPorCategoria.obterCategoriaPorNome(categoriaInformada);
    categoria.adicionarValor(valorInformado);

    atualizarInterface(gastosPorCategoria);
    formulario.reset();
})



