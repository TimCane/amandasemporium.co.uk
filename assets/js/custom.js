$(function() {
	var page = location.href.split("/").slice(-1);
	$('.navbar-nav a').each(function() {
		if ($(this).attr('href') == page)
		{
			$(this).parent().addClass('active');
		} else if (page == ""){
			 $('#home').parent().addClass('active');
			return false; 
		}
	});
});
