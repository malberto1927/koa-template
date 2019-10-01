'use strict'

const http = require('http')
const server = require('./server')

async function bootstrap() {

    return http.createServer(server.callback()).listen(3000)
}

bootstrap()
    .then(server => console.log('Server listen on port ' + server.address().port))
    .catch(err => {
        setImmediate(() => {
            console.error('Unable to run the server because of the following error:');
            console.error(err)
            process.exit()
        })
    })