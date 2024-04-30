// Definição da classe Router
class Router {
   // Propriedade para armazenar as rotas
   routes = {};
   
   // Método para adicionar uma rota
   add(routeName, page) {
      this.routes[routeName] = page;
   };

   // Método para lidar com a navegação para uma rota
   route(event) {
      // Se o evento não estiver definido, usa o evento global do navegador
      event = event || window.event;
      // Impede o comportamento padrão do evento, como o carregamento de uma nova página
      event.preventDefault();

      // Atualiza o histórico de navegação do navegador para refletir a nova rota
      window.history.pushState({}, "", event.target.href);
      // Chama o método handle para lidar com a nova rota
      this.handle();
   };
   
   // Método para lidar com a rota atual
   handle() {
      // Obtém o pathname da URL atual
      const { pathname } = window.location;
      // Obtém a rota correspondente com base no pathname ou a rota 404 se não houver correspondência
      const route = this.routes[pathname] || this.routes[404];
   
      // Faz uma solicitação fetch para obter o conteúdo da página da rota
      fetch(route)
         // Converte a resposta em texto
         .then(data => data.text())
         // Manipula o HTML retornado e o insere no elemento com o ID 'app'
         .then(html => {
            document.querySelector('#app').innerHTML = html;
         });
   };
};

// Exporta a classe Router
export { Router };
