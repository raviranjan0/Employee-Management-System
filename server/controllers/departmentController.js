import Department from '../models/Department.js';

const addDepartment = async (req, res) => {
    try {
        const { dep_name, description } = req.body;

        // Validate input
        if (!dep_name || !description) {
            return res.status(400).json({ success: false, error: 'All fields are required' });
        }

        // Create a new department
        const newDep = new Department({
            dep_name,
            description,
        });

        // Save to the database
        await newDep.save();

        // Return success response
        return res.status(201).json({ success: true, department: newDep });
    } catch (error) {
        console.error('Error in addDepartment:', error);
        return res.status(500).json({ success: false, error: 'Server error' });
    }
};

export { addDepartment };