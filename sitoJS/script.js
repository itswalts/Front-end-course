const root = document.getElementById("root");

document.body.className = "body";


const titleDiv = document.createElement("div");
titleDiv.classList.add("title");

const siteTitle = document.createElement("h1");
siteTitle.classList.add("h1", "merriweather-bold");
siteTitle.textContent = "AMBIENTE";


const header = document.createElement("header");
header.innerHTML = `
  <nav class="navbar navbar-expand-lg bg-body-tertiary custom-navbar">
  <div class="container-fluid">
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#home" id="homeID">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#servizi" id="serviziID">Servizio meteo</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#area" id="areaUtenteID">Area utente</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#contatti" id="contattiID">Contatti</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#faq" id="faqID">FAQ</a>
        </li>
      </ul>
    </div>
  </div>
  </nav> 
`;

const main = document.createElement("main");
main.innerHTML = `
  <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="./foresta.jpg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="./biodiversità.jpg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="./gestione.jpg" class="d-block w-100" alt="...">
    </div>
  </div>
  </div>
`;

const cardData = [
  {
    title: "Il cambiamento climatico",
    text: "Scopri come il cambiamento climatico sta impattando le foreste: incendi più frequenti, modifiche nei cicli di crescita, e la necessità di strategie di adattamento.",
    linkText: "Vai all'articolo"
  },
  {
    title: "Custodi della biodiversità",
    text: "Esplora il ruolo cruciale delle foreste come habitat per molte specie di piante e animali, i rischi in cui incorrono e le minacce alla loro biodiversità.",
    linkText: "Vai all'articolo"
  },
  {
    title: "Gestione delle foreste",
    text: "Scopri l'importanza della gestione forestale sostenibile per garantire la salute a lungo termine delle foreste e la fornitura continua di servizi ecosistemici vitali.",
    linkText: "Vai all'articolo"
  }
];

const container = document.createElement("div");
container.classList.add("container", "text-center", "mt-5");

const row = document.createElement("div");
row.classList.add("row", "justify-content-center");

cardData.forEach(data => {
  const col = document.createElement("div");
  col.classList.add("col-md-4", "mb-4");

  const card = document.createElement("div");
  card.classList.add("card");
  card.style.width = "18rem";
  card.style.height = "15rem";

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  const cardTitle = document.createElement("h5");
  cardTitle.classList.add("card-title");
  cardTitle.textContent = data.title;

  const cardText = document.createElement("p");
  cardText.classList.add("card-text");
  cardText.textContent = data.text;

  const cardLink = document.createElement("a");
  cardLink.classList.add("btn", "btn-primary");
  cardLink.textContent = data.linkText;

  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardText);
  cardBody.appendChild(cardLink);

  card.appendChild(cardBody);

  col.appendChild(card);

  row.appendChild(col);

});

const sendMessage = document.createElement("h1");
sendMessage.classList.add("h1");
sendMessage.textContent = "Inviaci un messaggio!";


const emailContainer = document.createElement("div");
emailContainer.classList.add("mb-3");

const emailLabel = document.createElement("label");
emailLabel.classList.add("form-label");
emailLabel.textContent = "Il tuo indirizzo Email: ";

const emailInput = document.createElement("input");
emailInput.type = "email";
emailInput.classList.add("form-control");


const messageContainer = document.createElement("div");
messageContainer.classList.add("mb-3");

const messageLabel = document.createElement('label');
messageLabel.classList.add('form-label');
messageLabel.textContent = 'Inserisci il tuo messaggio!';

const messageInput = document.createElement('textarea');
messageInput.classList.add('form-control');
messageInput.rows = 3;

const br = document.createElement("br");

const buttonContainer = document.createElement('div');
buttonContainer.classList.add('text-center');

const button = document.createElement('button');
button.type = 'button';
button.classList.add('btn', 'btn-primary');
button.textContent = 'INVIA';

const footerDiv = document.createElement("div");
footerDiv.classList.add("footer");

