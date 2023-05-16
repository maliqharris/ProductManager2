import React from 'react';
import {useParams} from 'react-router-dom';
import axios from "axios";
import {useEffect,  useState} from 'react'
import {Link} from 'react-router-dom'



// get id  from params
// with the id , send api call on load (axios, useEffect)
// store the changing variable from api (useState)

const ProductPage = () => {
    const[product, setProduct] =useState();

    const {id} = useParams();
    useEffect(()=>{
        axios.get(`http://localhost:8008/api/jokes/${id}`)
        .then(response=>{
            console.log(response.data)
            setProduct(response.data)
           })   
        .catch(err => console.log(err))

      
    }, [])
  return (
    <div>
        {
            product?
        
        <div>
            <h2>Title: {product.Title}</h2>
            <h2>Price: {product.price}</h2>
            <h2>Description: {product.description}</h2>

        </div>:
        <h1>Loading....</h1>

        }
<Link to ='/product/new'>Back</Link>
    </div>
  )
}

export default ProductPage