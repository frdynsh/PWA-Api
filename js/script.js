$(document).ready(function(){
    var_url = "https://my-json-server.typicode.com/frdynsh/PWA_api/products"

    var dataResults = ''
    var catResults = ''
    var categories = []

    $.get(_url, function(data){

        $.each(data, function(key, items){

            _cat = items.category
            
            dataResults += "<div>"
                            + "<h3>" + items.name + "</h3>"
                            + "<p>" + _cat + "< /p>" 
                        "</div>";

            if($.inArray(_cat, categories) === -1){
                categories.push(_cat)
                optionResults += "<option value'"+ _cat +"'>" + _cat + "</option>"
            }
        })

        $('#products').html(dataResults)
    $('#cat_select').html("option value='all'>semua</option>" + catResults)

    })
})