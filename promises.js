const soma = (a,b,callback) => {
    callback(a+b);
}

const resultadoSoma = new Promise((resolve, reject) => {
    return soma(4,5, result => resolve(result))
})

resultadoSoma.then(result => {

})