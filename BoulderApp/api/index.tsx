import { IBoulder, IEditBoulder, INewBoulder } from "../src/data/entities/Boulder";
import { INewBoulderInteraction, IUpdateBoulderInteraction } from "../src/data/entities/BoulderInteraction";

const baseUrl = "http://localhost:3000";
export class UserApi {
    loginUser(body: any){
        return fetch(baseUrl + "/user", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
    }
}

export class BoulderApi {
    entityURL = `${baseUrl}/boulder/`
    getBoulderList(userID: number){
        return fetch(`${this.entityURL}${userID}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
    }



    createBoulder(newBoulder:INewBoulder){
        // console.log('createBoulder')
        // console.log(newBoulder)
        return fetch(this.entityURL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(newBoulder)

            
        })
    }
    // updateBoulder(updateBoulder:IEditBoulder,boulderID:number){
    updateBoulder(updateBoulder:IEditBoulder){
        console.log('updateBoulder')
        console.log(updateBoulder)
        console.log(`${this.entityURL}${updateBoulder.boulderId}`)
        return fetch(`${this.entityURL}${updateBoulder.boulderId}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(updateBoulder)

            
        })
    }
    likeBoulder(boulderID:number, userId:number){
        // console.log("LIKE")
        // console.log(boulderID, userId)
        return fetch(`${baseUrl}/like/${boulderID}`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({userId:userId})
        })
    }
    disLikeBoulder(boulderID:number, userId:number){
        // console.log("DIS-LIKE")
        // console.log(boulderID, userId)
        return fetch(`${baseUrl}/like/${boulderID}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({userId:userId})
        })
    }
}

export class BoulderInteractionApi {
    entityURL = `${baseUrl}/boulderInteraction`
    getBoulderInteractions(boulderId?: number) {
        return fetch( this.entityURL +"/"+ boulderId, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
    }
    createAction(newAction:INewBoulderInteraction){
        return fetch(this.entityURL , {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(newAction)

            
        })
    }
    updateAction(updateAction:IUpdateBoulderInteraction){
        return fetch(this.entityURL +"/"+updateAction.interactionId, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(updateAction)

            
        })
    }
}


