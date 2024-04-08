import project from '../model/project.js'

const getProjects = async (req, res) => {
    try {

        res.send('mostrando todos los proyectos')
    } catch (error) {
        console.log(error.message)
    }
}


const createProjects = async (req, res) => {
    try {
        res.send('Creando Proyectos')
    } catch (error) {
         console.log(error.message);
    }
}


const updateProjects = async (req, res) => {
    try {
        res.send('Actualizando Poryectos')
    } catch (error) {
        console.log(error.message)
    }
}

const deleteProject = async (req, res) => {
    try {
        res.send('Borrando Proyectos')
    } catch (error) {
         console.log(error.message);
    }
}


export {
    getProjects,
    createProjects,
    updateProjects,
    deleteProject
}