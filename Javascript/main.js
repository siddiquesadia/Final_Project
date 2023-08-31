
$(function(){

  // ----------------HOME PAGE STARTS HERE-------------
  // TOOLTIP ENABLE
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


  // BANNER SLIDER ENABLE
  $(`#banner`).slick(
      {
          arrows:false,
          dots:true,
          dotsClass:`slick-dots container`,
          autoplay:true,
          autoplaySpeed: 1500,
      }
  );

  // NEW ARRIVAL SLIDER ENABLE
  $(`.new_arrival_slider`).slick(
      {
          slidesToShow:4,
          prevArrow: `.left_arrow`,
          nextArrow: `.right_arrow`,

          // Responsive
          responsive: [
              {
                breakpoint: 991,
                settings: {
                  slidesToShow: 3,
                }
              },

              {
                  breakpoint: 767,
                  settings: {
                    slidesToShow: 2,
                  }
                },

                {
                  breakpoint: 575,
                  settings: {
                    slidesToShow: 1,
                  }
                },

            ]
      }

  );

    // DEAL SLIDER ENABLE

    $(`.deal_card_slide`).slick(
      {
        slidesToShow:2,
        arrows:false,
        dots:true,
        dotsClass:`slick-dots container`,
        autoplay:true,
        autoplaySpeed: 1500,

        responsive: [

            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
              }
            },

        ]
      }
    );

   

    // COUNTDOWN ENABLE
    $(".timer")
    .countdown("2023/08/23", function(event) {
      $(`.days`).html(
        event.strftime('%D')
      );
      $(`.hours`).html(
        event.strftime('%H')
      );

      $(`.mins`).html(
        event.strftime('%M')
      );

      $(`.secs`).html(
        event.strftime('%S')
      );
    });
    // COUNTDOWN FINISH

 // DEAL SLIDER FINISH

//  SPECIAL OFFER STARTS

// VENOBOX ENABLE
new VenoBox({
  selector: '.venobox',
});
// VENOBOX FINISH
//  SPECIAL OFFER ENDS

// LATEST NEWS STARTS HERE

// LATEST SLIDER ENABLE
$(`.latest_slider`).slick(
  {
    slidesToShow:4,
    arrows:false,
    dots:true,
    dotsClass:`slick-dots container`,
    autoplay:true,
    autoplaySpeed: 1500,

    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        }
      },

      {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
          }
        },

        {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
          }
        },

    ]
  }
)
// LATEST SLIDER FINISH
// LATEST NEWS ENDS HERE
 // ----------------HOME PAGE ENDS HERE-------------

 // ----------------ABOUT PAGE STARTS HERE-------------
// LEADERSHIP SECTION STARTS HERE
// LEADERSHIP SLIDER ENABLE
$(`.leadership_slider`).slick(
  {
      slidesToShow:4,
      prevArrow: `.left_arrow`,
      nextArrow: `.right_arrow`,

      // Responsive
      responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 3,
            }
          },

          {
              breakpoint: 767,
              settings: {
                slidesToShow: 2,
              }
            },

            {
              breakpoint: 575,
              settings: {
                slidesToShow: 1,
              }
            },

        ]
  }

);
// LEADERSHIP SLIDER FINISH
// LEADERSHIP SECTION ENDS HERE

// CUSTOMER REVIEW SECTION STARTS HERE
// SLIDER STARTS
$(`.customerReviewSlider`).slick(
{
  slidesToShow:1,
        arrows:false,
        dots:true,
        dotsClass:`slick-dots container`,
        autoplay:true,
        autoplaySpeed: 1500,
}
);
// SLIDER FINISH
// CUSTOMER REVIEW SECTION ENDS HERE

// AYTOR INSTAGRAM SECTION STARTS HERE
// AYTOR INSTAGRAM SLIDER ENABLE
$(`.aytorInsta_slider`).slick(
  {
      slidesToShow:6,
      arrows:false,
      dots:true,
      dotsClass:`slick-dots container`,
      autoplay:true,
      autoplaySpeed: 1500,
     

      // Responsive
      responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 3,
            }
          },

          {
              breakpoint: 767,
              settings: {
                slidesToShow: 2,
              }
            },

            {
              breakpoint: 575,
              settings: {
                slidesToShow: 1,
              }
            },

        ]
  }

);
// AYTOR INSTAGRAM SLIDER FINISH
// AYTOR INSTAGRAM SECTION ENDS HERE
 // ----------------ABOUT PAGE ENDS HERE-------------

// ----------------SHOP PAGE STARTS HERE-------------
$(`.shopSlider`).slick({
  
  rows:3,
  slidesPerRow:4,
  speed:1000,
  dots:true,
  prevArrow: `.left`,
  nextArrow: `.right`,

        // Responsive
      responsive: [
          {
            breakpoint: 1200,
            settings: {
              rows:2,
              slidesPerRow:3,
            }
          },

          {
              breakpoint: 991,
              settings: {
                rows:2,
              slidesPerRow:2,
              }
            },
            {
              breakpoint: 767,
              settings: {
                rows:2,
              slidesPerRow:2,
              }
            },

            {
              breakpoint: 575,
              settings: {
                rows:2,
              slidesPerRow:2,
              }
            },

        ]
  
});
// ----------------SHOP PAGE ENDS HERE-------------

// ----------------SHOP STYLE1 PAGE STARTS HERE-------------
// PRODUCT VIEW SLIDER ENABLE
$(`.productSlider`).slick(
  {
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.productSubSlider',
  }
);
$(`.productSubSlider`).slick(
  {
    slidesToShow:5,
    asNavFor: '.productSlider',
    centerMode: true,
    focusOnSelect:true,
    prevArrow: `.left_arrow`,
    nextArrow: `.right_arrow`,
    
  }
);
// PRODUCT VIEW SLIDER FINISH

// QUANTITY STARTS

let incrementBtn = document.querySelector(`.increment`);
let output= document.querySelector(`.value`);

function incNum(){
let value= Number(output.value);
if (value==5){
    alert("Sorry, Out of Stock :(");
    return false;
}
value = value + 1;
output.value = value;
}

incrementBtn.addEventListener(`click`, incNum);

// For Decrement

let decrementBtn = document.querySelector(`.decrement`);

function decNum(){
    let value= Number(output.value);
    if( value==0){
        return false;
    }
    value = value - 1;
    output.value = value;
}

decrementBtn.addEventListener(`click`, decNum);
// QUANTITY ENDS

// RELATED PRODUCTS SLIDER STARTS HERE
$(`.relatedProductSlider`).slick({
slidesToShow:4,
prevArrow: `.related_left`,
nextArrow: `.related_right`,
 // Responsive
 responsive: [
  {
    breakpoint: 991,
    settings: {
      slidesToShow: 3,
    }
  },

  {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
      }
    },

    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed:1000,
      }
    },

]
});
// RELATED PRODUCTS SLIDER ENDS HERE
// ----------------SHOP STYLE1 PAGE ENDS HERE-------------




}

)