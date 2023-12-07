const controller={  
    
	Home(req,res){  
  	    res.render('main')  
	},

	Error(req, res) {
		res.render('404')
	}
}  

module.exports = controller; 