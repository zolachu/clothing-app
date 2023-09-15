function download() {
    let scale = 2;
    domtoimage
      .toPng(body, {
        quality: 1,
        width: body.clientWidth * scale,
        height: body.clientHeight * scale,
        style: {
          transform: 'scale(' + scale + ')',
          transformOrigin: 'top left',
        },
      })
      .then(function (dataUrl) {
        var link = document.createElement('a');
        link.download = 'collage.jpeg';
        link.href = dataUrl;
        link.click();
      });
}
