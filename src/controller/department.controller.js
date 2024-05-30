import Department from "../models/deparment.model.js";

export const readDepartments = async (req, res) => {
  try {
    const deparments = await Department.find();
    res.json(deparments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const readDepartment = async (req, res) => {
  try {
    const id = req.params.id;
    const department = await Department.find({ _id: id });
    res.json(department);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createDepartment = async (req, res) => {
  try {
    const { name } = req.body;
    const department = new Department({
      name,
    });

    await department.save();

    res.json({ message: "POST successful" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateDepartment = async (req, res) => {
  try {
    await Department.findByIdAndUpdate(req.params.id, req.body);

    res.json({ message: "PUT successful" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteDepartment = async (req, res) => {
  try {
    await Department.findByIdAndDelete(req.params.id);

    res.json({ message: "DELETE successful" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
