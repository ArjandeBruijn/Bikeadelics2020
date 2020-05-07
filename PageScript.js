var viewWidth = function () {
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

    var heightCorrection = vh / 969;
    var sizeCorrection = Math.min(vw / 1920, heightCorrection);

    $("#steve, #naun, #karbike, #bakfiets")
        .css({ width: sizeCorrection * 200 });

    $("#BikeadelicPennyFarthingBreweryRideText")
        .css({ width: sizeCorrection * 1000 });

    $("#logo").css({ width: 0.23 * vw });

    $("#howItWorksText")
        .css({ 'font-size': vh > vw ? "1.7em" : sizeCorrection * 1.4 + "em" })
        .css({ width: vh > vw ? 600 : sizeCorrection * 900 });

    $("#PosingImageRound")
        .css({ width: sizeCorrection * 500 })
        .css({ top: 0, left: 0 });

    $('#miniPfImage')
        .css({ width: sizeCorrection * 500 })
        .css({ left: vw - $("#miniPfImage").width() })
        .css({ top: 0 });

    $("#bakfiets")
        .css({ top: vh - 2 * $("#bakfiets").height() - 20 })
        .css({ left: vw - $("#bakfiets").width() - 20 });

    $('#karbike')
        .css({ top: vh - $("#karbike").height() - 20 })
        .css({ left: vw - $("#karbike").width() - $("#bakfiets").width() - 30 });
     
    var freeSpace = vh - $("#BikeadelicPennyFarthingBreweryRideText").height() - $("#logo").height() - $("#howItWorksText").height();


    $("#BikeadelicPennyFarthingBreweryRideText")
        .css({ left: 0.5 * vw - 0.5 * $("#BikeadelicPennyFarthingBreweryRideText").width() })
        .css({ top: 0.25 * freeSpace });

    $("#logo")
        .css({ left: 0.5 * vw - 0.5 * $("#logo").width() })
        .css({ top: 0.25 * freeSpace + $("#BikeadelicPennyFarthingBreweryRideText")[0].getBoundingClientRect().bottom });

    $("#howItWorksText")
        .css({ top: 0.25 * freeSpace + $("#logo")[0].getBoundingClientRect().bottom })
        .css({ left: 0.5 * (vw - $("#howItWorksText").width()) });

    $("#naun")
        .css({ top: vh - $("#naun").height() - 20 })
        .css({ left: $("#steve").width() + 10 });

    $("#steve")
        .css({ top: vh - $("#naun").height() - $("#steve").height() - 10 })
        .css({ left: 10 });

    ScaleImage("#pfImage", "#pennyFarthingPopup");

    ScaleImage("#trailmapImage", "#trailmappopup");
     
}













