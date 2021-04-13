var cardBody = document.getElementById('weather-card');
var fetchButton = document.getElementById('fetch-button');

renderLocalStorage(); 

function getApi() {
    var city = document.getElementById('user-input').value; 
    var requestUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=deb6154f7e5b351570818656e9a0ad91&units=imperial`; 
    

    fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      document.getElementById('city').innerHTML = data.name; 
      document.getElementById('date').innerHTML = moment().calendar();
      document.getElementById('icon').setAttribute('src', 'http://openweathermap.org/img/wn/' + data.weather[0].icon + '@2x.png')
      document.getElementById('wc-temp').textContent = 'Temperature: ' + data.main.temp;
      document.getElementById('wc-hum').textContent = 'Humidity: ' + data.main.humidity; 
      document.getElementById('wc-ws').textContent = 'Wind Speed: ' + data.wind.speed; 
      document.getElementById('date').innerHTML = moment().calendar();
      //Loop over the data to generate a table, each table row will have a link to the repo url
      for (var i = 0; i < data.length; i++) { //make buttons
        var input = document.getElementById('user-input');
            document.createElement('<button>');
            input.appendChild('button');
      }
    var lat = data.coord.lat;
    var lon = data.coord.lon; 
    var oneCallURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=deb6154f7e5b351570818656e9a0ad91`; 
    fetch(oneCallURL) 
    .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        document.getElementById('wc-uv').textContent = 'UV Index: ' + data.current.uvi; 
        // addColor() 
        // function addColor() {
        //     var uvIndex = data.current.uvi; 
        //     if (uvIndex >= 2) {
        //         data.current.uvi.addClass('favorable');
        //     } else if (uvIndex <= 8) {
        //         data.current.uvi.addClass('severe');
        //     } else {
        //         uvIndex.addClass('moderate')
        //     }
        // }
    
    });

    // function addColor() {
    //     if (data.current.uvi >= 2) {
    //         data.current.uvi.addClass('favorable');
    //     } else if (data.current.uvi <= 8) {
    //         data.current.uvi.addClass('severe');
    //     } else {
    //         data.current.uvi.addClass('moderate')
    //     }
    // }

    });
    var dayURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=deb6154f7e5b351570818656e9a0ad91&units=imperial`; 
    fetch(dayURL)
    .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        document.getElementById('day1Date').textContent = moment().add(1, 'days').format('L');
        // document.getElementById('day1Icon')setAttribute('src', 'http://openweathermap.org/img/wn/' + data.weather[0].icon + '@2x.png'); 
        document.getElementById('day1Temp').textContent = 'Temp: ' + data.list[6].main.temp;
        document.getElementById('day1Humidity').textContent = 'Humidity: ' + data.list[6].main.humidity;
        document.getElementById('day2Date').textContent = moment().add(2, 'days').format('L');
        // document.getElementById('day2Icon')setAttribute('src', 'http://openweathermap.org/img/wn/' + data.weather[0].icon + '@2x.png'); 
        document.getElementById('day2Temp').textContent = 'Temp: ' + data.list[14].main.temp;
        document.getElementById('day2Humidity').textContent = 'Humidity: ' + data.list[14].main.humidity;
        document.getElementById('day3Date').textContent = moment().add(3, 'days').format('L');
        // document.getElementById('day3Icon')setAttribute('src', 'http://openweathermap.org/img/wn/' + data.weather[0].icon + '@2x.png'); 
        document.getElementById('day3Temp').textContent = 'Temp: ' + data.list[22].main.temp;
        document.getElementById('day3Humidity').textContent = 'Humidity: ' + data.list[22].main.humidity;
        document.getElementById('day4Date').textContent = moment().add(4, 'days').format('L');
        // document.getElementById('day4Icon')setAttribute('src', 'http://openweathermap.org/img/wn/' + data.weather[0].icon + '@2x.png'); 
        document.getElementById('day4Temp').textContent = 'Temp: ' + data.list[30].main.temp;
        document.getElementById('day4Humidity').textContent = 'Humidity: ' + data.list[30].main.humidity;
        document.getElementById('day5Date').textContent = moment().add(5, 'days').format('L');
        // document.getElementById('day5Icon')setAttribute('src', 'http://openweathermap.org/img/wn/' + data.weather[0].icon + '@2x.png'); 
        document.getElementById('day5Temp').textContent = 'Temp: ' + data.list[38].main.temp;
        document.getElementById('day5Humidity').textContent = 'Humidity: ' + data.list[38].main.humidity;

      });



}

var savedContent = $('#user-input').val();

function renderLocalStorage(){
    $('#user-input .textArea').val(localStorage.getItem('input'));
}

// fetchButton.addEventListener('click', function(){
//     var savedContent = $('#user-input').val();
//     localStorage.setItem('input', savedContent);

// });

$('#fetch-button').on('click', function(){
    var savedContent = $('#user-input').val();
    localStorage.setItem('input', savedContent);
    console.log(savedContent);
});


fetchButton.addEventListener('click', getApi); 