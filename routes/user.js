const express = require('express')
const user = require('../models/user')
const { handleGetAllUsers, handleGetUserById, handleUpdatePatchUserById, handleDeletePatchUserById, handleCreateNewUsers } = require('../controllers/user')

const router = express.Router()
//routes
router
    .route('/')
    .get(handleGetAllUsers)
    .post(handleCreateNewUsers);

router
    .route('/:id')
    .get(handleGetUserById)
    .patch(handleUpdatePatchUserById)
    .delete(handleDeletePatchUserById);


module.exports = router;
