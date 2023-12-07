const express =  require('express');
const controller = require('../controllers/controllers');
// La variable contient l'instance du routeur
const router = express.Router();  

// Liste des routes utilisables pour Patient
router.get('/',controller.Home);
router.get('*',controller.Error);

module.exports = router;