function makeBlack() {
     console.log('toggle button is working');
     document.getElementById('bo').classList.remove('whiteBlack');
     document.getElementById('na').classList.remove('whiteBlack');
     document.getElementById('bo').classList.remove('last');
     document.getElementById('na').classList.remove('last');
     document.getElementById('bo').classList.toggle('active');
     document.getElementById('na').classList.toggle('active');
     document.getElementById('menu-icon').classList.toggle('active');
}
function makeWhite() {
     console.log('toggle button is working');
     document.getElementById('bo').classList.remove('active');
     document.getElementById('na').classList.remove('active');
     document.getElementById('bo').classList.remove('last');
     document.getElementById('na').classList.remove('last');

     document.getElementById('bo').classList.toggle('whiteBlack');
     document.getElementById('na').classList.toggle('whiteBlack');
}
function make() {
     console.log('toggle button is working');
     document.getElementById('bo').classList.remove('active');
     document.getElementById('na').classList.remove('active');
     document.getElementById('bo').classList.remove('whiteBlack');
     document.getElementById('na').classList.remove('whiteBlack');
     document.getElementById('bo').classList.toggle('last');
     document.getElementById('na').classList.toggle('last');
}
