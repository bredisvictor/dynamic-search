$(function(){
    
    var array = ['green','black','yellow','red', 'rename'];
    
    $('#search').keyup(function(e){
        var resArr = [];
        var liveSearch =  $('#search').val().toLowerCase();
        
        if(liveSearch != '')
        {
            array.forEach(function(index){
                var result = index.search(liveSearch);

                if(result == 0)
                {
                    index = index.split(liveSearch);
                    index = '<span style="background:yellow;">'+liveSearch+'</span>'+index[1];
                    
                    if(resArr.length != 0)
                    { 
                        var res2 = $.inArray(index, resArr);
                        
                        if(res2 == -1)
                            resArr.push(index);
                        
                    }
                    else
                        resArr.push(index);
                    
                }
            });
        }
        else
        {
            $("#result").html('');
            resArr = [];
        }
        
        $("#result").html('');
        if(resArr.length != 0)
        {
            resArr.forEach(function(index){
                $("#result").prepend('<span class="res">'+index+'</span><br>');
            });
        }
        else if(!resArr.length && liveSearch != '')
            $("#result").prepend('<span class="res">No results</span><br>');
        
    });
    
});