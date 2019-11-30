var Product = require('../models/product');

var mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/shopping', { useNewUrlParser: true })

var products = [
    new Product({
        imagePath: 'http://sfwallpaper.com/images/3d-game-wallpaper-7.jpg',
        title: '3D video game',
        description: 'Awesome Game!!!!',
        price: 10
    }),
    new Product({
        imagePath: 'http://sfwallpaper.com/images/3d-game-wallpaper-7.jpg',
        title: '3D video game',
        description: 'NICE!!!!',
        price: 10
    }),
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
        title: '3D video game',
        description: 'Awesome Game!!!!',
        price: 10
    }),
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
        title: '3D video game',
        description: 'Awesome Game!!!!',
        price: 10
    }),
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
        title: '3D video game',
        description: 'Awesome Game!!!!',
        price: 10
    }),
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
        title: '3D video game',
        description: 'Awesome Game!!!!',
        price: 10
    })
];
var done = 0;
for (var i = 0; i < products.length; i++) {
    products[i].save(function (err, result) {
        done++;
        if (done === products.length) {
            exit();
        }

    });
}
function exit() {
    mongoose.disconnect();
}