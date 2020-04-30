# Mobile Flashcards | React-Native (Android) Project

## Table of Contents

- [Introduction](#introduction)
- [Instructions](#instructions)
- [App State - Redux](#App_State_Redux)
- [Create React App Info](#Create_React_App|Expo_Info)

## Introduction

This project is a mobile flashcards application developed using the React Native library The app was developed for use on google android mobile devices. The Redux library is used for application state management and react-native navigation is used for app navigation/routing between different views within the application. The purpose of the application is to allow the user to create "decks" of flashcards containing questions on specific subject matter of the user's choosing. The user can then access the creatd decks and cards to take the quiz questions, using the application as a study/review aid. Once a quiz (deck of cards) is completed, the user is presented with their score for that quiz and can retake the quiz if they so choose.

## Instructions

### How to start the Mobile Flashcards React-Native android application
- Application URL [Click here to launch Would You Rather App](https://would-you-rather-4028c9.netlify.app/)
- Application may be downloaded or cloned (git clone https://github.com/Marius-De-Allie/Mobile-FlashCards---React-Native-Android-App)from [my GitHub repository](https://github.com/Marius-De-Allie/Mobile-FlashCards---React-Native-Android-App)
- Once downloaded or cloned via git clone terminal command
- Run `yarn install` or `npm install` via terminal, to download all dependencies for the application.
- Run `yarn start`, `npm start`, `expo start` via terminal, to launch application's dev server. In the terminal window you will be preseneted with instructions on how to view your mobile app, see below. *The dev server is usually accessible in your browser at (url: `http://localhost:19002/`).
<img width="331" alt="Annotation 2020-04-29 224959" src="https://user-images.githubusercontent.com/45582613/80673604-b460a880-8a7d-11ea-989d-0f528a4be731.png">

- Also a new browser tab should open on your default browser with buttons to launch the app in your web browser, on an android device simulator or on an ios device or simulator. 

<img width="216" alt="Annotation 2020-04-29 230433" src="https://user-images.githubusercontent.com/45582613/80667692-d9e5b600-8a6d-11ea-86e2-2c65300e1060.png">

- If you do not have android or ios simulators setup on your machine you may chose the view the mobile app on your web browser usually at url: (`http://localhost:19006/`), however do note that the apperance and styling on the app will not always display correctly, as it would show up on an actual mobile device or simulator.

- You will also have options in the terminal window to launch the app by:
    1. scanning a QR code in the terminal window
    2. typing a in terminal to run the android emulator
    2. typing w in terminal to run the app in your wbe browser.
    3. typing e to send a link to the app to your phone via email

- If you chose to view the app on your phsyical mobile device you will need to download the [Expo](https://expo.io/) app from your app store.
- If you opt to run the app on your computer using a simulator for your resepective mobile OS you will need to install and comfigure the simulator on your computer. More info can be found bt googling android/IOS emulator setup react-native. THE IOS SIMULATOR ONLY WORKS ON MAC OSX!

### How to use Mobile FlashCards React-Native android application.

#### App Screens/Views:
- The app contains the following screens/views:
    - DeckList
      - Deck details
      - Quiz
    - New Deck(Add deck)
      - Add Card
#### App Home (Decks list) screen.
- Upon launching the application you are preseneted with the app's home screen, which displays a list of all the current "decks" of flashcards the user currently has.
- Application navigation is handled via the use of 2 naviagtion tabs located at the top of the app, tabs are as follows:
    `Decks`
    `New Deck`
    Upon opening the app for the for the first time you will be on the Decks tab(app home screen).
- While on any UI screen within the app the user may go back to the previous screen via the back arrow icon located at the top left of the application, left of the heading text for the screen you are currently on.
- Within the Decks tab the user can view all decks, access individua decks ro more details and take quizzes.
- In order to view a Deck from the Decks home screen, the user may simple tap on that deck's UI card, which will redirect the user to that's Deck's details page.
#### App Deck details screen.
- The Deck details page for the selected deck displays the following info:
    1. Name of the deck.
    2. Number of flashcards(quiz questions) the deck contains.
    3. A button to take the quiz for the Deck in question.
    4. A button to add a new flashcard(quiz question) to the Deck.
- By tapping on the Take quiz button on the Deck details screen the Quiz view will open.
#### App Quiz screen.
- The Quiz view for the selected deck displays the following info:
    1. Page count for the quiz question you are currently viewing.
    2. Quiz heading.
    3. Quiz question text (in a yes/no format).
    4. A button to to respond to question statement as correct.
    5. A button to to respond to question statement as incorrect.
    6. A show answer button.
    7. A retake quiz button.
    8. A sumbit quiz answer button | This dynamically changes to a got back to Deck button once the quiz has been completed and all questions answered.
    9. User's Quiz score as a percentage (Only visible once all quiz questions have been answered and on the last question page).
    10. Back button to return to previous question.
    11. Forward button to advance to next question.
- When the Quiz page first loads up, it renders the first question in that deck, along with buttons to select whether the question statement is correct or incorrect.
- Once the user makes a choice and hits the submit button the forward icon becomes active to allow the user to move on to the next question. *Before answering the quiz the forward button will not be active.
- Also as soon as the user submits the answer for the quiz the show answer button becomes active, allowing the user to see the correct answer for the quiz by tapping this button.
- On the last page(question) of the quiz the user's score will be displayed as a percentage and the Retake Quiz as well as the Go To Deck buttons will now be active.
- The user may retake the quiz by tapping the retake quiz button on the last page of the quiz (once all questions have been answered).
- The user may return to the details page for this deck by tapping the go to deck button (once all questions have been answered).
#### App New Deck (Add Deck) screen.
- This view may be accessed by tapping on the New Deck tab at the top of the application.
- This view presents the user with a text input field to enter a name(title) for the new deck which he/she os about to create.
- Once a deck name has been provided the Add card button will become active, upon tapping the add card button the new deck will be created and added to the bottom of the deck list view and the user will be redirected to the deck list view, where the new deck isnow accessible by tapping it's icon.
#### App Add Card screen.
- The add card view accepts a question in a yes/no format and an answer (either yes or no) and creates a new question to be added to the currently selected deck.
- This view may be accessed by tapping on the Add card button, located on the Deck details screen for the selected Deck.
- The user is then presented with with a text input field to enter the new question text in a yes/no format.
- The user must then tap either the yes or no button located below the question text input field in order to select the answer for their newly created question.
- Once the user has entered the question text and selected either yes or no button for the new question answer, the add card button then becomes active allowing the user to create the new question and adding it to the currently selected deck by tapping it.

## App_State_Redux
- Redux was used to manage application state within the app, the redux store one state object (Decks), which has a title and questions property for each Deck. 
- The questions property has a value of an array containing an element for each question or card in that deck.
- Each question object within questions array has the following properties:
    1. question - contains question text.
    2. answer - question answer | either 'yes' or 'no'.
    3. answered - whether question has been answered by current user or not | either true or false.
    4. userAnswer - Answer submitted by user for question | either 'yes or 'no'.

## Create_React_Native_App|Expo_Info
    
This project was bootstrapped with [Create React Native App/Expo](https://github.com/expo/create-react-native-app).
