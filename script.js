class Parquimetro{
    constructor(){
    this.tabelaPrecos = [
        {tempo: 30, valor: 1.00},
        {tempo: 60, valor: 1.75},
        {tempo: 120, valor: 3.00}
    ];
    }
calcularTempoEPreco(valorInserido) {
    if (valorInserido < 1.00) {
        return "Valor insuficiente. Insira pelo menos R$ 1.00";
    }
    
    let tempo = 0;
    let troco = valorInserido;

    for (let i = this.tabelaPrecos.length - 1; i >= 0; i--) {
        const item = this.tabelaPrecos[i];
        if (troco >= item.valor) {
            tempo = item.tempo;
            troco -= item.valor;
            break; // Para pegar o maior tempo possível
        }
    }

    return `Tempo de estacionamento: ${tempo} min\nTroco: R$ ${troco.toFixed(2)}`;
}
    }
    //Criando Instância do Parquimetro
    const parquimetro = new Parquimetro();

    // Capturando input do usuario
  document.getElementById("calcular").addEventListener("click", function(){
    const valorInserido = parseFloat(document.getElementById("valor").value);
    const resultado = parquimetro.calcularTempoEPreco(valorInserido);
    document.getElementById("resultado").innerText = resultado;
});
