import axios from "axios"

const server = "http://localhost:5000"

export const addCategory = async (newCategory) => {
    try{
        console.log(newCategory)
        const response = await axios.post('http://localhost:5000/api/categories', newCategory, {
            headers: {
                Authorization:""
            }
        })
    }
    catch(error){
        console.log(error)
    }
}

export const getAllCategories = async () => {

}

export const getAllCategoriesList = async () => {

}

export const getCategoryDetails = async (categoryId) => {

}

export const updateCategory = async (categoryId) => {

}

export const deleteCategory = async (categoryId) => {

}