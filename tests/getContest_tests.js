describe("getContestType()", function(){
    it("should return contest type data", function(){
        runs(function() {
            flag = false;
            
            PokeApi.getContestType(5).then(function(response){
                if(response.berry_flavor.name === "sour"){
                   flag=true;
                };
            });
        }); 
 
        waitsFor(function() {
            return flag;
        }, "correct contest type data should have been returned", 10000); 
    })
    
})

describe("getContestEffect()", function(){
    it("should return contest effect data", function(){
        runs(function() {
            flag = false;
            
            PokeApi.getContestEffect(7).then(function(response){
                if(response.appeal === 8){
                   flag=true;
                };
            });
        }); 
 
        waitsFor(function() {
            return flag;
        }, "correct contest effect data should have been returned", 10000); 
    })
    
})

describe("getSuperContestEffect()", function(){
    it("should return super contest effect data", function(){
        runs(function() {
            flag = false;
            
            PokeApi.getSuperContestEffect(2).then(function(response){
                if(response.appeal === 2){
                   flag=true;
                };
            });
        }); 
 
        waitsFor(function() {
            return flag;
        }, "correct super contest effect data should have been returned", 10000); 
    })
    
})