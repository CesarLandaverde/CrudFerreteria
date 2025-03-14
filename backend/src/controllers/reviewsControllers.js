const reviewsControllers = {};
import { json } from "express";
import reviewsModel from "../models/Reviews.js";
//mostrar:

reviewsControllers.getReviews = async (req, res) => {
  const reviews = await reviewsModel.find().populate("idClient");
  res.json(reviews);
};

//crear:
reviewsControllers.createReviews = async (req, res) => {
  const {comment,rating,idClient} = req.body;

  const newReview = new reviewsModel({comment,rating,idClient });

  await newReview.save();
  res.json({ message: "Review GUARDADO" });
};
export default reviewsControllers;

//eliminar

reviewsControllers.deleteReviews = async (req,res) =>{
  const deleteReview = await reviewsModel.findByIdAndDelete(req.params.id);
    res.json({message:"Review Eliminado"})
};

//update:
reviewsControllers.updateReviews = async(req,res)=>{

    const {comment,rating,idClient} = req.body;
    const updateReview = await reviewsModel.findByIdAndUpdate(req.params.id,
        {comment,rating,idClient},{new:true}
    );
    res.json({message:"Review Actualizado"})

};

//mostrar un solo review:

reviewsControllers.getReview = async (req, res) => {
    const review = await reviewsModel.findById(req.params.id).populate("idClient");
    res.json(review)
};