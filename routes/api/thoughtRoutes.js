const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction
} = require('../../controllers/thoughtControllers');

router.route('/').get(getAllThoughts).post(createThought);

router.route('/:thoughtid').get(getThoughtById).put(updateThought).delete(deleteThought);

router.route('/:thoughtid/reactions').post(addReaction);

router.route('/:thoughtid/reactions/:reactionId').delete(removeReaction);

module.exports = router;