const textFooter = document.createElement("p");
textFooter.textContent = "Copyright © 2024. All Right Reserved.";


titleDiv.appendChild(siteTitle);
root.appendChild(titleDiv);

root.appendChild(header);
root.appendChild(main);

container.appendChild(row);
root.appendChild(container);


root.appendChild(sendMessage);

emailContainer.appendChild(emailLabel);
emailContainer.appendChild(emailInput);
buttonContainer.appendChild(button);

messageContainer.appendChild(messageLabel);
messageContainer.appendChild(messageInput);

root.appendChild(emailContainer);
root.appendChild(messageContainer);
root.appendChild(br);
root.appendChild(buttonContainer);

footerDiv.appendChild(textFooter);
root.appendChild(footerDiv);

//Form di registrazione
const registrationContainer = document.createElement("div");

const form = document.createElement("form");

const registrationTitle = document.createElement("h1");
registrationTitle.classList.add("h1");
registrationTitle.textContent = "Unisciti a noi!";

const signUpEmail = document.createElement("div");
signUpEmail.classList.add("mb-3");

const signUpLabelEmail = document.createElement("label");
signUpLabelEmail.classList.add("form-label");
signUpEmail.textContent = "Inserisci il tuo indirizzo email per registrarti: ";

const signUpInputEmail = document.createElement("input");
signUpInputEmail.type = "email";
signUpInputEmail.classList.add("form-control");





const signUpName = document.createElement("div");
signUpName.classList.add("mb-3");

const signUpLabelName = document.createElement("label");
signUpLabelName.classList.add("form-label");
signUpLabelName.textContent = "Inserisci il tuo nome: ";

const signUpInputName = document.createElement("input");
signUpInputName.type = "text";
signUpInputName.classList.add("form-control");


const signUpSurname = document.createElement("div");
signUpSurname.classList.add("mb-3");

const signUpLabelSurname = document.createElement("label");
signUpLabelSurname.classList.add("form-label");
signUpLabelSurname.textContent = "Inserisci il tuo cognome: ";

const signUpInputSurame = document.createElement("input");
signUpInputSurame.type = "text";
signUpInputSurame.classList.add("form-control");


const signUpUsername = document.createElement("div");
signUpUsername.classList.add("mb-3");

const signUpLabelUsername = document.createElement("label");
signUpLabelUsername.classList.add("form-label");
signUpLabelUsername.textContent = "Inserisci username che vuoi utilizzare: ";

const signUpInputUsername = document.createElement("input");
signUpInputUsername.type = "text";
signUpInputUsername.classList.add("form-control");


const signUpPassword = document.createElement("div");
signUpPassword.classList.add("mb-3");

const signUpLabelPassword = document.createElement("label");
signUpLabelPassword.classList.add("form-label");
signUpLabelPassword.textContent = "Inserisci una password:";

const signUpInputPassword = document.createElement("input");
signUpInputPassword.type = "password";
signUpInputPassword.classList.add("form-control");

const buttonDiv = document.createElement("div");
buttonDiv.classList.add("text-center");

const sendButton = document.createElement("button");
sendButton.type = "submit";
sendButton.classList.add("btn", "btn-primary");
sendButton.textContent = "REGISTRATI";




// CARD METEO


const cardMeteoDiv = document.createElement("div");
cardMeteoDiv.classList.add("containerWeather");

const cardMeteo = document.createElement("div");
cardMeteo.classList.add("box");

const cardMeteoBody = document.createElement("div");
cardMeteoBody.classList.add("card-body");

const cardMeteoTitle = document.createElement("h1");
cardMeteoTitle.classList.add("card-title", "merriweather-bold");
cardMeteoTitle.style.marginTop = "30px";
cardMeteoTitle.textContent = "Meteo Milano"

const cardMeteoText = document.createElement("p");
cardMeteoText.classList.add("card-text", "containerTextWeather", "merriweather-regular-italic");

cardMeteoBody.appendChild(cardMeteoTitle);
cardMeteoBody.appendChild(cardMeteoText);

