// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { initializeApp } from "@angular/fire/app";

export const environment = {
  production: false,
  API_KEY:"706678183a3adde83b3c45b0eeb7cf3d",
  API_URL:"https://api.openweathermap.org/data/2.5/",

  firebase: {
    apiKey: "AIzaSyA_AZHBYW2uGILjSXOSUkQ5SlmWE5qLR9k",
    authDomain: "gdi-places-app-a33a5.firebaseapp.com",
    projectId: "gdi-places-app-a33a5",
    storageBucket: "gdi-places-app-a33a5.appspot.com",
    messagingSenderId: "78911497687",
    appId: "1:78911497687:web:698fa3dfe7d1f4b51dd792"
},
 
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
