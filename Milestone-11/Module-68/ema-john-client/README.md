# Project (ema-john)

- Project Environment Setup
- Header Component
- Product Component
- Shop Component
- useState, useEffect

## Router Setup:

### Firebase Connect:

- create firebase project
- enable web
- enable sign in method
- install firebase
- get firebase config in your firebase.config.js file
- export app from firebase.config.js

### Context:

1. create UserContext(AuthContext): UserContext --> Component name, userContext provides AuthContext
1. create AuthContext
1. set AuthContext.Provider
1. make sure you set the children
1. export AuthContext to be used inside useContext hook
1. get form data
1. getAuth in the UserContext

#### Firebase Hosting:

one time for each computer

1. step: npm install -g firebase-tools
1. step: firebase login
1. step: firebase init
1. step: for public directory: you select build
1. step: single page application: y
