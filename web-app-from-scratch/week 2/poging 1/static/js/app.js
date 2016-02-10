// de code in webApp is gemaakt in samenwerking met Melvin en Senny

// use strict modus aanzetten -> stuurt geen var door naar globale scope
'use strict';

// maak een namespace om conflicten te voorkomen
var webApp = webApp || {}; 

// IIFE (self invoking function)
(function(){
    
    // Object Literal app
    webApp.app = {
        // method: init
        init: function(){
            webApp.routes.init();
        }
    };
    
    // Object Literal routes
    webApp.routes = {
        init: function(){  
            document.querySelector('#musea').classList.add('inactive');
            
            routie({
                'startscreen': function(){
                    document.querySelector('#startscreen').classList.remove('inactive');
                    document.querySelector('#musea').classList.add('inactive');
                },
                'musea': function(){
                    document.querySelector('#musea').classList.remove('inactive');
                    document.querySelector('#startscreen').classList.add('inactive');
                }
                
            });
        }
    };
    
    webApp.app.init();

})();


// code in getData met hulp van microlibraries aja, routie en transparency 

var getData = (function(){
    
    aja()
    .method('get')
    .url('http://www.muselia.com/apimuseums?city=paris&country=france')
    .type('jsonp')
    .on('success', function(data){
        var json = data;
        console.log(json);
        
        for (var i = 0; i < json.length; i++) {
            
            var templating = {
                title: "Musea in Parijs",
                museaList: [
                    {
                        name: json[0].name,
                        url: json[0].url,
                        address: json[0].address
                    },
                    {
                        name: json[1].name,
                        url: json[1].url,
                        address: json[1].address
                    },
                    {
                        name: json[2].name,
                        url: json[2].url,
                        address: json[2].address
                    }
                ]
            };
            
        }
        
        Transparency.render(document.getElementById('template'), templating); 
        
    })
    .go();

})();