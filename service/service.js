import fatosHistoricos from '../dados/fatos.js';

function servicoValidaAno (ano) {
    if(isNaN(ano)) {
        return false;
    } else {
        if(ano >= 1920 && ano <= 2020) {
            return true;
        } else {
            return false;
        }
    }
}

function servicoBuscarFatoPorAno (ano) {
    let fatoSelecionado = fatosHistoricos.find(fato => {
        return fato.Ano == ano;
    });
    return fatoSelecionado.Fato;
}

export {servicoBuscarFatoPorAno, servicoValidaAno};