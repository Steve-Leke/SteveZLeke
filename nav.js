// $(function () {
//     var includes = $('[data-include]')
//     $.each(includes, function () {
//       var file = '/' + $(this).data('include') + '.html'
//       $(this).load(file)
//     })

//     document.title = "Tech Connect"
//   })

fetch("nav.html")
    .then(stream => stream.text())
    .then(text => defineNavBar(text));

function defineNavBar(html) {
    class NavBar extends HTMLElement {
        constructor() {
            super();

            var shadow = this.attachShadow({mode: 'open'});
            shadow.innerHTML = html;
        }
    }
    customElements.define('nav-bar', NavBar);
} 