
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

export class BoulderApi {
    getBoulderList(userID?: number){
        return fetch(baseUrl + "/boulder/" + userID, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        })
    }
}

export class BoulderInteractionApi {
    getBoulderInteractions(boulderId?: number){
        return fetch(baseUrl + "/boulderInteraction/" + boulderId, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        })
    }
}