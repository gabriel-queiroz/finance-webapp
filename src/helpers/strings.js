export const formatCurrencyBRL = (value) => {
    if(value){
    return `R$ ${value.toFixed(2).toString().replace('.',',')}`
    }
    else{
        return ""
    }
}