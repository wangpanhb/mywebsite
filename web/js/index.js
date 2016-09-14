'use strict';
$(function() {
	$(".resume").show();
	$(".main_banner").hide();
	// $(".mb_menu #about").css({"color":"#000","background-color":"#fff"});
	$(".mb_menu #music").click(function(event) {
		// $(this).css({"color":"#000","background-color":"#fff"});
		// $(this).siblings().css({"color":"#fff","background-color":"#000"});
		$(".main_banner").show();
		$(".resume").hide();
	});
	$(".mb_menu #about").click(function(event) {
		$(".main_banner").hide();
		$(".resume").show();
	});
})