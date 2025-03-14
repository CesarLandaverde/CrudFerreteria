import express from 'express';
const router = express.Router();
import branchesRoutes from '../controllers/branchesControllers.js';

router.route('/')
.get(branchesRoutes.getBranches)
.post(branchesRoutes.postBranches);
router.route('/:id')
.get(branchesRoutes.getBranch)
.put(branchesRoutes.updateBranches)
.delete(branchesRoutes.deleteBranches);
  export default router;