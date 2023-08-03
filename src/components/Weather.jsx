import React from 'react'
import './weather.css'
import { useState } from 'react'
import DisplayWeather from './DisplayWeather'

const Weather = () => {

    const [form, setForm] = useState({
        city: '',
        country: ''
    })

    const [weather, setWeather] = useState([])

    const APIKEY = 'cea378c7703d9025c283948bc27a28ef';

    // FETCH WEATHER DATA
    async function weatherData(e) {
        e.preventDefault()

        // check if input has a value

        if(form.city == '') {
            alert('Add Values')
        } else {
            // making the api call
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&appid=${APIKEY}`)
            const data = await response.json()
            console.log(data)
            setWeather({data: data})
        }
    }



    const handleChange = (e) => {
        let name = e.target.name
        let value = e.target.value

        if (name == 'city') {
            setForm({
                ...form,
                city: value
            })
        }

        if (name == 'country') {
            setForm({
                ...form,
                country: value
            })
        }
    }
    // console.log(form.city, form.country)

  return (
    <div className='weather'>
        <span className='title'>Weather App</span>
        <br />
            <form action=''>
                <input type='text' name='city' placeholder='city' onChange={handleChange}></input>
                &nbsp; &nbsp; &nbsp; &nbsp;
                <input type='text' name='country' placeholder='country' onChange={handleChange}></input>
                <button className='getweather' onClick={(e) => weatherData(e)}>Submit</button>
            </form>

            {
                weather.data != undefined ? (
                    <div>
                        <DisplayWeather data={weather.data} />
                    </div>
                ) : null
            }
    </div>
  )
}

export default Weather
