$(function() {

        $('.popup-gallery').magnificPopup({
          delegate: 'a',
          type: 'image',
          tLoading: 'Loading image #%curr%...',
          mainClass: 'mfp-img-mobile',
          gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1] // Will preload 0 - before current, and 1 after the current image
          },
          image: {
            tError: '<a href="/%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function(item) {
              return item.el.attr('title');
            }
          }
        });




	$('#datetimepickerOt').datetimepicker({
		locale: 'ru',
		/*debug: true,*/
		tooltips: {
			today: 'Go to today',
			clear: 'Clear selection',
			close: 'Close the picker',
			selectMonth: 'Select Month',
			prevMonth: 'Предыдущий месяц',
			nextMonth: 'Следующий месяц',
			selectYear: 'Select Year',
			prevYear: 'Previous Year',
			nextYear: 'Next Year',
			selectDecade: 'Select Decade',
			prevDecade: 'Previous Decade',
			nextDecade: 'Next Decade',
			prevCentury: 'Previous Century',
			nextCentury: 'Next Century',
			incrementHour: 'Increment Hour',
			pickHour: 'Pick Hour',
			decrementHour:'Decrement Hour',
			incrementMinute: 'Increment Minute',
			pickMinute: 'Pick Minute',
			decrementMinute:'Decrement Minute',
			incrementSecond: 'Increment Second',
			pickSecond: 'Pick Second',
			decrementSecond:'Decrement Second'
		}
	});	$('#datetimepickerdo').datetimepicker({
		locale: 'ru',
		/*debug: true,*/
		tooltips: {
			today: 'Go to today',
			clear: 'Clear selection',
			close: 'Close the picker',
			selectMonth: 'Select Month',
			prevMonth: 'Предыдущий месяц',
			nextMonth: 'Следующий месяц',
			selectYear: 'Select Year',
			prevYear: 'Previous Year',
			nextYear: 'Next Year',
			selectDecade: 'Select Decade',
			prevDecade: 'Previous Decade',
			nextDecade: 'Next Decade',
			prevCentury: 'Previous Century',
			nextCentury: 'Next Century',
			incrementHour: 'Increment Hour',
			pickHour: 'Pick Hour',
			decrementHour:'Decrement Hour',
			incrementMinute: 'Increment Minute',
			pickMinute: 'Pick Minute',
			decrementMinute:'Decrement Minute',
			incrementSecond: 'Increment Second',
			pickSecond: 'Pick Second',
			decrementSecond:'Decrement Second'
		}
	});

$('.bootstrap-datetimepicker-widget').prepend("<p class='item'>Тест</p>");

if ($('.bootstrap-datetimepicker-widget').is(':visible')) {
  console.log('show2');
}


$('#datetimepicker1').on('show.datetimepicker', function () {
  console.log('show2');
})

});
