import Gnome from '../models/gnome.js'

export const getGnomes = async (req, res) => {
  try {
    const gnomes = await Gnome.find()
    res.json(gnomes)
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ error: error.message })
  }
}

export const getGnome = async (req, res) => {
  try {
    const { id } = req.params
    const gnome = await Gnome.findById(id)
    if (gnome) {
      return res.json(gnome)
    }
    res.status(404).json({ message: 'Gnome not found!' })
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ error: error.message })
  }
}

export const createGnome = async (req, res) => {
  try {
    const gnome = new Gnome(req.body)
    await gnome.save()
    res.status(201).json(gnome)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error.message })
  }
}

export const updateGnome = async (req, res) => {
  const { id } = req.params
  const Gnome = await Gnome.findByIdAndUpdate(id, req.body, { new: true })
  res.status(200).json(gnome)
}

export const deleteGnome = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Gnome.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Gnome deleted')
    }
    throw new Error('Gnome not found')
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ error: error.message })
  }
}