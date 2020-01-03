const img = document.getElementById('image');
img.src = './lamp0.png';

img.addEventListener('click', () => {
  const fileName = img.src.slice(img.src.lastIndexOf('lamp'));
  img.src = fileName === 'lamp0.png' ? './lamp1.png' : './lamp0.png';
});