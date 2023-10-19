$(function () {
  var $first = $("#scroller>:first-child");
  $("#scroller").width($first.outerWidth(true));
  $first.clone(true).appendTo("#scroller");
  $("#scroller").addClass("ready");
});

// Test
// const counters = document.querySelectorAll(".value");
// const speed = 200;

// counters.forEach((counter) => {
//   const animate = () => {
//     const value = +counter.getAttribute("akhi");
//     const data = +counter.innerText;

//     const time = value / speed;
//     if (data < value) {
//       counter.innerText = Math.ceil(data + time);
//       setTimeout(animate, 1);
//     } else {
//       counter.innerText = value;
//     }
//   };

//   animate();
// });

$(window).scroll(testScroll);
var viewed = false;

function isScrolledIntoView(elem) {
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height();

  var elemTop = $(elem).offset().top;
  var elemBottom = elemTop + $(elem).height();

  return elemBottom <= docViewBottom && elemTop >= docViewTop;
}

function testScroll() {
  if (isScrolledIntoView($(".number")) && !viewed) {
    viewed = true;
    $(".value").each(function () {
      $(this)
        .prop("Counter", 0)
        .animate(
          {
            Counter: $(this).text(),
          },
          {
            duration: 4000,
            easing: "swing",
            step: function (now) {
              $(this).text(Math.ceil(now));
            },
          }
        );
    });
  }
}
