describe("getItem()", function(){
    it("should return item data", function(){
        runs(function() {
            flag = false;

            PokeApi.getItem(3).then(function(response){
                if(response.category.name === "standard-balls" && response.name === "great-ball"){
                   flag=true;
                };
            });
        });

        waitsFor(function() {
            return flag;
        }, "correct item data should have been returned", 10000);
    })

})

describe("getItemAttribute()", function(){
    it("should return item attribute data", function(){
        runs(function() {
            flag = false;

            PokeApi.getItemAttribute(2).then(function(response){
                if(response.descriptions[0].description === "Consumed when used"){
                   flag=true;
                };
            });
        });

        waitsFor(function() {
            return flag;
        }, "correct item attribute data should have been returned", 10000);
    })

})

describe("getItemCategory()", function(){
    it("should return item category data", function(){
        runs(function() {
            flag = false;

            PokeApi.getItemCategory(4).then(function(response){
                if(response.name === "other" && response.pocket.name === "berries"){
                   flag=true;
                };
            });
        });

        waitsFor(function() {
            return flag;
        }, "correct item category data should have been returned", 10000);
    })

})

describe("getItemFlingEffect()", function(){
    it("should return item fling effect data", function(){
        runs(function() {
            flag = false;

            PokeApi.getItemFlingEffect(5).then(function(response){
                if(response.effect_entries[0].effect === "Paralyzes the target."){
                   flag=true;
                };
            });
        });

        waitsFor(function() {
            return flag;
        }, "correct item fling data data should have been returned", 10000);
    })

})

describe("getItemPocket()", function(){
    it("should return item pocket data", function(){
        runs(function() {
            flag = false;

            PokeApi.getItemPocket(7).then(function(response){
                if(response.id === 7 && response.name === "battle"){
                   flag=true;
                };
            });
        });

        waitsFor(function() {
            return flag;
        }, "correct item pocket data should have been returned", 10000);
    })

})
