const express = require('express');
const viewController = require('../controllers/viewController');

const router = new express.Router();

/////// VIEW ROUTES /////////

router.get('/', viewController.getHome);

router.get('/form', viewController.getForm);

router.get('/submitted', viewController.getSubmitted);

router.post('/form', viewController.handleForm);

module.exports = router;
