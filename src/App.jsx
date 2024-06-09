import { useState, useEffect } from 'react'
import Card from './component/Card'
import News from './component/News'
import { ref, onValue } from "firebase/database";
import db from '../FirebaseConfig'

function App() {
  // const [count, setCount] = useState(0)
  const [temperature, setTemperature] = useState();
  
  async function readDataTemperature() {
    const databaseRef = ref(db,'test/temperature');
    onValue(databaseRef,(snapshot)=>{
      if (snapshot.exists()) {
        console.log(snapshot.val());
        setTemperature(snapshot.val());
      } else {
        setTemperature(0);
      }
    })
    
  }

  useEffect(()=>{
    readDataTemperature();
  },[])

  return (

    <div className="flex flex-col md:flex-row p-8 xl:p-32 mobile:p-0">
      <div className="grow order-2 md:order-1 w-auto md:w-[60%] md:mr-4 ">
        <text className='font-proxima text-[36px] my-20 font-bold'>Danang’s Aquarium</text>
        <Card temperature={temperature}/>
        <text className='font-proxima text-[36px] my-20 font-bold' >News</text>
        <News/>
      </div>
      <div className="order-1 md:order-2 w-auto md:w-[40%] ">
        
      </div>
    </div>


  )
}

export default App
