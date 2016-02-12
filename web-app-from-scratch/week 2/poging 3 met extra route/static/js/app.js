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
                'musea-detail/:name': function(name){
                    webApp.sections.toggle(window.location.hash.slice(0,13));
                    console.log(name);
//                    console.log(name.replace(/-/g, " "));
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
            var sections = document.querySelectorAll(".togglesection")

            for (var i = 0; i < sections.length; i++) {
                // add inactive aan alle sections
                sections[i].classList.add('inactive');

                // if geen # in de link
                if (!route) {
                    sections[0].classList.remove('inactive');

                } else {
                    document.querySelector(route).classList.remove('inactive');
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
                                },
                                name: {
                                    href: function(){
                                        return '#musea-detail/' + this.name.replace(/ |, /g, '-')
                                    } 
                                }
                            };
                        
                    
                    
                    console.log(json);
                    
                        Transparency.render(document.getElementById('template'), json, directives); 
                    })
                    .go();

            }
        }
    };

    webApp.app.init();

})();
// Tom Snepvangers
// line 46: double quotes instead of single quotes
// line 46, 75, 80: missing semicolons
// line 89: too much spacing