$(document).ready(function(){
    var var_url = "https://my-json-server.typicode.com/frdynsh/PWA_api/products";

    var dataResults = '';
    var catResults = '';
    var categories = [];

    $.get(var_url, function(data){
        $.each(data, function(key, items){
            var _cat = items.category;

            dataResults += "<div>"
                            + "<h3>" + items.name + "</h3>"
                            + "<p>" + _cat + "</p>" 
                        + "</div>";

            if($.inArray(_cat, categories) == -1){
                categories.push(_cat);
                catResults += "<option value='" + _cat + "'>" + _cat + "</option>";
            }
        });

        $('#products').html(dataResults);
        $('#cat_select').html("<option value='all'>Semua</option>" + catResults);
    });

    // Fungsi filter
    $('#cat_select').on('change', function(){
        updateProduct($(this).val());
    });

    function updateProduct(cat){
        var dataResults = '';
        var _newUrl = var_url; 

        if(cat !== 'all'){
            _newUrl = var_url + "?category=" + cat;
        }

        $.get(_newUrl, function(data){

            $.each(data, function(key, items){
                var _cat = items.category;

                if(cat === 'all' || _cat == cat){
                    dataResults += "<div>"
                                    + "<h3>" + items.name + "</h3>"
                                    + "<p>" + _cat + "</p>" 
                                + "</div>";
                }
            });
            $('#products').html(dataResults);
        });
    }
});


$(document).ready(function(){
    $('.menu-toggle').click(function(){
        $('.nav-links').toggleClass('active');
    });
});
