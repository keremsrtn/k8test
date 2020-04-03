// Imports the Google Cloud client library
const {BigQuery} = require('@google-cloud/bigquery');
let bigqueryClient;

// const eventLogSchema = require('./../schemas/event_log')

// Creates a bigquery client
exports.createClient = function (){
   bigqueryClient = new BigQuery();
}

async function insertRow(callback, datasetId, tableId, data){
    data['log_time'] = new Date()
    await bigqueryClient.dataset(datasetId).table(tableId).insert(data)
        .then((x) => {
            console.log("Event log inserted.")
            callback(true)
        })
        .catch((err) => {
            console.error(`Error on inserting ${tableId} log:  ${JSON.stringify(err.errors)}, Response: ${JSON.stringify(err.response)}`)
            callback(false)
    });
}

exports.insertLog = async function (callback, datasetId, tableId, data) {
    if(!bigqueryClient){
        console.info("Creating a new BigQuery Client")
    }else{
        insertRow(function(response){
            callback(response)
        },datasetId, tableId, data)
    }
}