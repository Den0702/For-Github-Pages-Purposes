'use strict'

const btnGetData = document.querySelector('#get-data');


btnGetData.addEventListener('click', () => {
  fetch('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php')
    .then(response => response.json())
    .then(response => {
      const divProgrammerData = document.createElement('div');
      divProgrammerData.setAttribute('id', 'dane-programisty');
      document.body.append(divProgrammerData);
      
      for (let key in response) {
        let personName = document.createElement('p');
        personName.textContent = key + ': ' + response[key];
        divProgrammerData.append(personName);

      }


     /*  let personSurname = document.createElement('p');
      personSurname.textContent = 'Surname: ' + response['nazwisko'];
      divProgrammerData.append(personSurname);

      let personOccupation = document.createElement('p');
      personOccupation.textContent = 'Occupation: ' + response['zawod'];
      divProgrammerData.append(personOccupation);

      let personWorksIn = document.createElement('p');
      personWorksIn.textContent = 'Company: ' + response['firma'];
      divProgrammerData.append(personWorksIn); */
    })
    .catch(error => console.error(error));
});



