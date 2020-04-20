function StartPageScript()
{
    

    var setElementPosition = function(elem, topFraction, leftFraction)
    {
        elem.style.top = (topFraction * 100)+"%";

        elem.style.left = (leftFraction * 100) + "%";

        elem.style.marginTop =
            - topFraction * elem.clientHeight + "px ";

        elem.style.marginLeft =
            -leftFraction * elem.clientWidth + "px ";
    }
    var putBelow = function (elemBottom, elemTop)
    {
        var rect = elemTop.getBoundingClientRect();

        elemBottom.style.top = (rect.top + elemTop.clientHeight + 10) + "px";
        elemBottom.style.left = (rect.left + 0.5 * elemTop.clientWidth) - 0.5 * elemBottom.clientWidth + "px";

    }
    var putRight = function (elemRight, elemLeft) {

        var elemLeftRect = elemLeft.getBoundingClientRect();

        elemRight.style.left = (elemLeftRect.left + elemLeft.clientWidth + 10) + "px";
        
    }
    const vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    const vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

    if (vh > vw)
    {
        alert("screen.orientation.angle portrait");
         
        setElementPosition(document.getElementById("BikeadelicPennyFarthingBreweryRideText"), 0.05, 0.5);

        putBelow(document.getElementById("howItWorksText"), document.getElementById("BikeadelicPennyFarthingBreweryRideText"));
         
        putBelow(document.getElementById("logo"), document.getElementById("howItWorksText"));

    }
    else
    {
        alert("screen.orientation.angle landscape");

        setElementPosition(document.getElementById("BikeadelicPennyFarthingBreweryRideText"), 0.1, 0.2);

        putBelow(document.getElementById("logo"), document.getElementById("BikeadelicPennyFarthingBreweryRideText"));
         
        putRight(document.getElementById("howItWorksText"), document.getElementById("BikeadelicPennyFarthingBreweryRideText"));

    }
    
    
}
 




















