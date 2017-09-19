/**
 *   @author Bates, Howard (hbates@northmen.org)
 *   @version 0.0.3
 *   @summary Project 2 demo code || created: 03.16.2016
 *   @todo
 */

"use strict";
const PROMPT = require('readline-sync');

let lastName, firstName;
let age;
const LANGUAGE = 'English';

function main() {
    let currentYear = 2016;
    setLastName();
    setFirstName();
    setAge(currentYear);
    printResults();
    // This is a single line comment
}

main();

function setLastName() {
    lastName = PROMPT.question(`\nPlease enter last name: `);
}

function setFirstName() {
    firstName = PROMPT.question(`\nPlease enter first name: `);
}

function setAge(currentYear) {
    let year = PROMPT.question(`\nWhat year were you born?: `);
    age = currentYear - year;
}

function printResults() {
    process.stdout.write('\x1Bc'); //Clears the screen
    console.log("\nHello " + firstName + " " + lastName + ". You are " + age + " years old.");
    console.log(`Your primary language is ${LANGUAGE}`);
}

/*
This program is designed to demonstrate very basic coding paradigms
Topics: code layout, declaring/initializing global/local variables/constants, parameters, modularization & dispatching
          comments (