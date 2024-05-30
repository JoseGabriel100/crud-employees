import { Router } from "express";
import {
  createEmployee,
  deleteEmployee,
  readEmployee,
  readEmployees,
  updateEmployee,
} from "../controller/employee.controller.js";

const router = Router();

router.get("/", readEmployees);

router.get("/:id", readEmployee);

router.post("/", createEmployee);

router.put("/:id", updateEmployee);

router.delete("/:id", deleteEmployee);

export default router;
