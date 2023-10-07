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
// ------------> output
// Maldives
// Turkey
// Pakistan
// Iran
// Indonesia
// Afghanistan
// Timor-Leste
// Saudi Arabia
// Cambodia
// Nepal
// Malaysia
// Thailand
// Jordan
// Hong Kong
// Tajikistan
// Turkmenistan
// Macau
// Syria
// Kazakhstan
// South Korea
// Taiwan
// Japan
// China
// Lebanon
// Sri Lanka
// United Arab Emirates
// Mongolia
// Yemen
// Laos
// India
// North Korea
// Kyrgyzstan
// Oman
// Philippines
// Bahrain
// Qatar
// Vietnam
// Singapore
// Georgia
// Kuwait
// Myanmar
// Azerbaijan
// Uzbekistan
// Bangladesh
// Armenia
// Brunei
// Israel
// Palestine
// Bhutan
// Iraq
// 50
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
// ------------> output
// 38659
// 71991
// 33691
// 18100
// 1470
// 98462
// 1411
// 2563
// 110947
// 29458
// 168783
// 1000
// 85032
// 100800
// 115021
// 39244
// 400
// 77265
// 106290
// 40812
// 4922
// 30
// 0
// 53192
// 13452
// 62999
// 53192
// 33938
// 18092
// 6069
// 55197
// 97928
// 155014
// 56367
// 30237
// 11750
// 183629
// 1300
// 2562
// 112519
// 4255
// 0
// 25987
// 59194
// 3000
// 2302
// 63903
// 56
// 38137
// 451
// 2072
// 48865
// 10834
// 198410
// 544
// 11792
// 105697
// 106766
// 119446
// 38718
// 65720
// 57557
// 62
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Print the following details name, capital, flag using forEach function (3)

