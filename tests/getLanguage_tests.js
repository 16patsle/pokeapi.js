describe("getLanguage()", function(){
    it("should return language data", function(){
        runs(function() {
            flag = false;

            PokeApi.getLanguage(3).then(function(response){
                if(response.name === "ko"){
                   flag=true;
                };
            });
        });

        waitsFor(function() {
            return flag;
        }, "correct language data should have been returned", 10000);
    })

})
