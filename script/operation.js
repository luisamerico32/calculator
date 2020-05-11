let num = document.getElementById("num");
let op = document.getElementById("op");
valores = [];

function adicionar(x) {
    num.value += x
    op.innerHTML += x
    num.focus();
}

function opera(x) {
    op.innerHTML += x    
    valores.push(num.value)
    valores.push(x)
    num.value = ""
    num.focus()
}

function del() {
    valores = []
    op.innerHTML = ""
    num.value = ""
}

function calcular() {
    if(num.value.length >= 1) {
        valores.push(num.value)
        let num1 = valores[0]
        let operator = valores[1]
        let num2 = valores[2]
        if (operator == '+') {
            let res = Number(num1) + Number(num2)
            num.value = res            
        } else if (operator == '*') {
            let res = Number(num1) * Number(num2)
            num.value = res            
        } else if (operator == '-') {
            let res = Number(num1) - Number(num2)
            num.value = res            
        }                
        valores = []
        op.innerHTML = num.value
        num.focus()
    }
}
