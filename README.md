
You will have to open two terminals, then do these compands:

1. cd exam-project
2. npm i
3. npm start
   
Second terminal:
1. cd server
2. node server.js

This project is build on Angular 16, and it does not contain Angular 17 features. 

It has a few funtionalities, you can login, register and logout(components are held in folder view/auth).

You can create an offer and edit it if you are registered and the creator. You can view other offers without being signed in(components are held in folder views/offer-edit-create).

The home page has a comment section at the bottom of the page, you can view and and if logged in leave a comment.(components home, error page and navbar are held in folder views/home-navbar)

All three folders have a module in them which are imported into the views.model in folder views and the views.model in imported into the app.model.


