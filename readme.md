# Automated Express Routing (Node.js)

The software engineer in me didn't want to have a nasty & long server.js file full of manual express routes. So I created a automatic routing system, whenever I add a new Controller (class) I no longer need to link it manually in server.js. 

This keeps the server.js trim and seperate concers, helping with the software qualities such as cohesion and low dependency.

The Router class resides in lib/routing