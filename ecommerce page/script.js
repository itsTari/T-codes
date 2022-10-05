let view = document.querySelector(".view");
      let box =document.querySelector(".box");
        document.querySelector(".big").onclick =function(){
          view.style.display="block";
        }
        document.querySelector(".close").onclick =function() {
          view.style.display="none";
        }

        // for the cart and avatar icon
        box.style.display="none"
        document.querySelector(".icon").onclick =function(){
            box.style.display="block";
        }

        // for the picture slides
        // for the picture slides
        document.querySelector(".right").onclick=function(){
          let slider=document.querySelector(".obig");
          counter=counter+100;
          slider.style.transition="all 2s ease";

        }
        // side menu
            document.querySelector(".sidemenu").style.display="none";
            document.querySelector(".menulogo").onclick =function() {
                  document.querySelector(".sidemenu").style.display="block";
             }
          document.querySelector(".cancel").onclick= function() {
                  document.querySelector(".sidemenu").style.display="none";
                  }