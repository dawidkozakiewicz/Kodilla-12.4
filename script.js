var url = 'http://api.icndb.com/jokes/random';

var button = document.getElementById('get-joke');
button.addEventListener('click', function() {
  getJoke();
});

var paragraph = document.getElementById('joke');

function getJoke() {
  var xhr = new XMLHttpRequest(); //stworzenie instancji obiektu
  xhr.open('GET', url); //metoda 'open' - tu z dwoma parametrami: 1. metoda http użyta w zapytaniu (get) i 2. adres URL zapytania
  xhr.addEventListener('load', function() { //nasłuchiwanie na odpowiedź z serwera, jeśli jest, wtedy wykonaj funkcję:
    var response = JSON.parse(xhr.response); //zamienia wartość tekstową w formacie JSON na zrozumiały dla JS obiekt, którym można manipulować.
    paragraph.innerHTML = response.value.joke; //Jako tekst paragrafu z dowcipem ustawiamy wartość, która siedzi w odpowiedzi z serwera, czyli w response.value.joke.
  });
  xhr.send();
}

/*getJoke();*/ // jeśli chcielibyśmy, żeby dowcip losowany był z automatu po załadowaniu strony
