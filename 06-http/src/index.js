const jokeUrl = 'https://api.chucknorris.io/jokes/random';
fetch(jokeUrl).then(response => {
    //extraer en formato de json
    response.json().then(data => {
        console.log(data);
    });
});