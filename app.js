var app = angular.module('myApp', []);

app.controller('MyController', function($scope, CompileService){
    $scope.twitter = CompileService;
});

app.factory('AdjectiveService', function(){
   var adjArray = ['hushed', 'lopsided', 'tangy', 'lowly', 'bloody', 'nonchalant', 'condemned', 'ratty', 'gaping', 'trashy', 'irritating', 'lewd', 'woozy', 'psychedelic', 'grouchy', 'glossy', 'clammy', 'teeny', 'dazzling'];
    //function randomNumber(min, max){
    //    return Math.round(Math.random() * (max - min) + min);
    //}
    //function getRandomAdj(array){
    //    var randomAdj = adjArray[randomNumber(0, adjArray.length - 1)];
    //    return randomAdj;
    //}
    //var adj = {adj: getRandomAdj(adjArray)};
    return adjArray;
});

app.factory('NounService', function(){
   var nounArray = ['cherries', 'cattle', 'stitch', 'minute', 'sink', 'chicken', 'fang', 'growth', 'apparatus', 'blow', 'flesh', 'earth', 'rabbits', 'hot', 'taste', 'bottle', 'mice', 'poison', 'veil', 'crayon', 'tongue'];
    //function randomNumber(min, max){
    //    return Math.round(Math.random() * (max - min) + min);
    //}
    //function getRandomNoun(array){
    //    var randomNoun = nounArray[randomNumber(0, nounArray.length - 1)];
    //    return randomNoun;
    //}
    //var noun = {noun: getRandomNoun(nounArray)};
    return nounArray;
});

app.factory('CompileService', function(NounService, AdjectiveService){
    var compiledArray = [];
    function randomNumber(min, max){
        return Math.round(Math.random() * (max - min) + min);
    }
    for(var i = 0; i<=10; i++) {
        compiledArray.push(AdjectiveService[randomNumber(0, AdjectiveService.length - 1)] + "_" + NounService[randomNumber(0, NounService.length - 1)]);
    };
    return compiledArray;
    console.log(compiledArray);
});

