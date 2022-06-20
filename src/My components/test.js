/* eslint-disable */
import axios from "axios";

const Urlses = 'http://26.141.216.128:3000/posesh'

axios.get(Urlses,{
    headers:{
        "Access-Control-Allow-Origin": "*"
    }

})
    .then(function(response) {
        console.log(response.data)
        let Test;
        exports.Test = response.data
        console.log('Authenticated');
    }).catch(function(error) {
    console.log('Error on Authentication');
});