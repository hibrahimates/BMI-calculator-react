import React, { useState } from 'react';
import './index.css';


function App() {
  //state
  const [weigth, setWeigth] = useState(0);
  const [heigth, setheigth] = useState(0);
  const [bmi, setBmi] = useState('');
  const [message, setMessage] = useState('');


  let calcBmi = (event) => {
    //prevent submitting
    event.preventDefault()
    if (weigth === 0 || heigth === 0)
      alert("Please enter a valid weigth and heigth...")
    else {
      let bmi = (weigth / (heigth * heigth)) * 10000
      setBmi(bmi.toFixed(1))

      // logic for message
      if (bmi < 25) {
        setMessage("You are zargana!")
      }
      else if (bmi >= 25 && bmi < 30) {
        setMessage("You are healty!")
      }
      else {
        setMessage("You are overweigth!")
      }
    }
  }

  //Show image based on bmi calculation
  let imgSrc;
  if (bmi < 1) {
    imgSrc = null
  } else {
    if (bmi < 25) {
      imgSrc = require('../src/assets/underweight.png')
    }
    else if (bmi >= 25 && bmi < 30) {
      imgSrc = require('../src/assets/healthy.png')
    }
    else {
      imgSrc = require('../src/assets/overweight.png')
    }

  }


  let reload = () => {
    window.location.reload()
  }


  return (
    <div className="app">


      <div className="container">
        <div className="center">BMI Calculator</div>
        <form onSubmit={calcBmi}>
          <div>
            <label>Weigth (kg)</label>
            <input value={weigth} onChange={(event) => setWeigth(event.target.value)}></input>
          </div>

          <div>
            <label>Heigth (cm)</label>
            <input value={heigth} onChange={(event) => setheigth(event.target.value)}></input>
          </div>
          <div>
            <button className='btn' type='submit'>Submit</button>
            <button className='btn btn-outline' type='submit' onClick={reload}>Reload</button>
          </div>
        </form>
        <div>Your BMI is: {bmi}</div>
        <p>{message}</p>


        <div className='img-container'>
          <img src={imgSrc} alt=''></img>
        </div>
      </div>




    </div>
  );
}

export default App;
