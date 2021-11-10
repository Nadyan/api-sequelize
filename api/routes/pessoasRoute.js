const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController');

const router = Router();

router.get('/pessoas', PessoaController.selecionaTudo);
router.get('/pessoas/:id', PessoaController.selecionaPessoa);
router.post('/pessoas', PessoaController.criaPessoa);
router.put('/pessoas/:id', PessoaController.editaPessoa);
router.delete('/pessoas/:id', PessoaController.deletaPessoa);

module.exports = router;
