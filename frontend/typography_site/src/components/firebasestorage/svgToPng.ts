const svgToPng = (svgData: any, callback: Function) => {
    const _svgData = new XMLSerializer().serializeToString(svgData);
    const canvas = document.createElement("canvas");
    canvas.width = 1200;
    canvas.height = 630;
    const ctx = canvas.getContext("2d");
    const image = new Image;
    image.src = 'data:image/svg+xml;charset=utf-8;base64,' + btoa(unescape(encodeURIComponent(_svgData)));
    image.onload = () => {
        ctx.drawImage(image, 0, 0, 1200, 630);
        const pngData = canvas.toDataURL();
        callback(pngData);
    }
}

export { svgToPng };