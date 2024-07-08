// googlepagesss.js

// Array of student names
const studentNames = [
    "ayush lolusare",
    "himanshu",
    "yash",
    "ayush nakade",
    "nikhil",
    "ratnesh",
    "soundary",
    "lucky",
    "shubham dada",
    "artharv",
    "achal",
    "yogesh sir"
];

/**
 * Performs a search based on the input and updates the results.
 */
function search() {
    // Get the input value and convert to lowercase
    let input = document.getElementById("searchInput").value.toLowerCase();
    
    // Get the results div
    let resultsDiv = document.getElementById("results");

    // Check if the input matches any student name
    let foundStudent = studentNames.some(name => input.includes(name));
    
    // Check if the input includes "yogesh sir" (the teacher)
    let foundTeacher = input.includes('yogesh sir');

    // Update the results based on the search
    if (foundStudent) {
        if (foundTeacher) {
            updateResults("This sir is teaching in Enjoy Programming.", "black");
        } else {
            updateResults("This student is a student of Enjoy Programming.", "green");
        }
    } else {
        updateResults("This student is not a student of Enjoy Programming.", "red");
    }
}

/**
 * Updates the results div with the given message and color.
 * @param {string} message - The message to display
 * @param {string} color - The color of the message
 */
function updateResults(message, color) {
    let resultsDiv = document.getElementById("results");
    resultsDiv.textContent = message;
    resultsDiv.style.color = color;
}

/**
 * Placeholder function for the "I'm Feeling Lucky" button.
 */
function feelingLucky() {
    alert("I'm Feeling Lucky feature is not implemented yet.");
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Add event listener to the search button
    document.querySelector('button').addEventListener('click', search);

    // Add event listener to the search input for 'Enter' key press
    document.getElementById('searchInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            search();
        }
    });

    // Add event listener to the "I'm Feeling Lucky" button
    document.querySelectorAll('button')[1].addEventListener('click', feelingLucky);
});