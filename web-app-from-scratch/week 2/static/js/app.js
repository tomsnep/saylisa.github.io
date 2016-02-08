(function(){
    'use strict';
    
    aja()
    .method('get')
    .url('http://www.muselia.com/apimuseums?city=paris&country=france')
    .type('jsonp')
    .on('success', function(data){
        var json = data;
        console.log(json);
    })
    .go();

})();