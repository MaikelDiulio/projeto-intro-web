//_______________________________________SEMANA 1___________________________________________

// const nome1 = "SUPRA"
// const marca1 ="TOYOTA"
// const potencia1 = 330
// const eletrico1 = false
// const motorizacao1 =["6 cilindros em linha", "turbo", "gasolina","441 Nm de torque"]

// const nome2 = "GOLF R32"
// const marca2 = "VOLKSWAGEN"
// const potencia2 = 200
// const eletrico2 =false
// const motorizacao2 =["V6", "turbo", "Gasolina", , "27kgfm de Torque" ]

// const nome3 = "Model S"
// const marca3 ="TESLA"
// const potencia3 = 1034
// const eletrico3 = true
// const motorizacao3 =["3 motores, Ambos Eletricos", "145,2 kgfm de torque" ]

// const media = ((potencia1+potencia2+potencia3)/3)
// console.log(`O valor da média é ${media}`)
// // console.log("Essa é a média dos laçamentos dos carros " + media)






//________________________________________SEMANA 2_________________________________________________________________

// const carro1 = {
//     nome: "SUPRA",
//     marca:"TOYOTA",
//     potencia1: 330,
//     eletrico1: false,
//     motorizacao:["6 cilindros em linha", "turbo", "gasolina","441 Nm de torque"]
// }

// const carro2 = { 
//     nome: "GOLF R32",
//     marca: "VOLKSWAGEN",
//      potencia2:  200,
//     eletrico2: false,
//     motorizacao: ["V6", "turbo", "Gasolina", , "27kgfm de Torque" ]
// }

// const carro3 = {
//      nome: "Model S",
//      marca:"TESLA",
//      potencia3: 1034,
//      eletrico3: true,
//      motorizacao:["3 motores, Ambos Eletricos", "145,2 kgfm de torque" ]

// }






//```````````3* DA SEGUNDA SEMANA````````
// const carros =[]
// carros.push(carro1,carro2,carro3)
// console.log(carros)

//`````````````````````````````````````````







//````````````4* DA SEGUNDA SEMANA``````````
// if(carro1.eletrico1 && carro3.eletrico3 === true){
//     console.log()
// }else{
//     alert( carro1.nome +" E "+ carro3.nome +" NÃO USAM O MESMO COMBUSTIVEL")
// }
//``````````````````````````````````````````````







//````````````5* DA SEGUNDA SEMANA``````````//
// if (carro1.eletrico1 && carro2.eletrico2 && carro3.eletrico3 === true){
//    alert("Todos são ELETRICOS")

//    if (carro3.eletrico3 === true){
//     alert(`${carro3.nome}É ELÉTRICO`)
//    }else{
//     alert(`${carro3.nome} NÃO É ELÉTRICO`)
//    }
// } 

// //else{
//    alert("Nem todos são false")
// } 
//``````````````````````````````````````````````````//


//________________________________SEMANA 3______________________________________
//´´´´´´´´´´´´´´´´´´´´´´´´´1&2 semana3´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´
// let objetoEmString = ""

// carro1.motorizacao.map((motorizacao, index) =>{
//   objetoEmString+= carro2.motorizacao.length-1 !== index ? `${motorizacao},`: `${motorizacao}`
// })

// carro1.motorizacao = objetoEmString
// console.log(carro1)

// //´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´


// let objetoEmString2 = ""

// carro2.motorizacao.map((motorizacao, index) =>{
//   objetoEmString2+= carro2.motorizacao.length-1 !== index ? `${motorizacao},`: `${motorizacao}`
// })

// carro2.motorizacao = objetoEmString2
// console.log(carro2)


//```````````````````````````````````````````````````````````


// let objetoEmString3 = ""

// carro3.motorizacao.map((motorizacao, index) =>{
//   objetoEmString3+= carro3.motorizacao.length-1 !== index ? `${motorizacao},`: `${motorizacao}`
// })

// carro3.motorizacao = objetoEmString3
// console.log(carro3)
//´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´







//`````````````````````````````````````````````````````3* SEMANA 3´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´

// function stringDeCarros(carro){
//     for(valor in carro){
//         console.log(`"${valor}": "${carro[valor]}"`)
//     }
// }

// console.log("__________________________________________________________")
// stringDeCarros(carro1)
// console.log("__________________________________________________________")
// stringDeCarros(carro2)
// console.log("__________________________________________________________")
// stringDeCarros(carro3)
// console.log("__________________________________________________________")

// //´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´

// //`````````````````````````````````````````4* SEMANA 3```````````````````````````````````````

// let arrayDeCarros = [
//       {
//         nome: "SUPRA",
//         marca:"TOYOTA",
//         potencia1: 330,
//         eletrico1: false,
//         motorizacao:["6 cilindros em linha", "turbo", "gasolina","441 Nm de torque"]
//     },
//        { 
//         nome: "GOLF R32",
//         marca: "VOLKSWAGEN",
//          potencia2:  200,
//         eletrico2: false,
//         motorizacao: ["V6", "turbo", "Gasolina", , "27kgfm de Torque" ]
//     },
//       {
//          nome: "Model S",
//          marca:"TESLA",
//          potencia3: 1034,
//          eletrico3: true,
//          motorizacao:["3 motores, Ambos Eletricos", "145,2 kgfm de torque" ]
    
//     }
// ]

// let pesquisa = prompt("Digite o nome do carro desejado:").toUpperCase().toLowerCase()

// function pesquisaCarro(arrayDeCarros, nome) {
//     let itensEncontrados = 0
//     for(i of arrayDeCarros) {
//         // console.log(comida, nome)
//         if(i.nome.toLowerCase() === nome.toLowerCase()) {
//            console.log(i)
//            itensEncontrados++
//         }
//     }

//     if(itensEncontrados === 0) {
//       alert("Nenhum item encontrado!")
//     }
// }

// pesquisaCarro(arrayDeCarros, pesquisa)

//``````````````````````````````````````````````````````````````````````````````````````````````````````````````

//DOM//


function todososatores(){
  let input = document.getElementById('searchbar').value
  input=input.toLowerCase();
  let x = document.getElementsByClassName("todososatores");
    
  for (i = 0; i < x.length; i++) { 
      if (!x[i].innerHTML.toLowerCase().includes(input)) {
          x[i].style.display="none";
      }
      else {
          x[i].style.display="block";                 
      }
  }
}