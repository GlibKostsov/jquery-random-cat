$(".cat-button").click(function(){
    var url = "http://aws.random.cat/meow ";
    $.getJSON(url)
        .done( function (data) {
            $(".cat-image").attr("src", data.file) ;
          })
        .fail(function(err){
            console.log(err);
        })  
});