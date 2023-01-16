$(document).ready(function() {
  let isTimeOpen = false;
  let dates = ['30-03-2020', '04-04-2020', '09-04-2020', '14-04-2020'];

  $('#datepicker').datepicker({
    firstDay: 1,
    minDate: new Date(),
    autoSize: true,
    showOn: 'button',
    buttonImageOnly: true,
    buttonImage: './images/calendar.svg',
    dateFormat: 'dd-mm-yy',
    beforeShowDay: function(date){
      let string = jQuery.datepicker.formatDate('dd-mm-yy', date);
      return [ dates.indexOf(string) === -1 ];
    },
  });

  $('#timepicker').timepicker({
    timeFormat: 'H:i',
    step: 60,
    minTime: '10',
    maxTime: '17',
    dynamic: false,
    dropdown: true,
    scrollbar: false,
    'disableTimeRanges': [
      ['1pm', '2pm'],
      ['3pm', '4pm']
    ],
  });

  $('#clock').click(function() {
    $('#timepicker').focus();
  });
});
