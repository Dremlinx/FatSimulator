let container = document.getElementById("container");
let kep=1
function clearContainer(){
    container.innerHTML = "";
}

function characterPage(){
    clearContainer();
    container.innerHTML += `
    <h1>${stats.hero_name}</h1>
    <img src="${kep}.jpg" alt="">
    <div class="outerHP">
        <div class="innerHP" id="HP"></div>
        <span id="HPnum">${stats.hp}/${stats.max_hp}</span>
    </div>
    <table>
    
         <tr>
            <th>Harapás</th>
            <td>${stats.strength}</td>
            <td>
                <button class="addPoint" onclick="addPoint('strength')">
                +
                </button>
            </td>
        </tr>
        <tr>
            <th>Gurulás</th>
            <td>${stats.agility}</td>
            <td>
                <button class="addPoint" onclick="addPoint('agility')">
                +
                </button>
            </td>
        </tr>
        <tr>
            <th>Harapás nagysága</th>
            <td>${stats.damage.min + stats.strength} - ${stats.damage.max + stats.strength}</td>
            <td>
            </td>
        </tr>
        <tr>
            <th>Háj</th>
            <td>${stats.defense}</td>
            <td>
                <button class="addPoint" onclick="addPoint('defense')">
                +
                </button>
            </td>
        </tr>
    </table>
    `
    let addbuttons = document.getElementsByClassName('addPoint')
    if(stats.skill_points > 0){
        for(let i=0; i < addbuttons.length; i++){
            addbuttons[i].style.display = "block";
        }
    } 

    let hp = document.getElementById("HP")
    hp.style.width = (stats.hp / stats.max_hp) * 100 + "%";
}

function addPoint(ctx){
    stats[ctx]++
    stats.skill_points--
    characterPage()
}

characterPage();


function adventurePage(){
    clearContainer();
    container.innerHTML +=`
    <button onclick="easyAdventure()"> Aladin Gyrosbár(Amatőr)</button>
    <button onclick="mediumAdventure()"> KFC (Haladó)</button>
    <button onclick="hardAdventure()">Mekdánelc (AEV Abszolút ELhízás Veszély)</button>
    `
}


function easyAdventure(){
    container.innerHTML = `<h2>Ali Mustafa Öztürk specialitásával kell szembenézned!</h2>
    `
    fight(gyros)
}

function fight(enemy){
    let playerRound = false;
    
    let damage = 5;
    while(enemy.hp > 0 && stats.hp > 0){
if (playerRound){
    damage = Math.floor(Math.random()*stats.damage.max) + stats.damage.min 
    enemy.hp -= damage
    container.innerHTML += `<p>Rárontasz a${enemy.name}-ra! ${damage} sebeztél</p>`
}
else{
    damage = Math.floor(Math.random()*enemy.damage.max) + enemy.damage.min
    stats.hp -= damage
    container.innerHTML += `<p>${enemy.name}-től ${damage} sebzést szendvedtél el.</p>`
}
playerRound =!playerRound
    }
    if(stats.hp <= 0){
        container.innerHTML += `<strong>A zsír eluralkodott rajtad! Halál oka: Sztrók</strong>`
    }
    else{
        container.innerHTML += `<strong>Finom volt de még éhes maradtál.</strong>`
    kep=2    
    }
 
}

function mediumAdventure(){
    container.innerHTML = `<h2>Colonel Ezredes leghűségesebb étele rád támad!</h2>
    `
    fight(csirke)
    kep=3
}

function hardAdventure(){
    container.innerHTML = `<h2>A mekdánelc legegészségtelenebb étke:</h2>
    `
    fight(meki)
    kep=4
}
