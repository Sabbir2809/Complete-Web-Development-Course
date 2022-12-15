# Smart Learning Center

create a website to provide a quality learning platform in the domains of Computer Science

[Live Website Link](https://smart-learning-center-bddd7.web.app/)

### Library/Package:

- npm i firebase react-router-dom
- npm i tailwindscss daisyui
- npm install react-icons --save
- npm install react-hot-toast

### Design & Website Idea Step:

1. Website Name: Smart Learning Center

1. Navbar Component Requirement: Website Name, Courses, FAQ, Blog, Toggle Theme(Dark/Light) & User Profile Picture (Conditional Login, Registration)

1. 3 Type of Login System in this project: (Full Name, Photo URL, Email, Password)

   - Email & password
   - Google
   - GitHub

1. Clicking "Courses" in the navbar will redirect to a page that shows the courses(6 courses Fake Dataset) & The Courses page will be divided into two parts: a sidebar & content detail section. In the sidebar, there will be at least 6 options Every option is clickable. When you click an option, It will take you to the course detail page. it must include a header, introductory description/course body, and one image. The course/content detail section will have a heading at the top of the page. The heading will have an icon/ button on the side of the heading. When you click on that button, it will create a pdf and will be downloaded. There will be a button at the bottom of the content detail called "Get premium access." Clicking the button will take the user to the Checkout route. This route will be a private/protected route. Please ensure that the private route redirects to the login page if the user is not logged in. After login, the user will be redirected to the checkout page.

1. Use the Environment variable to hide the firebase key.

1. Reload the protected/private route (after login), this page will not redirect the user to the login page. Instead, it will keep the logged-in user on the protected route.

1. website mobile & desktop responsive

1. Display errors when the user's email address or password doesn't match.

1. Clicking "Blog" will redirect to a public route. That route will have 4 questions & answers.

   - what is cors?

   - Why are you using firebase? What other options do you have to implement authentication?

   - How does the private route work?

   - What is Node? How does Node work?

1. Create a 404 page.

<img src="./src/img/assignment10.png"
     alt="Assignment-10 Full Website Image"
     style="float: left; margin-right: 10px;" />
