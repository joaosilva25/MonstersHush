let octopus=document.querySelector('.btn1');
let la_muerte=document.querySelector('.btn2');
let elho_coelho=document.querySelector('.btn3');
let row=document.querySelector('.row');
let page=document.querySelector('.all');
let backdrop=document.querySelector('body')
let game_page=document.querySelector('.game_page')



class personagem {
    constructor(name,life,poder,defense) {
        this.name=name;
        this.life=life;
        this.poder=poder;
        this.defense=defense;
    }
    atacar() {
        console.log(`${this.name} atacou utilizando ${this.poder}`)
    }

    defender() {
        console.log(`${this.name} defendeu utilizando ${this.poder}`)
    }
}

    let p1= new personagem("Octopus","120","venom","fumaça");
    let p2= new personagem("La Muerte","80","fire","fire barrier");
    let p3= new personagem("Elho Coelho","120","slash","bubble");




































    function aleatory() {
    
    let lista= [1,2,3]
    let randomlista=Math.floor(Math.random()*lista.length)
    let result=lista[randomlista]

    
    
}


function game_octopus() {
        page.style.display='none';
        backdrop.style.backgroundImage='url(assets/images/Fundo.png)';
        game_page.innerHTML='<div class="user"><img src=assets/images/octopus.png></div>';
}

function game_lamuerte() {
    page.style.display='none';
    backdrop.style.backgroundImage='url(assets/images/Fundo.png)';
    game_page.innerHTML='<div class="user"><img src=assets/images/morte.png></div>';
}
function game_Elhocoelho() {
    page.style.display='none';
    backdrop.style.backgroundImage='url(assets/images/Fundo.png)';
    game_page.innerHTML=`<div class="user">
                            <div class="position_life_bar">
                                <div class="life_bar">
                                    <div class="life_bar_intern"></div>
                                </div>
                            </div>
                                <img src=assets/images/Elhocoelho.png>
                        </div>`;
}