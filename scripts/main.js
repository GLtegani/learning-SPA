// Importa a classe Router do arquivo "routes.js"
import { Router } from "./routes.js";

// Cria uma instância da classe Router
const routeNav = new Router();

// Adiciona rotas e suas páginas correspondentes
routeNav.add('/', '../pages/home.html');      // Rota raiz redirecionada para home.html
routeNav.add('/about', '../pages/about.html'); // Rota '/about' redirecionada para about.html
routeNav.add('/contact', '../pages/contact.html'); // Rota '/contact' redirecionada para contact.html
routeNav.add(404, '../pages/404.html');       // Rota de erro 404 redirecionada para 404.html

// Exibe no console o objeto routeNav, que contém as rotas e páginas correspondentes
console.log(routeNav);

// Chama o método handle para lidar com a rota atual quando o script é carregado
routeNav.handle();

// Define um evento para lidar com o botão "voltar" do navegador
window.onpopstate = () => routeNav.handle();

// Define uma função global 'route' para lidar com a navegação para uma nova rota
window.route = () => routeNav.route();