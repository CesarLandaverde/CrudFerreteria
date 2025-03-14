import express from 'express';
const router = express.Router();
import reviewsControllers from '../controllers/reviewsControllers.js';
import reviewsRoutes from '../controllers/reviewsControllers.js';


router.route("/")
.get(reviewsRoutes.getReviews)
.post(reviewsRoutes.createReviews)

router.route("/:id")
.get(reviewsRoutes.getReview)
.put(reviewsRoutes.updateReviews)
.delete(reviewsRoutes.deleteReviews);

export default router;