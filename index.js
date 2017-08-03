const app = require('./public')
const port = process.env.PORT || 3000

app.listen(port, (err) => {
	if (err) {
		throw err
	}
	
	console.log(`server is listening on ${port}...`)
})