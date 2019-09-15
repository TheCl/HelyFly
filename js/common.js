let closeForm = document.getElementById('closeForm'),
         form = document.getElementById('bannerForm'),
         openForm = document.getElementById('openForm'),
         gallery = document.getElementById('gallery'),
         cardCVV = document.getElementById('cardCVV'),
         cardNumber = document.getElementById('cardNumber')


$(document).ready(function () {

    //Form PopUp

    closeForm.addEventListener('click', function(){

        form.style.display = "none"
    
    });
    
    openForm.addEventListener('click', function(){
    
        form.style.display = "block"
    
    });

    //Video frame

    $('#videoImage').click(function(){

        this.style.display = "none";
      
        $('#iframe').prop('src', 'https://www.youtube.com/embed/dQw4w9WgXcQ?;autoplay=1&;mute=1&;controls=0&;showinfo=0;allowfullscreen');

    });

    // Show additional content

    $('.show__program').click(function(e){
        $('.organizator__program').append('<p>Какая-то дополнительная информация</p>');
        e.preventDefault();
        $(this).hide();
    });

    $('.show__description').click(function(e){
        $('.organizator__description').append('<p>Какая-то дополнительная информация об авторе</p>');
        e.preventDefault();
        $(this).hide();
    });

    $('.show__profile button').click(function(e){
        $('.show__profile').append('<p>Информация об авторе</p>');
        e.preventDefault();
        $(this).hide();
    });

    $('.show__author button').click(function(e){
        $('.show__author').append('<p>Информация</p>');
        e.preventDefault();
        $(this).hide();
    });

    $('.show__photos').click(function(){

        $(this).hide();

        $.get('../html/galleryImages.html', function(data) {
        
            $('.gallery__table').append(data);
        
        });
    
    })

    $('.show__reviews').click(function(){

        
        $(this).hide();

        $.get('../html/reviewsList.html', function(data) {
        
            $('.reviews__list').append(data);
        
        });

        $('.reviews__content').css({paddingBottom:0})

    });

    
        

    //Card Validation


    cardCVV.addEventListener('input', function(){

        if(this.value.length > 3){
            this.value = this.value.substr(0,3)
        }

    });

    cardNumber.addEventListener('input', function(){

        if(this.value.length > 16){
            this.value = this.value.substr(0,16)
        }

    });

    // Gallery-Slider

    function postsCarousel() {
        let checkWidth = $(window).width();
        let owlPost = $(".gallery__table");
        if (checkWidth > 1200) {
            if(typeof owlPost.data('owl.carousel') != 'undefined'){
                owlPost.data('owl.carousel').destroy(); 
            }
            owlPost.removeClass('owl-carousel');
        } else if (checkWidth < 1200) {
            owlPost.addClass('owl-carousel');
            owlPost.owlCarousel({
                loop:true,
                margin:10,
                nav: false,
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:2
                    },
                    1199:{
                        items:4
                    }
                }
            });
        }
    }
    
    postsCarousel();
    $(window).resize(postsCarousel);

});



	