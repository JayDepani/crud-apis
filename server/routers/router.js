const router = require('express').Router();
const controller = require('../controllers/controller');

router.post('/users/register',controller.register);

router.get('/users',controller.users);

router.get('/users/:id',controller.usersById);

router.patch('/users/:id',controller.updateById);

router.delete('/users/:id',controller.deleteById);

module.exports = router;