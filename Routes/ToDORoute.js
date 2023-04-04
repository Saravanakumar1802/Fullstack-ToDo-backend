const { Router } = require("express");
const { getToDO, saveToDo, updateToDo, deleteToDo } = require("../Controllers/ToDOController");

const router = Router()

router.get('/', getToDO)
router.put('/save', saveToDo)
router.post('/update', updateToDo)
router.post('/delete', deleteToDo)

module.exports = router;