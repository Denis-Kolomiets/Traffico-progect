
const owl = $('.owl-carousel');
owl.owlCarousel({
        center: true,
        loop: true,
        margin: 30,
        startPosition: 1,
        item: 3,
        responsive : {
            
            0 : {  
                item: 1,
                margin: 5
            },
            480 : {    
                item: 1,
                margin: 0
            },
            1000 : {
                margin: 15
            },
            1200 : {
                margin: 30
            }
        }
});


$('.slider__bnt--prev').click(function() {
  
    owl.trigger('prev.owl.carousel');
})

$('.slider__bnt--next').click(function() {
    owl.trigger('next.owl.carousel');
})
