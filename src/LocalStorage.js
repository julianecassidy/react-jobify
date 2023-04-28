/**
 * dataItem:
 * - when token is changed, updates token and username in localStorage
 */
function LocalStorage(token){
    if(token!==null){
        localStorage.setItem("token", token);
    }
    else{
        localStorage.removeItem("token");
    }
    return token;

}
export default LocalStorage;