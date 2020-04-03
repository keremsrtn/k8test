const event = require('../controllers/event');

exports.insertLog = function (callback, data) {
    event.insertLog(function(response) {
        if(response){
            callback({"result":{"status":0}})
        }else{
            callback({"result":{"status":1}})
        }
    }, data)
}