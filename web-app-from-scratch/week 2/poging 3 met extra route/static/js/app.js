// de code in webApp is gemaakt in samenwerking met Melvin en Senny

// use strict modus aanzetten -> stuurt geen var door naar globale scope
'use strict';

// maak een namespace om conflicten te voorkomen
var webApp = webApp || {};

// IIFE (self invoking function)
(function () {

    // Object Literal app
    webApp.app = {
        // method: init
        init: function () {
            webApp.routes.init();
            webApp.page.museaParis.init();
        }
    };

    // Object Literal routes
    webApp.routes = {
        init: function () {
            routie({
                'startscreen': function () {
                    webApp.sections.toggle(window.location.hash);
                },
                'musea': function () {
                    webApp.sections.toggle(window.location.hash);
                },
                'musea/:name': function(name){
                    webApp.page.museaParis.init.aja();
                },
                '*': function () {
                    webApp.sections.toggle(window.location.hash);
                }

            });
        }
    };

    // Object Literal sections
    webApp.sections = {
        toggle: function (route) {
            var sections = document.querySelectorAll(".togglesection"),
                route = window.location.hash;

            for (var i = 0; i < sections.length; i++) {
                // add inactive aan alle sections
                sections[i].classList.add('inactive');

                // if geen # in de link
                if (!route) {
                    sections[0].classList.remove('inactive');

                } else if (window.location.hash === "#" + sections[i].id) {
                    sections[i].classList.remove('inactive');
                }
            }
        }
    };

    webApp.page = {
        museaParis: {
            init: function () {
                aja()
                    .method('get')
                    .url('http://www.muselia.com/apimuseums?city=paris&country=france')
                    .type('jsonp')
                    .on('success', function (data) {
                        var json = data,
                            directives = {
                                image: {
                                    src: function(){
                                        return this.image
                                    }
                                }
                            };
                    
                    console.log(name);
                    
                    console.log(json);
                    
                        Transparency.render(document.getElementById('template'), json, directives); 
                    })
                    .go();

            }
        }
    };

    webApp.app.init();

})();