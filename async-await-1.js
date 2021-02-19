const soma = (a,b,callback) => {
    callback(a+b);
}

const calcPromise = new Promise((resolve, reject) => {
    return soma(4,5, result => resolve(result))
})

const execute = async() => {
    const result = await calcPromise;
    console.log(result)
}
execute();