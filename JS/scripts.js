let i=0
 ,intro = "Hello there\! I am Gichimu\, A Front-End Web Developer."
 ,doc = document.getElementById("text");
const selfType = ()=>{
  if(i<intro.length){
    doc.innerHTML += intro.charAt(i);
    i++;
    setTimeout(selfType,300);
    }
  }

 selfType();
