# Project Setup

1. create two folder frontend and backend
2. go to frontend `cd frontend `
     - type `npm create vite@latest`
     - press `y` if asked to install
     - enter`.` in project name
     - select `React` as framework from arrow key
     - select Javascript from variant by arrow key
     - select ESLint by arrow key
     - select Yes and press enter
3. setup tailwind in react project 
   - install tailwind css using npm install tailwindcss @tailwindcss/vite
   - open vite.config.js as below image 
   ![alt text]("C:\Users\annap\OneDrive\Pictures\Screenshots\Screenshot 2026-10-07 112321.png")
   - remove all contents of index.css then wrrite `@import "tailwindcss"`in index.css





   - in react style can be added into html by className because class is a predefined keyword in react.
   - when js function return directly html contents, called Component.


# Rule of making Component
1. start with capital letter
2. it must return html
3. must be close at the caling time
4. it can use anywhere anytimes
