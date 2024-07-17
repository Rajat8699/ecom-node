const Users = require("../models/users.model");
const addUserController = async (req, res, next) => {
  const { body } = req;
  try {
    let obj = {
      email: body.email,
      firstName: body.firstName,
      lastName: body.lastName,
      dob: body.dob,
      password: body.password,
      profileImage: body.image,
    };
    let user = await Users.create(obj);
    res.send({ message: "User created successfully", status: 200, data: user });
    next();
    //db insert logic here
  } catch (err) {
    console.log({ err });
    res.send({ status: 500, message: "Internal server error" });
  }
};

const findUserController = async (req, res, next) => {
  const { id } = req.query;
  try {
    // let { id } = body.params;
    let user = await Users.findOne({ where: { id } });
    if (user === null) {
      res.send({ message: "User not Found", status: 404 });
    } else {
      res.send({ message: "User found successfully", status: 200, data: user });
    }
    next();
    //db insert logic here
  } catch (err) {
    console.log({ err });
    res.send({ status: 500, message: "Internal server error" });
  }
};
module.exports = { addUserController, findUserController };
