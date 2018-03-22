var shell = require('shelljs');
const path = require('path');

var directory = path.join(__dirname + '/shell-scripts/')
var jsDirectory = path.join(__dirname + '/src/public/js/')

const setEnv = () => {
    if (!shell.which('git')) {
        shell.echo('Sorry, this script requires git');
        shell.exit(1);
      } else {
        var source = `${directory}` + "set-env.sh"
        var target =  `${jsDirectory}` + "auth0-variables.js" 
        var command = "bash " + `${source}` + " > " + `${target}`
        shell.exec(command)
      }    
}

setEnv();