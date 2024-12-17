import Category from "../models/Category.js"

export const addCategory = async (req,res) => {
    console.log(req.body)
    try{
        const category = new Category(req.body)
        const newCategory = await category.save()

        if(!newCategory){
            return res.status(404).send({msg:"Error in adding category"})
        }

        return res.status(200).json(newCategory)
    }
    catch(error){
        return res.status(404).send({msg:"Error in adding category"})
    }
} 

export const getAllCategories = (req,res) => {

}