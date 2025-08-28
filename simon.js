let h4=document.querySelector('h2');
let user=[];
let game=[];
let started=false;
let level=0;
let btns=['red','yellow','green','violet'];
document.addEventListener("keypress",function()
{
    if(started==false)
    {
        started=true;
        levelup();
    }
});
function gameflash(btn)
{
btn.classList.add('Gflash');
setTimeout(function()
{
    btn.classList.remove('Gflash');
},300);
}
function levelup()
{
    user=[];
    level++;
    h4.innerText=`level ${level}`;
    let rindx=Math.floor(Math.random()*3);
    let rcolor=btns[rindx];
    let rbtn=document.querySelector(`.${rcolor}`);
    game.push(rcolor);
    gameflash(rbtn);
    console.log("game seq is :",game);
    // console.log(rcolor);
    // console.log(rbtn);

}
function userflash(btn)
{
btn.classList.add('Uflash');
setTimeout(function()
{
    btn.classList.remove('Uflash');
},300);
}

function btnpress()
{
    userflash(this);
    usercolor=this.getAttribute('id');
    user.push(usercolor);
    console.log("user seq :",user);
    check(user.length-1);
}
let allbtns=document.querySelectorAll('.btn');
for(btn of allbtns)
{
    btn.addEventListener('click',btnpress);
}
function check(ind)
{
    if(user[ind]===game[ind])
    {
        if(user.length==game.length)
        {
            setTimeout(levelup,1000);
        }
    }
    else
    {
        h4.innerHTML=`game over <b>your score is ${level}<b> <br>press any key to restart`;
        document.querySelector('body').style.backgroundColor='red';
        setTimeout(function()
        {
            document.querySelector('body').style.backgroundColor='white'
        },200);
        reset();
    }
}
function reset()
{
    started=false;
    game=[];
    user=[];
    level=0;
}