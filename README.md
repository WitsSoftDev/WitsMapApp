WitsSoftDev13
=============

This is the University of the Witwatersrand's Software Development Student groups's 2013 (and perhaps going into 2014) 
project to build a mobile application for Wits Marketing. 
This app will allow the user to select on a map where they would like to go and from their current position to their 
destination it will calculate and display the shortest path using the Google API.
It will also display information about the campus they are on and the building they are going to.
Both a description and an image respectively. More images may be added later.

Basic Concept
=============

Wits marketing has asked us to create a mobile application which will allow the user to select on a map where they would like to go and from their current position to their destination, then it will calculate the shortest path and display it to the user.
The Google Developer Student Group at Wits has recently mapped out Wits on Google maps, so the maps api will be used instead of building our own.

Standards
=========
Design
------
The project web pages, which include the admin pages and the mobile app must have the Wits colours, and Logo.
Blue-Gold and Logo.

API
---
The API should follow restful practices. (See design specification docs for more information).

Security Issues
---------------

HTML
----

Cross site scripting is an issue where instead of a user inputting plaintext into a String they instead insert HTML markup to allow the use of scripts such as JavaScript. This security flaw can be overcome by checking every string and using HTML & clause to handle all input as strings. This flaw would only be system local but should still be considered.

MySQL and PHP
-------------

The main issue here is SQL injection. A user instead of entering plaintext may enter SQL statements to cause damage throughout the entire system. There are a few ways to negate this security flaw. One method is to add “” to the end of every string as it goes into the database. A better way would be to scrub the String so that no infected text goes into the database at all.
Phonegap Updates
There are a few ways to handle updates to a phonegap app. It has a built in technology  which can be added as an extra, but I don’t like it since it greatly decreases performance.


