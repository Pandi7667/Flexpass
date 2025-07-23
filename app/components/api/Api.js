import axios from "axios";
const apiUrl = process.env.NEXT_PUBLIC_API;
let Api = axios;
//console.log('ApiUrl',apiUrl);
export const GetAPI = async (url, callback) => {
    await Api.get(apiUrl + url).then(function(response){
    callback(response?.data);
    })
    .catch(function(error){
     callback(error?.response?.data);
    })
}

export const PostAPI = async ({url, data}, callback) => {
 await Api.post(apiUrl + url, data).then(function(response){
  callback(response?.data)
 })
 .catch(function(error){
callback(error?.response?.data);
 })
}

export const PatchAPI = async ({url, data}, callback) => {
    await Api.put(apiUrl + url, data).then(function(response){
        callback(response?.data);
    })
    .catch(function(error){
        callback(error?.response?.data);
    })
}

export const DeleteAPI = async ({url, data}, callback) =>{
await Api.delete(apiUrl + url, {data:data}).then(function(response){
    callback(response?.data)
})
.catch(function(error){
    callback(error?.response?.data)
})
}
