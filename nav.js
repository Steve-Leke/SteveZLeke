$(function () {
    var includes = $('[data-include]')
    $.each(includes, function () {
      var file = '/' + $(this).data('include') + '.html'
      $(this).load(file)
    })

    document.title = "Tech Connect"

    // var currentPage = window.location.pathname;

    // console.log(currentPage);

    // if (currentPage == "/ClassSearchPage.html") {
    //   // document.getElementById("Home").classList.remove('active');
    //   // document.getElementById("Classes").className += "active";
    //   console.log(document.getElementById("Classes").className)
    //   console.log(document.getElementById("Home").className)
    // }

  })