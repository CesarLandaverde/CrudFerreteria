import express from 'express';
const router = express.Router();
import branchesControllers from '../controllers/branchesControllers.js';

router.route('/')
.get(branchesControllers.getBranches)
.post(branchesControllers.postBranches);
router.route('/:id')
.get(branchesControllers.getBranch)
.put(branchesControllers.updateBranches)
.delete(branchesControllers.deleteBranches);
  export default router;