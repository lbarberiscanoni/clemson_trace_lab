Installation

1) run "npm install", which will automatically download everything from package.json
2) just to be safe, also do "npm install -g watchify" 

Build

1) run "sh babel.sh", which will automatically use babel to convert our jsx into js
2) run "sh watchify.sh", which will watch and automatically pack all of our js into one main js file
3) run "jade-watch-folder ../clemson_io_lab ../clemson_io_lab", which will automatically convert our index.jade file into our index.html

Components

1) Babel as our jsx converter for React
2) Watchify instead of webpack for packing the website
3) Boostrap for styling
