const radius = 50;
const image = new Image();
const copy = document.querySelector('.copy-btn');
const canvas = document.getElementById("canvas");
const resultBlock = document.getElementById('result');
const defaultBtn = document.getElementById('default');
const fileInpt = document.getElementById('canvas-file');
const copyResult = document.getElementById('copy-result');
const ctx = canvas.getContext("2d", { willReadFrequently: true });

canvas.width = 0;
canvas.height = 0;

fileInpt.addEventListener("change", () => {
  const [file] = fileInpt.files;
  if (!isFileImage(file)) {
    fileInpt.value = '';
    alert('Please choose only jpg, jpeg or png format');
    return;
  }
  if (file.size / 1024 ** 2 > 16) {
    fileInpt.value = '';
    alert('Max size of image must be 16MB');
    return;
  }
  if (file) {
    resultBlock.innerText = '';
    copy.style.visibility = 'hidden';
    resultBlock.style.backgroundColor = 'transparent';
    loadCanvas(file);
  }
});

defaultBtn.addEventListener("click", function() {
  const file = './images/default-image.jpg';
  fileInpt.value = '';
  resultBlock.innerText = '';
  copy.style.visibility = 'hidden';
  resultBlock.style.backgroundColor = 'transparent';
  loadCanvas(file);
});

canvas.addEventListener("mousemove", event => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(image, 0, 0);

  const color = ctx.getImageData(event.offsetX, event.offsetY, 1, 1).data;
  const hex = rgbToHex(color[0], color[1], color[2]);
  
  ctx.beginPath();
  ctx.drawImage(image, event.offsetX - 23, event.offsetY - 23, 46, 46, event.offsetX - 46, event.offsetY - 46, 92, 92);
  ctx.stroke();
  ctx.closePath();

  ctx.fillStyle = '#ffffff';
  ctx.beginPath();
  ctx.rect(event.offsetX - 32, event.offsetY + 5, 60, 20);
  ctx.strokeStyle = '#ffffff';
  ctx.lineWidth = 0.1;
  ctx.fill();
  ctx.closePath();
  
  ctx.beginPath();
  ctx.arc(event.offsetX, event.offsetY, radius, 0, 6.28);
  ctx.strokeStyle = '#ffffff';
  ctx.fillStyle = '#000000';
  ctx.lineWidth = 3;
  ctx.font = 'normal 16px serif';
  ctx.fillText(hex, event.offsetX - 30, event.offsetY + 20);
  ctx.stroke();
  ctx.closePath();

  ctx.beginPath();
  ctx.arc(event.offsetX, event.offsetY, radius - 4, 0, 6.28);
  ctx.strokeStyle = hex !== '#ffffff' ? hex : '#000000';
  ctx.lineWidth = 6;
  ctx.stroke();
  ctx.closePath();

  ctx.beginPath();
  ctx.rect(event.offsetX - 1, event.offsetY - 1, 2, 2);
  ctx.lineWidth = 2;
  ctx.strokeStyle = '#ffffff';
  ctx.stroke();
  ctx.closePath();
});

canvas.addEventListener("click", event => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(image, 0, 0);
  const color = ctx.getImageData(event.offsetX, event.offsetY, 1, 1).data;
  const hex = rgbToHex(color[0], color[1], color[2]);

  resultBlock.innerText = hex;
  copy.style.visibility = 'visible';
  resultBlock.style.backgroundColor = hex;
  if (hex === '#000000') {
    resultBlock.style.color = '#ffffff';
  }
});

copy.addEventListener("click", function() {
  navigator.clipboard.writeText(resultBlock.innerText);
  copyResult.style.visibility = 'visible';
  setTimeout(() => {
    copyResult.style.visibility = 'hidden';
  }, 2000);
});

function isFileImage(file) {
  const acceptedImageTypes = ['image/gif', 'image/jpeg', 'image/png'];
  return file && acceptedImageTypes.includes(file['type']);
}

function componentToHex(c) {
  const hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function loadCanvas(file) {
  typeof file === 'string' ? image.src = file : image.src = URL.createObjectURL(file);
  image.onload = function () {
    canvas.width = image.width > window.innerWidth ? window.innerWidth : image.width;
    canvas.height = image.height > window.innerHeight - 107 ? window.innerHeight - 107 : image.height;
    ctx.drawImage(image, 0, 0);
  };
}
