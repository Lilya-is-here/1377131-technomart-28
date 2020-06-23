const prev = document.getElementById('previous'),
      next = document.getElementById('next'),
      slides = document.querySelectorAll('.slider-item'),
      dots = document.querySelectorAll('.slider-dot');
        
                  
      let index = 0;
      
      const currentSlide = n=> {
            for(slide of slides) {
              slide.classList.remove("slide-current");
              }
          slides[n].classList.add("slide-current");
          
      }

      const currentDot = n=> {
        console.log(n);
        for(dot of dots) {
            dot.classList.remove("current-dot");
        }
        dots[n].classList.add("current-dot");
    }

        
            
       
        
         next.addEventListener ('click', () => {
             const slidesWrapper = document.querySelector('.site-wrapper');
            
            slidesWrapper.classList.toggle('site-wrapper-2');
            
            });
             
            prev.addEventListener ('click', () => {const slidesWrapper = document.querySelector('.site-wrapper');
            
            slidesWrapper.classList.toggle('site-wrapper-2');
            
            });
    

    

 
    const prepareCurrentSlide = ind => {
            currentSlide(ind);
            currentDot(ind);
            
    }

      const nextSlide = () => {
          if(index==slides.length - 1) {
            index = 0;
            prepareCurrentSlide(index);
                        
                  } else {
              index++;
              prepareCurrentSlide(index);
         }
      }

const prevSlide = () => {
    if(index==0) {
      index = slides.length - 1;
      prepareCurrentSlide(index);
     
    } else {
        index--;
        prepareCurrentSlide(index);
   
    }
}

dots.forEach((item, indexDot)=> {
    item.addEventListener('click', () => {
       
    index = indexDot;
    prepareCurrentSlide(index);
    })
})



next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);



  
        


