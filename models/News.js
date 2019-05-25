let mongoose = require('mongoose')

let NewsSchema = new mongoose.Schema({
  crawler: {
		type: 'String'
	},
	image: {
		type: 'Mixed'
	},
	title: {
		type: 'String'
	},
	published_at: {
		type: 'String'
	},
	link: {
		type: 'String'
	},
	section: {
		type: 'String'
	}
});
//noticias is the name of the collection in our database
const news = mongoose.model('News', NewsSchema,'noticias');

module.exports = {'News': news,};
