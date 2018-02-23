describe("getAbility()", function(){
    it("should return pokemon ability data", function(){
        runs(function() {
            flag = false;

            PokeApi.getAbility(29).then(function(response){
                if(response.name === "clear-body"){
                   flag=true;
                };
            });
        });

        waitsFor(function() {
            return flag;
        }, "correct pokemon ability data should have been returned", 10000);
    })

})

describe("getCharacteristic()", function(){
    it("should return pokemon characteristic data", function(){
        runs(function() {
            flag = false;

            PokeApi.getCharacteristic(9).then(function(response){
                if(response.highest_stat.name === "defense"){
                   flag=true;
                };
            });
        });

        waitsFor(function() {
            return flag;
        }, "correct pokemon characteristic data should have been returned", 10000);
    })

})

describe("getEggGroup()", function(){
    it("should return pokemon egg group data", function(){
        runs(function() {
            flag = false;

            PokeApi.getEggGroup(8).then(function(response){
                if(response.name === "humanshape"){
                   flag=true;
                };
            });
        });

        waitsFor(function() {
            return flag;
        }, "correct pokemon egg group data should have been returned", 10000);
    })

})

describe("getGender()", function(){
    it("should return pokemon gender data", function(){
        runs(function() {
            flag = false;

            PokeApi.getGender(3).then(function(response){
                if(response.name === "genderless"){
                   flag=true;
                };
            });
        });

        waitsFor(function() {
            return flag;
        }, "correct pokemon gender data should have been returned", 10000);
    })

})

describe("getGrowthRate()", function(){
    it("should return pokemon growth rate data", function(){
        runs(function() {
            flag = false;

            PokeApi.getGrowthRate(6).then(function(response){
                if(response.name === "fast-then-very-slow"){
                   flag=true;
                };
            });
        });

        waitsFor(function() {
            return flag;
        }, "correct pokemon growth rate data should have been returned", 10000);
    })

})

describe("getNature()", function(){
    it("should return pokemon nature data", function(){
        runs(function() {
            flag = false;

            PokeApi.getNature(14).then(function(response){
                if(response.name === "careful"){
                   flag=true;
                };
            });
        });

        waitsFor(function() {
            return flag;
        }, "correct pokemon nature data should have been returned", 10000);
    })

})

describe("getPokeathlonStat()", function(){
    it("should return pokeathlon stat data", function(){
        runs(function() {
            flag = false;

            PokeApi.getPokeathlonStat(5).then(function(response){
                if(response.name === "jump"){
                   flag=true;
                };
            });
        });

        waitsFor(function() {
            return flag;
        }, "correct pokeathlon statdata should have been returned", 10000);
    })

})

describe("getPokemon()", function(){
    it("should return pokemon data", function(){
        runs(function() {
            flag = false;

            PokeApi.getPokemon(573).then(function(response){
                if(response.name === "cinccino"){
                   flag=true;
                };
            });
        });

        waitsFor(function() {
            return flag;
        }, "correct pokemon data should have been returned", 10000);
    })

})

describe("getPokemonColor()", function(){
    it("should return pokemon color data", function(){
        runs(function() {
            flag = false;

            PokeApi.getPokemonColor(8).then(function(response){
                if(response.name === "red"){
                   flag=true;
                };
            });
        });

        waitsFor(function() {
            return flag;
        }, "correct pokemon color data should have been returned", 10000);
    })

})

describe("getPokemonForm()", function(){
    it("should return pokemon form data", function(){
        runs(function() {
            flag = false;

            PokeApi.getPokemonForm(9).then(function(response){
                if(response.name === "blastoise"){
                   flag=true;
                };
            });
        });

        waitsFor(function() {
            return flag;
        }, "correct pokemon form data should have been returned", 10000);
    })

})

describe("getPokemonHabitat()", function(){
    it("should return pokemon habitat data", function(){
        runs(function() {
            flag = false;

            PokeApi.getPokemonHabitat(8).then(function(response){
                if(response.name === "urban"){
                   flag=true;
                };
            });
        });

        waitsFor(function() {
            return flag;
        }, "correct pokemon habitat data should have been returned", 10000);
    })

})

describe("getPokemonShape()", function(){
    it("should return pokemon shape data", function(){
        runs(function() {
            flag = false;

            PokeApi.getPokemonShape(13).then(function(response){
                if(response.name === "bug-wings"){
                   flag=true;
                };
            });
        });

        waitsFor(function() {
            return flag;
        }, "correct pokemon shape data should have been returned", 10000);
    })

})

describe("getPokemonSpecies()", function(){
    it("should return pokemon species data", function(){
        runs(function() {
            flag = false;

            PokeApi.getPokemonSpecies(1).then(function(response){
                if(response.name === "bulbasaur"){
                   flag=true;
                };
            });
        });

        waitsFor(function() {
            return flag;
        }, "correct pokemon species data should have been returned", 10000);
    })

})

describe("getStat()", function(){
    it("should return pokemon stat data", function(){
        runs(function() {
            flag = false;

            PokeApi.getStat(7).then(function(response){
                if(response.name === "accuracy"){
                   flag=true;
                };
            });
        });

        waitsFor(function() {
            return flag;
        }, "correct pokemon stat data should have been returned", 10000);
    })

})

describe("getType()", function(){
    it("should return pokemon type data", function(){
        runs(function() {
            flag = false;

            PokeApi.getType(4).then(function(response){
                if(response.name === "poison"){
                   flag=true;
                };
            });
        });

        waitsFor(function() {
            return flag;
        }, "correct pokemon type data should have been returned", 10000);
    })

})
