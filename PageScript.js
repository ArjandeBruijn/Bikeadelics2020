var viewWidth = function () {
    return Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
}
var viewHeight = function () {
    return Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
}

$(document).ready(function () {
    vw = viewWidth();
    vh = viewHeight();

    var pixelGrowth = 10;

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

        $("#BikeadelicPennyFarthingBreweryRideText").css({ width: $("#BikeadelicPennyFarthingBreweryRideText").width() + pixelGrowth });
        $("#BikeadelicPennyFarthingBreweryRideText").trigger('doPlacement');
    });


    $('#naun').bind('grow', function () {
        $("#naun").css({ width: $("#naun").width() + pixelGrowth });
    });

    $('#PosingImageRound').bind('grow', function () {
        $("#PosingImageRound").css({ width: $("#PosingImageRound").width() + pixelGrowth });
    });

    $('#miniPfImage').bind('grow', function () {

        $("#miniPfImage").css({ width: $("#miniPfImage").width() + pixelGrowth });
        $('#miniPfImage').trigger('doPlacement');
    });

    $('#PosingImageRound').bind('doPlacement', function () {

        $("#PosingImageRound").css({ top: 0, left: 0 });
    });
    $('#miniPfImage').bind('doPlacement', function () {

        $("#miniPfImage").css({ left: vw - $("#miniPfImage").width() });
    });

    $('#karbike').bind('doPlacement', function () {
        $('#karbike').css({ top: vh - $("#karbike").height() - 20 });
        $('#karbike').css({ left: vw - $("#karbike").width() - $("#bakfiets").width() - 30 })
    });
    $('#bakfiets').bind('doPlacement', function () {
        $("#bakfiets").css({ top: vh - 2 * $("#bakfiets").height() - 20 });
        $("#bakfiets").css({ left: vw - $("#bakfiets").width() - 20 });
    });

    $('#karbike').bind('grow', function () {

        $("#karbike").css({ width: $("#karbike").width() + pixelGrowth });
        $("#karbike").trigger('doPlacement');
    });

    $('#steve').bind('doPlacement', function () {

        $("#steve").css({ top: vh - $("#naun").height() - $("#steve").height() - 10 });
        $("#steve").css({ left: 10 });
    });

    $('#steve').bind('grow', function () {

        $("#steve").css({ width: $("#steve").width() + pixelGrowth });
    });


    $('#bakfiets').bind('grow', function () {

        $("#bakfiets").css({ width: $("#bakfiets").width() + pixelGrowth });
        $('#bakfiets').trigger('doPlacement');
    });
    $('#howItWorksText').bind('doPlacement', function () {

        $("#howItWorksText").css({ top: vh - $("#howItWorksText").height() - 20 });
        $("#howItWorksText").css({ left: 0.5 * (vw - $("#howItWorksText").width()) });
    });

    $('#howItWorksText').bind('grow', function () {

        $("#howItWorksText").css({ width: $("#howItWorksText").width() + pixelGrowth });

        $("#howItWorksText").css({ 'font-size': parseFloat($("#howItWorksText").css('font-size').replace('px', '')) + 2 + "px" });

        $("#howItWorksText").trigger('doPlacement');
    });
    $('#logo').bind('doPlacement', function () {

        $("#logo").css({ left: 0.5 * vw - 0.5 * $("#logo").width() });
        $("#logo").css({
            top: (0.5 * ($("#BikeadelicPennyFarthingBreweryRideText")[0].getBoundingClientRect().bottom + $("#howItWorksText")[0].getBoundingClientRect().top))
                - (0.5 * $("#logo").height())
        });
    });

    $('#naun').bind('doPlacement', function () {

        $("#naun").css({ top: vh - $("#naun").height() - 20, left: $("#steve").width() + 10 });

    });

    $('#logo').bind('grow', function () {

        $("#logo").css({ width: $("#logo").width() + pixelGrowth });
        $('#logo').trigger('doPlacement');
    });
});

function ShowPopup(id) {
    var popup = document.getElementById(id);
    popup.classList.toggle("show");
}

function StartPageScript() {
    vw = viewWidth();
    vh = viewHeight();

    var sizeCorrection = Math.min(vw / 1920, vh / 969);

    $("#PosingImageRound").css({ width: sizeCorrection * 400 });

    $("#miniPfImage").css({ top: 0, width: sizeCorrection * 300 });

    $("#naun").css({ width: sizeCorrection * 200 });

    $("#steve").css({ width: sizeCorrection * 200 });

    $("#karbike").css({ width: sizeCorrection * 150 });

    $("#bakfiets").css({ width: sizeCorrection * 150 });

    $("#BikeadelicPennyFarthingBreweryRideText").css({ width: sizeCorrection * 700 });

    var fontsize = sizeCorrection * 1.1 + "em";

    $("#howItWorksText").css({ width: sizeCorrection * 800 })
        .css({ 'font-size': fontsize });

    $("#logo").css({ width: sizeCorrection * 400 });

    $("#BikeadelicPennyFarthingBreweryRideText").trigger('doPlacement');

    $('#miniPfImage').trigger('doPlacement');

    $("#karbike").trigger('doPlacement');

    $('#bakfiets').trigger('doPlacement');

    $("#howItWorksText").trigger('doPlacement');

    $("#logo").trigger('doPlacement');

    $("#naun").trigger('doPlacement');

    $('#steve').trigger('doPlacement');

    var elementOverlaps = function (elem) {
        var elements = $('div');
        $.merge(elements, $('img'));

        for (var e = 0; e < elements.length; e++) {
            var element = elements[e];

            if (element != elem) {
                if (twoElementsOverlap(elem, element)) {
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

    for (var e2 = 0; e2 < 1000; e2++) {
        for (var e = 0; e < elements.length; e++) {

            var element = elements[e];

            if (elementOverlaps(element) == false) {
                $(element).trigger('grow');
            }

        }
    }

}





















