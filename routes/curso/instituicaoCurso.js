import { Router } from 'express';

const router = Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('instituicao', { title: 'quando uma instituição for selecionada, suas informações e redirecionamento para site proprio aparecerão aqui.' });
});

export default Router;