let valueSearch = document.getElementById('valueSearch');
let city = document.getElementById('city');
let temperature = document.getElementById('temperature');
let description = document.querySelector('.description');
let clouds = document.getElementById('clouds');
let humidity = document.getElementById('humidity');
let pressure = document.getElementById('pressure');
let form = document.querySelector('form');
let main = document.querySelector('main');
let back = document.getElementById('background');
// let bdy = document.getElementById('main');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (valueSearch.value != '') {
        searchWeather();
    }
});

let id = '8da07e9c061d794eefd7d2c860bafc35';
let baseUrl = 'https://api.openweathermap.org/data/2.5/weather';

const searchWeather = () => {
    let url = `${baseUrl}?q=${valueSearch.value}&appid=${id}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if (data.cod == 200) {
                city.querySelector('figcaption').innerText = data.name;
                // city.querySelector('img').src = `https://flagsapi.com/${data.sys.country}/shiny/32.png`;
                city.querySelector('img').src = `https://flagsapi.com/${data.sys.country}/shiny/32.png`;
                temperature.querySelector('img').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
                temperature.querySelector('figcaption span').innerText = (data.main.temp - 273.15).toFixed(2); // Convert Kelvin to Celsius
                description.innerText = data.weather[0].description;
                clouds.innerText = data.clouds.all;
                humidity.innerText = data.main.humidity;
                pressure.innerText = data.main.pressure;

                // //  // Change background based on weather description
                //  if (data.weather[0].description.toLowerCase().includes('cloud')) {
                //     back.style.backgroundImage = 'url("overcastCloud.jpg")';
                //     // main.style.backgroundImage.opacity = '10%';
                //     // main.style.opacity = '10%';
                // } else if (data.weather[0].description.toLowerCase().includes('rain') || data.weather[0].description.toLowerCase().includes('drizzle')) {
                //     back.style.backgroundImage = 'url("rain.gif")';
                //     back.style.backgroundSize = 'cover';
                //     // main.style.backgroundRepeat = 'no-repeat';
                //     // main.style.backgroundPosition = 'center';
                //     // main.style.borderRadius = '50%';
                // } else if (data.weather[0].description.toLowerCase().includes('clear')) {
                //     back.style.backgroundImage = 'url("clearSky.jpg")';
                // } else if (data.weather[0].description.toLowerCase().includes('haze')) {
                //     back.style.backgroundImage = 'url("haze.jpg")';
                // } else {
                //     back.style.backgroundImage = ''; // Default background if no match
                // }



            } else {
                // Error handling
                main.classList.add('error');
                setTimeout(() => {
                    main.classList.remove('error');
                }, 1000);
            }
            valueSearch.value = '';
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            main.classList.add('error');
            setTimeout(() => {
                main.classList.remove('error');
            }, 1000);
        });
};


const initApp = () => {
    valueSearch.value = 'Siliguri';
    searchWeather();
};

initApp();

let bodi = document.getElementById('main');
let bode = document.getElementsByTagName('body');
let icon = document.getElementById('icn');
let them = document.getElementById('them');
let mn = document.getElementById('control');
let input = document.getElementById('valueSearch');
let search = document.getElementById('srch');

them.addEventListener('click', () => {
    if (icon.classList.contains('fa-moon')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        mn.style.backgroundColor = '#f7f7f7';
        mn.style.color = '#000';
        temperature.style.filter = 'drop-shadow(0 10px 50px #000)';
        input.style.color = '#000'
        input.classList.add('light-placeholder');
        input.classList.remove('dark-placeholder');
        input.style.color = '#767575';
        search.style.color = '#000';
        them.style.backgroundColor = 'white';
        them.style.color = '#767575';
        bodi.style.backgroundColor = 'white';
    } 
    else 
    {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        bodi.style.backgroundColor = '#252424';
        // bodi.style.backgroundImage = 'linear-gradient(to bottom,#202020 50%,#252424 50%)';
        bodi.style.transition = '1s ease-in';
        mn.style.backgroundColor = '#434344';
        mn.style.transition = '1s ease-in-out';
        mn.style.color = '#f7f7f7';
        temperature.style.filter = 'drop-shadow(0 10px 50px #d8d8d8)';
        input.classList.add('dark-placeholder');
        input.classList.remove('light-placeholder');
        search.style.color = 'white';
        them.style.color = 'white';
        them.style.backgroundColor = 'transparent';
        them.style.transition = '1s ease-in'
        input.style.color = '#f7f7f7';
    }
});

// Initial setup for placeholder color
input.classList.add('dark-placeholder'); // Default to light mode

// CSS rules for placeholder color using the classes
const style = document.createElement('style');
style.textContent = `
    input.light-placeholder::placeholder 
    {
        color: black;
    }
    input.dark-placeholder::placeholder 
    {
        color: white;
    }
`;
document.head.append(style);

