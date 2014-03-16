OldCode_Depreciated
===================
This branch contain all the old code from the project.
The project's scope has since changed, but this code will stay here for
archival sake.

WitsSoftDev13
=============

This is the University of the Witwatersrand's Software Development Student groups's 2013 (and perhaps going into 2014) 
project to build a mobile application for Wits Marketing. 
This app will allow the user to select on a map where they would like to go and from their current position to their 
destination it will calculate and display the shortest path.

Basic Concept
=============

Wits marketing has asked us to create a mobile application which will allow the user to select on a map where they would like to go and from their current position to their destination, then it will calculate the shortest path and display it to the user.

Standards
=========
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


