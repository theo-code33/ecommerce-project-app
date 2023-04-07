export const getToken = () => {
    return localStorage.getItem("token");
}

export const setTokenFunction = (token: string) => {
    return localStorage.setItem("token", token);
}

export const removeToken = () => {
    return localStorage.removeItem("token");
}