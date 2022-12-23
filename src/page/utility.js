export const INFO_CONFIG = [
    {
        lable : 'Facebook',
        fieldName : 'fb',
    },
    {
        lable : 'Zalo',
        fieldName : 'zl',
    },
    {
        lable : 'Instagram',
        fieldName : 'ig',
    },
]


export const downloadQR = (BASE_URL , id) => {
    const canvas = document.getElementById("qrcode");
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    let downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = `${BASE_URL}-${id}.png`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };