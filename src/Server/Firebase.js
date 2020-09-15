import app from 'firebase/app';
import 'firebase/auth';
import * as firebaseui from 'firebaseui';


var admin = require("firebase-admin");

var serviceAccount = require("path/to/serviceAccountKey.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://eddy-app-278d5.firebaseio.com"
});


class Firebase {
    constructor(){
        app.initializeApp(admin);
        this.auth = app.auth();
        this.autorization = app.auth;
        this.firebaseui = new firebaseui.auth.AuthUI(app.auth());
    }
}

export default Firebase;