cardMeteo.appendChild(cardMeteoBody);

cardMeteoDiv.appendChild(cardMeteo);


  document.addEventListener("DOMContentLoaded", () => {
    fetch("https://api.open-meteo.com/v1/forecast?latitude=45.5921&longitude=9.5734&current=temperature_2m,relative_humidity_2m,is_day,precipitation,rain,cloud_cover,wind_speed_10m&timezone=Europe%2FLondon")
      .then(response => response.json())
      .then(data => {
        const weather = data.current;
  
      const temp = weather.temperature_2m;
      const hum = weather.relative_humidity_2m;
      const isDay = weather.is_day ? "Giorno" : "Notte";
      const precip = weather.precipitation;
      const rain = weather.rain;
      const cloud = weather.cloud_cover;
      const wind = weather.wind_speed_10m;
  
      const weatherData = `
      Temperatura: ${temp} °C <br>
      Umidità: ${hum}% <br>
      Giorno o notte: ${isDay} <br>
      Precipitazioni: ${precip} mm <br>
      Quantità di pioggia: ${rain} mm <br>
      Nuvole: ${cloud} % <br>
      Vento: ${wind} km/h <br>
      `;
  
      cardMeteoText.innerHTML = weatherData;
          });
  });

const divInfoWeather = document.createElement("div");
divInfoWeather.style.marginTop = "50px";

const weatherTableDiv = document.createElement("div");
weatherTableDiv.classList.add("containerWeather");
weatherTableDiv.style.marginTop = "50px";

const weatherButton = document.createElement("button");
weatherButton.classList.add("btn", "btn-primary");
weatherButton.textContent = "Recupera informazioni";

const weatherTable = document.createElement("table");
weatherTable.classList.add("table");

weatherTableDiv.appendChild(weatherButton);
divInfoWeather.appendChild(weatherTableDiv);
divInfoWeather.appendChild(weatherTable);


weatherButton.addEventListener("click", () => {
  fetch("https://api.open-meteo.com/v1/forecast?latitude=45.5921&longitude=9.5734&current=temperature_2m,relative_humidity_2m,is_day,precipitation,rain,cloud_cover,wind_speed_10m&timezone=Europe%2FLondon")
  .then(response => response.json())
  .then(data => {
    const weather = data.current;

    const temp = weather.temperature_2m;
    const hum = weather.relative_humidity_2m;
    const isDay = weather.is_day ? "Giorno" : "Notte";
    const precip = weather.precipitation;
    const rain = weather.rain;
    const cloud = weather.cloud_cover;
    const wind = weather.wind_speed_10m;

    const rowTable = document.createElement("tr");
    
    rowTable.innerHTML = `
    <td>Temperatura: ${temp} °C</td>
    <td>Umidità: ${hum}%</td>
    <td>${isDay}</td>
    <td>Precipitazioni: ${precip} mm</td>
    <td>Quantità di pioggia: ${rain} mm</td>
    <td>Nuvole: ${cloud} %</td>
    <td>Vento: ${wind} km/h</td>
    `;

    weatherTable.appendChild(rowTable);

  });
});


signUpName.appendChild(signUpLabelName);
signUpName.appendChild(signUpInputName);

signUpSurname.appendChild(signUpLabelSurname);
signUpSurname.appendChild(signUpInputSurame);

signUpUsername.appendChild(signUpLabelUsername);
signUpUsername.appendChild(signUpInputUsername);

signUpEmail.appendChild(signUpLabelEmail);
signUpEmail.appendChild(signUpInputEmail);

signUpPassword.appendChild(signUpLabelPassword);
signUpPassword.appendChild(signUpInputPassword);

buttonDiv.appendChild(sendButton);

form.appendChild(registrationTitle);
form.appendChild(signUpName);
form.appendChild(signUpSurname);
form.appendChild(signUpUsername);
form.appendChild(signUpEmail);
form.appendChild(signUpPassword);
form.appendChild(br);
form.appendChild(buttonDiv);

