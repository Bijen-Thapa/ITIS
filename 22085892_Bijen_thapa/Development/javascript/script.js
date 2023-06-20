//Product section slider start
const productContainers = [...document.querySelectorAll('.product-container')];
const nextBtn = [...document.querySelectorAll('.next-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

    productContainers.forEach((item, i)=>{
        let containerDimensions = item.getBoundingClientRect();
        let containerWidth = containerDimensions.width;

        nextBtn[i].addEventListener('click', () =>{
            item.scrollLeft += containerWidth;
        })

        preBtn[i].addEventListener('click',() => {
            item.scrollLeft -= containerWidth;
        })
    })
//Product section slider end

// Extra slider start
    var img=['image/sliderimg-1.jpg' ,'image/sliderimg-2.jpg ','image/sliderimg-3.jpg'];
    var p = 0;
    function slides(){
      document.getElementById('slide').src=img[p]
      if(p < img.length-1)
      p++;
      else
      p = 0;
    }
    setInterval(slides, 2000);
// Extra slider end

// slider section end
