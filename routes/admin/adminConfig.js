import { Router } from 'express';

const router = Router();

router.get('/', function(req, res, next) {
  res.render('adminConfig', { title: 'pagina de configurações do admin' });
});

export default Router;