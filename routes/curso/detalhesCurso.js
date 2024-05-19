import { Router } from 'express';

const router = Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('detalhes', { title: 'quando um curso especifico for selecionado, irá aparecer aqui.' });
});

export default Router;