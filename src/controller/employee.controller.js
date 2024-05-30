import Employee from "../models/employee.model.js";

export const readEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
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
    res.status(500).json({ message: error.message });
  }
};

export const createEmployee = async (req, res) => {
  try {
    const { name, surname, department } = req.body;
    const employee = new Employee({
      name,
      surname,
      department,
    });

    await employee.save();

    res.json({ message: "POST successful" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateEmployee = async (req, res) => {
  try {
    await Employee.findByIdAndUpdate(req.params.id, req.body);

    res.json({ message: "PUT successful" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteEmployee = async (req, res) => {
  try {
    await Employee.findByIdAndDelete(req.params.id);

    res.json({ message: "DELETE successful" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
