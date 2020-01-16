const express = require('express');
const router = express.Router();
const Users = require('../../models/Users');

router.get('/fetchAll', async (req, res) => {
    try {
        const users = await Users.find({});
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json(JSON.stringify(err));
    }
});

router.post('/', async (req, res) => {
    const { firstName, lastName } = req.body;
    try {
        const newUser = new Users({ firstName, lastName });
        const addedUser = await newUser.save();
        res.status(200).json(addedUser);
    } catch (err) {
        res.status(500).json(JSON.stringify(err));
    }
});

router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const deletedUser = await Users.findByIdAndDelete(id);
        res.status(200).json(deletedUser);
    } catch (err) {
        res.status(500).json(JSON.stringify(err));
    }
});

router.put('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        await Users.findByIdAndUpdate(id, req.body);
        res.status(200).json(req.body);
    } catch (err) {
        res.status(500).json(JSON.stringify(err));
    }
});

module.exports = router;