registrationContainer.appendChild(form);


document.addEventListener("DOMContentLoaded", () => {
  const homeID = document.getElementById("homeID");

  homeID.addEventListener("click", () => {

    if (root.contains(registrationContainer)) {
      root.removeChild(registrationContainer);
    }
    if (root.contains(cardMeteoDiv)) {
      root.removeChild(cardMeteoDiv);
    }
    if (root.contains(divInfoWeather)) {
      root.removeChild(divInfoWeather);
    }

    titleDiv.appendChild(siteTitle);
    root.appendChild(titleDiv);
    root.appendChild(header);
    root.appendChild(main);
    container.appendChild(row);
    root.appendChild(container);
    root.appendChild(sendMessage);
    emailContainer.appendChild(emailLabel);
    emailContainer.appendChild(emailInput);
    buttonContainer.appendChild(button);
    messageContainer.appendChild(messageLabel);
    messageContainer.appendChild(messageInput);
    root.appendChild(emailContainer);
    root.appendChild(messageContainer);
    root.appendChild(br);
    root.appendChild(buttonContainer);
    footerDiv.appendChild(textFooter);
    root.appendChild(footerDiv);

  });
});

document.addEventListener("DOMContentLoaded", () => {
  const serviziID = document.getElementById("serviziID");

  serviziID.addEventListener("click", () => {

    if (root.contains(registrationContainer)) {
      root.removeChild(registrationContainer);
    }

    root.appendChild(cardMeteoDiv);
    root.appendChild(divInfoWeather);

    root.removeChild(main);
    root.removeChild(container);
    root.removeChild(emailContainer);
    root.removeChild(messageContainer);
    root.removeChild(buttonContainer);
    root.removeChild(sendMessage);
    root.removeChild(footerDiv);

  });
});

document.addEventListener("DOMContentLoaded", () => {
  const areaUtenteID = document.getElementById("areaUtenteID");

  areaUtenteID.addEventListener("click", () => {

    if (root.contains(cardMeteoDiv)) {
      root.removeChild(cardMeteoDiv);
    }
    if (root.contains(divInfoWeather)) {
      root.removeChild(divInfoWeather);
    }

    if (root.contains(main)) root.removeChild(main);
    if (root.contains(container)) root.removeChild(container);
    if (root.contains(emailContainer)) root.removeChild(emailContainer);
    if (root.contains(messageContainer)) root.removeChild(messageContainer);
    if (root.contains(buttonContainer)) root.removeChild(buttonContainer);
    if (root.contains(sendMessage)) root.removeChild(sendMessage);
    if (root.contains(footerDiv)) root.removeChild(footerDiv);

    root.appendChild(registrationContainer);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const contattiID = document.getElementById("contattiID");

  contattiID.addEventListener("click", () => {

    if (root.contains(registrationContainer)) {
      root.removeChild(registrationContainer);
    }
    if (root.contains(cardMeteoDiv)) {
      root.removeChild(cardMeteoDiv);
    }
    if (root.contains(divInfoWeather)) {
      root.removeChild(divInfoWeather);
    }

    root.removeChild(main);
    root.removeChild(container);
    root.removeChild(emailContainer);
    root.removeChild(messageContainer);
    root.removeChild(buttonContainer);
    root.removeChild(sendMessage);
    root.removeChild(footerDiv);
    
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const faqID = document.getElementById("faqID");

  faqID.addEventListener("click", () => {

    if (root.contains(registrationContainer)) {
      root.removeChild(registrationContainer);
    }
    if (root.contains(cardMeteoDiv)) {
      root.removeChild(cardMeteoDiv);
    }
    if (root.contains(divInfoWeather)) {
      root.removeChild(divInfoWeather);
    }

    root.removeChild(main);
    root.removeChild(container);
    root.removeChild(emailContainer);
    root.removeChild(messageContainer);
    root.removeChild(buttonContainer);
    root.removeChild(sendMessage);
    root.removeChild(footerDiv);
  });
});