



const API_KEY = "Your API Key";
const BASE_URL ="https://api.openweathermap.org/data/2.5/weather?units=imperial&";

const $title = $('#title');
const $temp = $('#temp');
const $index = $('#index');
const $weather = $('#weather');

$('form').on('submit', handleGetData);

function handleGetData(event){
event.preventDefault();

const inputText = $("input[type=text]").val();

$.ajax({
  url:`${BASE_URL}q=${inputText}&apikey=${API_KEY}`
  })
  .then((data) =>{
      $title.text(data.name);
      $temp.text(parseInt(data.main.temp)+ "\xB0"); //hex code for % http://www.javascripter.net/faq/mathsymbols.htm
      $index.text(parseInt(data.main.feels_like) + "\xB0");
      $weather.text(data.weather[0].description);
    })
    .catch((error) =>{
      console.log('this is a bad request: ', error);
    });
}

