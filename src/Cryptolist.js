import React, { useContext } from 'react'
import { crypto } from './Crypto_provider'

const Cryptolist = () => {
   const {addtocrypto} = useContext(crypto)
    const data = [
        {id : 1, cryptoname : "bitcoin",price : 200,percentagechnge : 45},
        {id : 2, cryptoname : "BNB",price : 100,percentagechnge : 35},
        {id : 3, cryptoname : "SNDC",price : 250,percentagechnge :15},
        {id : 4, cryptoname : "Solona",price : 300,percentagechnge : 5}
    ]
  return (
    <div>Cryptolist
    {
        data.map((el)=>{
           return(
            <ul>
            <li>Id{el.id} -- {el.cryptoname} -- ${el.price} -- {el.percentagechnge}%
            <button onClick={()=>addtocrypto(el)}>Add Crypto</button>
            </li>
            </ul>
           )
        })
    }
    
    </div>
  )
}

export default Cryptolist