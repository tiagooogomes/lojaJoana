const arrayDaTabela = [
    
];
const tempoDoDia = 1000 * 3600 * 24;
// let nomeDoCliente = document.getElementById('nomeDoCliente').value;


const dadosFornecidos = () => ({

    cliente : document.getElementById("nomeDoCliente").value,
    vencimento : document.getElementById('dataDoVencimento').value,
    valor : parseFloat(document.getElementById('valorDaCompra').value),
    total: ""
});

function limpardados() {
    let limp = document.getElementById("tabela2");
    limp.innerHTML = "";
}

function adicionarNaPagina(item){

    let clienteTr = document.createElement("tr");

    let clienteTd = document.createElement("td");
    let vencimentoTd = document.createElement("td");
    let valorTd = document.createElement("td");
    let totaTd = document.createElement("td");

    clienteTd.textContent = item.cliente;
    vencimentoTd.textContent = item.vencimento;
    valorTd.textContent = item.valor;
    totaTd.textContent = item.total;

    clienteTr.appendChild(clienteTd);
    clienteTr.appendChild(vencimentoTd);
    clienteTr.appendChild(valorTd);
    clienteTr.appendChild(totaTd);

    let tabela = document.getElementById("tabela2");

    tabela.appendChild(clienteTr);

    console.log("FUNCIONA")
}


function inserirArray(){
   
    arrayDaTabela.push(dadosFornecidos());
    console.log(document.getElementById('nomeDoCliente').value);
    
    limpardados();
    arrayDaTabela.forEach(adicionarNaPagina);
    
    console.log(dadosFornecidos);
    console.log(arrayDaTabela);
    console.log(document.getElementById('dataDoVencimento').value)
    console.log(Date()); 
}


function adiconarJuros(){

    limpardados();
    let jurosCalculado = arrayDaTabela.map(function(item, indice){

        const hoje = new Date();
        const vence = new Date(item.vencimento);

        console.log(vence);
        let diferencaDeDias = (hoje.getTime() - vence.getTime()) / tempoDoDia;
        let taxa = (diferencaDeDias * 0.001) + 0.02;
        let valorCompra = item.valor;
        let totalPagar = "";
        
        console.log(diferencaDeDias);

        if(diferencaDeDias > 0){
            totalPagar = valorCompra + valorCompra * taxa;
            console.log("É MAIOR");
        }else{
            totalPagar = valorCompra
        }

        item.total = totalPagar;
        console.log(arrayDaTabela);

       
        adicionarNaPagina(item);

    });
}