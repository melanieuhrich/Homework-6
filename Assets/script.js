var cardBody = document.getElementById('weather-card');
var fetchButton = document.getElementById('fetch-button');
var recentSearches;

if (JSON.parse(localStorage.getItem('input'))){
    recentSearches = JSON.parse(localStorage.getItem('input'));
} else {
    recentSearches = [];
}

function getApi(searchCity) {
    var city = searchCity;
    var requestUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=deb6154f7e5b351570818656e9a0ad91&units=imperial`; 
    fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      document.getElementById('city').innerHTML = data.name + ' (' + moment().format('L') + ')'; 
      document.getElementById('icon').setAttribute('src', 'http://openweathermap.org/img/wn/' + data.weather[0].icon + '@2x.png')
      document.getElementById('wc-temp').textContent = 'Temperature: ' + data.main.temp + ' °F';
      document.getElementById('wc-hum').textContent = 'Humidity: ' + data.main.humidity + '%'; 
      document.getElementById('wc-ws').textContent = 'Wind Speed: ' + data.wind.speed + ' MPH'; 
    var lat = data.coord.lat;
    var lon = data.coord.lon; 
    var oneCallUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=deb6154f7e5b351570818656e9a0ad91`; 
    fetch(oneCallUrl) 
    .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        document.getElementById('wc-uv').textContent = 'UV Index: ' + data.current.uvi;
        addColor(); 
        function addColor() {
            if (data.current.uvi >= 8) {
                $('#wc-uv').addClass('severe');
            } else if (data.current.uvi <= 2) {
                    $('#wc-uv').addClass('favorable');
                    $('#wc-uv').removeClass('severe');
                    $('#wc-uv').removeClass('moderate')
            } else {
                $('#wc-uv').addClass('moderate');
                $('#wc-uv').removeClass('severe');
                $('#wc-uv').removeClass('favorable');
            }
        } 
    });
    });
    var dayUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=deb6154f7e5b351570818656e9a0ad91&units=imperial`; 
    fetch(dayUrl)
    .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        var oneCallUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${data.city.coord.lat}&lon=${data.city.coord.lon}&appid=deb6154f7e5b351570818656e9a0ad91`; 
        fetch(oneCallUrl) 
        .then(function (response) {
        return response.json();
      })
      .then(function (oneCall) {
        document.getElementById('day1Date').textContent = moment().add(1, 'days').format('L');
        document.getElementById('day1Icon').setAttribute('src', 'http://openweathermap.org/img/wn/' + oneCall.daily[1].weather[0].icon + '@2x.png');
        document.getElementById('day1Temp').textContent = 'Temp: ' + data.list[6].main.temp + ' °F';
        document.getElementById('day1Humidity').textContent = 'Humidity: ' + data.list[6].main.humidity + '%';
        document.getElementById('day2Date').textContent = moment().add(2, 'days').format('L');
        document.getElementById('day2Icon').setAttribute('src', 'http://openweathermap.org/img/wn/' + oneCall.daily[2].weather[0].icon + '@2x.png'); 
        document.getElementById('day2Temp').textContent = 'Temp: ' + data.list[14].main.temp + ' °F';
        document.getElementById('day2Humidity').textContent = 'Humidity: ' + data.list[14].main.humidity + '%';
        document.getElementById('day3Date').textContent = moment().add(3, 'days').format('L');
        document.getElementById('day3Icon').setAttribute('src', 'http://openweathermap.org/img/wn/' + oneCall.daily[3].weather[0].icon + '@2x.png'); 
        document.getElementById('day3Temp').textContent = 'Temp: ' + data.list[22].main.temp + ' °F';
        document.getElementById('day3Humidity').textContent = 'Humidity: ' + data.list[22].main.humidity + '%';
        document.getElementById('day4Date').textContent = moment().add(4, 'days').format('L');
        document.getElementById('day4Icon').setAttribute('src', 'http://openweathermap.org/img/wn/' + oneCall.daily[4].weather[0].icon + '@2x.png'); 
        document.getElementById('day4Temp').textContent = 'Temp: ' + data.list[30].main.temp + ' °F';
        document.getElementById('day4Humidity').textContent = 'Humidity: ' + data.list[30].main.humidity + '%';
        document.getElementById('day5Date').textContent = moment().add(5, 'days').format('L');
        document.getElementById('day5Icon').setAttribute('src', 'http://openweathermap.org/img/wn/' + oneCall.daily[5].weather[0].icon + '@2x.png'); 
        document.getElementById('day5Temp').textContent = 'Temp: ' + data.list[38].main.temp + ' °F';
        document.getElementById('day5Humidity').textContent = 'Humidity: ' + data.list[38].main.humidity + '%';
      })
      });
}

var savedContent = $('#user-input').val();

function renderLocalStorage(){
        for (var i=0; i<recentSearches.length; i++){
            $('#button-container').append(`<button type="button" data-name=${recentSearches[i]} class="btn btn-light btn-text">${recentSearches[i]}</button>`);
            };
}

$('#button-container').on('click', function(e){
    getApi(e.target.textContent)
})

$('#fetch-button').on('click', function(){
    var savedContent = $('#user-input').val();
    recentSearches.push(savedContent);
    localStorage.setItem('input', JSON.stringify(recentSearches));
    $('#button-container').append(`<button type="button" class="btn btn-light">${savedContent}</button>`);
});

fetchButton.addEventListener('click', function(){
    var city = document.getElementById('user-input').value;
    getApi(city);
});

renderLocalStorage(); 


