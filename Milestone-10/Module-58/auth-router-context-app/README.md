# Auth Router Context App

### Package Install:

- Install Firebase, React Router Dom, daisyUI

### Basic ContextAPI Setup:

1. Share auth state with other components (across the application)
1. create an UserContext
1. ContextProvider with passed children
1. set the UserContext in the index.js
1. Now to consume the context: export the AuthContext from UserContext
1. Now at Header or Home anywhere else: use useContext hook to get the info in the context

### Auth Integration:

1. use getAuth by passing the app form firebase.config.js file
1. create a function named createUser to return createUSerWithEmailAndPassword()
