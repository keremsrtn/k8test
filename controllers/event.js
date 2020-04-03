const bigQuery = require('../utils/bigquery')

exports.insertLog = function (callback, data) {
    const date = new Date();
    const month = date.getMonth()+1
    const year = date.getFullYear()+1
    bigQuery.insertLog(function(response) {
        callback(response);
    }, "event_data", `${month}_${year}`, data)
}