import mongoose from 'mongoose';

const { Schema } = mongoose;

const createUserResponseViewModel = (doc, obj) => {
  delete obj.__v;
  obj.id = obj._id;
  delete obj._id;

  return obj;
}

const UserSchema = new Schema({
  name: String,
  surname: String,
  email: String,
  dateFrom: String,
  dateTo: String,
}, {
  timestamps: true,
  toJSON: {
    transform: createUserResponseViewModel,
  }
});

const UserModel = mongoose.model('User', UserSchema);

export default UserModel;