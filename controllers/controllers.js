const controller={  
    
	Home(req,res){  
  	    res.render('quiz')  
	},

	Error(req, res) {
		res.render('404')
	}
}  

module.exports = controller; 