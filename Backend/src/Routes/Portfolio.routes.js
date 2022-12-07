import express from 'express';
import multer from 'multer';
import { create, deleteItem, get, getOne, updateItem } from '../Controllers/Portfolio.controller.js';
import { isLoggedIn } from '../Middleware/auth.middleware.js';

const router = express.Router();

var upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'Public');
        },
        filename: function (req, file, cb) {

            cb(null, file.originalname);
        }
    })
});

router.get('/', isLoggedIn, get);
router.get('/:id', isLoggedIn, getOne);
router.post('/', isLoggedIn, upload.single('image'), create);
router.delete('/:id', isLoggedIn, deleteItem);
router.put('/:id', isLoggedIn, upload.single('image'), updateItem);

export default router;