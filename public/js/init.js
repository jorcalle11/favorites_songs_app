$( document).ready(function(){
  $(".button-collapse").sideNav(); 
  $('.modal-trigger').leanModal();
  $('select').material_select();
  $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: true // Creates a dropdown of 15 years to control year
  });
});

