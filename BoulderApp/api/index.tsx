import { IBoulder, IEditBoulder, INewBoulder } from "../src/data/entities/Boulder";

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



    createBoulder(newBoulder:INewBoulder){
        console.log('createBoulder')
        console.log(newBoulder)
        return fetch(baseUrl + "/boulder/", {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(newBoulder)

            
        }).then(console.log)
    }
    updateBoulder(updateBoulder:IEditBoulder,boulderID:number){
        console.log('updateBoulder')
        console.log(updateBoulder)
        return fetch(`${baseUrl}/boulder/${boulderID}`, {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(updateBoulder)

            
        }).then(console.log)
    }
    likeBoulder(boulderID:number, userId:number){
        console.log("LIKE")
        console.log(boulderID, userId)
        return fetch(`${baseUrl}/like/${boulderID}`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({userId:userId})
        }).then(console.log)
    }
    disLikeBoulder(boulderID:number, userId:number){
        console.log("DIS-LIKE")
        console.log(boulderID, userId)
        return fetch(`${baseUrl}/like/${boulderID}`, {
            method: 'DELETE',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({userId:userId})
        }).then(console.log)
    }
}

export class BoulderInteractionApi {
    getBoulderInteractions(boulderId?: number) {
        return fetch(baseUrl + "/boulderInteraction/" + boulderId, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        })
    }
}