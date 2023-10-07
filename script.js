// Get all the countries from Asia continent /region using Filter function (1)
let xhr = new XMLHttpRequest();
xhr.open('GET','https://restcountries.com/v3.1/all',true)
xhr.onload = function()
{
    if(xhr.status===200)
    { 
        let response = JSON.parse(xhr.responseText); 
        console.log(response)
        let count = 0;
        let output = response.filter((x) => {
            if (x.region == 'Asia')
            {
                console.log(x.name.common);
                count ++;
            }
        })
        console.log(count);
    }
}
xhr.send()
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Get all the countries with a population of less than 2 lakhs using Filter function (2)
let xhr = new XMLHttpRequest();
xhr.open('GET','https://restcountries.com/v3.1/all',true)
xhr.onload = function()
{
    if(xhr.status===200)
    { 
        let response = JSON.parse(xhr.responseText); 
        console.log(response)
        let count = 0;
        let output = response.filter((x) => {
            if (x.population < 200000)
            {
                console.log(x.population);
                count ++;
            }
        })
        console.log(count);
    }
}
xhr.send()
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Print the following details name, capital, flag using forEach function (3)
let xhr = new XMLHttpRequest();
xhr.open('GET','https://restcountries.com/v3.1/all',true)
xhr.onload = function()
{
    if(xhr.status===200)
    { 
        let response = JSON.parse(xhr.responseText); 
        console.log(response)
        response.forEach(x => {
            console.log(x.name.common);
            console.log(x.capital);
            console.log(x.flag);
            console.log("----------------------------------------------------")
        });
    }
}
xhr.send()
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Print the total population of countries using reduce function (4)
let xhr = new XMLHttpRequest();
xhr.open('GET','https://restcountries.com/v3.1/all',true)
xhr.onload = function()
{
    if(xhr.status===200)
    { 
        let response = JSON.parse(xhr.responseText); 
        const out = response.reduce(function (acc, curr) {
            acc = acc + curr.population
            return acc
        }, 0)
        console.log(out)
    }
}   
xhr.send()
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Print the country which uses US Dollars as currency (5)
