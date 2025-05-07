let check = document.getElementById('toogle');
let nav = document.getElementById('check');

check.addEventListener('change', function(){
    if (check.checked){
        nav.style.display = 'inline'
        nav.style.transition = 'all 2s ease'
    }else{
        nav.style.display = 'none'
        nav.style.transition = 'all 2s ease'
    }
})