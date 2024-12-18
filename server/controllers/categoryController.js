import Category from "../models/Category.js"

export const addCategory = async (req,res) => {
    console.log(req.body, req.user)
    try{
        const category = new Category({ userId: req.user.id, ...req.body });
        const newCategory = await category.save()

        if(!newCategory){
            return res.status(404).send({msg:"Error in adding category"})
        }

        return res.status(200).json(newCategory)
    }
    catch(error){
        return res.status(404).send({msg:"Something went wrong"})
    }
} 

export const getAllCategories = async (req,res) => {

    try{
        const categories = await Category.find({userId:req.user.id})
        if(categories){
            return res.status(200).json(categories)
        }
    }
    catch(error){
        return res.status(404).send("something went wrong")
    }
}