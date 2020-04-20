function StartPageScript()
{
     
    const vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    const vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

    const hwRatio = vh / vw;

    var setElementTop = function (id, topFraction) {

        var elem = document.getElementById(id);

        elem.style.top = (topFraction * vh) - 0.5 * elem.clientHeight + "px";
         
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
        // squared
        setElementTop("BikeadelicPennyFarthingBreweryRideText", 0.2);

        setElementTop("howItWorksText", 0.2);

        setElementLeft("BikeadelicPennyFarthingBreweryRideText", 0.2);

        setElementLeft("logo", 0.2);

        putBelow("logo", "BikeadelicPennyFarthingBreweryRideText");

        putRight("howItWorksText", "BikeadelicPennyFarthingBreweryRideText");

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
 




















