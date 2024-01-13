import { Router } from "express";
import { ProductController } from "../controllers/product-controller";
const router = Router()

const Controller = new ProductController()

router.get("/", Controller.FindAll)
router.post("/", Controller.Create)
router.post("/:id", Controller.FindOne)

export {router}