const { Router } = require('express');
const NivelController = require('../controllers/NivelController');

const router = Router();

router.get('/niveis', NivelController.selecionaTudo);
router.get('/niveis/:id', NivelController.selecionaNivel);
router.post('/niveis', NivelController.criaNivel);
router.put('/niveis/:id', NivelController.editaNivel);
router.delete('/niveis/:id', NivelController.deletaNivel);

module.exports = router;