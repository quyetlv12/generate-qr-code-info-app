import HttpClient from "./apis/httpClient"

export const UserService = {
    createInfo(data){
       return HttpClient.post('/users' , data)
    },
    updateInfo(id , data){
        return HttpClient.put(`/users/${id}` , data)
    }
}