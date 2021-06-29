import './App.scss';
import React, { useState, useEffect } from 'react'

let frasesBD = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"

function App() {
  const [frase, setFrase] = useState('The greatest glory in living lies not in never falling, but in rising every time we fall.')
  const [autor, setAutor] = useState('Nelson Mandela')
  const [randomNumber, setRandomInt] = useState(0)
  const [frasesArray, setFrasesArray] = useState(null)

  const fetchFrases = async (url) => {
    const response = await fetch(url)
    const parseJSON = await response.json()
    setFrasesArray(parseJSON.quotes)
    console.log(parseJSON)
  }

  useEffect(() => {
    fetchFrases(frasesBD)
  }, [frasesBD])

  const cambiarFraseAutor = () => {
    let randomInt = Math.floor(frasesArray.length * Math.random())
    setRandomInt(randomInt)
    setFrase(frasesArray[randomInt].quote)
    setAutor(frasesArray[randomInt].author)
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="container-boxfrase">
          <div className="container-textfrase">
            <p id="text"> "{frase}" </p>
            <p id="autor">{autor}</p>
          </div>
          <button className="button" onClick={() => cambiarFraseAutor()}>Siguiente</button>
        </div>
      </header>
    </div>
  );
}

export default App;
