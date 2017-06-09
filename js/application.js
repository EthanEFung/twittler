
$('.twittler-stream').html('');

function Tweet() {
  let tweet = {};
  tweet.created_at = $.timeago(new Date).toLocaleString();
  tweet.message = $('#twittle-box-input').val();
  tweet.user = 'visitor';
  return tweet;
}

function domReady(tweet) {

  let $user = $('<a class="user" id="user-button" href=# >@</a>').append(tweet.user);
  let $time = $('<time class="timeago" datetime="' + tweet.created_at + '"></time>').append(tweet.created_at);
  let $message = $('<p class="message"></p>').append(tweet.message);

  return $('<div class="tweet"></div>').append($user, ' ', $time, $message);
}   

function restrictStreamLength(index, number) {
  return (index > number) ? number : index;
}

function renderTwittlerStream(stream, index) {

  index = restrictStreamLength(index, 10);
  
  for(index; index >= 0; index--) {

    let tweet = stream[index];
    tweet.created_at = tweet.created_at.toLocaleString();
    domReady(tweet).appendTo('.twittler-stream');
    
  }
  $("time.timeago").timeago();
}

function renderHomeStream() {

  let stream = streams.home;
  let index = stream.length - 1;

  console.log('index after twittler-stream gens on home stream', index);
  renderTwittlerStream(stream, index);

}

function renderUserStream() {
  console.log('whats this?', this)

  let tag = $(this).text().slice(1);
  let stream = streams.users[tag];
  let index = stream.length - 1;

  console.log('index after twittler-stream gens on user-button', index);
  renderTwittlerStream(stream, index);

}

function resetTwittlerStream() {
  $('.twittler-stream').children().remove();
}




  

$(document).ready(function(){

  streams.users.visitor = [];

  renderTwittlerStream();
  
  $('#twittle-box-submit').on('click', function() {
    let tweet = new Tweet;
    streams.users.visitor.push(tweet);
    domReady(tweet).prependTo('.twittler-stream');
    $("time.timeago").timeago();
  });
  

  $('.twittler-stream').on('click','#user-button', function() {

    resetTwittlerStream();
    renderUserStream();
   

  });
      

  $('#refresh-button').on('click', function() {
    
    resetTwittlerStream();
    renderHomeStream();

  }) 


});
