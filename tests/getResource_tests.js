describe("getResource()", function(){
    it("should return correct pokemon data", function(){
        runs(function() {
            flag = false;
            
            getResource("pokemon/1").then(function(response){
                if(response.name === "bulbasaur"){
                   flag=true;
                };
            });
        }); 
 
        waitsFor(function() {
            return flag;
        }, "json data should have been returned", 10000); 
    })
    
    it("should return correct move data", function(){
        runs(function() {
            flag = false;
            
            getResource("move/13").then(function(response){
                if(response.power === 80){
                   flag=true;
                };
            });
        }); 
 
        waitsFor(function() {
            return flag;
        }, "json data should have been returned", 10000); 
    })
    
    it("should return correct ability data", function(){
        runs(function() {
            flag = false;
            
            getResource("ability/4").then(function(response){
                if(response.is_main_series === true){
                   flag=true;
                };
            });
        }); 
 
        waitsFor(function() {
            return flag;
        }, "json data should have been returned", 10000); 
    })
})