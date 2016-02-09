// Samengewerkt met Senny & Melvin bij deze code

// maak een namespace om conflicten te voorkomen
var webApp = webApp || {}; 

// IIFE (self invoking function)
(function(){
    // use strict modus aanzetten -> stuurt geen var door naar globale scope
    'use strict';
    
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
            // on hashchange roept sections.toggle aan
            window.addEventListener("hashchange",webApp.sections.toggle);
            // voert functie uit bij window load
            window.addEventListener("load", webApp.sections.toggle);
        }
    };
    
    // Object Literal sections
    webApp.sections = {
        toggle: function(route){
            var sections = document.querySelectorAll(".togglesection"),
                route = window.location.hash;

            for (var i = 0; i < sections.length; i++) {
                // add inactive aan alle sections
                sections[i].classList.add('inactive');
            
                // if geen # in de link
                if (!route) {
                    sections[0].classList.remove('inactive');
                
                } else if(window.location.hash === "#" + sections[i].id) {
                    sections[i].classList.remove('inactive');
                }
            }  
        }
    };
    
    webApp.app.init();

})();