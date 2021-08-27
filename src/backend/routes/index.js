const {
    Router
} = require('express');
const router = Router();
const axios = require('axios')
// const getCountries = require('../controllers/axios.controller')
const {
    DbDataCountries
} = require('../database/database.js')
let getCountriesFromDb = DbDataCountries
let {
    UpdateDB
} = require('../database/database')

let data;


router.get('/', (req, res) => {
    res.json({
        Bienvenidx: ' las direcciones de esta api son /countries, para traer todos los paises, /countries/id para buscar paises por su alpha de 3 letras, /countries?name= ejemplo para buscar paises por nombre'
    })
})

router.get('/countries', async (req, res) => {
    try {
        //name nos dara el country por name
        let name = req.query.name
        //getNames nos dara los nombres de los paises
        let getNames = req.query.getNames
        //get contries by continent
        let continent = req.query.continent

        let paises = await getCountriesFromDb
        paises = JSON.parse(paises)

        if (getNames == "true") {
            let filter;
            filter = paises.map(data => {
                return {
                    country: data.name,
                    id: data.ID
                }
            })
            if (filter) {
                return res.json(filter)
            }
        }
        if (continent) {
            let filter;
            filter = paises.map(data => {
                let names = data.continent
                names = names.toLowerCase()
                if (names == continent && data !== null) {
                    if (data !== null) {
                        return data
                    }

                }
            })

            if (filter) {
                return res.json(filter)
            }
        }

        if (name) {
            name = name.toLowerCase().replace(/%20|\+/g, '-');
            let filter;
            filter = paises.filter(data => {
                let names = data.name
                names = names.toLowerCase()
                if (names == name) {
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

router.get('/continent', function (req, res) {

})
router.post('/countries', function (req, res) {
    let {
        nameCountries,
        name,
        dificult,
        season,
        duration
    } = req.body;

    if (nameCountries && name && duration && dificult && season) {
        dificult = parseInt(dificult)
        data = {
            countrie: nameCountries,
            name: name,
            dificult: dificult,
            season: season,
            duration: duration
        }
        if (data) {
            UpdateDB(data)
            res.status(200).json({
                msg: "Actividad agregada correctamente"
            })


        } else {
            res.status(404).json({
                msg: 'Faltan parametros'
            })
        }
    } else {
        res.status(404).json({
            msg: 'Faltan parametros'
        })

    }
})


module.exports = router;