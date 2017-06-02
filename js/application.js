$(document).ready(function(){
  // var $body = $('body');
  // $body.html('');
  var $twittlerStream = $('.twittler-stream')

  var index = streams.home.length - 1;

    for(index; index >= 0; index--){
      var tweet = streams.home[index];
      var $tweet = $('<div class="tweet"></div>');

      var $user = $('<span class="user" href="stream.user"></span>');
      var $message = $('<p class="message"></p>');
      var $time = $('<span class="time"></span>');
      $tweet.append($('<b>@</b>').append($user.text(tweet.user)), ' posted on: ', $time.text(tweet.created_at), $message.text(tweet.message), );
      $tweet.appendTo($twittlerStream);
    }

  function renderUsersTwittlerStream(user) {

  }
  
  function showNewTwittles() {

  }

  

});
