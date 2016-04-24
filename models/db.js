var data = require('./images.json');


module.exports.siteData = {
	title: data.title,
	description: data.description
}


module.exports.getItems = function(){
    var items = [];
    data.items.forEach( function(item){
        items.push(item);
    });
    return items;
};
