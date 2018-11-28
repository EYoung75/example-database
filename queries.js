const database = require("./migrations/database-connection")

module.exports = {
    listAll(){
        return database('examples')
    }
}