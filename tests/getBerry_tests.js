describe("getBerry()", function(){
    it("should return berry data", function(){
        runs(function() {
            flag = false;
            
            PokeApi.getBerry(3).then(function(response){
                if(response.natural_gift_power === 60){
                   flag=true;
                };
            });
        }); 
 
        waitsFor(function() {
            return flag;
        }, "correct berry data should have been returned", 10000); 
    })
    
})

describe("getBerryFirmness()", function(){
    it("should return berry firmness data", function(){
        runs(function() {
            flag = false;
            
            PokeApi.getBerryFirmness(4).then(function(response){
                if(response.name === "very-hard"){
                   flag=true;
                };
            });
        }); 
 
        waitsFor(function() {
            return flag;
        }, "correct berry firmness data should have been returned", 10000); 
    })
    
})

describe("getBerryFlavor()", function(){
    it("should return berry flavor data", function(){
        runs(function() {
            flag = false;
            
            PokeApi.getBerryFlavor(2).then(function(response){
                if(response.contest_type.name === "beauty"){
                   flag=true;
                };
            });
        }); 
 
        waitsFor(function() {
            return flag;
        }, "correct berry flavor data should have been returned", 10000); 
    })
    
})