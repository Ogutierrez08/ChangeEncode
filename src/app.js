// VARIABLES
let fs = require('fs')
let ventas = []
let clientes = []
let stock = []
let vendedores = []
let productos = []
let wDataV = []
let wDataC = []
let wDataS = []
let wDataVen = []
let wDataP = []
let dataFormat = []

// ARGUMENTOS - CARPETA DONDE SE ENCUENTRAN LOS ARCHIVOS / CARPETA DONDE SE COLOCARAN LOS ARCHIVOS FORMATEADOS
let argumentos = process.argv.slice(2)
let [input,output] = argumentos

//FUNCION - FORMATEANDO VENTAS
let formatDataV = (arrayD,currentIndex,output,archivo,onSuccess) => {
    if(currentIndex<arrayD.length){
        wDataV.push(arrayD[currentIndex])
        formatDataV(arrayD,currentIndex+1,output,archivo,onSuccess)
    }
    else{
        fs.writeFileSync(`${output}/${archivo}.csv`,wDataV.map((data) => {
            return Object.values(data).join('|') + '\n'
          }).join(''))
        console.log(`ARCHIVO ${archivo} A SIDO FORMATEADO...`)
        onSuccess()
    }
}

//FUNCION - FORMATEANDO CLIENTES
let formatDataC = (arrayD,currentIndex,output,archivo,onSuccess) => {
    if(currentIndex<arrayD.length){
        wDataC.push(arrayD[currentIndex])
        formatDataC(arrayD,currentIndex+1,output,archivo,onSuccess)
    }
    else{
        fs.writeFileSync(`${output}/${archivo}.csv`,wDataC.map((data) => {
            return Object.values(data).join('|') + '\n'
          }).join(''))
        console.log(`ARCHIVO ${archivo} A SIDO FORMATEADO...`)
        onSuccess()
    }
}

//FUNCION - FORMATEANDO PRODUCTOS
let formatDataP = (arrayD,currentIndex,output,archivo,onSuccess) => {
    if(currentIndex<arrayD.length){
        wDataP.push(arrayD[currentIndex])
        formatDataP(arrayD,currentIndex+1,output,archivo,onSuccess)
    }
    else{
        fs.writeFileSync(`${output}/${archivo}.csv`,wDataP.map((data) => {
            return Object.values(data).join('|') + '\n'
          }).join(''))
        console.log(`ARCHIVO ${archivo} A SIDO FORMATEADO...`)
        onSuccess()
    }
}

//FUNCION - FORMATEANDO VENDEDORES
let formatDataVen = (arrayD,currentIndex,output,archivo,onSuccess) => {
    if(currentIndex<arrayD.length){
        wDataVen.push(arrayD[currentIndex])
        formatDataVen(arrayD,currentIndex+1,output,archivo,onSuccess)
    }
    else{
        fs.writeFileSync(`${output}/${archivo}.csv`,wDataVen.map((data) => {
            return Object.values(data).join('|') + '\n'
          }).join(''))
        console.log(`ARCHIVO ${archivo} A SIDO FORMATEADO...`)
        onSuccess()
    }
}

//FUNCION - FORMATEANDO STOCK
let formatDataS = (arrayD,currentIndex,output,archivo,onSuccess) => {
    if(currentIndex<arrayD.length){
        wDataS.push(arrayD[currentIndex])
        formatDataS(arrayD,currentIndex+1,output,archivo,onSuccess)
    }
    else{
        fs.writeFileSync(`${output}/${archivo}.csv`,wDataS.map((data) => {
            return Object.values(data).join('|') + '\n'
          }).join(''))
        console.log(`ARCHIVO ${archivo} A SIDO FORMATEADO...`)
        onSuccess()
    }
}

// LECTURA DE ARCHIVOS - STRUCTURANDO ARRAYS
let data = fs.readFileSync(`${input}/ventas.csv`,'utf16le')
let arrayData = data.split('\n')
arrayData.map(element => {
    dataFormat.push(element.split('|'))
    })
dataFormat.map( element => {
    ventas.push(element)
    })

//FORMATEO DE DATA - LLAMANDO A LAS FUNCIONES

formatDataV(ventas,0,`${output}`,'VENTAS',() => {
    // LECTURA DE ARCHIVOS - STRUCTURANDO ARRAYS
    let data = fs.readFileSync(`${input}/clientes.csv`,'utf16le')
    let arrayData = data.split('\n')
    let dataFormat = []  //LIMPIANDO ARRAY
    arrayData.map(element => {
        dataFormat.push(element.split('|'))
        })
    dataFormat.map( element => {
        clientes.push(element)
        })
    formatDataC(clientes,0,`${output}`,'CLIENTES',() => {
        // LECTURA DE ARCHIVOS - STRUCTURANDO ARRAYS
        let data = fs.readFileSync(`${input}/productos.csv`,'utf16le')
        let arrayData = data.split('\n')
        let dataFormat = [] //LIMPIANDO ARRAY
        arrayData.map(element => {
            dataFormat.push(element.split('|'))
            })
        dataFormat.map( element => {
            productos.push(element)
            })
        formatDataP(productos,0,`${output}`,'PRODUCTOS',() => {
            // LECTURA DE ARCHIVOS - STRUCTURANDO ARRAYS
            let data = fs.readFileSync(`${input}/vendedores.csv`,'utf16le')
            let arrayData = data.split('\n')
            let dataFormat = [] //LIMPIANDO ARRAY
            arrayData.map(element => {
                dataFormat.push(element.split('|'))
                })
            dataFormat.map( element => {
                vendedores.push(element)
                })
            formatDataVen(vendedores,0,`${output}`,'VENDEDORES',() => {
                // LECTURA DE ARCHIVOS - STRUCTURANDO ARRAYS
                let data = fs.readFileSync(`${input}/stock.csv`,'utf16le')
                let arrayData = data.split('\n')
                let dataFormat = [] //LIMPIANDO ARRAY
                arrayData.map(element => {
                    dataFormat.push(element.split('|'))
                    })
                dataFormat.map( element => {
                    stock.push(element)
                    })
                formatDataS(stock,0,`${output}`,'STOCK',() => {
                    console.log('PROCESO FINALIZADO...')
                })
            })
        })
    })
})






