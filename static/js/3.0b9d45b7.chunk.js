(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{380:function(e,a,t){},381:function(e,a,t){"use strict";var n=t(0),r=t.n(n),o=t(400),c=t(205),l=t(472),i=t(479),s=t(30);t(380);a.a=function(e){var a=e.id,t=e.nome,m=e.imagem,u=e.preco,d=e.ehMaisPedido,p=e.qtdEstoque,E=e.categoria,f=Object(n.useContext)(s.a);return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,{as:i.a,to:"".concat("/fea-eCommerce","/produto/").concat(a),onClick:function(){return f.dispatch.clickMenuItem(E)},className:"prod"},d&&r.a.createElement("span",{className:"ui corner red label"},r.a.createElement("i",{className:"heart icon"})),0==p&&r.a.createElement(c.a,{className:"label-produto-esgotado",attached:"top"},"Produto esgotado"),r.a.createElement(l.a,{src:m[0],className:"imagemProduto",alt:name}),r.a.createElement(o.a.Content,{className:p<=0?"opaco":""},r.a.createElement("div",null,r.a.createElement("h1",{className:"infoProduto"},t)),r.a.createElement("div",null,r.a.createElement("span",{className:"precoProduto"},u.toLocaleString("pt-BR",{style:"currency",currency:"BRL"}))))))}},387:function(e,a,t){"use strict";var n=t(0),r=t.n(n),o=t(206),c=t(482),l=t(505),i=t(486),s=t(383),m=t.n(s),u=(t(388),t(381));function d(e){var a=e.onClick;return r.a.createElement("div",{className:"arrow-next",onClick:a},r.a.createElement(o.a,{link:!0,name:"chevron right",size:"big",color:"violet"}))}function p(e){var a=e.onClick;return r.a.createElement("div",{className:"arrow-prev",onClick:a},r.a.createElement(o.a,{link:!0,name:"chevron left",size:"big",color:"violet"}))}a.a=function(e){var a={infinite:!1,speed:500,slidesToShow:3,slidesToScroll:3,nextArrow:r.a.createElement(d,null),prevArrow:r.a.createElement(p,null),initialSlide:0,responsive:[{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2,initialSlide:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]};return r.a.createElement(c.a,null,r.a.createElement(l.a,{as:"h2",color:"violet"},e.nome),r.a.createElement(i.a,null),r.a.createElement(m.a,Object.assign({},a,{className:"my-slider"}),e.produtos.map(function(e){return r.a.createElement(u.a,Object.assign({key:e.id},e))})))}},388:function(e,a,t){},496:function(e,a,t){"use strict";function n(e){return function(e){if(Array.isArray(e)){for(var a=0,t=new Array(e.length);a<e.length;a++)t[a]=e[a];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}t.r(a);var r=t(0),o=t.n(r),c=t(387),l=t(383),i=t.n(l),s=t(479),m=function(){return o.a.createElement("div",null,o.a.createElement(i.a,Object.assign({},{dots:!0,infinite:!0,slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:8e3},{className:"banner-slider"}),o.a.createElement(s.a,{to:"".concat("/fea-eCommerce","/categoria/smartphones")},o.a.createElement("div",null,o.a.createElement("img",{src:"".concat("/fea-eCommerce","/img/smartphones-banner.jpg")}))),o.a.createElement(s.a,{to:"".concat("/fea-eCommerce","/categoria/jogos")},o.a.createElement("div",null,o.a.createElement("img",{src:"".concat("/fea-eCommerce","/img/jogos-banner.jpg")}))),o.a.createElement(s.a,{to:"".concat("/fea-eCommerce","/categoria/livros")},o.a.createElement("div",null,o.a.createElement("img",{src:"".concat("/fea-eCommerce","/img/livros-banner.jpg")})))))},u=t(30),d=t(39);a.default=function(){return o.a.createElement(u.a.Consumer,null,function(e){return e&&o.a.createElement("div",null,o.a.createElement(m,null),e.state.maisPedidos.size>0&&o.a.createElement(c.a,Object.assign({key:"Mais-Pedidos"},function(e){var a=e.produtos,t=e.maisPedidos,r=Array();return new Map(n(t.entries()).sort(function(e,a){return a[1]-e[1]})).forEach(function(e,t){var n=d.a.getProdutoById(a,t);n&&r.length<6&&(n.ehMaisPedido=!0,r.push(n))}),{nome:"Mais Pedidos",produtos:r}}(e.state))),d.a.groupByCategoria(e.state.produtos).map(function(e){return o.a.createElement(c.a,Object.assign({key:e.nome},e))}))})}}}]);
//# sourceMappingURL=3.0b9d45b7.chunk.js.map