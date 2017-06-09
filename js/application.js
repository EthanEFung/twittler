
$('.twittler-stream').html('');

function Tweet() {
  let tweet = {};
  tweet.created_at = $.timeago(new Date).toLocaleString();
  tweet.message = $('#twittle-box-input').val();
  tweet.user = 'visitor';
  return tweet;
}

function nodify(tweet) {

  let $user = $('<a class="user" id="user-button" href=# >@</a>').append(tweet.user);
  let $time = $('<time class="timeago" datetime="' + tweet.created_at + '"></time>').append(tweet.created_at);
  let $message = $('<p class="message"></p>').append(tweet.message);

  return $('<div class="tweet"></div>').append($user, ' ', $time, $message);
}   

function restrictStreamLength(stream, number) {
  let index = stream.length - 1
  return (index > number) ? number : index;
}

function formatTimeStamps() {
  $("time.timeago").timeago();
}


function renderTwittlerStream(stream, index) {

  for(index; index >= 0; index--) {
    let tweet = stream[index];
    tweet.created_at = tweet.created_at.toLocaleString();
    nodify(tweet).appendTo('.twittler-stream');
    
  }

  formatTimeStamps();

}

function renderHomeStream() {

  let stream = streams.home;
  let index = restrictStreamLength(stream, 10);

  renderTwittlerStream(stream, index);
  
}

function renderUserStream(tag) {
  
  let stream = streams.users[tag];
  let index = restrictStreamLength(stream, 10);

  renderTwittlerStream(stream, index);
  
}

function resetTwittlerStream() {
  $('.twittler-stream').children().remove();
}


$(document).ready(function(){

  streams.users.visitor = [];

  renderHomeStream();
  
  $('#twittle-box-submit').on('click', function() {

    let tweet = new Tweet;
    const usersStream = streams.users.visitor

    usersStream.push(tweet);
    nodify(tweet).prependTo('.twittler-stream');
    formatTimeStamps();

  });

  $('.twittler-stream').on('click','#user-button', function() {

    let tag = $(this).text().slice(1);
    resetTwittlerStream();
    renderUserStream(tag);
   
  });   

  $('#refresh-button').on('click', function() {
    
    resetTwittlerStream();
    renderHomeStream();

  }) 


});
