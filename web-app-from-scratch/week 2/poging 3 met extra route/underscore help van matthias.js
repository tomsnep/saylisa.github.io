// console.log(name.replace(/-/g, " "));
                      var evens = _.filter(data, function (data) {
                                return data.name === name.replace(/-/g, " ");
                            });