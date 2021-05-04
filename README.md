# GMC_SS21_BoulderApp
This App was created in context of the course "Grundlagen Mobile Computing" at FH Campus02. 

For dev follow those steps. 
1. Install new Version of Node.JS
2. npm install -g expo-cli
3. cd BoulderApp-Frontend
4. npm install 
5. npm run web
6. Happy Coding

Backend will follow the next days


# Setup
[Environment Setup](https://reactnative.dev/docs/environment-setup)
## Android
## IOS
On IOS there can be a lot of problems with the basic setup.
### 
Inside of the folder BoulderApp
```
yarn install
npx react-native start
cd ios && pod install && cd ..
npx react-native run-ios
```
## IOS Error messages
### Unrecognized font family 'Material Design Icons'
Follow this easy steps [LINK](https://reactnativecode.com/unrecognized-font-family-material-design-icons/)

![error message image](https://reactnativecode.com/wp-content/uploads/2020/12/Unrecognized_Font_Family.png "Unrecognized font family 'Material Design Icons IOS Error message'" )

# Backend
## Technologies
- Maria SQL-DB
- ... Server
- REST-API interfaces

## Server Endpoints
Für alle POST und POT Calls wird die UserID als Parameter mitgesendet
```
Boulder
Object
    BoulderDetails: Object
    Like: boolean
    Action: Action [
        Object,
    ]

_api/boulder/                         GET  - UC03     -> alle Boulder ohne Einschränkung returnen tkes UserId as parameter
_api/boulderDetail/{id}               PUT  - UC10     -> spezifischen Boulder updaten und returnen                                         
_api/boulderDetail                    POST - UC08     -> neuen Boulder erstellen und returnen

Boulder Interaktionen
_api/boulderInteraction               GET  - UC10     -> boulderId als parameter 
                                                         Boulder Interaktionen für gewählten Boulder returnen
_api/boulderInteraction/{id}          PUT  - UC06     -> spezifische Boulderinteraktion updaten und returnen
_api/boulderInteraction/              POST - UC06     -> neue Boulderinteraktion erstellen und returnen


Like
_api/like/{boulderID}                 POST - UC11     -> userID als Parameter like erstellen
_api/like/{boulderID}                 DELETE - UC11   -> userID als Parameter like entfernen
      
User      
_api/user                             GET  - UC02     -> Email & Passwort als Parameter mitgesendet 
                                                         returned userID

```

### Resources
[Swagger Editor](https://editor.swagger.io/)
- 