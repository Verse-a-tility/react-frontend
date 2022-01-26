# react-frontend
The react frontend for the website version of verse-a-tility


## Overview

The frontend is built in React and hosted on Google Firebase. It is an SPA (single page application), and different component pages are presented based on certain conditions.


### Login Flow

The Spotify login flow was a bit of a pain to implement. The way it works is that the user is prompted to login on the frontend by sending them to the Spotify authorize page, along with the redirect URI and the client ID. When the user grants access they are redirected back to the main website, with a query of the access code in the url. This access code is then passed to the backend server, where it sends a request for an access token to another Spotify API, along with our secret key and client ID.
