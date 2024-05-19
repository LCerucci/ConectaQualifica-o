import { Router } from 'express';

const router = Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('todos', { title: 'Todos os Curso serão exibidos aqui' });
});



export default Router;

