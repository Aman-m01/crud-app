
const user = require('../models/user')

async function handleGetAllUsers(req, res) {
    const allDbUsers = await user.find({})
    return res.json(allDbUsers);
}
async function handleGetUserById(req, res) {
    const userData = await user.findById(req.params.id);
    if (!userData) return res.status(404).json({ error: "User not found" })
    return res.json(userData);
}

async function handleUpdatePatchUserById(req, res) {
    const userData = await user.findByIdAndUpdate(req.params.id, { lastName: "Changed" })
    return res.json({ status: "success" })
}

async function handleDeletePatchUserById(req, res) {
    const userData = await user.findByIdAndDelete(req.params.id);
    return res.json({ status: "success" });
}
async function handleCreateNewUsers(req, res) {
    const body = req.body;
    const result = await user.create({
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        gender: body.gender,
        jobTitle: body.jobTitle,
    })
    console.log(" result", result)
    return res.status(201).json({ msg: "success", id: result._id });
}



module.exports = {
    handleGetAllUsers,
    handleGetUserById,
    handleUpdatePatchUserById,
    handleDeletePatchUserById,
    handleCreateNewUsers
}