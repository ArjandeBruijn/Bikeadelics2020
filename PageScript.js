$(document).ready(function ()
{
    vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

    allElements = function () {
        var elements = $('div');
        $.merge(elements, $('img'));

        return elements;
    }

    $('#BikeadelicPennyFarthingBreweryRideText').bind('doPlacement', function () {
        $("#BikeadelicPennyFarthingBreweryRideText").css({ left: 0.5 * vw - 0.5 * $("#BikeadelicPennyFarthingBreweryRideText").width() })
            .css({ top: 20 });
    });
    $('#BikeadelicPennyFarthingBreweryRideText').bind('grow', function () {

        $("#BikeadelicPennyFarthingBreweryRideText").css({ width: $("#BikeadelicPennyFarthingBreweryRideText").width() + 10 });
        $("#BikeadelicPennyFarthingBreweryRideText").trigger('doPlacement');
    });
    

    $('#phone').bind('grow', function () {
        $("#phone").css({ width: $("#phone").width() + 10 });
    });

    $('#PosingImageRound').bind('grow', function () {
        $("#PosingImageRound").css({ width: $("#PosingImageRound").width() + 10 });
    });

    $('#miniPfImage').bind('grow', function () {

        $("#miniPfImage").css({ width: $("#miniPfImage").width() + 10 });
        $('#miniPfImage').trigger('doPlacement');
    });
    $('#miniPfImage').bind('doPlacement', function () {

        $("#miniPfImage").css({ left: vw - $("#miniPfImage").width() });
    });

    $('#karbike').bind('doPlacement', function () {
        $('#karbike').css({ top: vh - $("#karbike").height() - 20 });
        $('#karbike').css({ left: vw - 2 * $("#karbike").width() })
    });
    $('#karbike').bind('grow', function () {

        $("#karbike").css({ width: $("#karbike").width() + 10 });
        $("#karbike").trigger('doPlacement');
    });

    $('#mailBox').bind('grow', function () {

        $("#mailBox").css({ width: $("#mailBox").width() + 10 });
    });

    $('#bakfiets').bind('doPlacement', function () {
        $("#bakfiets").css({ left: vw - $("#bakfiets").width() });
        $("#bakfiets").css({ top: vh - 2 * $("#bakfiets").height() - 20 });
    });
    $('#bakfiets').bind('grow', function () {

        $("#bakfiets").css({ width: $("#bakfiets").width() + 10 });
        $('#bakfiets').trigger('doPlacement');
    });
    $('#howItWorksText').bind('doPlacement', function () {

        $("#howItWorksText").css({ top: vh - $("#howItWorksText").height() - 20 });
        $("#howItWorksText").css({ left: 0.5 * (vw - $("#howItWorksText").width()) });
    });

    $('#howItWorksText').bind('grow', function () {

        $("#howItWorksText").css({ width: $("#howItWorksText").width() + 10 });

        var newFont = parseFloat($("#howItWorksText").css('font-size').replace('px', '')) + 2 + "px";

        $("#howItWorksText").css({ 'font-size': newFont});
        
        $("#howItWorksText").trigger('doPlacement');
    });
    $('#logo').bind('doPlacement', function () {

        $("#logo").css({ left: 0.5 * vw - 0.5 * $("#logo").width() });
        $("#logo").css({
            top: (0.5 * ($("#BikeadelicPennyFarthingBreweryRideText")[0].getBoundingClientRect().bottom + $("#howItWorksText")[0].getBoundingClientRect().top))
                - (0.5 * $("#logo").height())
        });
    });
    
    $('#phone').bind('doPlacement', function () {

        $("#phone").css({ top: vh - $("#phone").height() - 20, left: $("#mailBox").width() + 10 });
         
    });

    $('#logo').bind('grow', function () {

        $("#logo").css({ width: $("#logo").width() + 10 });
        $('#logo').trigger('doPlacement');
    });
});

function ShowPopup(id) {
    var popup = document.getElementById(id);
    popup.classList.toggle("show");
}

function StartPageScript()
{
      
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
         
        $("#phone").css({ width: 150 });
         
        $("#mailBox").css({ width: 150, top: vh - 300, left: 20 });
         
        $("#karbike").css({ width: 150 });

        $("#bakfiets").css({ width: 150 });
          
        $("#BikeadelicPennyFarthingBreweryRideText").css({ width: 700 });
         
        $("#howItWorksText").css({ width: 800 }).css({ 'font-size': "1.1em" });

        $("#logo").css({ width: 400 });

        $("#BikeadelicPennyFarthingBreweryRideText").trigger('doPlacement');

        $('#miniPfImage').trigger('doPlacement');

        $("#karbike").trigger('doPlacement');

        $('#bakfiets').trigger('doPlacement');

        $("#howItWorksText").trigger('doPlacement');
         
        $("#logo").trigger('doPlacement');

        $("#phone").trigger('doPlacement');
        
        var elementOverlaps = function (elem)
        {
            var elements = $('div');
            $.merge(elements, $('img'));

            for (var e = 0; e < elements.length; e++)
            {
                var element = elements[e];

                if (element != elem)
                {
                    if (twoElementsOverlap(elem, element))
                    {
                        return true;
                    }
                }
            }
            return false;
        } 
        var twoElementsOverlap = function (el1, el2) {

            var rect1 = el1.getBoundingClientRect();
            var rect2 = el2.getBoundingClientRect();

            return !(rect1.right < rect2.left ||
                rect1.left > rect2.right ||
                rect1.bottom < rect2.top ||
                rect1.top > rect2.bottom);

        }
        
         
        var elements = allElements();
         
        for (var e2 = 0; e2 < 1000; e2++)
        {
            for (var e = 0; e < elements.length; e++) {

                var element = elements[e];

                if (elementOverlaps(element) == false) {
                    $(element).trigger('grow');
                }
                 
            }
        }
         
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
 




















