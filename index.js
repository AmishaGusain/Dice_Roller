//Dice ROller
function rolldice()
{
   const num =document.getElementById("num").value;
   const diceres=document.getElementById("diceres"); 
   const diceimg=document.getElementById("diceimg");
   const values=[];
   const image=[];
   for(let i=0;i<num;i++)
    {
        const val=Math.floor(Math.random()*6)+1;
        values.push(val);//array of random numbers
        image.push(`<img src="${val}.jpg" alt="Dice${val}">`);//image acc to random number is stored in image array

    }
    diceres.textContent=`Dice: ${values.join(", ")}`;//random numbers are joined and displayed on diceres element
    diceimg.innerHTML=image.join(" ");

}