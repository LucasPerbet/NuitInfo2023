const controller={  
    
	quiz(req,res){  
  	    res.render('quiz')  
	},
	home(req,res){
		res.render('main')
	},
	Error(req, res) {
		res.render('404')
	}
}  

module.exports = controller; 