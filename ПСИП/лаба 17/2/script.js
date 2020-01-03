function foo2() {
    const img = document.getElementById('img1');
  
    const imgSrc = img.src;
    const lastModified = document.lastModified;
    const location = document.location;
    const date = new Date();
  
    console.log(date);
    
    document.body.innerHTML += `${imgSrc}<br>${lastModified}<br>${location}<br>${date}`;
  }