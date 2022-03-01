fetch("https://covid-19-data.p.rapidapi.com/country/code?code=it", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
            "x-rapidapi-key": "46d70d4453msh92620ff851943aap1d3e19jsnc65b977b926d"
        }
    })
    .then(response => {
        console.log(response);
    })
    .catch(err => {
        console.error(err);
    });