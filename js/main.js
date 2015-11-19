(function($){
	toastr.options = {
	  "closeButton": true,
	  "debug": false,
	  "newestOnTop": true,
	  "progressBar": false,
	  "positionClass": "toast-top-right",
	  "preventDuplicates": false,
	  "onclick": null,
	  "showDuration": "300",
	  "hideDuration": "100000",
	  "timeOut": "5000",
	  "extendedTimeOut": "1000",
	  "showEasing": "swing",
	  "hideEasing": "linear",
	  "showMethod": "fadeIn",
	  "hideMethod": "fadeOut"
	};

	var showInfo = function(title, message){
		toastr.info();
	};

	$(".showInfo").on("click", function(){
		toastr.info("Lorem ipsctetur adipisicing elit. A, molestias!", "My Title", {"positionClass": "toast-top-left"});
	});
	$(".showSuccess").on("click", function(){
		toastr.success("Lorem ipsctetur adipisicing elit. A, molestias!", "My Title", {"positionClass": "toast-top-left"});
	});
	$(".showError").on("click", function(){
		toastr.error("Lorem ipsctetur adipisicing elit. A, molestias!", "My Title", {"positionClass": "toast-top-left"});
	});
	$(".showWarning").on("click", function(){
		toastr.warning("Lorem ipsctetur adipisicing elit. A, molestias!", "My Title", {"positionClass": "toast-top-left"});
	});
	$(".showBlack").on("click", function(){
		toastr.black("Lorem ipsctetur adipisicing elit. A, molestias!", "My Title", {"positionClass": "toast-top-left"});
	});
	$(".showWhite").on("click", function(){
		toastr.white("Lorem ipsctetur adipisicing elit. A, molestias!", "My Title", {"positionClass": "toast-top-left"});
	});
})(jQuery);