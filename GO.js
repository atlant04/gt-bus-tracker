const url = require('./constants/endpoints.js')
const request = require('request');

const getStops = () => new Promise((res, rej) => {
    request({url: url.BASE_URL + url.STOPS, json: true}, (error, response) => {
        if(error) {
            rej("Unable to get stops information: " + error)
        } else {
            res(response.body)
        }
    })
})

const getBuses = () => new Promise((res, rej) => {
    request({url: url.BASE_URL + url.BUSES, json: true}, (error, response) => {
        if(error) {
            rej("Unable to get buses information: " + error)
        } else {
            res(response.body)
        }
    })
})

const getStopETA = (stopId, routeId, position) => new Promise((res, rej) => {
    let finalUrl = url.BASE_URL + url.STOPS_ETA + "&stopIds=" + stopId + "&routeID=" + routeId + "&position=" + position 
    console.log(finalUrl)
    request({url: finalUrl, json: true}, (error, response) => {
        if(error) {
            rej("Unable to get stop ETA information: " + error)
        } else {
            res(response.body)
        }
    })
})

const getRoutes = () => new Promise((res, rej) => {
    request({url: url.BASE_URL + url.ROUTES, json: true}, (error, response) => {
        if(error) {
            rej("Unable to get Routes information: " + error)
        } else {
            res(response.body)
        }
    })
})

module.exports = {
    getBuses, getRoutes, getStopETA, getStops
}