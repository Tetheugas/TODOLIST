const tasksModel = require('../models/tasksModel')

const getAll =  async (req, res)=>{

    const tasks = await tasksModel.getAll()

    return res.json(tasks)
}

module.exports = {
    getAll
}