const weatherApi = 'http://api.weatherapi.com/v1/current.json?key=77433fea24c74b41aa361342233108&q=India&aqi=no'

const date = new Date()
const hours = date.getHours()
console.log(hours)

// const hours = 20

if (hours >= 5 && hours < 9) {
    document.body.style.backgroundImage = "url(image/morning.jpg)"
    console.log("1")
}
else if (hours >= 9 && hours < 17) {
    document.body.style.backgroundImage = "url(image/afternoon.jpg)"
    console.log("2")
}
else if (hours >= 17 && hours < 20) {
    document.body.style.backgroundImage = "url(image/evening.jpg)"
    console.log("3")
} else if (hours >= 20 || hours < 5) {
    document.body.style.backgroundImage = "url(image/night.jpg)"
    console.log("4")
}

const container = document.querySelector('.container')
const search = document.querySelector('#search')

async function weather(city) {
    const responce = await fetch(`http://api.weatherapi.com/v1/current.json?key=77433fea24c74b41aa361342233108&q=${city}&aqi=no`)
    console.log(responce)
    const data = await responce.json()
    console.log(data)
    console.log("done")
    showWeather(data)
}

// weather()

const showWeather = (value) => {
    // if(error.code == 1006){
    //     container.innerHTML = `<h2 style="font-size: 50px; color: white; ">City not Found</h2>`
    // }
    container.innerHTML = `
    <div class="show_weather">
            <h2>${value.location.name}</h2>
            <p>${value.location.region}, ${value.location.country}</p>
            <div class="temperature">
                <h1>${value.current.temp_c}</h1>
                <img src="${value.current.condition.icon}" alt="not found">
                <p>${value.current.condition.text}</p> 
            </div>
        </div>`
}



function submitSearch() {
    console.log(search.value)
    weather(search.value)
}

weather("kanina")