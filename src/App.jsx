import { useState, useEffect } from 'react'
import Card from './component/Card'
import News from './component/News'
import { ref, onValue } from "firebase/database";
import db from '../FirebaseConfig'
import Dashboard from './component/Dashboard';
import axios from 'axios';

function App() {
  // const [count, setCount] = useState(0)
  const [temperature, setTemperature] = useState();
  const [news,setNews] = useState([]);

  
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

  async function getNews(){
    const response = await axios.get('https://newsapi.org/v2/everything?q=fish&apiKey=a3e47262b4244628bca6522058c3a451');
    const berita = [];
    const articles = response.data.articles;
    berita.push(articles[7], articles[1], articles[2]);
    console.log(berita);
    setNews(berita);
    console.log(berita);
  }

  useEffect(()=>{
    readDataTemperature();
    getNews();
  },[])

  return (
    <div className="flex flex-col items-center lg:justify-between lg:flex-row lg:items-start p-20 gap-10">
      <div className='flex flex-col gap-4 lg:w-[800px]'>
        <p className='font-proxima text-[36px] font-bold'>Danang’s Aquarium</p>
        <Card temperature={temperature}/>
        <p className='font-proxima text-[36px] font-bold' >News</p>
        <News berita = {news}/>
      </div>
      <Dashboard />
    </div>
  )
}

export default App
