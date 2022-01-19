import { Router } from "express"
import { deleteQuestion } from "../controllers/Questions/deleteQuestion.js"
import { getAllQuestion } from "../controllers/Questions/getAllQuestion.js"
import { getOneQuestion } from "../controllers/Questions/getOneQuestion.js"
import { newQuestion } from "../controllers/Questions/newQuestion.js"
const routers = Router()

routers.post("/question", newQuestion)

routers.get("/question", getAllQuestion)

routers.get("/question/:id", getOneQuestion)

routers.delete("/question/:id", deleteQuestion)

export default routers
