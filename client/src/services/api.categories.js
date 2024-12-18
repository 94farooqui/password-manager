import axios from "axios"

const server = "http://localhost:5000"
const token = localStorage.getItem("token");

export const addCategory = async (newCategory) => {
    
    try{
        console.log(newCategory)
        const response = await axios.post('http://localhost:5000/api/categories', newCategory, {
            headers: {
                Authorization:`Bearer ${token}`
            }
        })
        if(response.status === 200){
            console.log(response.data)
            return true
        }
        else return false
    }
    catch(error){
        console.log(error)
        return false
    }
}

export const getAllCategories = async () => {
    try {
      
      const response = await axios.get(
        "http://localhost:5000/api/categories",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 200) {
        //console.log(response.data);
        return response.data;
      } else return false;
    } catch (error) {
      console.log(error);
      return false;
    }
}

export const getAllCategoriesList = async () => {

}

export const getCategoryDetails = async (categoryId) => {

}

export const updateCategory = async (categoryId) => {

}

export const deleteCategory = async (categoryId) => {

}