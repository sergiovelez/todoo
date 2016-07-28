// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
function ready() {
  $('#new_task').on('ajax:success', function() {
    console.log('the ajax request was successful');
  });
}
//$(ready);
$(document).on('ready', ready);
