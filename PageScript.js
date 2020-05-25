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
function ScaleImage(imageId, textId,  containerId, popupId, verticalOrientation)
{
    $(containerId).css({ width: 'auto' })
        .css({ height: 'auto' })
        .css({ top: 'auto' })
        .css({ 'max-height': 'auto' })
        .css({ 'padding': 'auto' });


    $(imageId).css({ width: 'auto' })
        .css({ 'max-height': 'auto' })
        .css({ height: 'auto' })
        .css({ 'margin-left': 'auto' });
         
    $(textId)
        .css({ height: 'auto' })
        .css({ 'float': 'auto' })
        .css({ width: 'auto' })
        .css({ 'margin-top': 'auto' });

    if (verticalOrientation) {
         
        $(containerId).css({ width: '80vw' })
            .css({ height: '90vh' })
            .css({ top: '15vh' });
         
        $(imageId).css({ width: '75vw' })
            .css({ 'margin-left': '2.5vw' });

        $(textId)
            .css({ height: $(containerId).height() - $(imageId).height() })
            .css({ 'float': 'none' });

        textFit($(textId), { maxFontSize: 40 });
         
    }
    else {

        // side by side
        $(containerId).css({ height: '80vh' })
            .css({ 'padding': '2vh' })
            .css({ width: '70vw' })
            .css({ top: '10vh' });

        $(imageId).css({ width: '30vw' })
            .css({ 'max-height': $(textId).parent().height() });
            
        $(textId).css({ height: $(textId).parent().height() })
            .css({ width: '35vw' })
            .css({ 'float': 'right' });

        textFit($(textId), { maxFontSize: 40 });

        $(textId).children(":first")
            .css({ 'margin-top': 0.5 * ($(containerId).height() - ($(textId).children(":first").height())) + 'px' });
         
    }
     
    $(popupId).css({ left: 0.5 * (vw - $(popupId).width()) })
        .css({ top: 0.5 * (vh - $(popupId).height()) });
} 
 


function StartPageScript() {
     
    vw = viewWidth();
    vh = viewHeight();
     
    var verticalOrientation = vh >  vw;
    
    $("#steve, #naun, #karbike, #bakfiets")
        .css({ width: (verticalOrientation?  '15vw' : '15vh')});

    $("#BikeadelicPennyFarthingBreweryRideText")
        .css({ width: '50vw' });
     
    $("#logo").css({ width: (verticalOrientation ? '50vw' : '30vh') });

    $("#howItWorksText")
        .css({ width: '50vw' })
        .css({ height: '30vh' });  

    
    textFit($('#howItWorksText'), { minFontSize: 10,  maxFontSize: 120 });

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
     
    ScaleImage("#pfImage", "#pfText","#pennyFarthing", "#pennyFarthingPopup", verticalOrientation);

    ScaleImage("#trailmapImage", "#trailmapText", "#trailmap", "#trailmappopup", verticalOrientation);

    
     
}













