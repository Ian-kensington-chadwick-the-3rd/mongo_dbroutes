const router = require('express').Router();
const userRoutes = require('./userRoutes');
// const appRoutes = require('./Routes');

router.use('/user', userRoutes);
// router.use('/react', reactRoutes);


module.exports = router;
