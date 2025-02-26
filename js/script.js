$(document).ready(function(){
    var var_url = "https://my-json-server.typicode.com/frdynsh/PWA_api/products";

    var dataResults = '';
    var catResults = '';
    var categories = [];

    $.get(var_url, function(data){

        $.each(data, function(key, items){
            
            _cat = items.category;

            dataResults += "<div>"
                            + "<h3>" + items.name + "</h3>"
                            + "<p>" + _cat + "</p>" 
                        + "</div>";

            if($.inArray(_cat, categories) == -1){
                categories.push(_cat);
                catResults += "<option value'"+ _cat +"'>" + _cat + "</option>";
            }

        });

        $('#products').html(dataResults);
        $('#cat_select').html("<option value='all'>Semua</option>" + catResults);
    });

    $('#cat_select').on('change', function(){
        var catSelect = $(this).val();
        var dataFilter = '';

        if(catSelect == 'all'){
            $('#products').html(dataResults);
            return;
        }

        $.get(var_url, function(data){
            $.each(data, function(key, items){
                _cat = items.category;

                if(_cat == catSelect){
                    dataFilter += "<div>"
                                    + "<h3>" + items.name + "</h3>"
                                    + "<p>" + _cat + "</p>" 
                                + "</div>";
                }
            });

            $('#products').html(dataFilter);
        });
    });
});