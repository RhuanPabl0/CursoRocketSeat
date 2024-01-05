function toggleMode(){
    const html = document.documentElement
    
    
    html.classList.toggle('light')
    
    //pegar tag img
    const img = document.querySelector("#profile img")

    if(html.classList.contains('light')){
       img.setAttribute('src', './assets/profile.enc') 
    } else {
        img.setAttribute('src', './assets/profile.enc')
    }

}