let i=0
 ,intro = "Hello there\! i am Gichimu\; a Web Developer. Welcome to my site\!"
 ,doc = document.getElementById("text");
const selfType = ()=>{
  if(i<intro.length){
    doc.innerHTML += intro.charAt(i);
    i++;
    setTimeout(selfType,380);
    }
  }

 selfType();
