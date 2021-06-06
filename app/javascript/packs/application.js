// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

//= require rails-ujs
//= require jquery
//= require activestorage
//= require turbolinks
//= require semantic-ui
//= require_tree .

scroll_bottom = function(){
  if($('#messages').length > 0){
    $('#messages').scrollTop($('#messages')[0].scrollHeight);
  }
}

$(document).on('turbolinks:load', function functionName() {
  $('.message .close').on('click', function() {
    $(this).closest('.message').transition('fade');
  })
;
scroll_bottom();
})
