import React, { createContext, useState } from 'react'

 const crypto = createContext()
const Crypto_provider = ({children}) => {
     const[crypt,setcrypto] = useState([])
    const addtocrypto = (crpto)=>{
        setcrypto([...crypt,crpto])
    }
    const removecrypto = (item)=>{
      setcrypto(crypt.filter(cryptoprodtct => cryptoprodtct.id !== item.id ))
    }
  return (
    
    <div>Crypto_provider 
    
    <crypto.Provider value={{crypt,addtocrypto,removecrypto}}>
    {children}
    </crypto.Provider>
    </div>
   
    
   
  )
}

export default Crypto_provider
export {crypto}