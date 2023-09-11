$(function () {
  // $('.draggable').on('mousedown touchstart', function (e) {
  //   $(this).css('cursor', 'grabbing');
  // });

  // $('.draggable').on('mouseup touchend', function (e) {
  //   $(this).css('cursor', 'grab');
  // });

  $('.draggable').draggable({
    containment: '#collage-body',
    start: gainFocus,
  });

  $('.draggable').resizable({
    start: (e, ui) => {
      gainFocus(e);
      $('.draggable:not(.active)').css('pointer-events', 'none');
    },
    stop: function (e, ui) {
      addResizableToMomento(e, ui);
      $('.draggable:not(.active)').css('pointer-events', 'auto');
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

function addResizableToMomento(e, ui) {
  let copyLastMoment = {};
  if (momento.length > 0) {
    let lastMoment = momento[momento.length - 1];
    copyLastMoment = structuredClone(lastMoment);
  }

  for (let i in copyLastMoment.products) {
    let product = copyLastMoment.products[i];
    if (product.name === e.target.id) {
      const ratio = ui.size.width / ui.size.height;
      const size = [ratio, ui.size.height];
      product.size = size;
    }
  }
  console.log(copyLastMoment);
  momento.push(copyLastMoment);
  level++;
}


