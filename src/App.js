
import { useState, useEffect } from 'react';




function App() {
  const [isAlert, setIsAlert] = useState(false)
  useEffect(() => {
    console.log("Component did mount ")
    isAlert && console.log("Component did Update") 
    return () => {
      console.log("Component will Unmount ")
    }
  }, [isAlert])



  return (
    <div className="App">
      <button onClick={() => setIsAlert(isAlert => !isAlert)}> {isAlert?"Update":"Mounted"}</button>
    </div>
  );
}

export default App;
