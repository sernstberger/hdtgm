var path = require('path');
var nodeModules = path.resolve(path.join(__dirname, 'node_modules'));
// this is the entire config object
const config = {
    // ...
    loaders: [
        // ...
        {
            test: /\.(css|scss)$/,
            include: [
                path.join(nodeModules, 'bootstrap'),
            ],
            loaders: ["style", "css", "sass"]
        }
    ]
    // ...
};
