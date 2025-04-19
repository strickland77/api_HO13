import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

function City() {
    const [response, setresponse] = useState([]);
    const getdata = async () => {
      try {
          const res = await axios.get('http://localhost:5079/api/v1/city/1');
          setresponse(res.data);
      }
      catch(err) {
          console.log("error");
      }
    };

    useEffect( () => {
        getdata();
    }, []);

    if (response)
    {
        return (<h1> My city {JSON.stringify(response)} </h1>)
    }
    else
    {
        return (<h1> My city</h1>)
    }
  }
  
  export default City
  