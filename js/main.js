const cargador = ['Pium!','Pium!','Pium!','Pium!','Pium!','Pium!','Pium!']

let chauchat = (cargador,disparos) => {
    for (let i = 0 ; i < disparos ; i++ ){
        console.log(cargador[i])
        
    }
}

chauchat(cargador,3)



//ZONA PREMIUM

let chauchatPremium = (cargador,disparos) => {
    for (let i = 0 ; i < disparos ; i++ ){
            console.log(cargador[i]);

        
            if ((i + 1) % 3 == 0) {
                console.log(" ")
            }else if (i == Math.random()* 8) {
                console.log("Ih se quedo pillado")
                break

            }
        
    }
}

chauchatPremium(cargador,7)


