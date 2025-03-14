import express from 'express';
const router = express.Router();
import reviewsControllers from '../controllers/reviewsControllers.js';



router.route("/")
.get(reviewsControllers.getReviews)
.post(reviewsControllers.createReviews)

router.route("/:id")
.get(reviewsControllers.getReview)
.put(reviewsControllers.updateReviews)
.delete(reviewsControllers.deleteReviews);

export default router;