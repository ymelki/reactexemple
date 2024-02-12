 

/**
 * Sauvegarde du token dans le localStorage
 * @param {string} token 
 */
let saveToken = (token) => {
    localStorage.setItem('token', token)
}

/**
 * Suppression du token du localStorage
 */
let logout = () => {
    localStorage.removeItem('token')
}

/**
 * Etat de la présence d'un token en localStorage
 * @returns {boolean}
 */
let isLogged = () => {
    let token = localStorage.getItem('token')
    return !!token
}

/**
 * Récupération brut du token en localStorage
 * @returns {string}
 */
let getToken = () => {
    return localStorage.getItem('token')
}


// Déclaration des serivces pour import
export const accountService = {
     saveToken, logout, isLogged, getToken
}