const {mongoose} = require("../index")

const articleSchema = mongoose.Schema({
		titulo: String,
		entradilla: String,
		categoria: String,
		url: String,
		votos: Number
})

let articleModel = mongoose.model("Article", articleSchema)

module.exports = {
	articleModel:articleModel
}