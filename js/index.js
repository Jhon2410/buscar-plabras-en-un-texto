const search = document.querySelector('#search');
const text = document.querySelector("#text")
const results = document.querySelector(".resultados")

function normalizar(text) {
    results.innerHTML=""
    text = text.toLowerCase()
    text = text.replace(/\,/g, "")
    text = text.replace(/\./g, "")
    text = text.replace(/\)/g, "")
    text = text.replace(/\(/g, "")
    text = text.replace(/(\r\n|\n|\r)/gm, " ")
    text = text.split(" ")
    console.log(text)
    let dicionario = {}

    for (let texto of text) {
        if (dicionario[texto] !== undefined) {
            dicionario[texto].cantidad++
        } else {
        
            if(texto!==" " && texto !==""){
                dicionario[texto] = {
                nombre: texto,
                cantidad: 1
            }

            }
         
        }

    }
    for (let items in dicionario) {
        results.innerHTML += `<div class="resultadosDiv"><h4>${dicionario[items].nombre}</h4>  <h4> ${dicionario[items].cantidad}</h4> <br></div>`
    }
    console.log(dicionario)
}
search.addEventListener("click", () => {
  
    let texto = text.value
    normalizar(texto)


})