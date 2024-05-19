import { Router } from 'express';

const router = Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('admin', { title: 'Pagina principal para o admiistrador gerenciar os cursos' });
});

export default Router;