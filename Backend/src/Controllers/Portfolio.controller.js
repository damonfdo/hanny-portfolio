
import Portfolio from "../Models/Portfolio.js";

// Create 
export const create = async (req, res) => {
    const { name } = req.body;

    const { originalname } = req.file;

    if (!name || !originalname) {

        return res.status(403).json({ message: 'Erorr: No name or image received' });
    }

    const newPortfolio = new Portfolio({ name, image: originalname });

    try {
        await newPortfolio.save();
        return res.status(201).json({ message: 'Saved', data: newPortfolio });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }

};

// Delete
export const deleteItem = async (req, res) => {
    const { id } = req.params;
    try {
        Portfolio.findByIdAndRemove(id, (err, doc) => {
            if (!err) {

                return res.status(201).json({ message: 'Deleted Successfully' });
            } else {
                console.log(err);
                return res.status(403).json({ message: err.message });
            }
        });
    } catch (error) {
        return res.status(403).json({ message: error.message });
    }

};

// Update
export const updateItem = async (req, res) => {
    //Get data
    const { id } = req.params;
    const { name } = req.body;
    const { originalname } = req.file;

    // Create filter 
    const filter = { _id: id };
    const update = { name, image: originalname };

    if (!name || !originalname) {
        return res.status(403).json({ message: 'Erorr: No name or image received' });
    }

    try {
        let portfolio = await Portfolio.findByIdAndUpdate(filter, update, { new: true });

        return res.status(201).json({ message: 'Updated', data: portfolio });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

// Get All
export const get = async (req, res) => {
    try {
        const portfolio = await Portfolio.find();

        return res.status(201).json(portfolio);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};
// Get One 
export const getOne = async (req, res) => {
    const { id } = req.params;

    try {
        const item = await Portfolio.findById(id);
        if (!item) {
            return res.status(404).json({ message: 'Error: No item found' });
        }
        return res.status(201).json(item);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};