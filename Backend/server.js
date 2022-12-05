import mongoose from "mongoose";
import app from "./src/app.js";
import db from './src/Config/db.js'

const PORT = process.env.PORT || 4000;

mongoose.connect(db)
    .then(() => app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`)))
    .catch((error) => console.log(`Could not connect: ${error.message}`))