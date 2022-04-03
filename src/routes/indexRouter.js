import { Router } from "express";
import controller from "../controller/indexController";

const router = Router();

router.get("/", controller.index);

router.post("/saveTask", controller.indexForm);

router.get("/editTask/:id", controller.edit);
router.post("/editTask/:id", controller.editForm);

router.get("/deleteTask/:id", controller.delete);



export default router;