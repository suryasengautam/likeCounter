import React , {useState} from "react"
import "./styles.css";

export default function App() {
  var [likeCounter,setLikeCounter]  = useState(0)
  function clickHandler(event){
    var newLikeCounter = likeCounter + 1
    setLikeCounter(newLikeCounter)
    console.log(likeCounter)

    
  }
  return (
    <div className="App">
      <button onClick = {clickHandler} >like</button> {likeCounter}
    </div>
  );
}
