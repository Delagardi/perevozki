if (!$.support.transition)
    $.fn.transition = $.fn.animate;

$(document).ready(function() {

    $roadBack   = $('.road-back');
    $roadFront  = $('.road-front');

    var createBackRoadCar = function() {

        var $car = $('<img />');

        if (Math.round(Math.random(0, 1))) { 

            // Create new car
            $car.css('right', '-350px')
                .css('bottom', '0px')
                .attr('src' , 'img/gazel_right_to_left.png')
                .addClass('car')
                .appendTo($roadBack);

            // Lunch new car to the left
            $car.animate({ right: $roadBack.width() + 330 }, getSpeed(6000, 8000), 'linear', function() { 
                $car.remove();
            });

        } else {

        }

    };

    createBackRoadCar();

    setInterval(function() {
        createBackRoadCar();
    }, 6000);

    var createFrontTruck = function() {
        var $truck = $('<img />');

        if (Math.round(Math.random(0, 1))) { 

            // Create new truck
            $truck.css('left', '-350px')
                .css('bottom', '0px')
                .attr('src' , 'img/gazel_left_to_right.png')
                .addClass('truck')
                .appendTo($roadFront);

            // Lunch new truck to the left
            $truck.animate({ left: $roadFront.width() + 330 }, getSpeed(5000, 6000), 'linear', function() { 
                $truck.remove();
            });

        } else {

        }

    };

    createFrontTruck();

    setInterval(function() {
        createFrontTruck();
    }, 6000);

    function getSpeed(min, max) {
        return Math.random() * (max - min) + min;
    }
});