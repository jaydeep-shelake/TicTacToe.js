const cells = document.querySelectorAll('.cell');
const playerO='playerO';
const playerX='playerX';
const modal= document.getElementById('modal');
const modalMsg=document.getElementById('modal-msg');
const restartButton = document.getElementById('restartButton');
let currentPlayer;

let currentClass;
const WINNIG_Comibnations=[
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8], 
    [0,4,8],[2,4,6]
]
cells.forEach((cell)=>{
    cell.addEventListener('click',(e)=>{
     
     //switch truns
     truns(e);
    // if(checkWin(currentClass)){
    //   console.log('winner');
    // }
    
     //
    },{once:true})
})

function truns(e){
    const cellArray = Array.from(cells); //putting all the divs in array
    const index =cellArray.indexOf(e.target) //geting the index of clicked div
    
    if(currentPlayer===playerX){
         cells[index].classList.add(playerX);
        //  currentClass=playerX;
        currentClass=playerX;
         currentPlayer=playerO;
        const html=e.target;
         html.innerHTML='<h2>X</h2>'
     }
     else{
         cells[index].classList.add(playerO)
         currentPlayer=playerX;
         currentClass=playerO;
         const html=e.target;
         html.innerHTML='<h2>O</h2>'
     }
    //  console.log(currentPlayer);
     
     console.log(currentClass);
     if(checkWin(currentClass)){
         endGame(false);
     }
     if(isDraw()){
         endGame(true)
     }
}

function checkWin(currentClass){
return WINNIG_Comibnations.some(com=> com.every(i=> cells[i].classList.contains(currentClass)));

}
function isDraw(){
    return [...cells].every(cell=>cell.classList.contains(playerX)||cell.classList.contains(playerO))
}

function endGame(draw){
    if(draw){
    console.log('draw');
    modalMsg.innerHTML='<h1 style="color:yellow;">Draw</h1>';
    modal.style.display='flex';
    }
    else{
     console.log(currentClass,'wins');
     modalMsg.innerHTML=`<h1 style="color:green;">${currentClass}<span style="color:#333;">wins!</span><h1>`
     modal.style.display='flex';
    }
}


restartButton.addEventListener('click',()=>{
 window.location.reload()
});