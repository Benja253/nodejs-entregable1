const { User } = require('../models/user.model')
const { catchAsync } = require('../utils/catchAsync')

// Controller route /api/v1/
const getAllUsers = catchAsync(async(req, res, next) => {
  const users = await User.findAll()

  res.status(200).json({
    users
  })
})

const createUser = catchAsync(async (req, res, next) => {
  const { name, email, password, role } = req.body

  const newUser = await User.create({ name, email, password, role })

  res.status(201).json({ newUser })
})


// Controller route /api/v1/:id
const getUserById = catchAsync(async(req, res, next) => {
  const { user } = req

  res.status(200).json({
    user
  })
})

const updateUserById = catchAsync(async(req, res, next) => {
  const { user } = req

  const { name, email } = req.body
  
  await user.update({ name, email })

  res.status(200).json({
    user
  })
})

const deleteUser = catchAsync(async(req, res, next) => {
  const { user } = req

  await user.update({ status: 'deleted' })

  res.status(200).json({
    message: 'User was deleted successfully'
  })
})

module.exports = {
  getAllUsers,
  createUser,
  getUserById,
  updateUserById,
  deleteUser
}