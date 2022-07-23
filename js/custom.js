/* Number animation using Jquery start */

$(".counter").each(function () {
  var $this = $(this),
    countTo = $this.attr("data-count");

  $({ countNum: $this.text() }).animate(
    {
      countNum: countTo,
    },

    {
      duration: 60000,
      easing: "linear",
      step: function () {
        $this.text(Math.floor(this.countNum));
      },
      complete: function () {
        $this.text(this.countNum);
        //alert('finished');
      },
    }
  );
});

/* Number animation using Jquery end */


/* FAQ Section start */

const accordion = document.getElementsByClassName('contentBx');

for (i=0; i<accordion.length; i++){
  accordion[i].addEventListener('click',function(){
    this.classList.toggle('active')
  })
}
/* FAQ Section start */