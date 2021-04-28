function calcular(){
    let texto = document.querySelector('#valor').value
    let text = document.querySelector('div#res')
    texto = texto.replace(/\s/g, '')
    texto = texto.split("")
    let contador = 1 
    let res = 0
    for(i = 0; i < texto.length; i++) {
        if (i == 0) {
            res = parseFloat(texto[i])
        }else {
            n = parseFloat(texto[i+1])
            operacao = texto[i]
            contador = 0
            switch(operacao) {
                case '+':
                    res += n
                    break
                case '-':
                    res -= n
                    break
                case 'x':
                    res *= n
                    break
                case '/':
                    res /= n
                    break
                
            }
        }
    }
    
    text.innerHTML = `${res}`
}