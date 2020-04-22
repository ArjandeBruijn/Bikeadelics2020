function StartPageScript()
{
     
    const vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    const vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

    const hwRatio = vh / vw;

    var setElementTop = function (id, topFraction) {

        var elem = document.getElementById(id);

        elem.style.top = (topFraction * vh)  + "px";
         
    }
    var setElementLeft = function(id, leftFraction)
    {
        var elem = document.getElementById(id);

        elem.style.left = (leftFraction * vw) - 0.5 * elem.clientWidth + "px";
         
    }
    var putBelow = function (idBottom, idTop)
    {
        var elemBottom = document.getElementById(idBottom);

        var elemTop = document.getElementById(idTop);

        var rect = elemTop.getBoundingClientRect();

        elemBottom.style.top = (rect.top + elemTop.clientHeight + 10) + "px";
    }

    var putRight = function (idRight, idLeft) {

        var elemRight = document.getElementById(idRight);

        var elemLeft = document.getElementById(idLeft);

        var elemLeftRect = elemLeft.getBoundingClientRect();
         
        elemRight.style.left = (elemLeftRect.left + elemLeft.clientWidth + 10) + "px";
        
    }
    
    
    var centerVertical = function (itemIds)
    {


    }
     
    if (hwRatio > 0.8)
    {
        // tall and skinny
        setElementLeft("BikeadelicPennyFarthingBreweryRideText", 0.5);

        setElementLeft("logo", 0.5);

        setElementLeft("howItWorksText", 0.5);
         
        putBelow("howItWorksText", "BikeadelicPennyFarthingBreweryRideText");

        putBelow("logo", "howItWorksText");

        var itemIds = ["logo", "howItWorksText", "BikeadelicPennyFarthingBreweryRideText"];

        centerVertical(itemIds);
    }
    else if (hwRatio > 0.45)
    {
        $("#PosingImageRound").css({ top: 0, left: 0, width: 400 });

        $("#miniPfImage").css({ top: 0, width: 300, left: vw - 300 });
        
        $("#howItWorksText")
            .css({ width: 800 })
            .css({ top: vh - $("#howItWorksText").height() - 10 })
            .css({ left: 0.5 * (vw - $("#howItWorksText").width())});
        
        $("#logo")
            .css({ top: 200, left: 0.5 * vw - 0.5 * $("#logo").width() });

        $("#phone")
            .css({ width: 150, top: vh - 150, left: 125 });


        $("#mailBox")
            .css({ width: 150, top: vh - 300, left: 20 });

        $("#karbike").css({ width: 150 })
            .css({ left: vw - 2 * $("#karbike").width() })
            .css({ top: vh - $("#karbike").height() - 20 });

        $("#bakfiets").css({ width: 150 })
            .css({ left: vw - $("#karbike").width() })
            .css({ top: vh - 2 * $("#karbike").height() - 20 });
         
        $("#BikeadelicPennyFarthingBreweryRideText")
            .css({ width: 700 })
            .css({ left: 0.5 * vw - 0.5 * $("#BikeadelicPennyFarthingBreweryRideText").width() });
         
        
    }
    else {
        // wide and short
        setElementTop("BikeadelicPennyFarthingBreweryRideText", 0.5);

        setElementTop("howItWorksText", 0.5);

        setElementTop("logo", 0.5);

        putRight("howItWorksText", "BikeadelicPennyFarthingBreweryRideText");

        putRight("logo", "howItWorksText");

    }
    
}
 




















