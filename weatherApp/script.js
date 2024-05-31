const apikey="ed6afe05ab125128479d5c3b279d2fec"
    const search=document.querySelector("button");


    search.addEventListener("click",function(e){
        e.preventDefault()
        const city=document.querySelector("input");
        const cityName=city.value;
        async function getWeather(){
            
            try {
                
                const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apikey}`)
                
                const data2= await response.json()
                // const lat=data[0].lat
                // const lon=data[0].lon
                

                // const response2=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}`)
                // const data2=await response2.json()
                const temperature=data2.main.temp
                // console.log(temperature)
                const celcius=Math.round(temperature-273.15)
                console.log(temperature)
                console.log(celcius)
                const text=document.getElementById("temp")
                const text2=document.getElementById("temp2")
                const text3=document.getElementById("temp3")
                text.innerText=`🌡️ Temperature is ${celcius}° C`
                const humidity=data2.main.humidity
                text2.innerText=`💧 Humidity is ${humidity}%`
                const wind=data2.wind.speed
                const finalwind=Math.round(wind*3.6)
                text3.innerText=`💨 Wind speed is ${finalwind}km/h`

            } 
            catch (error) {
                console.log("error occured")
            }
                
            }
            getWeather()
            
        
    })

    
    
    
    // https://api.openweathermap.org/data/2.5/weather?lat=30.9010&lon=75.8573&appid=ed6afe05ab125128479d5c3b279d2fec