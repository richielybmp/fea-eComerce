(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{363:function(e,a,t){},364:function(e,a,t){"use strict";var n=t(0),c=t.n(n),r=t(390),o=t(391),s=t(462),i=t(470);t(363);a.a=function(e){var a=e.id,t=e.nome,n=e.imagem,l=e.preco,m=e.ehMaisPedido,u=e.qtdEstoque;return c.a.createElement(c.a.Fragment,null,c.a.createElement(r.a,{as:i.a,to:"".concat("/fea-eCommerce","/produto/").concat(a),className:"prod"},m&&c.a.createElement("span",{className:"ui corner red label"},c.a.createElement("i",{className:"heart icon"})),0==u&&c.a.createElement(o.a,{className:"label-produto-esgotado",attached:"top"},"Produto esgotado"),c.a.createElement(s.a,{src:n[0],className:"imagemProduto",alt:name}),c.a.createElement(r.a.Content,{className:u<=0?"opaco":""},c.a.createElement("div",null,c.a.createElement("h1",{className:"infoProduto"},t)),c.a.createElement("div",null,c.a.createElement("span",{className:"precoProduto"},l.toLocaleString("pt-BR",{style:"currency",currency:"BRL"}))))))}},407:function(e,a,t){},479:function(e,a,t){"use strict";t.r(a);var n=t(21),c=t(26),r=t(48),o=t(47),s=t(49),i=t(0),l=t.n(i),m=t(473),u=t(487),g=t(364),d=t(33),p=t(36),h=(t(407),function(e){function a(e){var t;Object(n.a)(this,a),(t=Object(r.a)(this,Object(o.a)(a).call(this,e))).handlePaginationChange=function(e,a){return t.setState({activePage:a.activePage})};var c=t.props.match;return t.state={activePage:1,tag:c.params.tag},t}return Object(s.a)(a,e),Object(c.a)(a,[{key:"componentDidUpdate",value:function(e){this.props.location!==e.location&&this.setState({tag:this.props.match.params.tag,activePage:1})}},{key:"render",value:function(){var e=this,a=[];return l.a.createElement(p.a.Consumer,null,function(t){var n=e.state.activePage;return a=d.a.getProdutosByCategoria(t.state.produtos,e.state.tag),l.a.createElement(m.a,{textAlign:"center"},l.a.createElement("div",{className:"categorias-grid"},a.slice(6*(n-1),6*n).map(function(e){return l.a.createElement(g.a,Object.assign({key:e.id},e))})),l.a.createElement(u.a,{activePage:n,boundaryRange:1,onPageChange:e.handlePaginationChange,size:"medium",siblingRange:1,totalPages:Math.ceil(a.length/6)}))})}}]),a}(l.a.Component));a.default=h}}]);
//# sourceMappingURL=5.20834a94.chunk.js.map