import { Router } from "express";
import {
  createEmployee,
  createEmployeeForm,
  deleteEmployee,
  readEmployee,
  readEmployees,
  updateEmployee,
  updateEmployeeForm,
} from "../controller/employee.controller.js";

const router = Router();

router.get("/", readEmployees);

// router.get("/:id", readEmployee);

router.get("/add", createEmployeeForm);
router.post("/add", createEmployee);

router.get("/edit/:id", updateEmployeeForm);
router.post("/edit/:id", updateEmployee);

router.get("/delete/:id", deleteEmployee);

export default router;
