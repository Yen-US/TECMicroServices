
//var parser = require('xml2json');
//import { readFileSync } from 'fs';
var user1={
    user:"admin",
    password:"admin"
}
var user2={
    user:"yen",
    password:"yen"
}
var json = [user1,user2]

function getLog(){
    
    /*readFileSync( './security/userPass.xml', function(err, data) {
    //json = JSON.parse(parser.toJson(data, {reversible: true}));
    });*/

    return json;
}

export default getLog;
