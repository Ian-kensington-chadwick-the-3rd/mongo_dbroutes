const router = require('express').Router();

const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend
} = require('../../controllers/userControllers');

router.route('/').get(getAllUsers).post(createUser);

router.route('/:userid').get(getUserById).put(updateUser).delete(deleteUser);
 
router.route('/:userid/friends/:friendId').put(addFriend).delete(removeFriend);


module.exports = router;