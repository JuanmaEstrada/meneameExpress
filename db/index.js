const mongoose = require("mongoose")
let connStr = "mongodb://Juanma:1234@ds219000.mlab.com:19000/meneame-db";

const db = mongoose.connection
mongoose.connect(connStr)

db.on('error',function(){
    console.log("Error al conectarse a Mongo");
});
db.once('open', function() {
		console.log("Conectado correctamente a Mongo")
});

module.exports = {
	mongoose:mongoose
}