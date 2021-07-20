import { Router } from 'express';

//import routes defined for gnomes and users 
import gnomesRoutes from './gnomes.js';
import usersRoutes from './users.js';

//variable on which to perform router methods
const router = Router();

//send message to homepage of api url
router.get('/', (req, res) => res.send('This is the api root!'));

//use routes
router.use('/', usersRoutes);
router.use('/', gnomesRoutes);

export default router