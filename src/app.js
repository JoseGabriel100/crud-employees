import express from "express";
import morgan from "morgan";

import { connectDB } from "./db.js";
import employeeRouter from "./router/employee.router.js";
import departmentRouter from "./router/department.router.js";

connectDB();

const app = express();
app.set("port", process.env.PORT || 3000);

app.use(morgan("dev"));
app.use(express.json());

app.use("/employees", employeeRouter);
app.use("/departments", departmentRouter);

export default app;
