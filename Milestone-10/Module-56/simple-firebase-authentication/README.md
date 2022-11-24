## React With Firebase

1. Visit: console.firebase.google.com
1. Create a new firebase project
1. visit doc (go to docs): Build > Authentication > Web > Getting Started
1. Register Web app > firebase project home > click web > give name & register
1. Install firebase for you project : _npm install firebase_
1. Dangerous: Get firebase config & put it in firebase.init.js
1. export app from firebase.init.js
1. create auth using getAuth from firebase by using app from firebase.init.js
1. create a google auth provider. don not forget to use new: _const provider = new GoogleAuthProvider();_
1. go to firebase > Build > Authentication > Sign in method
1. Enable Google sing in method
1. create a button for google sing in method with a click handler
1. inside the event handler, call signInWithPopup with auth, provider
1. after signInWithPopup .then result, error
