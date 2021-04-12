var cardBody = document.getElementById('weather-card');
var fetchButton = document.getElementById('fetch-button');

function getApi() {
    var requestUrl = 'https://openweathermap.org/api'; 

    fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)
      //Loop over the data to generate a table, each table row will have a link to the repo url
      for (var i = 0; i < data.length; i++) {
        // Creating heading and tableData 
        var heading = document.createElement('h');
        var tableData = document.createElement('td');

        // Setting the text of link and the href of the link
        heading.textContent = data[i].html_url;
        tableData.textContent = data[i].html_url;

        // Appending the link to the tabledata and then appending the tabledata to the tablerow
        // The tablerow then gets appended to the tablebody
        // tableData.appendChild(link);
        heading.appendChild(tableData);
        cardBody.appendChild(heading);
      }
    });
}

fetchButton.addEventListener('click', getApi);
