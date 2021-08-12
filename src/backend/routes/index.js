const {
    Router
} = require('express');
const router = Router();
const axios = require('axios')
const getCountries = require('../controllers/axios.controller')
const getCountriesFromDb = require('../database/database.js')

router.get('/', (req, res) => {
    res.json({
        Bienvenidx: ' las direcciones de esta api son /countries, para traer todos los paises, /countries/id para buscar paises por su alpha de 3 letras, /countries?name= ejemplo para buscar paises por nombre'
    })
})

router.get('/countries', async (req, res) => {
    try {
        let name = req.query.name

        let paises = await getCountriesFromDb
        paises = JSON.parse(paises)
        if (name) {
            name = name.toLowerCase()
            name = name.split('')
            name[0] = name[0].toUpperCase()
            name = name.join('')
            let filter;
            filter = paises.filter(data => {
                if (data.name == name) {
                    return data.name
                }

            })
            if (filter[0]) {
                return res.json(filter)
            } else {
                return res.json({
                    error: 'pais no encontrado'
                })
            }

        } else {
            res.json(paises)
        }

    } catch (err) {
        console.log(err)
    }

})


router.get('/countries/:id', async function (req, res) {
    let id = req.params.id
    id = id.toUpperCase()
    let paises = await getCountriesFromDb
    paises = JSON.parse(paises)
    let filter;
    filter = paises.filter(data => {
        if (data.ID == id) {
            return data.ID
        }
    })
    if (filter[0]) {
        res.json(filter)
    } else {
        return res.json({
            error: 'pais no encontrado'
        })
    }

})



module.exports = router