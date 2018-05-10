const express = require('express')

const {articleModel} = require("./db/models/articles")

const app = express()
app.get('/',function(req,res){
	res.send('Hola mundo!')
})
app.get('/api/articles',function(req,res){

	var myArticle = new articleModel({
		titulo: "Mi articulo",
		entradilla: "Mi description",
		categoria: "Mi categoria",
		votos: 0,
		url: "mi url"
	})

	myArticle.save();

	res.json({ok: true})
})
app.post('/api/articles',function(req,res){
})
app.listen(3000,function(){
	console.log('Sevidor activo en el puerto 3000')
})