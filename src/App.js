import { useState, useEffect } from 'react';

const style = {
  "border": "solid",
  'height': "300px",
  'width': "300px",
  "margin": "200px"

}

function App() {
  const [isAlert, setIsAlert] = useState(false)

  useEffect(() => {
    console.log("Component did mount ")
    isAlert && console.log("Component did Update")
    return () => {
      console.log("Component will Unmount ")
      alert("component unmounted")
    }
  }, [isAlert])



  return (
    <div className="App">

      <button onClick={() => setIsAlert(isAlert => !isAlert)}> {isAlert ? "Updated" : "Mounted"}</button>
      <div onMouseEnter={() => setIsAlert(isAlert => !isAlert)} style={style}>{isAlert ? "Updated" : "Mounted"}</div>
    </div>
  );
}

export default App;
