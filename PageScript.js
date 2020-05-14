﻿var viewWidth = function () {
    return Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
}
var viewHeight = function () {
    return Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
}
function ShowPopup(id) {
    $(id).toggleClass("show");

    $(id).css('margin-left', -0.5 * $(id).width() + 'px');
}
function ShowPopupImage(id) {

    $(id).toggleClass("show");
     
}
$.fn.calculateNaturalDimensions = function (onNaturalDimensionsDefined) {
    var img = this[0];

    var newImg = new Image();
    newImg.src = img.src;
     
    if (newImg.complete) {
        img.naturalWidth = newImg.width;
        img.naturalHeight = newImg.height;
        onNaturalDimensionsDefined(img);
    } else {
        $(newImg).on('load', function ()
        { 
            img.naturalWidth = newImg.width;
            img.naturalHeight = newImg.height;
            onNaturalDimensionsDefined(img)
            
            
        });
    }

};
function ScaleImage(id, containerId)
{
    $(id).calculateNaturalDimensions(function (img) {
        var mult = Math.min(((0.7 * vh) / img.naturalHeight), ((0.7 * vw) / img.naturalWidth));

        $(id)
            .css({ height: mult * img.naturalHeight })
            .css({ width: mult * img.naturalWidth });

        var font = '1.1em';  

        if (vh > 900)
        {
            font = '35px'
        }

        $(containerId).css({ 'font-size': font });
         
        $(containerId)
            .css({ width: $(id).width() + 10 })
            .css({ left: 0.5 * (vw - $(containerId).width()) })
            .css({ top: 0.5 * (vh - $(containerId).height()) });
             
    });

} 
 


function StartPageScript() {
     
    vw = viewWidth();
    vh = viewHeight();
     
    var isHorizontalMobile = vh > 1.5 * vw;
    
    $("#steve, #naun, #karbike, #bakfiets")
        .css({ width: (isHorizontalMobile?  '15vw' : '15vh')});

    $("#BikeadelicPennyFarthingBreweryRideText")
        .css({ width: '50vw' });
     
    $("#logo").css({ width: (isHorizontalMobile ? '50vw' : '30vh') });

    $("#howItWorksText")
        .css({ width: '50vw' })
        .css({ height: '30vh' });  

    
    textFit(document.getElementById('howItWorksText'), { minFontSize: 10,  maxFontSize: 120 });

    $("#PosingImageRound")
        .css({ width: '25vw' })
        .css({ top: 0, left: 0 });

    $('#miniPfImage')
        .css({ width: '25vw' })
        .css({ left: vw - $("#miniPfImage").width() })
        .css({ top: 0 });

    
    var freeSpace = vh - $("#BikeadelicPennyFarthingBreweryRideText").height() - $("#logo").height() - $("#howItWorksText").height();


    $("#BikeadelicPennyFarthingBreweryRideText")
        .css({ left: 0.5 * vw - 0.5 * $("#BikeadelicPennyFarthingBreweryRideText").width() })
        .css({ top: 0.17 * freeSpace });

    $("#logo")
        .css({ left: 0.5 * vw - 0.5 * $("#logo").width() })
        .css({ top: $("#BikeadelicPennyFarthingBreweryRideText")[0].getBoundingClientRect().bottom + 0.33 * freeSpace});

    $("#howItWorksText")
        .css({ top: $("#logo")[0].getBoundingClientRect().bottom + 0.33 * freeSpace })
        .css({ left: 0.5 * (vw - $("#howItWorksText").width()) });

    var indentationFraction = 0.75;

    function calculateInnerDistance(id1, id2, w) {
        

        var indentation = w == true ?
            $(id1).width() + (id2 != null ? indentationFraction * $(id2).width() : 0) + 10 :
            $(id1).height() + (id2 != null ? indentationFraction * $(id2).height() : 0) + 10;

        return indentation;
    }

    $("#steve")
        .css({ top: vh - calculateInnerDistance('#naun', "#steve", false) })
        .css({ left: 10 });

    $("#naun")
        .css({ top: vh - $("#naun").height() - 10 })
        .css({ left: indentationFraction * $("#steve").width() });

    $("#bakfiets")
        .css({ top: vh - calculateInnerDistance('#karbike', '#bakfiets', false) })
        .css({ left: vw - $("#bakfiets").width() - 10 });

    $('#karbike')
        .css({ top: vh - $("#karbike").height() - 10 })
        .css({ left: vw - calculateInnerDistance('#karbike', "#bakfiets", true) });
     
    ScaleImage("#pfImage", "#pennyFarthingPopup");

    ScaleImage("#trailmapImage", "#trailmappopup");

    
     
}













