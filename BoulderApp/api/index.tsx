
const baseUrl = "http://localhost:3000";
export class UserApi {
    loginUser(body: any){
        return fetch(baseUrl + "/user", {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
    }
}