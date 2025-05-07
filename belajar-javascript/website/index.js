let home = document.querySelector('.home')

home.style.fontSize = '20px'
home.style.fontWeight = 'bold'

let title = document.querySelector('.title')
title.style.fontSize = '35px'
title.style.fontWeight = 'bold'
title.style.fontFamily = 'sans-serif'
title.style.color = 'white'

const text = "Portofolio"
let i = 0;
let deleting = false

function Effect() {
    if (i < text.length){
        let typingElement = document.getElementById('title') //.innerHTML += text.charAt(i); i++;

        if (!deleting && i < text.length){
            typingElement.innerHTML += text.charAt(i, 0); i++;

            setTimeout(Effect, 200)
        }else if (!deleting && i >= 9){
            typingElement.innerHTML = text.charAt(i); i--; 

            setTimeout(Effect, 100) // kecepatan menghapus
        }

        if (i === text.length && text.length >= 9){
            deleting = true
            setTimeout(Effect, 500)
        }

        if (i === 0 && deleting){
            deleting = false
            setTimeout(Effect, 500)
        }

        // setTimeout(Effect, 200) // kecepatan ketikan
    }

    console.log(i)

}


Effect()