import { useState, useEffect } from 'react';

const style = {
  "border": "solid",
  'height': "300px",
  'width': "300px",
  "margin": "200px"

}

function App() {
  const [isAlert, setIsAlert] = useState(false)
  const [reset, setReset] = useState(false)

  useEffect(() => {

    isAlert ? console.log("Component did Update") : console.log("Component did mount ")

    if (reset) {
      console.log("hi")
      setIsAlert(isAlert => false)
      setReset(reset => false)
    }
    return () => {
      console.log("Component will Unmount ")
      alert("component unmounted")
    }
  }, [isAlert, reset])



  return (
    <div className="App">
      <button onClick={() => setReset(reset => true)}> reset</button>
      <button onClick={() => setIsAlert(isAlert => true)}> {isAlert ? "Updated" : "Mounted"}</button>
      <div onMouseEnter={() => setIsAlert(isAlert => true)} style={style}>{isAlert ? "Updated" : "Mounted"}</div>
    </div>
  );
}

export default App;
