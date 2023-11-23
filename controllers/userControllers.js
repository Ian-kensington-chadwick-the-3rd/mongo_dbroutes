const { User, Thought } = require('../models');


const headCount = async () => {
    const numberOfStudents = await User.aggregate()
      .count('userCount');
    return numberOfStudents;
  }
  



module.exports = {
    async getAllUsers(req, res) {
        try {
            const dbUserData = await User.find({})
            res.json(dbUserData);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },

    async getUserById(req, res) {
        try {
            const dbUserData = await User.findOne({ _id: req.params.userid }).select('-__v');
         

        if(!dbUserData) {
            return res.status(404).json({ message: 'No user found with this id!' });
        }  
         res.json(dbUserData);
   
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    async createUser(req, res) {
        try {
            const dbUserData = await User.create(req.body);
            res.json(dbUserData);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    async updateUser(req, res) {
        try {
            const dbUserData = await User.findOneAndUpdate(
                { _id: req.params.userid }, 
                { $set: req.body },
                { runValidators: true, new: true }
                );
            if(!dbUserData) {
                return res.status(404).json({ message: 'No user found with this id!' });
            }
            res.json(dbUserData);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    async deleteUser(req, res) {
        try {
            const dbUserData = await User.findOneAndDelete({ _id: req.params.userid });
            if(!dbUserData) {
                return res.status(404).json({ message: 'No user found with this id!' });
            }
            res.json(dbUserData);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
};



