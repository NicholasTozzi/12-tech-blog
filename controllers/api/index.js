const router = require('express').Router();
const userRoutes = require('./userRoutes'); //TODO change path if needed
const projectRoutes = require('./projectRoutes'); //TODO change path if needed

router.use('/users', userRoutes); //TODO change path if needed 
router.use('/projects', projectRoutes); //TODO change path if needed

module.exports = router;