import React, {useState} from 'react'

import CreateForm from '../components/CreateForm'
import ShowForm from '../components/ShowForm'



const NewProductPage = () => {
  return (
    <div>
      <h1>Create Product</h1>
      <CreateForm />
      <h1>All Products</h1>
      <ShowForm />


    </div>
  )
}

export default NewProductPage