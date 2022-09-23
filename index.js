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

const carro1 = {
    nome: "SUPRA",
    marca:"TOYOTA",
    potencia1: 330,
    eletrico1: false,
    motorizacao:["6 cilindros em linha", "turbo", "gasolina","441 Nm de torque"]
}

const carro2 = { 
    nome: "GOLF R32",
    marca: "VOLKSWAGEN",
     potencia2:  200,
    eletrico2: false,
    motorizacao: ["V6", "turbo", "Gasolina", , "27kgfm de Torque" ]
}

const carro3 = {
     nome: "Model S",
     marca:"TESLA",
     potencia3: 1034,
     eletrico3: true,
     motorizacao:["3 motores, Ambos Eletricos", "145,2 kgfm de torque" ]

}






//```````````3* DA SEGUNDA SEMANA````````
const carros =[]
carros.push(carro1,carro2,carro3)
console.log(carros)

//`````````````````````````````````````````







//````````````4* DA SEGUNDA SEMANA``````````
if(carro1.eletrico1 && carro3.eletrico3 === true){
    console.log()
}else{
    alert( carro1.nome +" E "+ carro3.nome +" NÃO USAM O MESMO COMBUSTIVEL")
}
//``````````````````````````````````````````````







//````````````5* DA SEGUNDA SEMANA``````````//
if (carro1.eletrico1 && carro2.eletrico2 && carro3.eletrico3 === true){
   alert("Todos são ELETRICOS")

   if (carro3.eletrico3 === true){
    alert(`${carro3.nome}É ELÉTRICO`)
   }else{
    alert(`${carro3.nome} NÃO É ELÉTRICO`)
   }
} 

// //else{
//    alert("Nem todos são false")
// } 
//``````````````````````````````````````````````````//


