const spic=document.getElementById('spic');


function change(){
    document.body.style.backgroundColor=spic.selectedOptions[0].value;
    alert(`Будет цвет ${spic.selectedOptions[0].value}`)
}