/*********************************************************************************
* WEB700 – Assignment 1
* I declare that this assignment is my own work in accordance with Seneca Academic Policy.
* No part of this assignment has been copied manually or electronically from any other source
* (including web sites) or distributed to other students.
*
* Name: _JAGRITI________ Student ID: ___148833239___________ Date: __24-05-2024__________
*
********************************************************************************/

const serverVerbs = ["GET", "GET", "GET", "POST", "GET", "POST"];
const serverPaths = ["/", "/about", "/contact", "/login", "/panel", "/logout"];
const serverResponses = [
    "Welcome to WEB700 Assignment 1",
    "This course name is WEB700. This assignment was prepared by JAGRITI",
    "Student Email: jjagriti1@myseneca.ca",
    "Hello, User Logged In",
    "Main Panel",
    "Logout Complete. Goodbye"
];

function httpRequest(httpVerb, path) 
{
    for (let i = 0; i < serverPaths.length; i++) 
        {
        
        if (serverVerbs[i] === httpVerb && serverPaths[i] === path)
            {
           
            return `200: ${serverResponses[i]}`;
        }
    }
    return `404: Unable to process ${httpVerb} request for ${path}`;
}


console.log(httpRequest("GET", "/")); 
console.log(httpRequest("GET", "/about")); 
console.log(httpRequest("POST", "/login")); 
console.log(httpRequest("PUT", "/")); 

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


function automateTests() {
    
    const testVerbs = ["GET", "POST"];
    const testPaths = ["/", "/about", "/contact", "/login", "/panel", "/logout", "/randomPath1", "/randomPath2"];

    
    function randomRequest() {
        
        const randVerb = testVerbs[getRandomInt(testVerbs.length)];
        const randPath = testPaths[getRandomInt(testPaths.length)];

        
        console.log(httpRequest(randVerb, randPath));
    }

    
    setInterval(randomRequest, 1000);
}


automateTests();

