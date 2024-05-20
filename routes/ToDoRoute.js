const {Router} = require("express")
const { getToDo,saveToDo,editToDo,deleteToDo } = require("../controllers/ToDocontroller")

const router = Router()

router.get("/", getToDo);
router.post("/save", saveToDo);
router.post("/edit", editToDo);
router.post("/delete", deleteToDo);



module.exports = router