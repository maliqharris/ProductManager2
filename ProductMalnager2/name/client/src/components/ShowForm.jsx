import React, {useState, useEffect}  from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'



const ShowForm = () => {
    const [productList, setProductList] = useState([])

    useEffect(()=>{
        axios.get(`http://localhost:8008/api/jokes`)
        .then(response=>{
            console.log(response.data);
            setProductList(response.data);
        })
        .catch(err=>console.log(err))


    },[])






  return (
    <div>

        <table>
            <thead>
                <tr>

                    <th>Title</th>
                    {/* <th>Price</th>
                    <th>Description</th>
                     */}
                </tr>




            </thead>
            <tbody>
                {
                    productList.map((eachProduct, idx)=>(
                        <tr key={idx}>
                            <td>
                                <Link to={`/product/${eachProduct._id}`}>
                                    {eachProduct.Title}
                                </Link>
                            </td>
                                
                            {/* <td>{eachProduct.price}</td>
                            <td>{eachProduct.description}</td> */}



                        </tr>

                        
                        
                        ))
                }

            </tbody>

            
        </table>



    </div>
  )
}

export default ShowForm