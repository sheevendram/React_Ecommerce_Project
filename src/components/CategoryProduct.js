
import React, { useState, useEffect } from 'react';
import  "./products.css"
import {useParams} from "react-router-dom"
import Category from './Category';
const CategoryProduct = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const {category} = useParams();
  console.log(category)
 console.log(typeof(category))


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
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
  }, []);
 
  console.log("courses",data)
 
  if (isLoading) {
    return <div className='loader1'><div className="loader"></div>
      
  </div>;
  }

  
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  
  return (
    <>
       <Category />
      {data && (

        <div className='products'>
          {data.map((item) => (
           <div className="card" key={item.id}  >
           <a href ={`/product/${item.id}`}><img  src={item.image} width={100} alt="Denim Jeans" /> </a>
           <h1 className='title'>{item.title.slice(0, 40)}...</h1>
           <p className="price">₹{item.price}</p>
           <p className='description'></p>
           <p><button key={item.id}>Add To Cart</button></p>
            <button> <a href ={`/product/${item.id}`}>More Detail</a> </button>
           
         </div>


          
          ))}
        </div>
       )}
                     
    </>
  );
};

export default CategoryProduct;
