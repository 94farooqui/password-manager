import React, { createContext, useState } from 'react'
import Categories from '../pages/Categories'

const CategoryContext = createContext()

const CategoryProvider = ({children}) => {
    const [Categories,setCategories] = useState()
  return (
    <CategoryContext.Provider value={{}}>
        {children}
    </CategoryContext.Provider>
  )
}

export default categoryContext