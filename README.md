# Homework 6 

# Purpose of the Assignment 

Create a weather app that shows present and future conditions by pulling them from the API and saves previously searched cities in local storage. 

# What I Did and Why

Line 1: Create the cardBody variable and link it with the weather-card ID in the HTML. 

Line 2: Create the fetchButton variable and link it with the fetch-button ID in the HTML.

Line 3: Create the recentSearches variable.

Lines 5-9: Parse what corresponds to the 'input' key and get it from localStorage, then define recentSearches as its contents. If there is nothing in localStorage, define recentSearches as an empty array. 

Line 11: Declare the getApi function and give it the searchCity variable. 

Line 12: Create the city variable and define it as searchCity. 

Line 13: Create the requestUrl variable and define it as the link which corresponds with the API.

Line 14: Call the fetch function and tell it to reference requestUrl.

Lines 15-17: Return the response. 

Line 18: Reference the data.

Line 19: Grab the city ID and modify the HTML to make its tag read the city name and current date. 

Line 20: Grab the icon ID and give its tag a source, then pull a certain property from that source to generate the icon. 

Line 21: Grab the wc-temp ID, give its tag a text content, and pull the temperature from the dataset.

Line 22: Grab the wc-hum ID, give its tag a text content, and pull the humidity from the dataset.

Line 23: Grab the wc-ws ID, give its tag a text content, and pull the wind speed from the dataset.

Line 24: Create the lat variable and define it as the latitude coordinate from the dataset. 

Line 25: Create the lon variable and define it as the longitude coordinate from the dataset. 

Line 26: Create the oneCallUrl variable and define it as the link which corresponds with the API.

Line 27: Call the fetch function and tell it to reference oneCallUrl.

Lines 28-30: Return the response. 

Line 31: Reference the data.

Line 32: Grab the wc-uv ID, give its tag a text content, and pull the uvi from the dataset. 

Line 33: Call the addColor function. 

Lines 34-46: Declare the addColor function. Tell it to do the following: if the UV index is greater than or equal to eight, add a 'severe' class, which will turn the color red. If it is less than or equal to two, add 'favorable' class and remove all other classes, which will turn the color green. And otherwise (if it is between two and eight), add a 'moderate' class and remove all other classes, which will turn the color yellow.

Line 49: Create the dayUrl variable and define it as the link which corresponds with the API.

Line 50: Call the fetch function and tell it to reference dayUrl.

Lines 51-53: Return the response. 

Line 54: Reference the data.

Line 55: Create and define the oneCallUrl again within the function. 

Line 56: Call the fetch function and tell it to reference oneCallUrl.

Lines 57-59: Return the response. 

Line 60: Reference the data.

Lines 61-80: Grab the IDs for the date, icon, temperature, and humidity of the first day in the 5-day forecast. Give the corresponding tags text properties or sources and pull from the arrays in the API so that they display all the aforementioned properties correctly. Do the same for the remaining days. 

Line 85: Create the savedContent variable and define it as the value of whatever is typed into the section of the HTML with the 'user-input' ID. 

Lines 87-91: Declare the renderLocalStorage function. Inside, create a for loop to go through the length of recentSearches. Grab the button-container ID from the HTML and append to it a button which will target the data-name (from the API) of recentSearches and which will contain the text of recentSearches. 

Lines 93-95: Target the button-container ID in the HTML. When it is clicked, call the getApi function and get the data-name attribute. 

Lines 97-102: Target the fetch-button ID in the HTML. When it is clicked, get the value of the user-input and define the savedContent variable as this. Add the savedContent to what is already existing in recentSearches. Stringify the items in recentSearches and save them into localStorage, giving them a key of 'input'. Target the button-container ID again and append to it a button which will contain savedContent.

Lines 104-107: Tell fetchButton to listen for a click. In the event of a click, create the city variable and define it as the value that corresponds with user-input ID. Call the getApi function and get the city. 

Line 109: Call the renderLocalStorage function. 

# Screenshot 

![screenshot](screenshot.png)

# Link to Deployed Application 

https://melanieuhrich.github.io/Homework-6/