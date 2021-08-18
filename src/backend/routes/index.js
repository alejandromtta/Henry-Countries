const {
    Router
} = require('express');
const router = Router();
const axios = require('axios')
// const getCountries = require('../controllers/axios.controller')
const {DbDataCountries }= require('../database/database.js')
let  getCountriesFromDb = DbDataCountries
let {UpdateDB} = require('../database/database')

let data;


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
            name = name.toLowerCase().replace(/%20|\+/g, '-');
            // name = name.split('')
             console.log(name)
            // name[0] = name[0].toUpperCase()
            // name = name.join('')
           
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

router.post('/countries', function (req, res) {
let {nameCountrie, name, dificult, season, duration} = req.body;

if(nameCountrie && name && duration && dificult && season){
    data = {
        countrie: nameCountrie,
        name: name,
        dificult: dificult,
        season: season,
        duration: duration
    }
    if(data) {
        UpdateDB(data)
        res.status(200).json({msg: "Actividad agregada correctamente"})
        
        
    } else {
        res.status(404).json({msg: 'Faltan parametros'})
    }
}else {
    res.status(404).json({msg: 'Faltan parametros'})

}})


module.exports = router;