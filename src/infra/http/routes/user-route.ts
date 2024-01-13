import { Router } from "express";
import { UserController } from "../controllers/user-controller";
const router = Router()

const controller = new UserController()

router.get("/", controller.FindAll)
router.post("/", controller.Create)
router.post("/:id", controller.FindOne)

export {router}