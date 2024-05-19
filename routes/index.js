import { Router } from 'express';

const router = Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'pagina de configurações do admin' });
});

export default Router;