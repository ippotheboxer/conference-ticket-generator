# Frontend Mentor - Conference ticket generator solution

This is a solution to the [Conference ticket generator challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/conference-ticket-generator-oq5gFIU12w). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 


## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Useful resources](#useful-resources)
  - [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Complete the form with their details
- Receive form validation messages if:
  - Any field is missed
  - The email address is not formatted correctly
  - The avatar upload is too big or the wrong image format
- Complete the form only using their keyboard
- Have inputs, form field hints, and error messages announced on their screen reader
- See the generated conference ticket when they successfully submit the form
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot
#### Desktop design
![Screenshot 2025-02-10 131835](https://github.com/user-attachments/assets/9725b351-13c0-408a-9494-b82fcf4be224)
![Screenshot 2025-02-10 133459](https://github.com/user-attachments/assets/99adf1c5-fce5-4c56-a10e-132cc7eebc12)
#### Mobile design
![Screenshot 2025-02-10 133533](https://github.com/user-attachments/assets/e7bacaa0-e1f2-4147-af84-41734a878353)
![Screenshot 2025-02-10 131858](https://github.com/user-attachments/assets/66301688-d4bb-4d66-bf2c-70dc6e9542c5)
#### Error states
![Screenshot 2025-02-10 145739](https://github.com/user-attachments/assets/d8cb39aa-bb82-4a66-9395-3e27c569f469)

### Links

- [Solution URL](https://www.frontendmentor.io/solutions/conference-ticket-generator---react-typescript-tailwind-7irlSM9FDX)
- [Live Site URL](https://ippotheboxer.github.io/conference-ticket-generator/)

## My process

First I created the design by using a mobile-first approach. I added all of the colours specified by the stylesheet into @theme in the index.css file. I created the design without using dynamic values initially. I then handled the form submission by making the app component have access to its state and submission, and once the generate ticket button is clicked, it checks to validate any errors, and if there aren't any then it will go ahead and submit the form. Then the ticket is created with the passed information. I initially had the information icon set as an image tag, but when I tried to change the fill property to change to orange during error state, this didn't work. So I had to make InformationIcon.tsx with the svg file path that I used SVGOMG to get access to and change the svg stroke and path fill dynamically depending on if the passed prop "hasError" was true or false. For checking email and github values, I used regex to check if they were valid. Tailwind docs helpled a lot with styling, such as setting multiple background images on the app.tsx component.

### Built with

- [React](https://reactjs.org/) - JS library
- [Typescript](https://www.typescriptlang.org/) - JS with types
- [Tailwind-css](https://tailwindcss.com/) - CSS framework
- [Vite](https://vite.dev/) - Frontend build tool

### Useful resources

- [React-gh-pages guide](https://github.com/gitname/react-gh-pages) - Great tutorial for setting up github pages with React
- [Issue with vite and gh-pages](https://github.com/tschaub/gh-pages/issues/485) - this error occurs if using vite and it solved the problem
- [SVG file extractor](https://jakearchibald.github.io/svgomg/) - I used this to get the svg path from the info-icon.svg, in order to style it conditionally

## Acknowledgments

Got the regex for github username from [this stackOverflow question](https://stackoverflow.com/questions/30281026/regex-parsing-github-usernames-javascript)
