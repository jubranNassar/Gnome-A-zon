import api from './apiConfig';

export const getGnomes = async () => {
  try {
    const response = await api.get('/gnomes');
    return response.data
  } catch (error) {
    throw error
  }
}

export const getGnome = async (id) => {
  try {
    const response = await api.get(`/gnomes/${id}`)
    return response.data 
  } catch (error) {
    throw error
  }
}

export const createGnome = async (gnome) => {
  try {
    const response = await api.post('/gnomes', gnome)
    return response.data
  } catch (error) {
    throw error
  }
}

export const updateGnome = async (id, gnome) => {
  try {
    const response = await api.put(`/gnomes/${id}`, gnome)
    return response.data
  } catch (error) {
    throw error
  }
}

export const deleteGnome = async (id) => {
  try {
    const response = await api.delete(`/gnomes/${id}`)
    return response.data
  } catch (error) {
    throw error
  }
}
