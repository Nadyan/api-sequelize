const { Router } = require('express');
const TurmaController = require('../controllers/TurmaController');

const router = Router();

router.get('/turmas', TurmaController.selecionaTudo);
router.get('/turmas/:id', TurmaController.selecionaTurma);
router.post('/turmas', TurmaController.criaTurma);
router.put('/turmas/:id', TurmaController.editaTurma);
router.delete('/turmas/:id', TurmaController.deletaTurma);

module.exports = router;