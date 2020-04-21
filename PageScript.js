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
    var adjustWidthHowItWorksTextWidth = function ()
    {
        var desiredHeight = document.getElementById("logo")
            .getBoundingClientRect()
            .bottom -
            document.getElementById("BikeadelicPennyFarthingBreweryRideText")
            .getBoundingClientRect()
                .top;

        var elem = document.getElementById("howItWorksText");

        while (elem.getBoundingClientRect().height < desiredHeight)
        {
            var newWidth = (elem.clientWidth - 1) + "px";
            elem.style.width = newWidth;

        }
    }
    var centerElements = function ()
    {
        var elemhowItWorksText = document.getElementById("howItWorksText");
        var elemlogo = document.getElementById("logo");
        var elemBikeadelicPennyFarthingBreweryRideText = document.getElementById("BikeadelicPennyFarthingBreweryRideText");

        elemhowItWorksText.style.left = ((0.5 * vw)  + 10) + "px";
        elemlogo.style.left = ((0.5 * vw) - elemlogo.clientWidth -10) + "px";
        elemBikeadelicPennyFarthingBreweryRideText.style.left = ((0.5 * vw) - elemBikeadelicPennyFarthingBreweryRideText.clientWidth - 10) + "px";

        var howItWorksTop = (0.5 * (vh - elemhowItWorksText.clientHeight))
        elemhowItWorksText.style.top = howItWorksTop + "px";
        elemBikeadelicPennyFarthingBreweryRideText.style.top = elemhowItWorksText.style.top;
        elemlogo.style.top = howItWorksTop + elemBikeadelicPennyFarthingBreweryRideText.clientHeight + 10 + "px" ;
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
        setElementLeft("BikeadelicPennyFarthingBreweryRideText", 0.2);

        setElementLeft("logo", 0.2);

        putBelow("logo", "BikeadelicPennyFarthingBreweryRideText");

        putRight("howItWorksText", "BikeadelicPennyFarthingBreweryRideText");

        adjustWidthHowItWorksTextWidth();
         
        document.getElementById("miniPfImage").style.height =
            (0.75 * document.getElementById("miniPfImage").clientHeight) + "px";

        document.getElementById("miniPfImage").style.width =
            (0.75 * document.getElementById("miniPfImage").clientWidth) + "px";

        document.getElementById("miniPfImage").style.left = vw -
            document.getElementById("miniPfImage").clientWidth + "px";
        

        centerElements();

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
 




















