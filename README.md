# typescript-express-project

Standard guff

    npm install -g tsd gulp
    npm install
    tsd install
    
When you add new node packages you can install Typescript's type definitions with 

    tsd install <package> --save
  
The `--save` parameter will automatically add it to your configs (so future `tsd install` calls include it). This allows the compiler to typecheck your code against 3rd party libs (that aren't written in typescript) and allows for rich autocompletetion if you have a plugin like https://github.com/TypeStrong/atom-typescript

Then just run 

    gulp

and you're built and watching for changes. In `dist/` you'll see your compiled app. `node dist/src/main.js` will start it up. We'll fix that sometime.

