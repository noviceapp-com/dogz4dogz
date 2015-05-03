
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2500,function(sym,e){sym.playReverse();});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'smallDog'
(function(symbolName){})("smallDog");
//Edge symbol end:'smallDog'

//=========================================================

//Edge symbol: 'bigDog'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.play();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2500,function(sym,e){sym.playReverse();});
//Edge binding end
})("bigDog");
//Edge symbol end:'bigDog'

//=========================================================

//Edge symbol: 'bigDogMeow'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_bigDog}","mouseover",function(sym,e){var audio=sym.$("catMeow")[0];audio.currentTime=0;if(audio.paused){audio.play();}});
//Edge binding end
})("bigDogMeow");
//Edge symbol end:'bigDogMeow'

//=========================================================

//Edge symbol: 'bigDog'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.play();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2500,function(sym,e){sym.playReverse();});
//Edge binding end
})("bigDog_1");
//Edge symbol end:'bigDog_1'

//=========================================================

//=========================================================

//Edge symbol: 'smallDog'
(function(symbolName){})("smallDog_1");
//Edge symbol end:'smallDog_1'

//=========================================================

//Edge symbol: 'smallDogGrowl'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_smallDog}","mouseover",function(sym,e){var audio=sym.$("dogGrowl")[0];audio.currentTime=0;if(audio.paused){audio.play();}});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2000,function(sym,e){});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_smallDog}","mouseout",function(sym,e){});
//Edge binding end
})("smallDogGrowl");
//Edge symbol end:'smallDogGrowl'
})(jQuery,AdobeEdge,"EDGE-19581208");