// IIFE (self invoking function)
(function(){
    // use strict modus aanzetten -> stuurt geen var door naar globale scope
    'use strict';
    
    // Object Literal app
    var app = {
        // method: init
        init: function(){
            routes.init();
        }
    };
    
    // Object Literal routes
    var routes = {
        init: function(){ 
            // on hashchange roept sections.toggle aan
            window.addEventListener("hashchange",sections.toggle);
            // voert functie uit bij window load
            window.addEventListener("load", sections.toggle);
        }
    };
    
    // Object Literal sections
    var sections = {
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
    
    app.init();

})();