let mix = require('laravel-mix');

mix
.copy('src/index.html','dist')
.sass('src/style.scss','')
.js('src/app.js', '')
.setPublicPath('dist');