# Starry Eyed News
Mod 3 + Showcase Solo Project
![Welcome message](https://user-images.githubusercontent.com/83723401/141825107-dbf2ffda-dec5-4c5b-a8fb-f49656843f9c.png)


## Table of Contents
  - [Abstract](#abstract)
  - [Deployed Page + Illustrations](#deployed-page-and-illustrations)
  - [Technologies](#technologies)
  - [Code Architecture](#code-architecture)
  - [Contributors](#contributors)
  - [Wins](#wins)
  - [Improvements](#improvements)
  - [Project Specs](#project-specs)

## Abstract
Feeling Starry Eyed? This space news application is a landing spot for busy star gazers looking for summaries of space themed blogs and up-to-date reports on the International Space Shuttle. 

**Features to highlight:**
- ``Light/Dark mode`` for users who need something more gentle on the eyes while gazing through backyard telescopes at night.
- ``Save for later library`` for users who don't have time to read the entire article in the moment.

![Blogs view in dark mode](https://user-images.githubusercontent.com/83723401/141830139-8c46bd97-4089-4707-a562-77c5b860b3ac.png)

## Deployed Page and Illustrations
View the deployed site [here!](https://starry-eyed.surge.sh/)

![Walk-through of each view in the app](https://user-images.githubusercontent.com/83723401/141832661-86f7ab99-c2f3-495b-9caa-dbc82dd99433.gif)

![Demo of light and dark mode feature](https://user-images.githubusercontent.com/83723401/141832942-142fcf7d-09f2-4067-a098-a0f1e03674f4.gif)

## Technologies
  - React
  - React Router
  - CSS
  - Cypress testing
  - Javascript
  - WebPack
  - [API](https://api.spaceflightnewsapi.net/v3/documentation#/) 
  - node
  - Atom

## Code Architecture
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

``Components and CSS``
- Each component has its own directory in the ``src`` directory containing corressponding ``.css`` and ``.js`` files.

``Network Requests and Utilities``
- Network requests can be found at ``./src/apiCalls.js``
- Data cleaning functions can be found at ``./src/utilities.js``

``Cypress Testing``
- All tests can be found in the following directory: ``./cypress/integration``
- To run test use the command ``npm run cypress``
- Note: You may need to run an ``npm install`` in the command line to download necessary dependencies for Cypress testing

## Contributors
This was a solo project by [Renee Swick-Ziller](https://github.com/reneeswick)

## Wins
``Styling a light and dark mode using CSS + some logic``

![light mode button](https://user-images.githubusercontent.com/83723401/141830675-72a3cbb4-a6c0-4314-9ea5-d11b72627f60.png)
![dark mode button](https://user-images.githubusercontent.com/83723401/141830700-5c645b8f-0a21-4d63-9c7e-f6cff18ae5c5.png)
- A personal goal with this project was to take on a new challenge that would stretch my CSS skills. In conjunction with some javascript logic, I successfully created a space-themed light/dark mode for a user to toggle throughout the application.


``Cleaner functions``

![example of app's useEffect code](https://user-images.githubusercontent.com/83723401/141830970-b650a39d-51a0-4fc2-b7ff-e09757fe9d87.png)
- This was the first time I sent the data from my GET network requests to a separate file (utilities.js) to clean it up in order to set to state only the necessary data. The timing of the network request, cleaner function, and setting of state within a useEffect method was tricky. Successfully ordering the operations of this data retrieval was a great learning experience for me as I needed to make a few async functions dance the right steps to eventually set to state correctly.

## Improvements 
This project was completed in a 1 week sprint. As a result, there are iterations and improvements yet to be applied.

``Future Iterations``
- A more responsive layout of the navigation bar on smaller screens
- A search feature in the blogs and saved for later sections

![iPhone X layout](https://user-images.githubusercontent.com/83723401/141831231-e8cd7d6d-dbb6-4103-8893-191c40092e90.png)

![Two articles stored in the Save for Later library](https://user-images.githubusercontent.com/83723401/141831375-8c3ef8fe-e654-497d-b615-4b1115e7d96a.png)

## Project Specs
  - The project spec & rubric can be found [here](https://frontend.turing.edu/projects/module-3/showcase.html)
