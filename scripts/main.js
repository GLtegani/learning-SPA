import { Router } from "./routes.js";

const routeNav = new Router();
routeNav.add('/', '../pages/home.html');
routeNav.add('/about', '../pages/about.html');
routeNav.add('/contact', '../pages/contact.html');
routeNav.add(404, '../pages/404.html');
console.log(routeNav);

routeNav.handle();

window.onpopstate = () => routeNav.handle();
window.route = () => routeNav.route();