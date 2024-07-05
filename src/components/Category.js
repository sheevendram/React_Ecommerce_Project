import React, { useState, useEffect } from 'react';
import  "./products.css"
import {useParams} from "react-router-dom"
import CategoryProduct from './CategoryProduct';

const Category = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const {item} = useParams();
  console.log(item)



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products/categories');
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
  }, [data]);
 
  console.log("courses",data)
 


  
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  
  return (
    <>
     
      {data && (

        <div className='products'>
          {data.map((item) => (
           <div className="card" key={item.id}  >
           
           <a href={`/categories/${item}`}><h1 className='title'>{item}</h1></a>
           
           
           
         </div>
          
          
          ))}
          
        </div>
       )}
                     
    </>
  );
};

export default Category;
