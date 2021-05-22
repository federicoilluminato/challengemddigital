console.log('hola');

const API_KEY = '77ab0478155a9c055d4b14622e734334';
const BASE_URL = 'http://api.weatherstack.com/current';

const getReq = async (busqueda) => {
    const req = await fetch(`${BASE_URL}?access_key=${API_KEY}&query=${busqueda}`)
    const data = await req.json();
    // con then y catch no funcionaba
    // console.log(data);
    let pais = data.location.country
    let ciudad = data.location.name
    let region = data.location.region
    let temp = data.current.temperature
    let clima = data.current['weather_descriptions'][0]

    tableRender(pais,ciudad,region,temp,clima);

}

const tableRender = (pais,ciudad,region,temp,clima) => {

    const Arr = [pais,ciudad,region,temp,clima]

    let tabla = document.querySelector('.table-body')
    for(let i = 0; i < 1; i++){
        let row = document.createElement('tr');
        for(let x = 0; x < Arr.length; x++){
            var data = document.createElement('td');
            data.innerText = Arr[x];
            row.appendChild(data);
        }
        tabla.appendChild(row)
    }

}


getReq('Buenos Aires');
getReq('Madrid');
getReq('New York');
getReq('Rio de janeiro');
getReq('Paris');
getReq('London');






