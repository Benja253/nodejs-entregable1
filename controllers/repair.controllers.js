const { Repair } = require('../models/user.model')

// Controller route /api/v1/
const getAllRepairs = async (req, res) => {
  try {
    const repairs = await Repair.findAll({ where: { status: 'pending' } })
  
    res.status(200).json({
      repairs
    })

  } catch (error) {
    console.log(error)
  }
}

const createRepair = async (req, res) => {
  try {
    const { date, userId } = req.body

    const newRepair = await Repair.create({ date, userId })

    res.status(201).json({ newRepair })
  } catch (error) {
    console.log(error)
  }
}


// Controller route /api/v1/:id
const getRepairById = async (req, res) => {
  try {
    const { id } = req.params

    const repair = await Repair.findOne({ where: { id, status: 'pending' } })

    if(!repair) {
      return res.status(404).json({
        status: 'error',
        message: 'User not found given that id'
      })
    }

    res.status(200).json({
      repair
    })
  } catch (error) {
    console.log(error)
  }
}

const updateRepairById = async (req, res) => {
  try {
    const { id } = req.params

    const repair = await Repair.findOne({ where: { id, status: 'pending' } })
    
    if(!repair) {
      return res.status(404).json({
        status: 'error',
        message: 'User not found given that id'
      })
    }
    
    await repair.update({ status: 'completed' })

    res.status(200).json({
      repair
    })
    
  } catch (error) {
    console.log(error)
  }
}

const deleteRepair = async (req, res) => {
  try {
    const { id } = req.params

    const repair = await Repair.findOne({ where: { id, status: 'pending' } })
    
    if(!repair) {
      return res.status(404).json({
        status: 'error',
        message: 'User not found given that id'
      })
    }

    await repair.update({ status: 'cancelled' })

    res.status(200).json({
      message: 'The repair is cancelled'
    })

  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  getAllRepairs,
  createRepair,
  getRepairById,
  updateRepairById,
  deleteRepair
}