const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json', {})
const middlewares = jsonServer.defaults({})

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)

// // Add custom routes before JSON Server router
server.get('/config', (req, res) => {
  const db = router.db;
  const questions = db.get('questions').value(); // получаем список вопросов из базы данных
  const options = db.get('options').value();
  const config = db.get('config').value();

  res.jsonp({ questions, options, config });
})

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser)

// Use default router
server.use(router)
server.listen(3005, () => {
  console.log('JSON Server is running')
})
