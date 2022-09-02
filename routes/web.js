import express from "express";
const router = express.Router();
import studentController from "../controllers/studentController.js"

router.post("/",studentController.createDoc); 
router.get("/",studentController.getAllDoc);
router.get("/edit/:id",studentController.editDocById);
router.post("/update/:id",studentController.updateDocById);
router.post("/delete/:id",studentController.deleteDocById);


export default router;