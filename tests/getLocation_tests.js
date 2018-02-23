describe("getLocation()", function(){
    it("should return location data", function(){
        runs(function() {
            flag = false;

            PokeApi.getLocation(72).then(function(response){
                if(response.name === "dark-cave"){
                   flag=true;
                };
            });
        });

        waitsFor(function() {
            return flag;
        }, "correct location data should have been returned", 10000);
    })

})

describe("getLocationArea()", function(){
    it("should return location area data", function(){
        runs(function() {
            flag = false;

            PokeApi.getLocationArea(19).then(function(response){
                if(response.name === "mt-coronet-7f"){
                   flag=true;
                };
            });
        });

        waitsFor(function() {
            return flag;
        }, "correct location area data should have been returned", 10000);
    })

})

describe("getPalParkArea()", function(){
    it("should return pal park area data", function(){
        runs(function() {
            flag = false;

            PokeApi.getPalParkArea(3).then(function(response){
                if(response.name === "mountain"){
                   flag=true;
                };
            });
        });

        waitsFor(function() {
            return flag;
        }, "correct pal park area data should have been returned", 10000);
    })

})

describe("getRegion()", function(){
    it("should return region data", function(){
        runs(function() {
            flag = false;

            PokeApi.getRegion(2).then(function(response){
                if(response.name === "johto"){
                   flag=true;
                };
            });
        });

        waitsFor(function() {
            return flag;
        }, "correct region data should have been returned", 10000);
    })

})
