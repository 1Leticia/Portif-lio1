

function MostraInformatica() {
    document.getElementById("tabela").innerHTML = "<table>"+
    "<caption>Lista de Preços:</caption>"+
    "<thead>"+
    "<tr>"+
    "<th>Produtos</th><th>Preços</th><th>Descrição</th>"+
    "</tr>"+
    "<tr>"+
    "<td>Notebook Acer</td><td>R$ 1290,00</td><td>500HD Intel Core i7</td>"+
    "</tr>"+
    "<td>Ipad Apple</td><td>R$ 999,00</td><td>16 Gb iOS 8</td>"+
    "</tr>"+
    "<td>Impressora HP</td><td>R$ 299,00</td><td>Wi-Fi Scaner </td>"+
    "</tr>"+
    "<td>Mouse</td><td>R$ 30,00</td><td>Sem Fio </td>"+
    "</tr>"+
    "<td>Monitor</td><td>R$ 320,00</td><td>4k 3000</td>"+
    "</tr>"+
    "<td>HD Sansung</td><td>R$ 500,00</td><td>500HD</td>"+
    "</tr>"+
    "</table>";
}
    
function MostraAutomotivo() {
    document.getElementById("tabela").innerHTML = "<table>"+
    "<caption>Lista de Preços:</caption>"+
    "<thead>"+
    "<tr>"+
    "<th>Produtos</th><th>Preços</th><th>Descrição</th>"+
    "</tr>"+
    "<tr>"+
    "<td>Pneu Pireli</td><td>R$ 195,00</td><td>Aro 15</td>"+
    "</tr>"+
    "<td>Oleo Mobil</td><td>R$ 19,90</td><td>1 Litro</td>"+
    "</tr>"+
    "<td>Limpeza</td><td>R$ 299,00</td><td>Polimento </td>"+
    "</tr>"+
    "</table>";
    
}

function MostraBelezaSaude() {
    document.getElementById("tabela").innerHTML = "<table>"+
    "<caption>Lista de Preços:</caption>"+
    "<thead>"+
    "<tr>"+
    "<th>Produtos</th><th>Preços</th><th>Descrição</th>"+
    "</tr>"+
    "<tr>"+
    "<td>Camera Digital</td><td>R$ 1290,00</td><td>Profissional</td>"+
    "</tr>"+
    "<td>Filmadora</td><td>R$ 999,00</td><td>Semi Profissional</td>"+
    "</tr>"+
    "<td>Lente</td><td>R$ 299,00</td><td>55-180mm </td>"+
    "</tr>"+
    "</table>";
    
}

function EntrarAbrir() {
    document.getElementById("telaEntrar").style.display = 'block';
}

function EntrarOK() {
    document.getElementById("telaEntrar").style.display = 'none';
    return false;
}