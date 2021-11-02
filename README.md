# Training Developers | TypeScript

This project designs a frontend for the GET methods of an API

You can check out the API [here](https://github.com/TheAwesomeStorm/Training-Developers-Python)

The design was completely inspired on this [Frontend Mentor project](https://www.frontendmentor.io/challenges/insure-landing-page-uTU68JV8/hub/insure-landing-page-TH33whM4F)

## Installation

Clone this project, and the associated API, and install the required packages with:  

* `npm install`  

To ignore the `Authorization` class from the API set all its boolean properties to `true` and

* `python main.py` 

to run the API. Finally, to run the file watchers, use
    
* `npm run start`


## Project Experience

This project implements a `Single Page Application`, which means that the page never refreshes or move between pages.

The `Home` button inside the header is clickable and returns to the home page, where there are no API data.

The button `Import all users` send a request for the API to `get` all users and create a table with the name responses

Click a user name to send a request for the API to `get` all its roles and to create a table with the response

You can return to the users table through the `Return` button.
