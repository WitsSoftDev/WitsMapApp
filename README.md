WitsSoftDev13 [![Build Status](https://travis-ci.org/WitsSoftDev/WitsMapApp.svg)](https://travis-ci.org/WitsSoftDev/WitsMapApp) [![Stories in Ready](https://badge.waffle.io/witssoftdev/witsmapapp.png?label=ready&title=Ready)](https://waffle.io/witssoftdev/witsmapapp)
=============
As of 2015 this project is now defunct. There were many problems, much was learned but this idea and project have now become obsolete.
===========

PROJECT OVERVIEW
----------------
This is the University of the Witwatersrand's Software Development Student group’s 2013 (and perhaps going into 2014) project to build a mobile application for Wits Marketing. 
This app will allow the user to select on a map where they would like to go and from their current position to their destination it will calculate and display the shortest path using the Google API.
It will also display information about the campus they are on and the building they are going to. Both a description and an image will be displayed respectively. The ability to display more images may be added later.

PROJECT OBJECTIVES
------------------
	0. Create server to support the input of custom data such as campus locations, descriptions and images.
	1. Have a database to store information
	2. Have the input system be user password protected from unauthorized access
	3. Have a functional and well-built mobile app based on the Phonegap framework and JavaScript libraries

SUCCESS CRITERIA
----------------
	0. A functional system which can tell where the user is from their mobile device
	1. Have a store of data about locations on campuses
	2. Ability to draw paths to locations, perhaps even have dynamically updateable paths.
	3. Have a server side administration web-app which is functional.
	4. All user interfaces have Wits colours and logo.
	
API
---
The API follows a RESTful practices.
The RESTful API standard used follows apigee’s ebook: “Web API Design: Crafting Interfaces that Developers Love”.

PROJECT TEAM
------------
	Jason Chalom (@TRex22)
	Isaac Seshoka (@ick-seshoka)

Deliverables
============
Database
--------
UsersTbl
--------
	UserId (Primary Key) Autonumber
	Username (String)
	PasswordHash (String)
	Email (String)

CampusTbl
---------
	CampusID (Primary Key) Autonumber
	GPSLat1 (String)
	GPSLong1 (String)
	GPSLat2 (String)
	GPSLong2 (String)
	GPSLat3 (String)
	GPSLong3 (String)
	GPSLat4 (String)
	GPSLong4 (String)
	Description (String)
	ImageLocation (String)

BuildingsTbl
------------
	BuildingID (String)
	CampusID (Foreign Key from Campus table)
	GPSLat (String)
	GPSLong (String)
	Description (String)
	ImageLocation (String)
	BuildingAbbreviations (String) There can be a few of them which will then be delimited.
	
Web Pages
---------
All web pages will have a unified theme. (See the SpecificationDesigns.pdf document for all proposed wireframe designs)
There has to be a navigation bar to navigate to all pages
Any delete options will display a confirmation dialogue.
Any input pages which depend on other information in the system will display an error dialogue if that information has not yet been inputted.
Login Page
-----------------
The login page will be basic in design. (See the SpecificationDesigns.pdf document)
First Time login Page
---------------------
There needs to be a page to initially create an administrator account. (See the SpecificationDesigns.pdf document)
User Administration
-------------------
This page is used to display all users in the system, edit user information and also delete users.
Campus Input Page
-----------------
This page is where Campus information is inputted, it will use a Google Maps object to help locate a square which demarcates the campus selected. 
The user will ‘draw’ a rectangle around the area they wish to demarcate.
It will upload an image (Maybe multiple) of the campus and also a description of the campus.
Campus Administration
---------------------
This page will display a list of campuses in the system and will be able to delete a campus or edit its information.
Buildings Input Page
--------------------
This is the page buildings will be inputted onto. There will be a dropdown list of campuses currently in the system to select from. If there is no campus then the page should redirect to the Campus Input page. It will also use a Google Maps object to find the GPS coordinates of the building on the specific campus. By selecting a campus from the dropdown the map will be populated at that campus. The user will then create a point on top of a building to select it. The page will then upload the building information to the database.
Buildings Administration Page
-----------------------------
This page will display a list of buildings on a specific campus in the system and will be able to delete a campus or edit its information.

Mobile App
----------
The mobile app will have three swipe-able pages.
Welcome Page
------------
This page will have a campus dropdown menu which when selected will show a building dropdown menu so that the user can select a building which they wish to go to.
There will also be a search bar so that the user can search using a room number. The API will handle calculating the building from its abbreviation and the floor from the first number. (This will have to be checked in the database design and also the building input page.)
By clicking a next arrow, swiping left or clicking a button the program will bring up the second page.
Second Page
-----------
The second page will bring up a map, with the current location of the user and their destination drawn for them. It will also plot a course for them to take to get there. (There may need to be a recalculate button to recalculate the path or to have an auto-refresh ability). The Google Directions API could be used. https://developers.google.com/maps/documentation/directions/
Third Page
----------
This page will display the information on the current campus and also the selected building. It will have images of the two and the abbreviations of the building as well. (Some information may already exist in the Google Map).

API DESIGN
==========
GET CAMPUS
----------
	~/api/{v1}/campuses/{CampusID}
This will return a JSON object of the specific campus its information and the http header.
GET CAMPUS LIST
---------------
	~/api/{v1}/campuses/
This will return a JSON list (IEnumerable object) of campuses in the system including the http response header.
GET BUILDING
------------
	~/api/{v1}/buildings/{BuildingID}
This will return a JSON object of the specific building its information and the http header.
GET BUILDINGS LIST
------------------
	~/api/{v1}/buildings/
This will return a JSON list (IEnumerable object) of buildings in the system including the http response header.

Some Third Party
================
Some of the travis CI build scripts I took from these repos:
	https://github.com/intellifactory/monodevelop.websharper
