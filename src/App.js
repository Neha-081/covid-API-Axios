import { useState } from 'react'
import './App.css';
import axios from 'axios'
import Search from './components/Search'
import User from './components/User'

function App() {

  const [data, setData] = useState([])
  const [searchKeyWord, setSearchKeyWord] = useState('')


  const fetchAllRes = async (event) => {
    event.preventDefault();
   axios.get(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=512&date=31-03-2021`).then((res) => {
   setData(res.data.sessions)
   console.log(res.data);

    })
  }

  return (
    <div className="container">
    <Search searchKeyWord={searchKeyWord} setSearchKeyWord={setSearchKeyWord} fetchAllRes={fetchAllRes} />
    <User data={data}/>
    </div>
  );
}

export default App;
