import React from 'react'
import { useState, useEffect } from 'react'
import {useParams} from "react-router-dom"

export default function ProductDetail() {
    const [data, setData] =useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const {id} = useParams();
    console.log(id)
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            if (!response.ok) {
              throw new Error('Network response was not ok.');
            }
            const responseData = await response.json();
            setData(responseData);
            setIsLoading(false);
          } catch (error) {
            setError(error);
            setIsLoading(false);
          }
        };
    
        fetchData();
        console.log(data)   
      }, []);
  

 if (isLoading) {
    return <div>Loading...</div>;
  }

  
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
     
      {data && (

        <div className='products'>
          
           <div className="card" key={data.id}>
           <img src={data.image} width={100} alt="Denim Jeans" />
           <h1 className='title'>{data.title.slice(0, 100)}...</h1>
           <p className='title'>{data.category}</p>
           <p className='description'>{data.description}</p>
           <p className="price">₹{data.price}</p>
           <p className='description'></p>
           
         </div>

          
          
        </div>
       )}
 
    </>
  );
};

