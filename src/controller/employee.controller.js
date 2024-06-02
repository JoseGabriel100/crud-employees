import Employee from "../models/employee.model.js";
import Department from "../models/deparment.model.js";

export const readEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.render("index", {employees})
    // res.json(employees);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const readEmployee = async (req, res) => {
  try {
    const id = req.params.id;
    const employee = await Employee.find({ _id: id });
    res.json(employee);
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: error.message });
  }
};

export const createEmployeeForm = async (req, res) => {
  try {
    const deparments = await Department.find();
    res.render("add", {deparments});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  
}

export const createEmployee = async (req, res) => {
  try {
    const { name, surname, department } = req.body;
    const employee = new Employee({
      name,
      surname,
      department,
    });

    await employee.save();
    res.redirect("/employees")
    // res.json({ message: "POST successful" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateEmployeeForm = async (req, res) => {
   try {
     const id = req.params.id;
     const employee = await Employee.findOne({ _id: id });
     const deparments = await Department.find();
     res.render("edit", { employee, deparments });
   } catch (error) {
     console.error(error);
     res.status(500).json({ message: error.message });
   }
  
};

export const updateEmployee = async (req, res) => {
  try {
    await Employee.findByIdAndUpdate(req.params.id, req.body);

    // res.json({ message: "PUT successful" });
    res.redirect("/employees");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteEmployee = async (req, res) => {
  try {
    await Employee.findByIdAndDelete(req.params.id);

    res.status(200).redirect("/employees")
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
