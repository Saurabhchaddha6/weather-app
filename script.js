const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Jhansi';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '9f25371446mshd5bc11c757b3b6ap185fabjsn69a87796a3fd',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Jhansi', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));