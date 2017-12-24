# MEAN Stack App with Angular Universal
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.2, and **can be used as a template for your MEAN stack projects!**

## Versions
* MongoDB v3.6.0
* Express v4.16.2
* Angular v5.0.0
* Node.js v9.3.0

## Background
This repository contains code that was originally developed using the [MEAN Stack Front to Back](https://www.youtube.com/watch?v=uONz0lEWft0&list=PLillGF-RfqbZMNtaOXJQiDebNXjVapWPZ) video series by *Brad Traversy* and represents parts 1-4 of the 10 part series.  During these videos, we have set up our back-end with Node.js/Express, our database with Mongoose/MongoDB, and have implemented API authentication/authorization using passport and a JSON web token (JWT) strategy.  We are now ready to set up our front-end with Angular in [Part 5](https://www.youtube.com/watch?v=zrViDpWiNVE&t=5s).

## What's New?
This project includes the original code as described above as well as the starter app generated from the Angular CLI using `ng new`.  The Angular starter app has been linked to our Express/Node.js/MongoDB back-end via a single `server.js` file.  **Angular Universal has also been integrated into the project for server-side rendering, making your MEAN stack project SEO and social media friendly.**

## Starting the Project
To begin working with this project, perform the following tasks:

1. Clone the repository to your local machine
2. Start up your local instance of MongoDB
3. Run `npm install` to download dependencies
4. Run `npm run build` to generate the */dist* folder for your Angular front-end and the */dist-server* folder for Angular Universal
5. Run `node server.js` to start the server on `http://localhost:3000/`.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Further help
To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
