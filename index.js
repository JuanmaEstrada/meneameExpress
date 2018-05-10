const express = require('express')


const {articleModel} = require("./db/models/articles")

const app = express()
app.use(express.urlencoded({ extended: false }));
app.get('/',function(req,res){
	res.send('Hola mundo!')
})
app.get('/api/articles',function(req,res){

	articleModel.find(function(err, result){
		if(err){
			return console.log(err)
		};
		if(result){
			res.send(result)
		}
	})
})
app.post('/api/articles',function(req,res){
	var myArticle = new articleModel({
		titulo: req.body.titulo,
		entradilla: req.body.entradilla,
		categoria: req.body.categoria,
		votos: 0,
		url: req.body.url
	})

	myArticle.save();
	res.json({ok: true})
})
app.listen(3000,function(){
	console.log('Sevidor activo en el puerto 3000')
})