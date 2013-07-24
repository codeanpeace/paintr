$(document).ready(function(){
  var add_color = function(){
    var box = $('<div>');
    box.addClass('box');

    var color = $('#color').val();
    box.css('background-color', color);

    $('#colors').prepend(box);

    $('#color').val('').focus();
  };

  var set_color = function(){
    var box = $(this);
    var color = box.css('background-color');

    $('#selected_color').css('background-color', color);
  };

  var paint = function(){
    var paint_box = $(this);
    var color = $('#selected_color').css('background-color');

    paint_box.css('background-color', color);
  };

  $('#add_color').on('click', add_color);
  $('#colors').on('click', '.box', set_color);
  // delegate event handler to a parent element that already exists
  $('.paint_box').on('mouseover', paint);

// ------------------------------------------------------------------------------------------------

  var add_background = function(){
    var box = $('<div>');
    box.addClass('box');

    var background = $('#background').val();
    box.css('background-image', 'url(' + background + ')');

    $('#backgrounds').prepend(box);
    $('#background').val('').focus();
  };

  var set_both_backgrounds = function(){
    var box = $(this);
    var background = box.css('background-image');
    // $('#selected_background').css('background-image', 'url(' + background + ')');
    $('#selected_background').css('background-image', background);

    var canvas = $('#canvas');
    canvas.css('background-image', background);
  };

  $('#add_background').on('click', add_background);
  $('#backgrounds').on('click', '.box', set_both_backgrounds);

});























