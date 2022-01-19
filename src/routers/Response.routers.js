import { Router } from "express"
import { deleteResponse } from "../controllers/Response/deleteResponse.js"
import { getAllResponse } from "../controllers/Response/getAllResponse.js"
import { newResponse } from "../controllers/Response/newResponse.js"

const routers = Router()

routers.post("/response", newResponse)

routers.get("/response/:id", getAllResponse)

routers.delete("/response/:id", deleteResponse)

export default routers
