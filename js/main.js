function resultado(){

    //OBTENDO OS CAMPOS DO DOCUMENTO
    let numero = (document.getElementById('numero').value)
    let pulacasa = parseInt(document.getElementById('pulacasa').value)
    let result = document.getElementById('result')
    let total = []

    //EXPRESSÃO REGULAR PARA INTEIROS
    const regExp = /^[0-9]+$/;
    let x = regExp.exec(numero)

    if (x){
            for (i = 1; i < numero; i++){
                if (i*pulacasa <= numero){
                    console.log(total.push(contagem = i*pulacasa))}
                
                //IMPRIMINDO NA TELA
                result.innerHTML = `Resultados: ${total}`
                console.log(x);
            }    
        } else {
            alert('Favor inserir um número inteiro 👍')}
        
    

    //APLICANDO VALIDAÇÃO DOS CAMPOS
    if (pulacasa > numero || numero == 0){
        alert('Valores inválidos, favor verificar os campos 👍')}

    //REALIZANDO CONTAGEM PARA OS RESULTADOS
}