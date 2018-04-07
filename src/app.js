const chalk = require('chalk')
const Koa = require('koa')

const app = new Koa()

module.exports = app

app.initialize = async function initialize() {
  try {
    app.use(createHandler())
    const port = 9000
    app.server = app.listen(port)
    console.log(chalk.magenta(`Server listening on port: ${port}`))
  } catch (err) {
    console.error(chalk.red('Error starting application'), err)
    process.exit(1)
  }
}

// basic handler to set breakpoints for testing
function createHandler() {
  return async (ctx) => {
    console.log(chalk.cyan('Before setting context'))
    ctx.status = 200
    ctx.type = 'application/json'
    ctx.body = { hello: 'world' }
    console.log(chalk.cyan('After setting context'))
  }
}
