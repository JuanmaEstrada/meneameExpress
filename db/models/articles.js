const {mongoose} = require("../index")

const articleSchema = mongoose.Schema({
		title: String,
		description: String,
		url: String
})

let articleModel = mongoose.model("Article", articleSchema)

module.exports = {
	articleModel:articleModel
}