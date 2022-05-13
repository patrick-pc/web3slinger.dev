import { createContext, useContext, useState } from 'react'

const Context = createContext()

export const ContextProvider = ({ children }) => {
  const [mintCount, setMintCount] = useState(0)
  return <Context.Provider value={[mintCount, setMintCount]}>{children}</Context.Provider>
}

export const useMintCountContext = () => {
  return useContext(Context)
}
