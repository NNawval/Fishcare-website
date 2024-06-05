import { useState } from 'react'
import Card from './component/Card'
import News from './component/News'
function App() {
  const [count, setCount] = useState(0)
  

  return (

    <div class="flex flex-col md:flex-row p-8 xl:p-32 mobile:p-0">
      <div class="grow order-2 md:order-1 w-auto md:w-[60%] md:mr-4 ">
        <text className='font-proxima text-[36px] my-20 font-bold'>Danang’s Aquarium</text>
        <Card />
        <text className='font-proxima text-[36px] my-20 font-bold' >News</text>
        <News/>
      </div>
      <div class="order-1 md:order-2 w-auto md:w-[40%] ">
        Konten kanan
      </div>
    </div>


  )
}

export default App
