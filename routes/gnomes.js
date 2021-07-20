import { Router } from 'express';
import * as controllers from '../controllers/gnomes.js';
import restrict from '../helpers/restrict.js';

const router = Router ()

router.get('/gnomes', controllers.getGnomes);
router.get('/gnomes/:id', controllers.getGnome);

// post
router.post('/', restrict, controllers.createGnome);
// put
router.put('/:id', restrict, controllers.updateGnome);
// delete
router.delete('/:id', restrict, controllers.deleteGnome);

export default router;