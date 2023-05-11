import express from 'express';
import userBodyValidationSchema from '../validactionSchemas/userBodyValidationSchema.js';
import UserModel from '../models/UserModel.js';
import mongoose from 'mongoose';
import ResponseError from '../helpers/ResponseError.js';

const userController = express.Router();

userController.get('/', async (req, res) => {
  const users = await UserModel.find();

  res.status(200).json(users.reverse());
});

userController.get('/:id', async (req, res) => {
  try {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) throw new Error(`id <${id}> is not valid`);
    const user = await UserModel.findById(id);
    if (user === null) throw new ResponseError(`id <${id}> is not found`, 404);

    res.status(200).json(user);
  } catch (error) {
    res.status(error.status ?? 400).json({
      message: error.message ?? 'server error',
    })
  }
});

userController.post('/', async (req, res) => {
  try {
    const userBody = userBodyValidationSchema.validateSync(req.body);
    const userWithEmailExists = await UserModel.findOne({ email: userBody.email });
    if (userWithEmailExists) throw new Error(`User with email <${userBody.email}> already exists`)
    const newUser = await UserModel.create(userBody);

    res.status(201).json(newUser);
  } catch (error) {
    res.status(error.status ?? 400).json({
      message: error.message ?? 'server error',
    })
  }
});

userController.put('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) throw new Error(`id <${id}> is not valid`);
    const userBody = userBodyValidationSchema.validateSync(req.body);

    const foundUser = await UserModel.findById(id);
    if (foundUser === null) throw new ResponseError(`id <${id}> is not found`, 404);

    const updatedUser = await UserModel.findOneAndUpdate({ _id: id }, userBody, { new: true });
    console.log({ userBody, foundUser, updatedUser });

    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(error.status ?? 400).json({
      message: error.message ?? 'server error',
    })
  }
});

userController.delete('/:id',  async (req, res) => {
  try {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) throw new Error(`id <${id}> is not valid`);
    const user = await UserModel.findById(id);
    if (user === null) throw new ResponseError(`id <${id}> is not found`, 404);

    await UserModel.deleteOne({ _id: id});

    res.status(200).json(user);
  } catch (error) {
    res.status(error.status ?? 400).json({
      message: error.message ?? 'server error',
    })
  }
});

export default userController