describe("getMove()", function(){
    it("should return move data", function(){
        runs(function() {
            flag = false;

            PokeApi.getMove(23).then(function(response){
                if(response.type.name === "normal" && response.target.name === "selected-pokemon"){
                   flag=true;
                };
            });
        });

        waitsFor(function() {
            return flag;
        }, "correct move data should have been returned", 10000);
    })

})

describe("getMoveAilment()", function(){
    it("should return move ailment data", function(){
        runs(function() {
            flag = false;

            PokeApi.getMoveAilment(8).then(function(response){
                if(response.moves[0].name === "bind"){
                   flag=true;
                };
            });
        });

        waitsFor(function() {
            return flag;
        }, "correct move ailment data should have been returned", 10000);
    })

})

describe("getMoveBattleStyle()", function(){
    it("should return move battle style data", function(){
        runs(function() {
            flag = false;

            PokeApi.getMoveBattleStyle(3).then(function(response){
                if(response.name === "support"){
                   flag=true;
                };
            });
        });

        waitsFor(function() {
            return flag;
        }, "correct move battle style data should have been returned", 10000);
    })

})

describe("getMoveCategory()", function(){
    it("should return move category data", function(){
        runs(function() {
            flag = false;

            PokeApi.getMoveCategory(4).then(function(response){
                if(response.name === "damage+ailment"){
                   flag=true;
                };
            });
        });

        waitsFor(function() {
            return flag;
        }, "correct move category data should have been returned", 10000);
    })

})

describe("getMoveDamageClass()", function(){
    it("should return move damage class data", function(){
        runs(function() {
            flag = false;

            PokeApi.getMoveDamageClass(1).then(function(response){
                if(response.name === "status"){
                   flag=true;
                };
            });
        });

        waitsFor(function() {
            return flag;
        }, "correct move damage class data should have been returned", 10000);
    })

})

describe("getMoveLearnMethod()", function(){
    it("should return move learn method data", function(){
        runs(function() {
            flag = false;

            PokeApi.getMoveLearnMethod(3).then(function(response){
                if(response.name === "tutor"){
                   flag=true;
                };
            });
        });

        waitsFor(function() {
            return flag;
        }, "correct move learn method data should have been returned", 10000);
    })

})

describe("getMoveTarget()", function(){
    it("should return move target data", function(){
        runs(function() {
            flag = false;

            PokeApi.getMoveTarget(2).then(function(response){
                if(response.name === "selected-pokemon-me-first"){
                   flag=true;
                };
            });
        });

        waitsFor(function() {
            return flag;
        }, "correct move target data should have been returned", 10000);
    })

})
