(function ($) {

	
$('li').each(function(){
	var $this = $(this);
	$this.on('click', function(){
    $('li').not($this).removeClass('active');
    $this.toggleClass('active');
  })
})



 $('.section').click(function() {
	$('body').css('overflow', 'hidden');
  });

$('.navitem').click(function() {
	$('body').css('overflow', 'hidden');
  });

$(document).on('click','.popup-close',function(){
	$('body').css('overflow', 'auto');
 });

  
 


}(jQuery));






