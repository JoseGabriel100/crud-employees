import { Router } from "express";
import {
  createDepartment,
  deleteDepartment,
  readDepartment,
  readDepartments,
  updateDepartment,
} from "../controller/department.controller.js";

const router = Router();

router.get("/", readDepartments);

router.get("/:id", readDepartment);

router.post("/", createDepartment);

router.put("/:id", updateDepartment);

router.delete("/:id", deleteDepartment);

export default router;
