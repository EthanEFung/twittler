
$('.twittler-stream').html('');


function domReady(tweet) {

  let $user = $('<a class="user" id="user-button" href=# >@</a>').append(tweet.user);
  let $time = $('<time class="timeago" datetime="' + tweet.created_at + '"></time>').append(tweet.created_at);
  let $message = $('<p class="message"></p>').append(tweet.message);

  return $('<div class="tweet"></div>').append($user, ' ', $time, $message);
}   

function renderTwittlerStream() {

  let index = streams.home.length - 1;
  if(index > 10) { index = 10; }
  for(index; index >= 0; index--) {
    let tweet = streams.home[index];
    tweet.created_at = tweet.created_at.toLocaleString();
    domReady(tweet).appendTo('.twittler-stream');
  }
  jQuery("time.timeago").timeago();
}

function resetTwittlerStream() {

  $('.twittler-stream').children().remove();

}

function Tweet() {
  let tweet = {};
  tweet.created_at = $.timeago(new Date).toLocaleString();
  tweet.message = $('#twittle-box-input').val();
  tweet.user = 'visitor';
  return tweet;
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

    let tag = $(this).text().slice(1)    

    let index = streams.users[tag].length - 1
    if (index > 10) { index = 10 }

    resetTwittlerStream();
    
    for(index; index >= 0; index--) {
      let tweet = streams.users[tag][index];
      tweet.created_at = tweet.created_at.toLocaleString();
      domReady(tweet).appendTo('.twittler-stream');
      $("time.timeago").timeago();
    }

  });
      

  $('#refresh-button').on('click', function() {
    
    resetTwittlerStream();    
    renderTwittlerStream();

  }) 


});
