


window.onscroll = function() {myFunction()};

var widget = document.getElementById('navbar');
var sticky = widget.offsetTop;

function myFunction(){
    if (window.pageYOffset >= sticky){
        widget.classList.add("sticky")
    } else {
        widget.classList.remove("sticky");
    }
}
// scrolltop
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("scroll-btn").style.display = "block";
    } else {
      document.getElementById("scroll-btn").style.display = "none";
    }
  }
   
  // ketika tombol tersebut di klik, maka lakukan scroll keatas laman
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

//smoothscroll
var posY = 0;
var jarak =100;

function smoothScroll(id){

    var target = document.getElementById(id).offsetTop;

    var scrollAnimate = setTimeout(function(){
        smoothScroll(id);
    }, 5)

    posY = posY + jarak;

    if(posY >= target){
        clearTimeout(scrollAnimate);
        posY = 0;
    }else{
        window.scroll(0, posY)
    }

    return false;

}




		(function() {
	
	function Slideshow( element ) {
		this.el = document.querySelector( element );
		this.init();
	}
	
	Slideshow.prototype = {
		init: function() {
			this.wrapper = this.el.querySelector( ".slider-wrapper" );
			this.slides = this.el.querySelectorAll( ".slide" );
			this.index = 0;
			this.total = this.slides.length;
			this.timer = null;
			
			this.action();
			this.stopStart();	
		},
		_slideTo: function( slide ) {
			var currentSlide = this.slides[slide];
			currentSlide.style.opacity = 1;
			
			for( var i = 0; i < this.slides.length; i++ ) {
				var slide = this.slides[i];
				if( slide !== currentSlide ) {
					slide.style.opacity = 0;
				}
			}
		},
		action: function() {
			var self = this;
			self.timer = setInterval(function() {
				self.index++;
				if( self.index == self.slides.length ) {
					self.index = 0;
				}
				self._slideTo( self.index );
				
			}, 3000);
		},
		stopStart: function() {
			var self = this;
			self.el.addEventListener( "mouseover", function() {
				clearInterval( self.timer );
				self.timer = 5;
				
			}, false);
			self.el.addEventListener( "mouseout", function() {
				self.action();
				
			}, false);
		}
		
		
	};
	
	document.addEventListener( "DOMContentLoaded", function() {
		
		var slider = new Slideshow( "#slider-utama" );
		
	});
	
	
})();



var slideIndex = 1;
            showSlide(slideIndex);

        function nextslide(n){
            showSlide(slideIndex += n);
        }

        function dotslide(n){
            showSlide(slideIndex = n);
        }

        function showSlide(n) {
            var i;
            var slides = document.getElementsByClassName("imgslide");
            var dot = document.getElementsByClassName("dot");
            
            if (n > slides.length) {
                slideIndex = 1
            }
            if (n < 1) {
                slideIndex = slides.length;
            }
            for (i = 0; i < slides.length; i++) {
                
                slides[i].style.display = "none";
            }

            for (i = 0; i < slides.length; i++) {
                
                dot[i].className = dot[i].className.replace(" active", "");
            }

            slides[slideIndex - 1].style.display = "block";

            dot[slideIndex - 1].className += " active";
            


        }


    //     var slideIndex = 1;
    //     showSlide(slideIndex);

    // function nextslide(n){
    //     showSlide(slideIndex += n);
    // }

    // function dotslide(n){
    //     showSlide(slideIndex = n);
    // }

    // function showSlide(n) {
    //     var i;
    //     var slides = document.getElementById("imgslide");
    //     var dot = document.getElementById("dot");
        
    //     if (n > slides.length) {
    //         slideIndex = 1
    //     }
    //     if (n < 1) {
    //         slideIndex = slides.length;
    //     }
    //     for (i = 0; i < slides.length; i++) {
            
    //         slides[i].style.display = "none";
    //     }

    //     for (i = 0; i < slides.length; i++) {
            
    //         dot[i].className = dot[i].className.replace(" active", "");
    //     }

    //     slides[slideIndex - 1].style.display = "block";

    //     dot[slideIndex - 1].className += " active";
        


    // }





