/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    
     // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
//        window.localStorage.removeItem("login");
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },
    
    fillFacultyProgramme: function(facultyName) {
        //generate the date and pass it as an argument
        var programmeDetails = "";
        switch (facultyName) {
            case "healthsc":
                programmeDetails = this.generateHealthScienceProgramme();
                break;
            case "humanities":
                programmeDetails = this.generateHumanitiesProgramme();
                break;
            case "commerce":
                programmeDetails = this.generateCommerceProgramme();
                break;
            case "engineering":
                programmeDetails = this.generateEngineeringProgramme();
                break;
            case "science":
                programmeDetails = this.generateScienceProgramme();
                break;
            case "sport":
                programmeDetails = this.generateSportProgramme();
                break;
            case "general":
                programmeDetails = this.generateGeneralProgramme();
                break;
            case "international":
                programmeDetails = this.generateInternationalProgramme();
                break;
            default : programmeDetails = this.generateHealthScienceProgramme();
        }
        return programmeDetails;
    },
    
    generateGeneralProgramme: function() {
        var generalData = this.getGeneralProgrammeData();
        return this.generateProgramme("General", generalData, "general-prog.html", false);
    },
    
    getGeneralProgrammeData: function() {
    var generalData = [
                       {eventDate:"2013/02/03", eventStart: "11:00", eventEnd: "15:00",suffix:"PM",eventTitle: "Wits Welcome Day",eventDesc: "Meet the Vice Chancellor, members of the Senior Executive Team, the Dean of Students, the SRC President and many other members of staff as they welcome you to the WITS community. Parents and students can engage with Witsies and explore the campus. A light lunch will be served with loads of entertainment.", eventVenue: "The Piazza, Outside Great Hall"},
                       {eventDate:"2013/02/04", eventStart: "09:00", eventEnd: "12:00",suffix:"AM",eventTitle: "Basic Computer Skills",eventDesc: "This is a basic computer course. The course is divided into 3 sessions and students are required to attend all sessions.", eventVenue: "Wits Science Stadium Auditorium 4"},
                       {eventDate:"2013/02/04", eventStart: "09:00", eventEnd: "09:20",suffix:"AM",eventTitle: "Mastering Life at Wits",eventDesc: "Take a moment to learn more about WITS from staff and students who know it best. Topics will include classroom participation, interacting with Faculty staff and student colleagues, time management, working in groups and campus resources.", eventVenue: "Wits Science Stadium Auditorium 4"},
                       {eventDate:"2013/02/04", eventStart: "09:20", eventEnd: "10:00",suffix:"AM",eventTitle: "Practical Matters",eventDesc: "Learn how to create and use a daily budget, maintain and grow a savings account and build good credit. If you will be receiving financial aid or a scholarship this session will explain how to complete the requirements and avoid errors that can cause delays. You will learn the steps needed to pay your upcoming tuition and residence bill.", eventVenue: "Wits Science Stadium Auditorium 4"},
                       {eventDate:"2013/02/04", eventStart: "10:20", eventEnd: "10:40",suffix:"AM",eventTitle: "Fitness, Friendship and Fun",eventDesc: "Discover the wide range of activities offered through Sports - intramurals, outdoor recreation, fitness/wellness, instructional, sport clubs and informal recreation. Come see why students at WITS participate actively in Sports.", eventVenue: "Wits Science Stadium Auditorium 4"},
                       {eventDate:"2013/02/04", eventStart: "10:40", eventEnd: "11:00",suffix:"AM",eventTitle: "Get Involved",eventDesc: "Getting involved on campus is one of the most important things you can do when you arrive at WITS! During this session, we will advise you about opportunities for involvement on campus and how to find student organizations that will match your  interests. You will also learn about the various leadership opportunities available to you through Student Activities.", eventVenue: "Wits Science Stadium Auditorium 4"},
                       {eventDate:"2013/02/04", eventStart: "11:00", eventEnd: "11:20",suffix:"AM",eventTitle: "Making the Transition to Wits",eventDesc: "Discuss expectations, fears and hopes about coming to WITS as a new student and being lesbian, gay, bisexual or transgender. Learn about resources and helpful services in a relaxed atmosphere.", eventVenue: "Wits Science Stadium Auditorium 4"},
                       {eventDate:"2013/02/04", eventStart: "11:20", eventEnd: "11:40",suffix:"AM",eventTitle: "Safety and Security",eventDesc: "This program covers property and personal safety protection as well as numerous personal safety devices and security equipment.", eventVenue: "Wits Science Stadium Auditorium 4"},
                       {eventDate:"2013/02/04", eventStart: "11:40", eventEnd: "13:00",suffix:"PM",eventTitle: "Campus Tours",eventDesc: "Take this opportunity to stretch your legs and explore the campus. Orientation assistants will lead students on a brief tour of WITS to allow students to familiarise themselves with the campus.", eventVenue: "Depart from Wits Stadium"},
                       {eventDate:"2013/02/05", eventStart: "09:00", eventEnd: "12:00",suffix:"AM",eventTitle: "Basic Computer Skills",eventDesc: "This is a basic computer course. The course is divided into 3 sessions and students are required to attend all sessions.", eventVenue: "FNB Computer Lab"},
                       {eventDate:"2013/02/05", eventStart: "09:00", eventEnd: "09:20",suffix:"AM",eventTitle: "Transitioning from High School to University",eventDesc: "Youíve heard that university is different from high school and that the classes are more demanding, but do you know what that really means? Come to a talk with professional learning specialists about what to expect at WITS and how to prepare effectively.", eventVenue: "Wits Science Stadium Auditorium 4"},
                       {eventDate:"2013/02/05", eventStart: "09:20", eventEnd: "09:40",suffix:"AM",eventTitle: "CCDU",eventDesc: "Learn about the role of CCDU in assisting students achieve their academic, personal and professional goals.", eventVenue: "Wits Science Stadium Auditorium 4"},
                       {eventDate:"2013/02/05", eventStart: "09:40", eventEnd: "10:00",suffix:"AM",eventTitle: "Student Parking and Transportation",eventDesc: "Is there parking available for 1st year students? How do I get around Johannesburg using public transport? This is an opportunity to familiarise yourself with transport options available to a Witsie and get answers to these any many more questions.", eventVenue: "Wits Science Stadium Auditorium 4"},
                       {eventDate:"2013/02/05", eventStart: "10:20", eventEnd: "10:40",suffix:"AM",eventTitle: "Sex, Drugs and Rock n Roll",eventDesc: "Your peers will share important, thought provoking experiences on sexuality, relationships and alcohol here on campus. Come and check this out. Learn to party safely!", eventVenue: "Wits Science Stadium Auditorium 4"},
                       {eventDate:"2013/02/05", eventStart: "10:40", eventEnd: "11:00",suffix:"AM",eventTitle: "Staying Healthy",eventDesc: "Representatives from Campus Health and Wellness Centre will provide an overview of healthcare facilities that are available on campus. Learn what to do if you get sick or injured whilst at WITS.", eventVenue: "Wits Science Stadium Auditorium 4"},
                       {eventDate:"2013/02/05", eventStart: "11:00", eventEnd: "11:20",suffix:"AM",eventTitle: "Social Networking with a Purpose",eventDesc: "Use this opportunity to familiarise yourself with e-WITS. Students will be shown how to access their student portal. The doís and dontís of social media", eventVenue: "Wits Science Stadium Auditorium 4"},
                       {eventDate:"2013/02/05", eventStart: "11:20", eventEnd: "11:40",suffix:"AM",eventTitle: "Dont Dis our Ability",eventDesc: "Meet with the disability unit and get more information on our world class facilities and support available to students with a disability.", eventVenue: "Wits Science Stadium Auditorium 4"},
                       {eventDate:"2013/02/05", eventStart: "11:40", eventEnd: "12:00",suffix:"AM",eventTitle: "What is a Wits-e",eventDesc: "What is a Wits-e", eventVenue: "Wits Science Stadium Auditorium 4"},
                       {eventDate:"2013/02/05", eventStart: "12:00", eventEnd: "13:00",suffix:"PM",eventTitle: "Campus Tours",eventDesc: "Take this opportunity to stretch your legs and explore the campus. Orientation assistants will lead students on a brief tour of WITS to allow students to familiarise themselves with the campus.", eventVenue: "Depart from Wits Stadium"},
                       {eventDate:"2013/02/05", eventStart: "15:00", eventEnd: "18:00",suffix:"PM",eventTitle: "WITS Beer Garden",eventDesc: "Join us for some amazing/interesting brews at the Wits Beer Garden. Drink responsibly and reasonably.", eventVenue: "Library Lawns"},
                       {eventDate:"2013/02/06", eventStart: "09:00", eventEnd: "12:00",suffix:"AM",eventTitle: "Basic Computer Skills",eventDesc: "This is a basic computer course. The course is divided into 3 sessions and students are required to attend all sessions.", eventVenue: "FNB Computer Lab"},
                       {eventDate:"2013/02/06", eventStart: "09:00", eventEnd: "09:20",suffix:"AM",eventTitle: "Mastering Life at Wits",eventDesc: "Take a moment to learn more about WITS from staff and students who know it best. Topics will include classroom participation, interacting with Faculty staff and student colleagues, time management, working in groups and campus resources.", eventVenue: "Wits Science Stadium Auditorium 4"},
                       {eventDate:"2013/02/06", eventStart: "09:00", eventEnd: "09:20",suffix:"AM",eventTitle: "Transitioning from High School to University",eventDesc: "Youíve heard that university is different from high school and that the classes are more demanding, but do you know what that really means? Come to a talk with professional learning specialists about what to expect at WITS and how to prepare effectively.", eventVenue: "Wits Science Stadium Auditorium 5"},
                       {eventDate:"2013/02/06", eventStart: "09:20", eventEnd: "10:00",suffix:"AM",eventTitle: "Practical Matters",eventDesc: "Learn how to create and use a daily budget, maintain and grow a savings account and build good credit. If you will be receiving financial aid or a scholarship this session will explain how to complete the requirements and avoid errors that can cause delays. You will learn the steps needed to pay your upcoming tuition and residence bill.", eventVenue: "Wits Science Stadium Auditorium 4"},
                       {eventDate:"2013/02/06", eventStart: "09:20", eventEnd: "09:40",suffix:"AM",eventTitle: "CCDU",eventDesc: "Learn about the role of CCDU in assisting students achieve their academic, personal and professional goals.", eventVenue: "Wits Science Stadium Auditorium 5"},
                       {eventDate:"2013/02/06", eventStart: "09:40", eventEnd: "10:00",suffix:"AM",eventTitle: "Student Parking and Transportation",eventDesc: "Is there parking available for 1st year students? How do I get around Johannesburg using public transport? This is an opportunity to familiarise yourself with transport options available to a Witsie and get answers to these any many more questions.", eventVenue: "Wits Science Stadium Auditorium 5"},
                       {eventDate:"2013/02/06", eventStart: "10:20", eventEnd: "10:40",suffix:"AM",eventTitle: "Fitness, Friendship and Fun",eventDesc: "Discover the wide range of activities offered through Sports - intramurals, outdoor recreation, fitness/wellness, instructional, sport clubs and informal recreation. Come see why students at WITS participate actively in Sports.", eventVenue: "Wits Science Stadium Auditorium 4"},
                       {eventDate:"2013/02/06", eventStart: "10:20", eventEnd: "10:40",suffix:"AM",eventTitle: "Sex, Drugs and Rock n Roll",eventDesc: "Your peers will share important, thought provoking experiences on sexuality, relationships and alcohol here on campus. Come and check this out. Learn to party safely!", eventVenue: "Wits Science Stadium Auditorium 5"},
                       {eventDate:"2013/02/06", eventStart: "10:40", eventEnd: "11:00",suffix:"AM",eventTitle: "Get Involved",eventDesc: "Getting involved on campus is one of the most important things you can do when you arrive at WITS! During this session, we will advise you about opportunities for involvement on campus and how to find student organizations that will match your  interests. You will also learn about the various leadership opportunities available to you through Student Activities.", eventVenue: "Wits Science Stadium Auditorium 4"},
                       {eventDate:"2013/02/06", eventStart: "10:40", eventEnd: "11:00",suffix:"AM",eventTitle: "Staying Healthy",eventDesc: "Representatives from Campus Health and Wellness Centre will provide an overview of healthcare facilities that are available on campus. Learn what to do if you get sick or injured whilst at WITS.", eventVenue: "Wits Science Stadium Auditorium 5"},
                       {eventDate:"2013/02/06", eventStart: "11:00", eventEnd: "11:20",suffix:"AM",eventTitle: "Making the Transition to Wits",eventDesc: "Discuss expectations, fears and hopes about coming to WITS as a new student and being lesbian, gay, bisexual or transgender. Learn about resources and helpful services in a relaxed atmosphere.", eventVenue: "Wits Science Stadium Auditorium 4"},
                       {eventDate:"2013/02/06", eventStart: "11:00", eventEnd: "11:20",suffix:"AM",eventTitle: "Social Networking with a Purpose",eventDesc: "Use this opportunity to familiarise yourself with e-WITS. Students will be shown how to access their student portal. The doís and dontís of social media", eventVenue: "Wits Science Stadium Auditorium 5"},
                       {eventDate:"2013/02/06", eventStart: "11:20", eventEnd: "11:40",suffix:"AM",eventTitle: "Safety and Security",eventDesc: "This program covers property and personal safety protection as well as numerous personal safety devices and security equipment.", eventVenue: "Wits Science Stadium Auditorium 4"},
                       {eventDate:"2013/02/06", eventStart: "11:20", eventEnd: "11:40",suffix:"AM",eventTitle: "Dont Dis our Ability",eventDesc: "Meet with the disability unit and get more information on our world class facilities and support available to students with a disability.", eventVenue: "Wits Science Stadium Auditorium 5"},
                       {eventDate:"2013/02/06", eventStart: "11:40", eventEnd: "12:00",suffix:"AM",eventTitle: "What is a Wits-e",eventDesc: "What is a Wits-e", eventVenue: "Wits Science Stadium Auditorium 4"},
                       {eventDate:"2013/02/06", eventStart: "11:40", eventEnd: "13:00",suffix:"PM",eventTitle: "Campus Tours",eventDesc: "Take this opportunity to stretch your legs and explore the campus. Orientation assistants will lead students on a brief tour of WITS to allow students to familiarise themselves with the campus.", eventVenue: "Depart from Wits Stadium"},
                       {eventDate:"2013/02/06", eventStart: "15:00", eventEnd: "18:00",suffix:"PM",eventTitle: "WITS Beer Garden",eventDesc: "Join us for some amazing/interesting brews at the Wits Beer Garden. Drink responsibly and reasonably.", eventVenue: "Library Lawns"},
                       {eventDate:"2013/02/07", eventStart: "09:00", eventEnd: "12:00",suffix:"AM",eventTitle: "Basic Computer Skills",eventDesc: "This is a basic computer course. The course is divided into 3 sessions and students are required to attend all sessions.", eventVenue: "FNB Computer Lab"},
                       {eventDate:"2013/02/07", eventStart: "09:00", eventEnd: "09:20",suffix:"AM",eventTitle: "Mastering Life at Wits",eventDesc: "Take a moment to learn more about WITS from staff and students who know it best. Topics will include classroom participation, interacting with Faculty staff and student colleagues, time management, working in groups and campus resources.", eventVenue: "Wits Science Stadium Auditorium 4"},
                       {eventDate:"2013/02/07", eventStart: "09:20", eventEnd: "10:00",suffix:"AM",eventTitle: "Practical Matters",eventDesc: "Learn how to create and use a daily budget, maintain and grow a savings account and build good credit. If you will be receiving financial aid or a scholarship this session will explain how to complete the requirements and avoid errors that can cause delays. You will learn the steps needed to pay your upcoming tuition and residence bill.", eventVenue: "Wits Science Stadium Auditorium 4"},
                       {eventDate:"2013/02/07", eventStart: "10:20", eventEnd: "10:40",suffix:"AM",eventTitle: "Fitness, Friendship and Fun",eventDesc: "Discover the wide range of activities offered through Sports - intramurals, outdoor recreation, fitness/wellness, instructional, sport clubs and informal recreation. Come see why students at WITS participate actively in Sports.", eventVenue: "Wits Science Stadium Auditorium 4"},
                       {eventDate:"2013/02/07", eventStart: "10:40", eventEnd: "11:00",suffix:"AM",eventTitle: "Get Involved",eventDesc: "Getting involved on campus is one of the most important things you can do when you arrive at WITS! During this session, we will advise you about opportunities for involvement on campus and how to find student organizations that will match your  interests. You will also learn about the various leadership opportunities available to you through Student Activities.", eventVenue: "Wits Science Stadium Auditorium 4"},
                       {eventDate:"2013/02/07", eventStart: "11:00", eventEnd: "11:20",suffix:"AM",eventTitle: "Making the Transition to Wits",eventDesc: "Discuss expectations, fears and hopes about coming to WITS as a new student and being lesbian, gay, bisexual or transgender. Learn about resources and helpful services in a relaxed atmosphere.", eventVenue: "Wits Science Stadium Auditorium 4"},
                       {eventDate:"2013/02/07", eventStart: "11:20", eventEnd: "11:40",suffix:"AM",eventTitle: "Safety and Security",eventDesc: "This program covers property and personal safety protection as well as numerous personal safety devices and security equipment.", eventVenue: "Wits Science Stadium Auditorium 4"},
                       {eventDate:"2013/02/07", eventStart: "11:40", eventEnd: "12:00",suffix:"AM",eventTitle: "What is a Wits-e",eventDesc: "What is a Wits-e", eventVenue: "Wits Science Stadium Auditorium 4"},
                       {eventDate:"2013/02/07", eventStart: "11:40", eventEnd: "13:00",suffix:"PM",eventTitle: "Campus Tours",eventDesc: "Take this opportunity to stretch your legs and explore the campus. Orientation assistants will lead students on a brief tour of WITS to allow students to familiarise themselves with the campus.", eventVenue: "Depart from Wits Stadium"},
                       {eventDate:"2013/02/07", eventStart: "15:00", eventEnd: "18:00",suffix:"PM",eventTitle: "WITS Beer Garden",eventDesc: "Join us for some amazing/interesting brews at the Wits Beer Garden. Drink responsibly and reasonably.", eventVenue: "Library Lawns"},
                       {eventDate:"2013/02/08", eventStart: "09:00", eventEnd: "12:00",suffix:"AM",eventTitle: "Basic Computer Skills",eventDesc: "This is a basic computer course. The course is divided into 3 sessions and students are required to attend all sessions.", eventVenue: "FNB Computer Lab"},
                       {eventDate:"2013/02/08", eventStart: "09:00", eventEnd: "09:20",suffix:"AM",eventTitle: "Transitioning from High School to University",eventDesc: "Youíve heard that university is different from high school and that the classes are more demanding, but do you know what that really means? Come to a talk with professional learning specialists about what to expect at WITS and how to prepare effectively.", eventVenue: "Wits Science Stadium Auditorium 4"},
                       {eventDate:"2013/02/08", eventStart: "09:20", eventEnd: "09:40",suffix:"AM",eventTitle: "CCDU",eventDesc: "Learn about the role of CCDU in assisting students achieve their academic, personal and professional goals.", eventVenue: "Wits Science Stadium Auditorium 4"},
                       {eventDate:"2013/02/08", eventStart: "09:40", eventEnd: "10:00",suffix:"AM",eventTitle: "Student Parking and Transportation",eventDesc: "Is there parking available for 1st year students? How do I get around Johannesburg using public transport? This is an opportunity to familiarise yourself with transport options available to a Witsie and get answers to these any many more questions.", eventVenue: "Wits Science Stadium Auditorium 4"},
                       {eventDate:"2013/02/08", eventStart: "10:20", eventEnd: "10:40",suffix:"AM",eventTitle: "Sex, Drugs and Rock n Roll",eventDesc: "Your peers will share important, thought provoking experiences on sexuality, relationships and alcohol here on campus. Come and check this out. Learn to party safely!", eventVenue: "Wits Science Stadium Auditorium 4"},
                       {eventDate:"2013/02/08", eventStart: "10:40", eventEnd: "11:00",suffix:"AM",eventTitle: "Staying Healthy",eventDesc: "Representatives from Campus Health and Wellness Centre will provide an overview of healthcare facilities that are available on campus. Learn what to do if you get sick or injured whilst at WITS.", eventVenue: "Wits Science Stadium Auditorium 4"},
                       {eventDate:"2013/02/08", eventStart: "11:00", eventEnd: "11:20",suffix:"AM",eventTitle: "Social Networking with a Purpose",eventDesc: "Use this opportunity to familiarise yourself with e-WITS. Students will be shown how to access their student portal. The doís and dontís of social media", eventVenue: "Wits Science Stadium Auditorium 4"},
                       {eventDate:"2013/02/08", eventStart: "11:20", eventEnd: "11:40",suffix:"AM",eventTitle: "Dont Dis our Ability",eventDesc: "Meet with the disability unit and get more information on our world class facilities and support available to students with a disability.", eventVenue: "Wits Science Stadium Auditorium 4"},
                       {eventDate:"2013/02/08", eventStart: "11:40", eventEnd: "13:00",suffix:"PM",eventTitle: "Campus Tours",eventDesc: "Take this opportunity to stretch your legs and explore the campus. Orientation assistants will lead students on a brief tour of WITS to allow students to familiarise themselves with the campus.", eventVenue: "Depart from Wits Stadium"},
                       {eventDate:"2013/02/08", eventStart: "15:00", eventEnd: "18:00",suffix:"PM",eventTitle: "WITS Beer Garden",eventDesc: "Join us for some amazing/interesting brews at the Wits Beer Garden. Drink responsibly and reasonably.", eventVenue: "Library Lawns"}
        ];
    
    return generalData;
    },

    
    generateInternationalProgramme: function() {
        var internationalData = this.getInternationalProgrammeData();
        return this.generateProgramme("Wits International Office", internationalData, "international-prog.html", false);
    },
    
    getInternationalProgrammeData: function() {
        var internationalData = [
        {
                                 eventDate: "2013/02/06",
                                 eventStart: "14:00",
                                 eventEnd: "14:15",
                                 suffix: "PM",
                                 eventTitle: "Wits International Office (WIO)",
                                 eventDesc: "Wits International Office",
                                 eventVenue: "CB15, Ground Floor, Central Block"
        },
                                 {
                                 eventDate: "2013/02/06",
                                 eventStart: "14:15",
                                 eventEnd: "14:45",
                                 suffix: "PM",
                                 eventTitle: "Medical Aid providers",
                                 eventDesc: "Medical Aid Providers",
                                 eventVenue: "CB15, Ground Floor, Central Block"
                                 },
                                 {
                                 eventDate: "2013/02/06",
                                 eventStart: "14:45",
                                 eventEnd: "15:00",
                                 suffix: "PM",
                                 eventTitle: "Foreign Exchange/Bank representative",
                                 eventDesc: "Discussing foreign exchange with bank representative",
                                 eventVenue: "CB15, Ground Floor, Central Block"
                                 },
                                 {
                                 eventDate: "2013/02/06",
                                 eventStart: "15:00",
                                 eventEnd: "15:15",
                                 suffix: "PM",
                                 eventTitle: "SRC/Student Associations",
                                 eventDesc: "Student Representative Council",
                                 eventVenue: "CB15, Ground Floor, Central Block"
                                 },
                                 {
                                 eventDate: "2013/02/06",
                                 eventStart: "15:15",
                                 eventEnd: "15:30",
                                 suffix: "PM",
                                 eventTitle: "Study abroad opportunities",
                                 eventDesc: "Opportunities for studying abroad",
                                 eventVenue: "CB15, Ground Floor, Central Block"
                                 },
                                 {
                                 eventDate: "2013/02/06",
                                 eventStart: "15:30",
                                 eventEnd: "16:00",
                                 suffix: "PM",
                                 eventTitle: "Safety &amp; security",
                                 eventDesc: "Safety &amp; security",
                                 eventVenue: "CB15, Ground Floor, Central Block"
                                 },
                                 {
                                 eventDate: "2013/02/06",
                                 eventStart: "16:00",
                                 eventEnd: "17:00",
                                 suffix: "PM",
                                 eventTitle: "Closure",
                                 eventDesc: "Wrapping up discussion with International Office",
                                 eventVenue: "CB15, Ground Floor, Central Block"
                                 }
        
        ];
        return internationalData;
    },
    
    generateHealthScienceProgramme: function() {
        var healthScData = this.getHealthScienceProgrammeData();
        return this.generateProgramme("Health Sciences", healthScData, "healthsc-prog.html", true);
    },
    
    getHealthScienceProgrammeData: function() {
        var healthScData = [
                            {
                            eventDate: "2013/01/26",
                            eventStart: "08:00",
                            eventEnd: "16:00",
                            suffix: "AM",
                            eventTitle: "Registration",
                            eventDesc: "Bring a copy of your ID book, your firm offer letter and proof of payment",
                            eventVenue: "Student Enrollment Centre, Ground Floor, Senate House"
                            },
                            {
                            eventDate: "2013/01/28",
                            eventStart: "08:30",
                            eventEnd: "09:00",
                            suffix: "AM",
                            eventTitle: "Overview of professions in health sciences",
                            eventDesc: "Opportunity to meet academics, students and professionals in Health sciences",
                            eventVenue: "Medical School, Lecture theatre 3, 5th floor MS Building"
                            },
                            {
                            eventDate: "2013/01/28",
                            eventStart: "09:00",
                            eventEnd: "09:30",
                            suffix: "AM",
                            eventTitle: "Relationship between basisc sciences and professions",
                            eventDesc: "Relationship between basisc sciences and professions",
                            eventVenue: "Medical School, Lecture theatre 3, 5th floor MS Building"
                            },
                            {
                            eventDate: "2013/01/28",
                            eventStart: "09:30",
                            eventEnd: "10:30",
                            suffix: "AM",
                            eventTitle: "Discuss challenges and guidelines will be provided on how to settle down early in your studies",
                            eventDesc: "Learning skills and time management",
                            eventVenue: "Medical School, Lecture theatre 3, 5th floor MS Building"
                            },
                            {
                            eventDate: "2013/01/28",
                            eventStart: "11:30",
                            eventEnd: "13:30",
                            suffix: "AM",
                            eventTitle: "Essay writing skills",
                            eventDesc: "Essay writing skills for MBBCh and BDS students",
                            eventVenue: "Medical School, Lecture theatre 3, 5th floor MS Building"
                            },
                            {
                            eventDate: "2013/01/28",
                            eventStart: "14:30",
                            eventEnd: "15:30",
                            suffix: "PM",
                            eventTitle: "Meet and greet the Physiotherapy department",
                            eventDesc: "Meet the HoD, students and academics who will form an integral part of their studies. Also a tour of Dept facilties",
                            eventVenue: "Room 5A08, 5th floor MS Building"
                            },
                            {
                            eventDate: "2013/01/28",
                            eventStart: "15:30",
                            eventEnd: "16:30",
                            suffix: "PM",
                            eventTitle: "Presentation and Tour of the Occupational Therapy Department",
                            eventDesc: "The presentation and tour will be informative and valuable to any student who wishes to register for Occupational Therapy",
                            eventVenue: "Room 5A08, 5th floor MS Building"
                            },
                            {
                            eventDate: "2013/01/29",
                            eventStart: "09:00",
                            eventEnd: "10:00",
                            suffix: "AM",
                            eventTitle: "Introduction to Nursing",
                            eventDesc: "Overview of a career in nursing, the curriculum and support available",
                            eventVenue: "Room 5A08, 5th floor MS Building"
                            },
                            {
                            eventDate: "2013/01/29",
                            eventStart: "10:00",
                            eventEnd: "11:00",
                            suffix: "AM",
                            eventTitle: "Tour of Dental School",
                            eventDesc: "All students registered for a Bachelor of Dental Science must attend the tour",
                            eventVenue: "Oral Health Sciences, Orange Block, 8th Floor, Charlotte Maxeke Hospital"
                            },
                            {
                            eventDate: "2013/01/29",
                            eventStart: "11:30",
                            eventEnd: "13:00",
                            suffix: "AM",
                            eventTitle: "Introduction to dental disciplines",
                            eventDesc: "This seminar will give students information about the curriculum",
                            eventVenue: "Dental School LT, Orange Block, 8th Floor, Charlotte Maxeke Hospital"
                            },
                            {
                            eventDate: "2013/01/29",
                            eventStart: "14:00",
                            eventEnd: "16:00",
                            suffix: "PM",
                            eventTitle: "Essay writing skills for BPHARM, NURS, OT and PHYSIO students",
                            eventDesc: "Essay writing skills",
                            eventVenue: "Medical School, Lecture theatre 3, 5th floor MS Building"
                            },
                            {
                            eventDate: "2013/01/30",
                            eventStart: "09:00",
                            eventEnd: "11:30",
                            suffix: "AM",
                            eventTitle: "Library, Computer &amp; Internet orientation",
                            eventDesc: "Meet the vibrant library staff and how to use facilities efficiently",
                            eventVenue: "Medical School, Lecture theatre 3, 5th floor MS Building"
                            },
                            {
                            eventDate: "2013/01/30",
                            eventStart: "11:30",
                            eventEnd: "13:00",
                            suffix: "AM",
                            eventTitle: "Introductory lecture and departmental tour for Pharmacy students",
                            eventDesc: "Gain an overview of the curriculum, receive information on different career opportunities and go on a tour of the department",
                            eventVenue: "Room 5A08, 5th floor MS Building"
                            },
                            {
                            eventDate: "2013/01/30",
                            eventStart: "13:00",
                            eventEnd: "14:00",
                            suffix: "PM",
                            eventTitle: "Meet the Dean",
                            eventDesc: "Informal meeting with the Dean of Health Sciences",
                            eventVenue: "Cafetaria Foyer"
                            },
                            {
                            eventDate: "2013/01/30",
                            eventStart: "14:00",
                            eventEnd: "14:30",
                            suffix: "PM",
                            eventTitle: "Address by the Dean of the Faculty of Health Sciences",
                            eventDesc: "Professor Ahmed Wadee provides students with information that is important during their degree",
                            eventVenue: "Charlotte Maxeke Auditorium"
                            },
                            {
                            eventDate: "2013/01/30",
                            eventStart: "14:30",
                            eventEnd: "15:00",
                            suffix: "PM",
                            eventTitle: "Address by the Dean of Students",
                            eventDesc: "Support student learning and personal growth",
                            eventVenue: "Charlotte Maxeke Auditorium"
                            },
                            {
                            eventDate: "2013/01/30",
                            eventStart: "15:00",
                            eventEnd: "15:30",
                            suffix: "PM",
                            eventTitle: "Address by the Faculty Office",
                            eventDesc: "Meet faculty staff and learn important administration information",
                            eventVenue: "Charlotte Maxeke Auditorium"
                            },
                            {
                            eventDate: "2013/01/30",
                            eventStart: "15:30",
                            eventEnd: "16:00",
                            suffix: "PM",
                            eventTitle: "Tutoring programme: Physics, chemistry, biology",
                            eventDesc: "Tutoring programme",
                            eventVenue: "Charlotte Maxeke Auditorium"
                            },
                            {
                            eventDate: "2013/01/31",
                            eventStart: "09:00",
                            eventEnd: "11:00",
                            suffix: "AM",
                            eventTitle: "Essay writing skills for BHSC &smp; BCMP",
                            eventDesc: "Essay writing skills",
                            eventVenue: "Medical School, Lecture theatre 3, 5th floor MS Building"
                            }
        ];
        
        return healthScData;
    },
    
    generateHumanitiesProgramme: function() {
        var humanitiesData = this.getHumanitiesProgrammeData();
        return this.generateProgramme("Humanities", humanitiesData, "humanities-prog.html", true);
    },
    
    getHumanitiesProgrammeData: function() {
        var humanitiesData = [
                              {eventDate:"2013/01/28", eventStart: "09:00", eventEnd: "09:30",suffix:"AM",eventTitle: "Dean's address",eventDesc: "The welcome address by Dean of the Faculty of Humanities should not be missed. The Deanís address in the Faculty programme is the most well attended presentation as students leave the talk inspired and with a sense of belonging.", eventVenue: "Great Hall"},
                              {eventDate:"2013/01/28", eventStart: "09:30", eventEnd: "10:00",suffix:"AM",eventTitle: "Dean of Students' Address",eventDesc: "The Dean of Student Affairs, Ms Prem Coopoo, assumes overall accountability for the Division of Student Affairs. The main thrust of the Division is to support student learning and personal growth through student involvement in cocurricular activities and to enhance the studentís opportunity to participate fully in the University experience.", eventVenue: "Great Hall"},
                              {eventDate:"2013/01/28", eventStart: "10:00", eventEnd: "10:30",suffix:"AM",eventTitle: "Planning an exciting curriculum",eventDesc: "At this presentation students will receive information on how to plan and structure a viable three year curriculum.", eventVenue: "Great Hall"},
                              {eventDate:"2013/01/28", eventStart: "11:00", eventEnd: "11:45",suffix:"AM",eventTitle: "Speech and Hearing Therapy",eventDesc: "The requirements for the B.A (Speech and Hearing Therapy) degree will be discussed, including subjects that interested students can take during their first year of study should they wish to apply for admission in 2014.", eventVenue: "Umthombo Building ñ U1"},
                              {eventDate:"2013/01/28", eventStart: "11:45", eventEnd: "12:30",suffix:"PM",eventTitle: "Intro to Psychology and the different options for professional psychology",eventDesc: "This is an introduction to psychology and the department including an introduction to the different options of professional psychology e.g. clinical, organisational psychology, educational psychology, counselling psychology, neuropsychology, research psychology, and other possibilities.", eventVenue: "Umthombo Building ñ U1"},
                              {eventDate:"2013/01/28", eventStart: "12:30", eventEnd: "13:15",suffix:"PM",eventTitle: "Bachelor of Social Work",eventDesc: "Experience of studying Social Work, Social Networking and Field Instructions", eventVenue: "Umthombo Building ñ U1"},
                              {eventDate:"2013/01/28", eventStart: "11:15", eventEnd: "13:00",suffix:"PM",eventTitle: "Where Literature, Language and Media meet",eventDesc: "Students will be given an opportunity to meet lectures and students from the School of Literature, Language and Media and participate in a panel discussion.", eventVenue: "Senate House ñ SH6"},
                              {eventDate:"2013/01/28", eventStart: "11:00", eventEnd: "12:00",suffix:"AM",eventTitle: "Anthropology, International Relations and Sociology",eventDesc: "Learn more about the wide range of courses offered by the School of Social Sciences and get more information to make the correct subject choices. At this session students will learn more about Anthropology; International Relations and Sociology.", eventVenue: "Senate House ñ SHB5"},
                              {eventDate:"2013/01/28", eventStart: "12:00", eventEnd: "13:00",suffix:"PM",eventTitle: "History, Philosophy and Political Studies",eventDesc: "At this session students will learn more about History; Philosophy and Political Studies.", eventVenue: "Senate House ñ SHB5"},
                              {eventDate:"2013/01/28", eventStart: "11:00", eventEnd: "11:15",suffix:"AM",eventTitle: "Music Programme",eventDesc: "Music Programme", eventVenue: "Wits Theatre"},
                              {eventDate:"2013/01/28", eventStart: "11:15", eventEnd: "11:45",suffix:"AM",eventTitle: "Intro To Wits School of Arts",eventDesc: "Intro To Wits School of Arts", eventVenue: "Wits Theatre"},
                              {eventDate:"2013/01/28", eventStart: "11:45", eventEnd: "12:30",suffix:"PM",eventTitle: "Intro to Film, Visual and Performing Arts",eventDesc: "Intro to Film, Visual and Performing Arts", eventVenue: "Wits Theatre"},
                              {eventDate:"2013/01/28", eventStart: "11:00", eventEnd: "12:00",suffix:"AM",eventTitle: "Overview of B.Ed.",eventDesc: "The presentation will give students an overview of the Bachelor of Education curriculum. Students will get information on the three specialisations namely: Foundation Phase Teaching, Senior Primary Teaching and Secondary Teaching.", eventVenue: "Linder Auditorium ñ Education Campus"},
                              {eventDate:"2013/01/28", eventStart: "12:00", eventEnd: "13:00",suffix:"PM",eventTitle: "Education Students Council",eventDesc: "Bachelor of Education students meet the Education Student Council (ESC) and Peer Support programme members.", eventVenue: "Linder Auditorium ñ Education Campus"},
                              {eventDate:"2013/01/28", eventStart: "14:00", eventEnd: "15:00",suffix:"PM",eventTitle: "Description of Major Courses",eventDesc: "Description of academic major subjects for which choices are required", eventVenue: "Linder Auditorium ñ Education Campus"},
                              {eventDate:"2013/01/29", eventStart: "09:00", eventEnd: "09:45",suffix:"AM",eventTitle: "Speech and Hearing Therapy",eventDesc: "The requirements for the B.A (Speech and Hearing Therapy) degree will be discussed, including subjects that interested students can take during their first year of study should they wish to apply for admission in 2014.", eventVenue: "Umthombo Building ñ U1"},
                              {eventDate:"2013/01/29", eventStart: "09:45", eventEnd: "10:30",suffix:"AM",eventTitle: "Intro to Psychology and the different options for professional psychology",eventDesc: "This is an introduction to psychology and the department including an introduction to the different options of professional psychology e.g. clinical, organisational psychology, educational psychology, counselling psychology, neuropsychology, research psychology, and other possibilities.", eventVenue: "Umthombo Building ñ U1"},
                              {eventDate:"2013/01/29", eventStart: "11:00", eventEnd: "11:45",suffix:"AM",eventTitle: "Bachelor of Social Work",eventDesc: "Experience of studying Social Work, Social Networking and Field Instructions", eventVenue: "Umthombo Building ñ U1"},
                              {eventDate:"2013/01/29", eventStart: "09:00", eventEnd: "11:00",suffix:"AM",eventTitle: "Where Literature, Language and Media meet",eventDesc: "Students will be given an opportunity to meet lectures and students from the School of Literature, Language and Media and participate in a panel discussion.", eventVenue: "Senate House ñ SH6"},
                              {eventDate:"2013/01/29", eventStart: "11:30", eventEnd: "12:30",suffix:"PM",eventTitle: "Anthropology, International Relations and Sociology",eventDesc: "Learn more about the wide range of courses offered by the School of Social Sciences and get more information to make the correct subject choices. At this session students will learn more about Anthropology; International Relations and Sociology.", eventVenue: "Senate House ñ SH6"},
                              {eventDate:"2013/01/29", eventStart: "12:30", eventEnd: "13:30",suffix:"AM",eventTitle: "History, Philosophy and Political Studies",eventDesc: "At this session students will learn more about History; Philosophy and Political Studies.", eventVenue: "Senate House ñ SH6"},
                              {eventDate:"2013/01/29", eventStart: "11;00", eventEnd: "11:15",suffix:"AM",eventTitle: "Music Programme",eventDesc: "Music Programme", eventVenue: "Wits Theatre"},
                              {eventDate:"2013/01/29", eventStart: "11:15", eventEnd: "11:45",suffix:"AM",eventTitle: "Intro To Wits School of Arts",eventDesc: "Intro To Wits School of Arts", eventVenue: "Wits Theatre"},
                              {eventDate:"2013/01/29", eventStart: "11:45", eventEnd: "12:30",suffix:"PM",eventTitle: "Intro to Film, Visual and Performing Arts",eventDesc: "Intro to Film, Visual and Performing Arts", eventVenue: "Wits Theatre"},
                              {eventDate:"2013/01/30", eventStart: "08:00", eventEnd: "16:00",suffix:"PM",eventTitle: "Registration for B.Ed",eventDesc: "Students who wish to register for a Bachelor of Education will start their registration process by attending a curriculum planning session in the Examination Hall thereafter students will proceed to the Student Enrolment Centre.", eventVenue: "Student Enrollment Center, Senate House"},
                              {eventDate:"2013/01/30", eventStart: "08:00", eventEnd: "12:00",suffix:"AM",eventTitle: "Curriculum Planning for BA: A to Mc",eventDesc: "Curriculum planning is compulsory for Bachelor of Arts students. Students will be handed a curriculum planning form which they need to bring to registration. Surnames A-Mc: 08:00-12:00; Surnames Md-Z: 12:00-16:00", eventVenue: "Umthombo Building"},
                              {eventDate:"2013/01/30", eventStart: "12:00", eventEnd: "16:00",suffix:"PM",eventTitle: "Curriculum Planning for BA: Md to Z",eventDesc: "Curriculum planning is compulsory for Bachelor of Arts students. Students will be handed a curriculum planning form which they need to bring to registration. Surnames A-Mc: 08:00-12:00; Surnames Md-Z: 12:00-16:00", eventVenue: "Umthombo Building"},
                              {eventDate:"2013/01/31", eventStart: "08:00", eventEnd: "16:00",suffix:"PM",eventTitle: "Registration for Faculty of Humanities",eventDesc: "Students are required to confirm their curriculum planning with the Faculty in the examination Hall before proceeding to the Student Enrolment Centre to confirm their registration.", eventVenue: "Student Enrollment Center, Senate House"},
                              {eventDate:"2013/01/31", eventStart: "08:00", eventEnd: "16:00",suffix:"PM",eventTitle: "Curriculum Planning",eventDesc: "Curriculum Planning", eventVenue: "Exams Hall"},
                              {eventDate:"2013/02/04", eventStart: "09:00", eventEnd: "16:00",suffix:"PM",eventTitle: "Speech and Hearing Therapy Students",eventDesc: "Students who have registered for a Speech and Hearing Therapy must attend this week long orientation programme with the Department of Speech Pathology and Audiology.", eventVenue: "Umthombo Building ñ Department of Speech Pathology and Audiology"},
                              {eventDate:"2013/02/04", eventStart: "09:00", eventEnd: "09:30",suffix:"AM",eventTitle: "Looking after your mental health in 1st year",eventDesc: "All students registered for Psychology 1 should attend this talk by the Head of School, Professor M Marchetti-Mercer.", eventVenue: "Emthonjeni Auditorium, Emthonjeni Centre"},
                              {eventDate:"2013/02/04", eventStart: "10:00", eventEnd: "10:30",suffix:"AM",eventTitle: "Scholars, Tricksters and Life on Campus",eventDesc: "This talk by the Head of School of Social Sciences, Professor S Vawda, should not be missed as it will assist all first year students during the year.", eventVenue: "Emthonjeni Auditorium, Emthonjeni Centre"},
                              {eventDate:"2013/02/05", eventStart: "09:00", eventEnd: "16:00",suffix:"PM",eventTitle: "Speech and Hearing Therapy Students",eventDesc: "The requirements for the B.A (Speech and Hearing Therapy) degree will be discussed, including subjects that interested students can take during their first year of study should they wish to apply for admission in 2014.", eventVenue: "Umthombo Building ñ Department of Speech Pathology and Audiology"},
                              {eventDate:"2013/02/05", eventStart: "10:00", eventEnd: "10:45",suffix:"AM",eventTitle: "Negotiating the School of Literature, Language and Media",eventDesc: "All students registered for a course in the School of Literature, Language and Media should attend this presentation by the Head of School, Professor L Meintjes.", eventVenue: "Senate House ñ SH6"},
                              {eventDate:"2013/02/05", eventStart: "09:00", eventEnd: "09:30",suffix:"AM",eventTitle: "Welcome Address to all B.Ed. Students",eventDesc: "Students have an opportunity to meet the Head of School and other academics that play an integral part of a studentís life in the School of Education. Learn about support structure in place to ensure academic success.", eventVenue: "Linder Auditorium ñ Education Campus"},
                              {eventDate:"2013/02/05", eventStart: "09:30", eventEnd: "10:00",suffix:"AM",eventTitle: "Writing Centre and Peer Support",eventDesc: "Students will have an opportunity to meet Laura Dison and Tanya Bekker who play an important role in the writing centre and peer support that is only available to students registered for a Bachelor of Education.", eventVenue: "Linder Auditorium ñ Education Campus"},
                              {eventDate:"2013/02/05", eventStart: "10:00", eventEnd: "10:15",suffix:"AM",eventTitle: "Examinations",eventDesc: "Examinations", eventVenue: "Linder Auditorium ñ Education Campus"},
                              {eventDate:"2013/02/05", eventStart: "10:15", eventEnd: "10:30",suffix:"AM",eventTitle: "Exploration",eventDesc: "Students can use this opportunity to explore the education campus. Visit the canteen, the gym, swimming pool or relax on the beautiful plush green lawns.", eventVenue: "Linder Auditorium ñ Education Campus"},
                              {eventDate:"2013/02/05", eventStart: "11:00", eventEnd: "11:30",suffix:"AM",eventTitle: "Sport and Recreation",eventDesc: "An overview of sporting facilities available on the Education campus will be given to students. Students will receive information about Gym, swimming pool and various sporting fields on the Education Campus.", eventVenue: "Linder Auditorium ñ Education Campus"},
                              {eventDate:"2013/02/05", eventStart: "11:30", eventEnd: "13:00",suffix:"PM",eventTitle: "Lecture Stations",eventDesc: "Lecture Stations", eventVenue: "Linder Auditorium ñ Education Campus"},
                              {eventDate:"2013/02/06", eventStart: "09:00", eventEnd: "16:00",suffix:"PM",eventTitle: "Speech and Hearing Therapy Students",eventDesc: "Students who have registered for a Speech and Hearing Therapy must attend this week long orientation programme with the Department of Speech Pathology and Audiology.", eventVenue: "Umthombo Building ñ Department of Speech Pathology and Audiology"},
                              {eventDate:"2013/02/07", eventStart: "09:00", eventEnd: "16:00",suffix:"PM",eventTitle: "Speech and Hearing Therapy Students",eventDesc: "Students who have registered for a Speech and Hearing Therapy must attend this week long orientation programme with the Department of Speech Pathology and Audiology.", eventVenue: "Umthombo Building ñ Department of Speech Pathology and Audiology"},
                              {eventDate:"2013/02/07", eventStart: "10:00", eventEnd: "12:00",suffix:"AM",eventTitle: "BA Performing and Visual Art, Music, Fine Arts and Dramatic Art",eventDesc: "Students registered for courses in the School of Arts should attend an address by the Head of School, Professor G Pfreunder followed by a tours of the WITS School of Arts facilities", eventVenue: "Wits Theatre"},
                              {eventDate:"2013/02/07", eventStart: "14:00", eventEnd: "16:30",suffix:"PM",eventTitle: "Meeting with all School of Arts Students",eventDesc: "It is compulsory for all students registered for courses in the WITS School of Arts to attend this session.", eventVenue: "Wits Theatre"},
                              {eventDate:"2013/02/08", eventStart: "09:00", eventEnd: "16:00",suffix:"PM",eventTitle: "Speech and Hearing Therapy Students",eventDesc: "Students who have registered for a Speech and Hearing Therapy must attend this week long orientation programme with the Department of Speech Pathology and Audiology.", eventVenue: "Umthombo Building ñ Department of Speech Pathology and Audiology"}
        ];

        return humanitiesData;
    },
    
    generateCommerceProgramme: function() {
        var commerceData = this.getCommerceProgrammeData();
        return this.generateProgramme("Commerce, Law &amp; Management", commerceData, "commerce-prog.html", true);
    },
    
    getCommerceProgrammeData: function() {
        var commerceData = [
                            {
                            eventDate: "2013/01/30",
                            eventStart: "09:30",
                            eventEnd: "10:30",
                            suffix: "AM",
                            eventTitle: "Reasons to pursue a vocation in Law",
                            eventDesc: "Discover the vibrant environment for studying Law @ Wits",
                            eventVenue: "New Commerce Building 1, West Campus"
                            },
                            {
                            eventDate: "2013/01/30",
                            eventStart: "11:00",
                            eventEnd: "12:00",
                            suffix: "AM",
                            eventTitle: "Skills and Career Development Presentation",
                            eventDesc: "Discover the vibrant environment for studying Law @ Wits",
                            eventVenue: "New Commerce Building 1, West Campus"
                            },
                            {
                            eventDate: "2013/01/31",
                            eventStart: "09:00",
                            eventEnd: "10:30",
                            suffix: "AM",
                            eventTitle: "Academic advising session: Bachelor of Accounting Science",
                            eventDesc: "Information about the exciting business career possibilities and paths that await you in the discipline",
                            eventVenue: "FNB101, West Campus"
                            },
                            {
                            eventDate: "2013/01/31",
                            eventStart: "11:00",
                            eventEnd: "12:30",
                            suffix: "AM",
                            eventTitle: "Academic advising session: Bachelor of Commerce/Bachelor of Economic Science",
                            eventDesc: "This presentation is aimed at students who are interested Economics, Marketing, etc.",
                            eventVenue: "FNB101, West Campus"
                            },
                            {
                            eventDate: "2013/02/01",
                            eventStart: "08:00",
                            eventEnd: "16:00",
                            suffix: "AM",
                            eventTitle: "Registration (Commerce &amp; Economic Science)",
                            eventDesc: "Bring a copy of your ID book, your firm offer letter and proof of payment",
                            eventVenue: "Student Enrollment Centre, Ground Floor, Senate House"
                            },
                            {
                            eventDate: "2013/02/04",
                            eventStart: "08:00",
                            eventEnd: "16:00",
                            suffix: "AM",
                            eventTitle: "Registration (Laws &amp; Accounting)",
                            eventDesc: "Bring a copy of your ID book, your firm offer letter and proof of payment",
                            eventVenue: "Student Enrollment Centre, Ground Floor, Senate House"
                            },
                            {
                            eventDate: "2013/02/05",
                            eventStart: "08:30",
                            eventEnd: "09:15",
                            suffix: "AM",
                            eventTitle: "Address by the Dean of the faculty of Commerce, Law &amp; Management",
                            eventDesc: "The address by Prof. Nqosa Mahao brings a refocus and renewed energy to the strong traditition of training in the faculty",
                            eventVenue: "Wits Great Hall"
                            },
                            {
                            eventDate: "2013/02/05",
                            eventStart: "09:15",
                            eventEnd: "10:00",
                            suffix: "AM",
                            eventTitle: "Address by the Dean of students",
                            eventDesc: "Student learning and personal growth through student involvement in cocurricular activities",
                            eventVenue: "Wits Great Hall"
                            },
                            {
                            eventDate: "2013/02/05",
                            eventStart: "10:15",
                            eventEnd: "11:15",
                            suffix: "AM",
                            eventTitle: "Address by the course coordinator of Economics I",
                            eventDesc: "This presentation will provide you with further insight into the course",
                            eventVenue: "Wits Great Hall"
                            },
                            {
                            eventDate: "2013/02/05",
                            eventStart: "10:15",
                            eventEnd: "11:15",
                            suffix: "AM",
                            eventTitle: "Tour of essential places for LLB students",
                            eventDesc: "The tour will include lecture venues, computer labs, etc.",
                            eventVenue: "Outside Wits Great Hall"
                            },
                            {
                            eventDate: "2013/02/05",
                            eventStart: "11:30",
                            eventEnd: "12:30",
                            suffix: "AM",
                            eventTitle: "Dos and Don&#146;ts",
                            eventDesc: "This is an important information session for students in Bachelor of Commerce and Economic Science",
                            eventVenue: "FNB102, West Campus"
                            },
                            {
                            eventDate: "2013/02/05",
                            eventStart: "12:45",
                            eventEnd: "13:45",
                            suffix: "PM",
                            eventTitle: "Fundamentals of Information Systems Presentation",
                            eventDesc: "This is an important information session for students in Bachelor of Commerce and Economic Science",
                            eventVenue: "FNB102, West Campus"
                            },
                            {
                            eventDate: "2013/02/05",
                            eventStart: "11:30",
                            eventEnd: "12:30",
                            suffix: "PM",
                            eventTitle: "Computational Mathematics &amp; Business Statistics",
                            eventDesc: "This is an important information session for students in Bachelor of Accounting Science",
                            eventVenue: "FNB101, West Campus"
                            },
                            {
                            eventDate: "2013/02/05",
                            eventStart: "12:45",
                            eventEnd: "13:45",
                            suffix: "PM",
                            eventTitle: "Dos and Don&#146;ts",
                            eventDesc: "This is an important information session for students in Bachelor of Accounting Science",
                            eventVenue: "FNB102, West Campus"
                            },
                            {
                            eventDate: "2013/02/05",
                            eventStart: "11:30",
                            eventEnd: "12:30",
                            suffix: "AM",
                            eventTitle: "Career paths",
                            eventDesc: "This will provide an overview of the various career paths that will be available to you as Law students",
                            eventVenue: "New Commerce Building, NCB 1"
                            },
                            {
                            eventDate: "2013/02/05",
                            eventStart: "12:45",
                            eventEnd: "13:45",
                            suffix: "PM",
                            eventTitle: "Library Tour",
                            eventDesc: "Use this opportunity to meet the helpful and efficient library staff",
                            eventVenue: "Law Library"
                            },
                            {
                            eventDate: "2013/02/05",
                            eventStart: "13:45",
                            eventEnd: "14:30",
                            suffix: "PM",
                            eventTitle: "Collection of course packs for all students in the faculty",
                            eventDesc: "Use this opportunity to meet the helpful and efficient library staff",
                            eventVenue: "School of Law/School of Accountancy/School of Economics and Business Sciences"
                            },
                            {
                            eventDate: "2013/02/06",
                            eventStart: "08:30",
                            eventEnd: "10:00",
                            suffix: "AM",
                            eventTitle: "Legal dangers of social networking as a Law student",
                            eventDesc: "Legal dangers of social networking as a Law student",
                            eventVenue: "New Commerce Building, NCB 1"
                            },
                            {
                            eventDate: "2013/02/06",
                            eventStart: "10:15",
                            eventEnd: "11:15",
                            suffix: "AM",
                            eventTitle: "The Keynote in Law: A footnote legal writing centre workshop",
                            eventDesc: "The Keynote in Law: A footnote legal writing centre workshop",
                            eventVenue: "New Commerce Building, NCB 1"
                            },
                            {
                            eventDate: "2013/02/06",
                            eventStart: "11:30",
                            eventEnd: "12:30",
                            suffix: "AM",
                            eventTitle: "The vital vinculum verbatim quiz by Meera Lalla",
                            eventDesc: "The vital vinculum verbatim quiz by Meera Lalla",
                            eventVenue: "New Commerce Building, NCB 1"
                            },
                            {
                            eventDate: "2013/02/06",
                            eventStart: "12:45",
                            eventEnd: "13:45",
                            suffix: "PM",
                            eventTitle: "Computer lab",
                            eventDesc: "Computer Labs",
                            eventVenue: "Oliver Schreiner Building - School of Law"
                            },
                            {
                            eventDate: "2013/02/06",
                            eventStart: "08:30",
                            eventEnd: "10:00",
                            suffix: "AM",
                            eventTitle: "Computer labs",
                            eventDesc: "Computer Labs",
                            eventVenue: "FNB102, West Campus"
                            },
                            {
                            eventDate: "2013/02/06",
                            eventStart: "10:15",
                            eventEnd: "11:15",
                            suffix: "AM",
                            eventTitle: "Accounting/Business accounting presentation",
                            eventDesc: "Accounting/Business accounting presentation",
                            eventVenue: "FNB102, West Campus"
                            },
                            {
                            eventDate: "2013/02/06",
                            eventStart: "12:45",
                            eventEnd: "13:45",
                            suffix: "PM",
                            eventTitle: "Computational Mathematics &amp; Business Statistics",
                            eventDesc: "This is an important information session for students in Bachelor of Accounting Science",
                            eventVenue: "FNB102, West Campus"
                            },
                            {
                            eventDate: "2013/02/06",
                            eventStart: "08:30",
                            eventEnd: "10:00",
                            suffix: "AM",
                            eventTitle: "Accounting/Business accounting presentation",
                            eventDesc: "Accounting/Business accounting presentation",
                            eventVenue: "FNB101, West Campus"
                            },
                            {
                            eventDate: "2013/02/06",
                            eventStart: "10:15",
                            eventEnd: "11:15",
                            suffix: "AM",
                            eventTitle: "Computer labs",
                            eventDesc: "Computer Labs",
                            eventVenue: "FNB101, West Campus"
                            },
                            {
                            eventDate: "2013/02/06",
                            eventStart: "11:30",
                            eventEnd: "12:30",
                            suffix: "AM",
                            eventTitle: "How to use social media appropriately",
                            eventDesc: "All students who have registered for Bachelor of Accounting Science should attend",
                            eventVenue: "FNB101, West Campus"
                            },
                            {
                            eventDate: "2013/02/06",
                            eventStart: "12:45",
                            eventEnd: "13:45",
                            suffix: "PM",
                            eventTitle: "Accounting information systems presentation",
                            eventDesc: "Accounting information systems presentation",
                            eventVenue: "FNB101, West Campus"
                            },
                            {
                            eventDate: "2013/02/06",
                            eventStart: "13:45",
                            eventEnd: "14:30",
                            suffix: "PM",
                            eventTitle: "Collection of course packs for all students in the faculty",
                            eventDesc: "Collection of course packs",
                            eventVenue: "School of Law/School of Accountancy/School of Economics and Business Sciences"
                            }
                            ];

        return commerceData;
    },
    
    generateEngineeringProgramme: function() {
        var engineeringData = this.getEngineeringProgrammeData();
        return this.generateProgramme("Engineering &amp; Built Environment", engineeringData, "engineering-prog.html", true);
    },
    
    getEngineeringProgrammeData: function() {
        var engineeringData = [
                               {
                               eventDate: "2013/01/31",
                               eventStart: "08:30",
                               eventEnd: "09:15",
                               suffix: "AM",
                               eventTitle: "Fukushima: engineering success or engineerign failure",
                               eventDesc: "Fukushima",
                               eventVenue: "Chamber of mines, Lecture theatre 2"
                               },
                               {
                               eventDate: "2013/01/31",
                               eventStart: "09:30",
                               eventEnd: "10:15",
                               suffix: "AM",
                               eventTitle: "A brief look at Civilization",
                               eventDesc: "A brief look at Civilization",
                               eventVenue: "Chamber of mines, Lecture theatre 2"
                               },
                               {
                               eventDate: "2013/01/31",
                               eventStart: "10:30",
                               eventEnd: "11:15",
                               suffix: "AM",
                               eventTitle: "Intelligent equipment in road building",
                               eventDesc: "Intelligent equipment in road building",
                               eventVenue: "Chamber of mines, Lecture theatre 2"
                               },
                               {
                               eventDate: "2013/01/31",
                               eventStart: "10:30",
                               eventEnd: "11:15",
                               suffix: "AM",
                               eventTitle: "Why mining?",
                               eventDesc: "Why mining?",
                               eventVenue: "Chamber of mines, Lecture theatre 2"
                               },
                               {
                               eventDate: "2013/01/31",
                               eventStart: "12:15",
                               eventEnd: "13:00",
                               suffix: "PM",
                               eventTitle: "Presentation on Chemical engineering",
                               eventDesc: "Discussing chemical engineering",
                               eventVenue: "Chamber of mines, Lecture theatre 2"
                               },
                               {
                               eventDate: "2013/01/31",
                               eventStart: "14:00",
                               eventEnd: "14:45",
                               suffix: "PM",
                               eventTitle: "Armed response - architectural manoeuvres in Johannesburg",
                               eventDesc: "Armed response",
                               eventVenue: "School of Architecture and Planning, Lecture theatre 1"
                               },
                               {
                               eventDate: "2013/01/31",
                               eventStart: "15:00",
                               eventEnd: "15:45",
                               suffix: "PM",
                               eventTitle: "The challenges facing the planner in the 21<sup>st</sup> century",
                               eventDesc: "The challenges facing the planner in the 21<sup>st</sup> century",
                               eventVenue: "School of Architecture and Planning, Lecture theatre 1"
                               },
                               {
                               eventDate: "2013/01/31",
                               eventStart: "15:00",
                               eventEnd: "15:45",
                               suffix: "PM",
                               eventTitle: "Presentation on Construction, Economics and Management",
                               eventDesc: "Presentation on Construction, Economics and Management",
                               eventVenue: "School of Architecture and Planning, Lecture theatre 1"
                               },
                               
                               {
                               eventDate: "2013/02/01",
                               eventStart: "08:30",
                               eventEnd: "09:15",
                               suffix: "AM",
                               eventTitle: "Presentation on Construction, Economics and Management",
                               eventDesc: "Presentation on Construction, Economics and Management",
                               eventVenue: "School of Architecture and Planning, Lecture theatre 2"
                               },
                               {
                               eventDate: "2013/02/01",
                               eventStart: "09:30",
                               eventEnd: "10:15",
                               suffix: "AM",
                               eventTitle: "Armed response - architecture manoeuvres in Johannesburg",
                               eventDesc: "Armed response",
                               eventVenue: "School of Architecture and Planning, Lecture theatre 2"
                               },
                               {
                               eventDate: "2013/02/01",
                               eventStart: "10:30",
                               eventEnd: "11:15",
                               suffix: "AM",
                               eventTitle: "The challenges facing the planner in the 21<sup>st</sup> century",
                               eventDesc: "The challenges facing the planner in the 21<sup>st</sup> century",
                               eventVenue: "School of Architecture and Planning, Lecture theatre 2"
                               },
                               {
                               eventDate: "2013/02/01",
                               eventStart: "11:30",
                               eventEnd: "12:15",
                               suffix: "AM",
                               eventTitle: "Why mining?",
                               eventDesc: "Why mining?",
                               eventVenue: "Chamber of mines, Lecture theatre 2"
                               },
                               {
                               eventDate: "2013/02/01",
                               eventStart: "12:30",
                               eventEnd: "13:15",
                               suffix: "PM",
                               eventTitle: "Intelligent equipment in road building",
                               eventDesc: "Intelligent equipment in road building",
                               eventVenue: "Chamber of mines, Lecture theatre 2"
                               },
                               {
                               eventDate: "2013/02/01",
                               eventStart: "14:00",
                               eventEnd: "14:45",
                               suffix: "PM",
                               eventTitle: "Presentation on Mechanical engineering",
                               eventDesc: "Discussing echanical engineering",
                               eventVenue: "Chamber of mines, Lecture theatre 2"
                               },
                               {
                               eventDate: "2013/02/01",
                               eventStart: "15:00",
                               eventEnd: "15:45",
                               suffix: "PM",
                               eventTitle: "Fukushima: engineering success or engineerign failure",
                               eventDesc: "Fukushima",
                               eventVenue: "Chamber of mines, Lecture theatre 2"
                               },
                               {
                               eventDate: "2013/02/01",
                               eventStart: "16:00",
                               eventEnd: "16:45",
                               suffix: "PM",
                               eventTitle: "A brief look at Civilization",
                               eventDesc: "A brief look at Civilization",
                               eventVenue: "Chamber of mines, Lecture theatre 2"
                               },
                               {
                               eventDate: "2013/02/02",
                               eventStart: "08:00",
                               eventEnd: "16:00",
                               suffix: "AM",
                               eventTitle: "Registration",
                               eventDesc: "Bring a copy of your ID book, your firm offer letter and proof of payment",
                               eventVenue: "Student Enrollment Centre, Ground Floor, Senate House"
                               },
                               {
                               eventDate: "2013/02/04",
                               eventStart: "08:30",
                               eventEnd: "09:15",
                               suffix: "AM",
                               eventTitle: "Address by the Dean of the faculty of Engineering &amp; Built Environmnent",
                               eventDesc: "The welcome address by Prof. Beatrys M. Lacquet will provide valuable insight into the faculty",
                               eventVenue: "Wits Great Hall"
                               },
                               {
                               eventDate: "2013/02/04",
                               eventStart: "09:15",
                               eventEnd: "09:45",
                               suffix: "AM",
                               eventTitle: "Address by the Dean of students",
                               eventDesc: "support student learning and personal growth",
                               eventVenue: "Wits Great Hall"
                               },
                               {
                               eventDate: "2013/02/04",
                               eventStart: "10:30",
                               eventEnd: "11:15",
                               suffix: "AM",
                               eventTitle: "Address by the Academic Development Unit",
                               eventDesc: "Learn about the services provided by ADU",
                               eventVenue: "Wits Great Hall"
                               },
                               {
                               eventDate: "2013/02/04",
                               eventStart: "11:30",
                               eventEnd: "12:15",
                               suffix: "AM",
                               eventTitle: "Engineering &amp; Built environment without borders",
                               eventDesc: "Introduction to a national student organization for Engineering &amp; the Built Environment students",
                               eventVenue: "Wits Great Hall"
                               },
                               {
                               eventDate: "2013/02/04",
                               eventStart: "12:15",
                               eventEnd: "13:00",
                               suffix: "PM",
                               eventTitle: "Engineering &amp; Built environment libraries",
                               eventDesc: "Introduction to the libraries of Engineering &amp; the Built Environment",
                               eventVenue: "Wits Great Hall"
                               },
                               {
                               eventDate: "2013/02/04",
                               eventStart: "14:00",
                               eventEnd: "17:00",
                               suffix: "PM",
                               eventTitle: "Diagnostic tests - Architecture &amp; Planning",
                               eventDesc: "Baseline tests for all students in Engineering &amp; the Built Environment",
                               eventVenue: "John Moffat Building A1"
                               },
                               {
                               eventDate: "2013/02/04",
                               eventStart: "14:00",
                               eventEnd: "17:00",
                               suffix: "PM",
                               eventTitle: "Diagnostic tests - Construction Economics &amp; Management",
                               eventDesc: "Baseline tests for all students in Engineering &amp; the Built Environment",
                               eventVenue: "John Moffat Building A2"
                               },
                               {
                               eventDate: "2013/02/04",
                               eventStart: "14:00",
                               eventEnd: "17:00",
                               suffix: "PM",
                               eventTitle: "Diagnostic tests - Chemical and Metallurgical Engineering",
                               eventDesc: "Baseline tests for all students in Engineering &amp; the Built Environment",
                               eventVenue: "Richard Ward Building 334"
                               },
                               {
                               eventDate: "2013/02/04",
                               eventStart: "14:00",
                               eventEnd: "17:00",
                               suffix: "PM",
                               eventTitle: "Diagnostic tests - Civil and Economic Engineering",
                               eventDesc: "Baseline tests for all students in Engineering &amp; the Built Environment",
                               eventVenue: "Hillman Building 112"
                               },
                               {
                               eventDate: "2013/02/04",
                               eventStart: "14:00",
                               eventEnd: "17:00",
                               suffix: "PM",
                               eventTitle: "Diagnostic tests - Industrial and Aeronotical Engineering",
                               eventDesc: "Baseline tests for all students in Engineering &amp; the Built Environment",
                               eventVenue: "Southwest Engineering Building 110"
                               },
                               {
                               eventDate: "2013/02/04",
                               eventStart: "14:00",
                               eventEnd: "17:00",
                               suffix: "PM",
                               eventTitle: "Diagnostic tests - Mechanical Engineering",
                               eventDesc: "Baseline tests for all students in Engineering &amp; the Built Environment",
                               eventVenue: "Oppenheimer Life Sciences 3"
                               },
                               {
                               eventDate: "2013/02/04",
                               eventStart: "14:00",
                               eventEnd: "17:00",
                               suffix: "PM",
                               eventTitle: "Diagnostic tests - Mining Engineering",
                               eventDesc: "Baseline tests for all students in Engineering &amp; the Built Environment",
                               eventVenue: "Chamber of Mines Building CM2"
                               },
                               {
                               eventDate: "2013/02/04",
                               eventStart: "14:00",
                               eventEnd: "17:00",
                               suffix: "PM",
                               eventTitle: "Diagnostic tests - Electrical, Informational &amp; Biomedical Engineering",
                               eventDesc: "Baseline tests for all students in Engineering &amp; the Built Environment",
                               eventVenue: "Chamber of Mines Building CM2"
                               }
                               ];

        return engineeringData;
    },
    
    generateScienceProgramme: function() {
        var scienceData = this.getScienceProgrammeData();
        return this.generateProgramme("Science", scienceData, "science-prog.html", true);
    },
    
    getScienceProgrammeData: function() {
        var scienceData = [
                           {
                           eventDate: "2013/02/01",
                           eventStart: "09:00",
                           eventEnd: "09:30",
                           suffix: "PM",
                           eventTitle: "Address by the Dean",
                           eventDesc: "Address by Professor Andrew Crouch is inspiring to all Science students",
                           eventVenue: "Wits Science Stadium Auditorium 2"
                           },
                           {
                           eventDate: "2013/01/11",
                           eventStart: "09:30",
                           eventEnd: "09:45",
                           suffix: "PM",
                           eventTitle: "Address by the Dean of students",
                           eventDesc: "Student learning and personal growth through student involvement in cocurricular activities",
                           eventVenue: "Wits Science Stadium Auditorium 2"
                           },
                           {
                           eventDate: "2013/02/01",
                           eventStart: "10:00",
                           eventEnd: "11:30",
                           suffix: "AM",
                           eventTitle: "Academic advisory session: Mathematical Sciences",
                           eventDesc: "Discuss actuarial sciences, applied computing, computing and mathematical sciences",
                           eventVenue: "Wits Science Stadium Auditorium 2"
                           },
                           {
                           eventDate: "2013/02/01",
                           eventStart: "11:45",
                           eventEnd: "13:00",
                           suffix: "AM",
                           eventTitle: "Academic advisory session: Physical Sciences",
                           eventDesc: "Discuss chemical engineering, material sciences, nuclear science",
                           eventVenue: "Wits Science Stadium Auditorium 2"
                           },
                           {
                           eventDate: "2013/02/01",
                           eventStart: "14:00",
                           eventEnd: "16:00",
                           suffix: "PM",
                           eventTitle: "The fun side of science",
                           eventDesc: "Interactive presentations",
                           eventVenue: "Wits Science Stadium Auditorium 2"
                           },
                           {
                           eventDate: "2013/02/04",
                           eventStart: "09:00",
                           eventEnd: "09:30",
                           suffix: "AM",
                           eventTitle: "Smart living",
                           eventDesc: "You will be made aware of possible expenses and be given a planner to help you manage your finances",
                           eventVenue: "Wits Science Stadium Auditorium 2"
                           },
                           {
                           eventDate: "2013/02/04",
                           eventStart: "09:30",
                           eventEnd: "10:00",
                           suffix: "AM",
                           eventTitle: "Note taking",
                           eventDesc: "We give you hands-on training on how to take notes and ensure that you find yourself adequately prepared for tests and exams",
                           eventVenue: "Wits Science Stadium Auditorium 1"
                           },
                           {
                           eventDate: "2013/02/04",
                           eventStart: "10:30",
                           eventEnd: "11:30",
                           suffix: "AM",
                           eventTitle: "Academic advisory session: Earth Sciences",
                           eventDesc: "Geology or geographical and archeological sciences",
                           eventVenue: "Wits Science Stadium Auditorium 2"
                           },
                           {
                           eventDate: "2013/02/04",
                           eventStart: "11:45",
                           eventEnd: "13:00",
                           suffix: "AM",
                           eventTitle: "Academic advisory session: Biological Sciences",
                           eventDesc: "Discuss topics related to biological and natural sciences",
                           eventVenue: "Wits Science Stadium Auditorium 2"
                           },
                           {
                           eventDate: "2013/02/05",
                           eventStart: "08:00",
                           eventEnd: "16:00",
                           suffix: "AM",
                           eventTitle: "Registration",
                           eventDesc: "Bring an id, a form of acceptance letter and clearance certificate",
                           eventVenue: "Student Enrollment Centre, Ground Floor, Senate House"
                           },
                           {
                           eventDate: "2013/02/06",
                           eventStart: "09:00",
                           eventEnd: "10:00",
                           suffix: "AM",
                           eventTitle: "Maintaining a good academic record",
                           eventDesc: "Students will be taught how to maintain a good academic record throughout their years at Wits",
                           eventVenue: "Wits Science Stadium Auditorium 2"
                           },
                           {
                           eventDate: "2013/02/06",
                           eventStart: "10:00",
                           eventEnd: "11:00",
                           suffix: "AM",
                           eventTitle: "Note taking",
                           eventDesc: "We give you hands-on training on how to take notes and ensure that you find yourself adequately prepared for tests and exams",
                           eventVenue: "Wits Science Stadium Auditorium 2"
                           },
                           {
                           eventDate: "2013/02/06",
                           eventStart: "10:00",
                           eventEnd: "11:00",
                           suffix: "AM",
                           eventTitle: "Smart living",
                           eventDesc: "You will be made aware of possible expenses and be given a planner to help you manage your finances",
                           eventVenue: "Wits Science Stadium Auditorium 1"
                           },
                           {
                           eventDate: "2013/02/06",
                           eventStart: "11:15",
                           eventEnd: "13:00",
                           suffix: "AM",
                           eventTitle: "Basic mathematical skills",
                           eventDesc: "An overview of the required basic mathematical skills needed by every first year student is discussed",
                           eventVenue: "Wits Science Stadium Auditorium 1 &amp; 2"
                           }
                           ];

        return scienceData;
    },
    
    generateSportProgramme: function() {
        var sportData = this.getSportProgrammeData();
        return this.generateProgramme("Sport", sportData, "sport-prog.html", false);
    },
    
    getSportProgrammeData: function() {
        var sportData = [
                         {
                         eventDate: "2013/02/04",
                         eventStart: "09:00",
                         eventEnd: "13:00",
                         suffix: "AM",
                         eventTitle: "Registration",
                         eventDesc: "Our sports programs and clubs give students a chance to relieve stress, improve their fitness levels and much more",
                         eventVenue: "Old Mutual Sports Hall"
                         },
                         {
                         eventDate: "2013/02/05",
                         eventStart: "09:00",
                         eventEnd: "13:00",
                         suffix: "AM",
                         eventTitle: "Registration",
                         eventDesc: "Our sports programs and clubs give students a chance to relieve stress, improve their fitness levels and much more",
                         eventVenue: "Old Mutual Sports Hall"
                         },
                         {
                         eventDate: "2013/02/06",
                         eventStart: "09:00",
                         eventEnd: "13:00",
                         suffix: "AM",
                         eventTitle: "Registration",
                         eventDesc: "Our sports programs and clubs give students a chance to relieve stress, improve their fitness levels and much more",
                         eventVenue: "Old Mutual Sports Hall"
                         },
                         {
                         eventDate: "2013/02/07",
                         eventStart: "09:00",
                         eventEnd: "13:00",
                         suffix: "AM",
                         eventTitle: "Registration",
                         eventDesc: "Our sports programs and clubs give students a chance to relieve stress, improve their fitness levels and much more",
                         eventVenue: "Old Mutual Sports Hall"
                         },
                         {
                         eventDate: "2013/02/08",
                         eventStart: "09:00",
                         eventEnd: "13:00",
                         suffix: "AM",
                         eventTitle: "Registration",
                         eventDesc: "Our sports programs and clubs give students a chance to relieve stress, improve their fitness levels and much more",
                         eventVenue: "Old Mutual Sports Hall"
                         },
                         {
                         eventDate: "2013/02/04",
                         eventStart: "14:00",
                         eventEnd: "16:00",
                         suffix: "PM",
                         eventTitle: "Learn a new sport, make new friends",
                         eventDesc: "Take a look at our extensive sports programme; participate in friendly games, try out for various disciplines",
                         eventVenue: "Old Mutual Sports Hall"
                         },
                         {
                         eventDate: "2013/02/05",
                         eventStart: "14:00",
                         eventEnd: "16:00",
                         suffix: "PM",
                         eventTitle: "Learn a new sport, make new friends",
                         eventDesc: "Take a look at our extensive sports programme; participate in friendly games, try out for various disciplines",
                         eventVenue: "Old Mutual Sports Hall"
                         },
                         {
                         eventDate: "2013/02/06",
                         eventStart: "14:00",
                         eventEnd: "16:00",
                         suffix: "PM",
                         eventTitle: "Learn a new sport, make new friends",
                         eventDesc: "Take a look at our extensive sports programme; participate in friendly games, try out for various disciplines",
                         eventVenue: "Old Mutual Sports Hall"
                         },
                         {
                         eventDate: "2013/02/07",
                         eventStart: "14:00",
                         eventEnd: "16:00",
                         suffix: "PM",
                         eventTitle: "Learn a new sport, make new friends",
                         eventDesc: "Take a look at our extensive sports programme; participate in friendly games, try out for various disciplines",
                         eventVenue: "Old Mutual Sports Hall"
                         },
                         {
                         eventDate: "2013/02/08",
                         eventStart: "14:00",
                         eventEnd: "16:00",
                         suffix: "PM",
                         eventTitle: "Learn a new sport, make new friends",
                         eventDesc: "Take a look at our extensive sports programme; participate in friendly games, try out for various disciplines",
                         eventVenue: "Old Mutual Sports Hall"
                         },
                         {
                         eventDate: "2013/02/04",
                         eventStart: "14:00",
                         eventEnd: "16:00",
                         suffix: "PM",
                         eventTitle: "Volleyball, basketball, and water polo in pool",
                         eventDesc: "Join us for Volleyball, basketball, and water polo in pool",
                         eventVenue: "Matrix Courts Area"
                         },
                         {
                         eventDate: "2013/02/05",
                         eventStart: "14:00",
                         eventEnd: "16:00",
                         suffix: "PM",
                         eventTitle: "Cricket, Rugby, Tennis and Ultimate Fisbee Walter Milton",
                         eventDesc: "Cricket, Rugby, Tennis and Ultimate Fisbee Walter Milton",
                         eventVenue: "Rugby Stadium"
                         },
                         {
                         eventDate: "2013/02/06",
                         eventStart: "14:00",
                         eventEnd: "16:00",
                         suffix: "PM",
                         eventTitle: "Hockey, volleyball, netball, fencing, table tennis, squash, aerobics and water polo in pool",
                         eventDesc: "Hockey, volleyball, netball, fencing, table tennis, squash, aerobics and water polo in pool",
                         eventVenue: "Hall 29, DF &amp; Squash Courts"
                         },
                         {
                         eventDate: "2013/02/06",
                         eventStart: "14:00",
                         eventEnd: "16:00",
                         suffix: "PM",
                         eventTitle: "Football - Penalty shooting",
                         eventDesc: "Hockey, volleyball, netball, fencing, table tennis, squash, aerobics and water polo in pool",
                         eventVenue: "Dig Fields"
                         },
                         {
                         eventDate: "2013/02/07",
                         eventStart: "14:00",
                         eventEnd: "16:00",
                         suffix: "PM",
                         eventTitle: "Mountain sports in Flower Hall and Chess, snow Ski and War games",
                         eventDesc: "Mountain sports in Flower Hall and Chess, snow Ski and War games",
                         eventVenue: "Science Stadium Club House"
                         },
                         {
                         eventDate: "2013/02/07",
                         eventStart: "14:00",
                         eventEnd: "16:00",
                         suffix: "PM",
                         eventTitle: "Golf",
                         eventDesc: "Learn or enjoy playing golf",
                         eventVenue: "Driving Range"
                         },
                         {
                         eventDate: "2013/02/08",
                         eventStart: "14:00",
                         eventEnd: "16:00",
                         suffix: "PM",
                         eventTitle: "Tai chi, kobujutsu, karate, aikido, tang soo do, badmington, judo, gymnastics, underwater and boat",
                         eventDesc: "Tai chi, kobujutsu, karate, aikido, tang soo do, badmington, judo, gymnastics, underwater and boat",
                         eventVenue: "Old mutual sports hall and pool area"
                         }
                         ];
        
        return sportData;
    },
    
    generateProgramme: function (programmeName, programmeData, linkToProg, isFaculty) {
        var viewDate = new Date();
        var curSuffix;
        if (viewDate.getHours() >= 12) {
            curSuffix = "PM";
        } else {
            curSuffix = "AM";
        }
        viewDate.setHours(0,0,0,0);
        var programmeStr = "";
        var progTableContent;
        if (curSuffix == "AM") {
            progTableContent = this.generateProgTableAMContent(programmeData, viewDate);
        } else {
            progTableContent = this.generateProgTablePMContent(programmeData, viewDate);
        }
        
        programmeStr = programmeStr.concat("<div class=\"scroller\" id=\"pscroller\">");
        programmeStr = programmeStr.concat("<div class=\"hidden-tablet\">");
        if (isFaculty) {
            programmeStr = programmeStr.concat("<a href=" + linkToProg + " class=\"pull-left\">Faculty Programme</a>");
        } else {
            programmeStr = programmeStr.concat("<a href=" + linkToProg + " class=\"pull-left\">Programme</a>");
        }
        
        programmeStr = programmeStr.concat("<a href=\"orientation-prog.html\" class=\"pull-right\">Orientation</a>");
        programmeStr = programmeStr.concat("</div>");
        
        if (progTableContent.length == 0) {
            programmeStr = programmeStr.concat("<p class=\"pagination-centered\">No activity planned for");
            if (curSuffix == "AM") {
                programmeStr = programmeStr.concat(" today");
            } else {
                programmeStr = programmeStr.concat(" this afternoon");
            }
            programmeStr = programmeStr.concat("</p>");
        } else {
            programmeStr = programmeStr.concat("<table class=\"table table-hover table-bordered\">");
            if (isFaculty) {
                programmeStr = programmeStr.concat("<caption>Faculty of <strong>" + programmeName + "</strong></caption>");
            } else {
                programmeStr = programmeStr.concat("<caption><strong>" + programmeName + "</strong></caption>");
            }
            
            programmeStr = programmeStr.concat("<thead>");
            programmeStr = programmeStr.concat("<tr>");
            programmeStr = programmeStr.concat("<th>Time</th>");
            programmeStr = programmeStr.concat("<th>Event</th>");
            programmeStr = programmeStr.concat("<th>Venue</th>");
            programmeStr = programmeStr.concat("</tr>");
            programmeStr = programmeStr.concat("</thead>");
            programmeStr = programmeStr.concat("<tbody>");
            
            programmeStr = programmeStr.concat(progTableContent);
            
            programmeStr = programmeStr.concat("</tbody>");
            programmeStr = programmeStr.concat("</table>");
        }
        
        programmeStr = programmeStr.concat("<div class=\"hidden-phone\">");
        if (isFaculty) {
            programmeStr = programmeStr.concat("<a href=" + linkToProg + " class=\"pull-left\">Faculty Programme</a>");
        } else {
            programmeStr = programmeStr.concat("<a href=" + linkToProg + " class=\"pull-left\">Programme</a>");
        }
        programmeStr = programmeStr.concat("<a href=\"orientation-prog.html\" class=\"pull-right\">Orientation Programme</a>");
        programmeStr = programmeStr.concat("</div>");
        programmeStr = programmeStr.concat("</div>");
        
        return programmeStr;
    },
    
    generateProgTableContent: function(programmeData, viewDate, ignoreSuffix){
        var progTable = "";
        var j = 0;
        for (var i = 0; i < programmeData.length; i++) {
            var curProg = programmeData[i];
            var curDate = new Date(curProg.eventDate);
            var filterCondition = (curDate.getTime() != viewDate.getTime());
            if (! ignoreSuffix) {
                filterCondition = filterCondition || (curProg.suffix != "PM")
            }
            if (filterCondition) {
                continue;
            } else {
                if (j % 2 == 0) {
                    progTable = progTable.concat("<tr class=\"info\">");
                } else {
                    progTable = progTable.concat("<tr class=\"warning\">");
                }
                j++;
                progTable = progTable.concat("<td>" + curProg.eventStart + "-" + curProg.eventEnd + "</td>");
                progTable = progTable.concat("<td><a class=\"progevt\" rel=popover data-content=\"" + curProg.eventDesc + "\">" + curProg.eventTitle + "</a></td>");
                progTable = progTable.concat("<td><a href=\"map.html#" +curProg.eventVenue + "\">" + curProg.eventVenue + "</a></td>");
                
                progTable = progTable.concat("</tr>")
            }
        }
        
        return progTable;
    },
    
    generateProgTablePMContent: function(programmeData, viewDate) {
        return this.generateProgTableContent(programmeData, viewDate, false);
    },
    
    generateProgTableAMContent: function(programmeData, viewDate){
        return this.generateProgTableContent(programmeData, viewDate, true);
    }
};
