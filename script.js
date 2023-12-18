const h1 = document.querySelector("h1")
const input1 = document.querySelector("#calculo1")
const input2 = document.querySelector("#calculo2")
const btn = document.querySelector("#btnCalcular")
const result = document.querySelector("#resultado")
const seleccion = document.querySelector("#seleccion")
const form = document.querySelector("#form")

form.addEventListener("click", Calculadora);


function Calculadora(event){
    
    //event.preventDefault();
    switch(seleccion.value){
        case "suma":
            result.innerText = "Resultado: " + (Number(input1.value) + Number(input2.value))
            break;
        case "resta":
            result.innerText = "Resultado: " + (Number(input1.value) - Number(input2.value))
            break;
        case "multiplicacion":
            result.innerText = "Resultado: " + (Number(input1.value) * Number(input2.value))
            break;
        case "division":
            result.innerText = "Resultado: " + (Number(input1.value) / Number(input2.value))
            break;
        default:
            alert("Operacion no valida.")
    
    }
}








