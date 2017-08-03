const fs = require('fs');

module.exports = {
    generate: function(path, component, name = false){
    	const routesFilePath = __dirname + '/../routes/web.js'
    	var routesFile = fs.readFileSync(routesFilePath, 'utf-8').toString().split("\n")
    	routesFile.splice(1, 0, "	{")
    	if(!name) {
    		routesFile.splice(2, 0, "		name: " + null + ',')
    	}else{
    		routesFile.splice(2, 0, "		name: '" + name + "',")
    	}
    	
    	routesFile.splice(3, 0, "		path: '" + path + "',")
    	routesFile.splice(4, 0, "		component: '" + component + "'")
    	routesFile.splice(5, 0, "	},")
    	var text = routesFile.join("\n")

    	fs.writeFile(routesFilePath, text, function (err) {
		  if (err) return console.log(err);
		});

    	var frontendFilePath = __dirname + '/../resources/assets/js/routes.js'
    	var frontendFile = fs.readFileSync(frontendFilePath, 'utf-8').toString().split("\n")
    	var componentName = component.split('/')
    	frontendFile.splice(1, 0, "import " + componentName[componentName.length - 1] + 'Page' + " from '../../views/" + component + "'")
    	var text = frontendFile.join("\n")

    	fs.writeFile(frontendFilePath, text, function (err) {
		  if (err) return console.log(err);
		});

		for(let i = 0; i < frontendFile.length; i++) {
			if(frontendFile[i] == "const components = {") {
				frontendFile.splice(i, 0, componentName[componentName.length - 1] + 'Page')
				var text = frontendFile.join("\n")

				fs.writeFile(frontendFilePath, text, function (err) {
				  if (err) return console.log(err);
				});
			}
		}
        
    }
};


require('make-runnable');