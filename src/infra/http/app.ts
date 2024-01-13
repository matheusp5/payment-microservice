import express from "express";
import cors from "cors";
import { router as user } from "./routes/user-route";
import { router as product } from "./routes/product-route";
import { router as payment } from "./routes/payment-route";

const app = express();

app.use(cors());
app.use(express.json())

app.use("/api/user", user)
app.use("/api/product", product)
app.use("/api/payment", payment)

export { app };
