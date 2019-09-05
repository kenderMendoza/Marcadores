let btnHead = document.getElementById(`btnHead`);
let nav = document.getElementById(`nav`);
let name = document.getElementById(`name`);
let url = document.getElementById(`url`);
let btnAdd = document.getElementById(`btnAdd`);
let main = document.getElementById(`main`);
let form = document.getElementById(`form`);
const kill = document.getElementById(`kill`);

let urls = []
let names = []

if(localStorage.getItem(`urls`) !== null){
    urls = localStorage.getItem(`urls`).split(`,`)
    names = localStorage.getItem(`names`).split(`,`)
    
    let length = urls.length
    for(let i = 0; i <= length; i++){
        let code = `
            <div class="main__item"> 
                <div class="kill" id="kill"> <i class="fas fa-skull"></i> </div>
                <a href="${urls[i]}" class="main__item__link">${names[i]}</a>
            </div>
        `
        main.insertAdjacentHTML('afterbegin',code)
    }
}

//BOTON DEL HEAD.
let cont = true;
btnHead.addEventListener(`click`,(e)=>{
    if(cont){
        nav.style.display = `flex`
        cont = false
    }else{
        nav.style.display = `none`
        cont = true
    }
    
});

// "NAV"
btnAdd.addEventListener(`click`,()=>{    
    urls.push(url.value);
    names.push(name.value);

    localStorage.setItem(`urls`, urls.toString())
    localStorage.setItem(`names`, names.toString())

    let code = `
        <div class="main__item"> 
            <div class="kill" id="kill"> <i class="fas fa-skull"></i> </div>
            <a href="${url.value}" target="_blank" class="main__item__link">${name.value}</a>
        </div>
    `
    main.insertAdjacentHTML(`afterbegin`,code)
    form.remove()
});


   
