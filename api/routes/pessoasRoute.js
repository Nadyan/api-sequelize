const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController');

const router = Router();

router.get('/pessoas', PessoaController.selecionaTudo);
router.get('/pessoas/:id', PessoaController.selecionaPessoa);
router.post('/pessoas', PessoaController.criaPessoa);
router.put('/pessoas/:id', PessoaController.editaPessoa);
router.delete('/pessoas/:id', PessoaController.deletaPessoa);

router.get('/pessoas/:estudanteId/matriculas/:matriculaId', PessoaController.pegaUmaMatricula);
router.post('/pessoas/:estudanteId/matriculas', PessoaController.criaMatricula);
router.put('/pessoas/:estudanteId/matriculas/:matriculaId', PessoaController.editaMatricula);
router.delete('/pessoas/:estudanteId/matriculas/:matriculaId', PessoaController.deletaMatricula);

module.exports = router;
