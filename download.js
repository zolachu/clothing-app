function download() {
    let scale = 2;
    domtoimage.toPng(collageBody, {
     quality: 1,
     width: collageBody.clientWidth * scale,
     height: collageBody.clientHeight * scale,
     style: {
      transform: 'scale('+scale+')',
      transformOrigin: 'top left'
    }
})
    .then(function (dataUrl) {
      var link = document.createElement('a');
      link.download = 'collage.jpeg';
      link.href = dataUrl;
      link.click();
    });
}
