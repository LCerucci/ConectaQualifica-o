import { Router } from 'express';

const router = Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('adminLogin', { title: 'pagina login' });
});

export default Router;

//essa rota exige passar por revisão visto a proposta do projeto.