import React, { useState, useEffect } from 'react';
import  "./products.css"
import {Link} from "react-router-dom"
import Cart from './Cart';
const Products = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cartCourses, setCartCourses] = useState([]);
 

  const addToCart = (GFGcourse) => {
      const alreadyCourses = cartCourses
                             .find(item => item.product.id === GFGcourse.id);
                console.log(alreadyCourses)
      if (alreadyCourses) {
          const latestCartUpdate = cartCourses.map(item =>
              item.product.id === GFGcourse.id ? { 
              ...item, quantity: item.quantity + 1 } 
              : item
          );
          console.log("latest",latestCartUpdate)
          setCartCourses(latestCartUpdate);
      } else {
          setCartCourses([...cartCourses, {product: GFGcourse, quantity: 1}]);
        }
        
  };

  const deleteFromCart = (GFGCourse) => {
      const updatedCart = cartCourses
                          .filter(item => item.product.id !== GFGCourse.id);
      setCartCourses(updatedCart);
      
  };

  const totalAmountCalculation= () => {
      return cartCourses
             .reduce((total, item) => 
                         total + item.product.price * item.quantity, 0);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products?limit=10');
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
 
  console.log("coueses",cartCourses)
 
  if (isLoading) {
    return <div className='loader1'><div className="loader"></div>
      
  </div>;
  }

  
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  
  return (
    <>
     
      {data && (

        <div className='products'>
          {data.map((item) => (
           <div className="card" key={item.id}  >
           <a href ={`/product/${item.id}`}><img  src={item.image} width={100} alt="Denim Jeans" /> </a>
           <h1 className='title'>{item.title.slice(0, 40)}...</h1>
           <p className="price">₹{item.price}</p>
           <p className='description'></p>
           <p><button key={item.id} onClick={()=>addToCart(item)}>Add To Cart</button></p>
            <button> <a href ={`/product/${item.id}`}>More Detail</a> </button>
           
         </div>

          
          ))}
        </div>
       )}
                     <Cart
              cartCourses={cartCourses}
              deleteCourseFromCartFunction={deleteFromCart}
              totalAmountCalculationFunction={
                  totalAmountCalculation
              }
              setCartCourses={setCartCourses}/>
    </>
  );
};

export default Products;