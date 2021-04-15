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

Line 26: Create the oneCallUrl variable and and define it as the link which corresponds with the API.

Line 27: Call the fetch function and tell it to reference oneCallUrl.

Lines 28-30: Return the response. 

Line 31: Reference the data.

Line 32: Grab the wc-uv ID, give its tag a text content, and pull the uvi from the dataset. 

Line 33: Call the addColor function. 




