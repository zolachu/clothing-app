$(function () { 
  
  $('.draggable').on('mousedown touchstart', function (e) {
    $(this).css('cursor', 'grabbing');
  });

  $('.draggable').on('mouseup touchend', function (e) {
    $(this).css('cursor', 'grab');
  });

  $('.draggable').draggable({
    containment: '#collage-body',
    cursor: 'grabbing',
    start: gainFocus,
  });

  $('.draggable').resizable({
    cursor: 'grabbing',
    start: (e, ui) => {
      gainFocus(e); 
      // $('.draggable:not(.active)').css('pointer-events', 'none');
    },
    stop: () => { 
      console.log('adding auto');
      // $('.draggable:not(.active)').css('pointer-events', 'auto');
    },
    aspectRatio: true,
  });

  $('.draggable').on('click', (e) => {
    gainFocus(e);
  });
});

function gainFocus(e) {
  $('.draggable').removeClass('active');
  $(e.target).addClass('active');
  // pop up the target to the top of the screen
  e.target.remove();
  $('.collage-body').append(e.target);
}

function loseFocus() {
  $('.draggable').removeClass('active');
}
