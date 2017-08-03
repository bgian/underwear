const fs = require('fs');

module.exports = {
    generate: function(path, component, name = false){
    	const routesFilePath = __dirname + '/../routes/web.js'
    	const frontendFilePath = __dirname + '/../resources/assets/js/routes.js'
    	var componentName = component.split('/')

    	//==================================================
    	var routesFile = fs.readFileSync(routesFilePath, 'utf-8').toString().split("\n")
    	routesFile.splice(1, 0, "	{")
    	if(!name) {
    		routesFile.splice(2, 0, "		name: " + null + ',')
    	}else{
    		routesFile.splice(2, 0, "		name: '" + name + "',")
    	}
    	routesFile.splice(3, 0, "		path: '" + path + "',")
    	routesFile.splice(4, 0, "		component: '" + componentName[componentName.length - 1] + 'Page' + "'")
    	routesFile.splice(5, 0, "	},")
    	var text = routesFile.join("\n")
    	fs.writeFile(routesFilePath, text, function (err) {
			if (err) {
				return console.log(err);
			}else{
                console.log('-----------------------------------------')
                console.log('Tasks')
                console.log('-----------------------------------------')
				console.log('✅ Added route to web.js routes file.')

                //================================================
                var frontendFile = fs.readFileSync(frontendFilePath, 'utf-8').toString().split("\n")
                frontendFile.splice(1, 0, "import " + componentName[componentName.length - 1] + 'Page' + " from '../../views/" + component + "'")

                let lineNumber = 0
                for(let i = 0; i < frontendFile.length; i++) {
                    if(frontendFile[i] == "const components = {") {
                        lineNumber = i
                    }
                }

                if(lineNumber > 0) {
                    frontendFile.splice(lineNumber + 1, 0, "    " + componentName[componentName.length - 1] + 'Page,')
                }
                var text = frontendFile.join("\n")
                fs.writeFile(frontendFilePath, text, function (err) {
                    if (err) {
                        return console.log(err);
                    }else{
                        console.log('✅ Imported the component on routes.js in your frontend assets.')

                        //============================
                        if (!fs.existsSync(__dirname + "/../resources/views/" + componentName[0])) {
                            fs.mkdirSync(__dirname + "/../resources/views/" + componentName[0])
                        }

                        fs.writeFile(__dirname + "/../resources/views/" + component + '.vue', "<template><div>I am your new vue component</div></template>", function(err) {
                            if(err) {
                                return console.log(err);
                            }else{
                                console.log("✅ A new vue file was saved: " + component + '.vue');
                            }
                        });
                    }
                });
			}
		});

		return "Your new route was successfully added. 🙌" 
    }
};


require('make-runnable/custom')({
    printOutputFrame: false
})