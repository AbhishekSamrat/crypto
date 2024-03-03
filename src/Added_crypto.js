import React, { useContext } from 'react'
import { crypto } from './Crypto_provider'





const Added_crypto = () => {
 
 const{crypt,removecrypto} = useContext(crypto)
 const totalprice = crypt.reduce((prev,curr) => prev+curr.price,0)
  return (
    <div>Added_crypto
       {
        crypt.map((e)=>{
          return(
            <ul>
            <li>{e.id} - {e.cryptoname} - {e.price} - {e.percentagechange}
            <button onClick={()=>removecrypto(e)}>remove</button>
            </li>
            </ul>
          )

        })
       }
       <h2>Total Price ={totalprice} </h2>
       </div>

  )
}

export default Added_crypto