import express from "express";
import morgan from "morgan";
import cors from "cors";

import path from "path";

import { connectDB } from "./db.js";
import employeeRouter from "./router/employee.router.js";
import departmentRouter from "./router/department.router.js";
import error from "./controller/error.controller.js"

connectDB();

const __dirname = path.dirname(new URL(import.meta.url).pathname);

const app = express();
app.set("port", process.env.PORT || 3000);

app.use(cors());
app.use(morgan("dev"));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/employees", employeeRouter);
app.use("/departments", departmentRouter);
app.use(error.error404);


export default app;
