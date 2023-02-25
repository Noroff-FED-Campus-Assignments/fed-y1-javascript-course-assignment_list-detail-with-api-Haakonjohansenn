[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-c66648af7eb3fe8bc4f294546bfd86ef473780cde1dea487d3c4ff354943c9ae.svg)](https://classroom.github.com/online_ide?assignment_repo_id=10190831&assignment_repo_type=AssignmentRepo)
# FED Javascript 1 - Course Assignment

This is a vanilla website that displays a list of items fetched from an API.

This project was bootstrapped with Vite.

## Resources

- [Design](_LINK_TO_FIGMA_)
- [Production deploy](_LINK_TO_WEBSITE_)
- [Deployment CI](_LINK_TO_NETLIFY_VERCEL_DASHBOARD_)
- [API Docs](_LINK_TO_API_DOCS_)

## Report

In this report i will shortly go over my thought process when working with this project.

To start off i began with looking for API's, which was surprisingly hard too choose. In the end i decided to go for Game of Thrones API, because it needed no key and had a decent amount of properties to choose from, also i am a big fan of the show so that is a plus! 

First off i created the idex.html/app.js, i started by freshening up on some off the lessons we have been through and then decided to start fetching the api. This went quite well and i felt confident when going for the details page. The search filter was not created until the end of the project, because i focused on getting all of the pages going first, i kind off regret this decision in the end since i did not have time to make sorting and all that stuff. 

I decided to go ahead and try the skeleton loader, which i think went allright, but it took alot of time for me to figure it out. I didn't really have much time when i decided to go for it, but i was already halfway so i wanted to finish it. The styling for the skeleton loaders were the hardest part, but i got there in the end. For the styling of the page in general i kept it very simple as i did not have much time to focus on it, but i think it looks allright(not great though). I also did not use any variables and kept it very basic as again, i was pressured for time.. 

Next up i created the details page, i spent alot of time figuring out how to pass the id in the querystring correctly, turns out i was missing a = sign in the href link to the details.html. i kept the styling very simple here as well. I had even more trouble styling the skeleton loader on this page, Because of this it did not turn out the way i really wanted it too, but at least i got it working decently. 

For the contact page i decided to go all out and try the advanced form, i spent way too much time with this, but i am happy i got it working in the end. My problem was having regex passed in the arguments before field, of course i did not realise this was a problem, but after hours of looking and searching i finally figured it out. I did use your example too help, but really tried to understand and write it my own way as much as i could. Hopefully this is okay. I kept the styling simple here as well, but tried to make it look somewhat "professional" at least.

Summary:

This was much harder than i thought it would be, and i admit i underestimated the task. I could have managed my time alot better and made a much better project, this is good knowledge for me to have for the next project. Despite the project being hard and frustrating i really enjoyed learning all the things i learned in the end! 

Referances: 

Monde Sineke https://github.com/S3ak

https://www.youtube.com/@WebDevSimplified

https://stackoverflow.com/

https://www.w3schools.com/

Google.com for general questions and bug fixing.

ChatGPT

https://thronesapi.com/

https://github.com/public-apis/public-apis





## Getting Started

In the project directory, you can run:

- install the project node module dependencies $`npm i`
- Runs the app in the development mode. `npm run dev`
- Open `http://127.0.0.1:5173/` to view it in the browser.

## Minimum acceptence criteria (Required - 50%)

All of these todo's must be done to pass the asssignment.

- [x] End-user can see a list of items of the home page.
- [x] When the End-user clicks on an item in the list they are navigated to the details page.
- [x] End-user can view atleast three properties of an item in a list.
- [x] End-user can view atleast three properties of an item on the details page.
- [x] A error message is present when the End-user encounters a error while viewing the index page.
- [x] A error message is present when the End-user encounters a error while viewing the details page.
- [x] End-user can view the title of the item on the browser tab for a details page.
- [x] End-user can view validation message when they input an incorrect name.
- [x] End-user can view validation message when they input an incorrect subject that is less than 10 characters.
- [x] End-user can view validation message when they input an incorrect Email address.
- [x] End-user can view a validation message when they input an incorrect physical address that is less than 25 characters long.

## End-user success criteria (Optional - 100%)

- [x] End-user can search for a specific item.
- [ ] End-user can filter the list.
- [ ] End-user can sort list by;
  - [ ] Name ascending order
  - [ ] Name descending order
- [x] Confirmation modal after custumer submits a successful contact form.
- [x] End-user can auto-fill the contact form using the browser auto-fill.
- [x] End-user can auto-fill the contact form using a password manager.
- [x] Validation still works when End-user uses copy and pastes into input fields.
- [x] End-user can see a postive feedback when they input correct info and pass validation.
- [ ] End-user can experience pleasant animations.
  - [ ] Each item in the list has a staggered animation.
  - [ ] Contact form success modal fades in.
- [ ] End-user can view a custom favicon.
- [ ] CSS uses variables
- [ ] Code is dry - There are no repeating functions, variables.
- [ ] My commit messages are relavant and make sense. [How to write good commit messages](https://www.freecodecamp.org/news/how-to-write-better-git-commit-messages/)
- [ ] [End-user experiences a complete custom UI design.](https://www.figma.com/file/KExTTAE75DRhq2xTvapFR4/FED-Whiteboard?node-id=0%3A1&t=UItKehGgT8gRlibY-1)

  - [ ] Is user-friendly
  - [ ] Effective use of the pillars of design
    - [ ] Typography
    - [ ] COlour
    - [ ] Composition
    - [ ] Art Direction
    - [ ] Motion
  - [ ] Adhered to principles of design
    - [ ] Contrast
    - [ ] Balance and alignment
    - [ ] Emphasis
    - [ ] Proportion
    - [ ] Hiearchy
    - [ ] Repetition
    - [ ] Ryhthem
    - [ ] Pattern
    - [ ] Negative space
    - [ ] Movement

## Checklist

Make sure you go through this checklist before submitting your project to Moodle.

- [x] All pages have a meta description.
- [x] All pages have a valid title.
- [x] All pages import the correct css files.
- [x] All pages import the correct JS file.
- [x] Details page URL includes a query param.
- [x] My website makes a GET request to an API to get a list of results.
- [x] My website makes a GET request to an API to get details of one result.
- [x] Input fields have the following attributes;
- [x] All images have an alt tag;
  - [x] A name,
  - [x] A placeholder,
  - [x] A aria-describedby,
  - [x] Required
- [x] I have not copied Javascript code.
- [x] I have not used a Javascript library.
- [x] Removed all unused files.
- [x] Named all images properly.
- [x] Committed all my code to github.
- [x] My repo is publically viewable.
- [x] I've submitted/ written a report.
- [x] I've removed all todo notes in code.
- [x] I've removed all console logs in code.
- [x] Code is formatted correctly.
- [x] There are no red underlines in VSCode.
- [x] There are no error messages in the terminal when I run the project.
- [x] My code is indented correctly.
- [x] I've checked my report for grammer & spelling using grammerly or chatGPT
- [ ] I've used used [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)
- [ ] I've checked off every todo in this README.

## Help & Tutorials

- https://web.dev/learn/forms/
- https://fed-vocational-astro-course.vercel.app/en/html-css/module-2/forms

## Application stack

- [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling
- [Prettier](https://prettier.io/) - An opinionated code formatter
- [Eslint](https://eslint.org/) - Find and fix problems in your JavaScript code
- [Open-props](https://open-props.style/) - Supercharged
  CSS variables.
- [Animate.css](https://animate.style/) - Just-add-water CSS animations

## Authors

- Haakon Johansen (@HaakonJohansenn)
- Monde Sineke (@S3ak)
