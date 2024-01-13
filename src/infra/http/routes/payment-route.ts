import { Router } from "express";
import { PaymentController } from "../controllers/payment-controller";
const router = Router()

const Controller = new PaymentController()

router.get("/", Controller.FindAll)
router.post("/", Controller.Create)
router.get("/:id", Controller.FindByUserId)

export {router}