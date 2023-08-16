import React,{useState} from 'react'

function TemperatureConvertor() {
    const [celsius,setCelcius]=useState('')
    const [fahrenheit,setFarenheit]=useState("")

    const convertToCelsius = (fahrenheit) => {
        return ((fahrenheit - 32) * 5) / 9;
      };
    
      const convertToFahrenheit = (celsius) => {
        return (celsius * 9) / 5 + 32;
      };

    const handleCelsiusChange =(e)=>{
        setCelcius(e.target.value)
        setFarenheit(convertToFahrenheit(e.target.value))

    }
    const handleFahrenheitChange = (e)=>{
        setFarenheit(e.target.value)
        setCelcius(convertToCelsius(e.target.value))

    }
    function resetValue(){
        setCelcius('')
        setFarenheit('')
    }

    return(
        <>
        <div className="converter">
      <div>
        <label>Celsius:</label>
        <input type="number" 
         value={celsius} onChange={handleCelsiusChange} 
        />
      </div>
      <div>
        <label>Fahrenheit:</label>
        <input type="number"
          value={fahrenheit} onChange={handleFahrenheitChange} 
         />
      </div>
      <div className="btn">
        <button onClick={resetValue}>Reset</button>
      </div>
    </div>
        </>
    )
}

export default TemperatureConvertor
