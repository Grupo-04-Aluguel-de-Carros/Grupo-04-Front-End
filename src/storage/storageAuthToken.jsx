import { AUTH_TOKEN_STORAGE } from "./storageConfig";

export async function storageAuthTokenSave(token){
    await localStorage.setItem(AUTH_TOKEN_STORAGE, token);
}

export async function storageAuthTokenGet(){
    const token = await localStorage.getItem(AUTH_TOKEN_STORAGE)

    return token;
}

export async function storageAuthTokenRemove(){
    await localStorage.removeItem(AUTH_TOKEN_STORAGE);
}
