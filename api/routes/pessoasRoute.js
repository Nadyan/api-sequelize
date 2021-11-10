const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController');

const router = Router();

router.get('/pessoas', PessoaController.selecionaTudo);
router.get('/pessoas/:id', PessoaController.selecionaPessoa);
router.post('/pessoas', PessoaController.criaPessoa);

module.exports = router;
