const User = require('../models/user.js');
const Address = require('../models/address.js');

exports.submitForm = async (req, res) => {
    try {
        const { name, address } = req.body;

        const newUser = new User({ name });
        await newUser.save(); 

        const newAddress = new Address({ userId: newUser._id, address });
        await newAddress.save(); 

        res.status(201).json({ message: 'User and address saved successfully!' });
    } catch (error) {
        console.error('Error saving user and address:', error);
        res.status(500).json({ error: 'Failed to save user and address' });
    }
};
