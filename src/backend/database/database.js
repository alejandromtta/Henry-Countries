const Sequelize = require('sequelize')
const sequelize = new Sequelize('postgres://postgres:veigar93@localhost:5432/pi')
const c = require('../controllers/axios.controller')
let data = require('../routes/index')
let allCountries;
let countries;
class Countries extends Sequelize.Model {}
Countries.init({
    ID: {
        type: Sequelize.STRING,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    flag: {
        type: Sequelize.STRING,
        allowNull: false
    },
    continent: {
        type: Sequelize.STRING

    },
    capital: {
        type: Sequelize.STRING

    },
    subregion: {
        type: Sequelize.STRING

    },
    area: {
        type: Sequelize.STRING

    },
    population: {
        type: Sequelize.STRING

    },
}, {
    sequelize,
    modelName: 'Countries'
})

class TouristicActivity extends Sequelize.Model {}
TouristicActivity.init({
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    dificult: {
        type: Sequelize.INTEGER
    },
    duration: {
        type: Sequelize.STRING
    },
    season: {
        type: Sequelize.STRING
    },
}, {
    sequelize,
    modelName: 'TouristicActivitys'
})

Countries.belongsToMany(TouristicActivity, {
    through: 'Countrie_Activity'
})
TouristicActivity.belongsToMany(Countries, {
    through: 'Countrie_Activity'
})


let UpdateDB  = (data) => {
    sequelize.sync({
        alter: true
    }).then(async () => {
        
        for(let i = 0; i < data.countrie.length; i++) {
            
            let countrie = await Countries.findOne({ where: { ID: data.countrie[i] } })
            if (countrie){
              let  TA = await TouristicActivity.create({
                    name: data.name,
                    dificult: data.dificult,
                   duration: data.duration,
                   season: data.season 
                })
               await countrie.addTouristicActivity(TA);
        }
        
             }
    })
}


   
let DbDataCountries =  Countries.findAll({
    include: [TouristicActivity],
    attributes: ['ID', 'name', 'flag', 'continent', 'capital', 'subregion', 'area', 'population'],
    
}).then (function (result) {
    let DbGetCountries = JSON.stringify(result)
    return DbGetCountries
})

console.log('aaaaa', data)

module.exports = {
    DbDataCountries, 
    UpdateDB
};





//el code de como meti la data a la db (no lo borro porque le agarre cari;o)
// sequelize.sync({
//     alter: true
// }).then(async () => {

    // allCountries = await c()
    // console.log(allCountries.length)
    // for(let i = 0; i < allCountries.length; i++) {
    //     countries = await  Countries.create({
    //         ID: allCountries[i].id,
    //         name: allCountries[i].name,
    //         flag: allCountries[i].flag,
    //         continent: allCountries[i].region,
    //         capital: allCountries[i].capital,
    //         subregion: allCountries[i].subregion,
    //         area: allCountries[i].area,
    //         population: allCountries[i].population
    //     })
    // }
//    let countrie = await Countries.findByPk(1)
//     if (countrie){
//       let  TA = await TouristicActivity.create({
//             name: 'escalar',
//             dificult: 3,
//            duration: '2 horas',
//            season: 'invierno' 
//         })
//        await countrie.addTouristicActivity(TA);
//     }
//})

