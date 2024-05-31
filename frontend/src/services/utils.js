const SERVER_URL = 'http://localhost:4001'

export function createUrl(path){
    return `${SERVER_URL}/${path}`
}


export function createError(error){
    return{status : 'error', error}
}



// export function createSuccess(data){
//     return{status : 'success', data}
// }