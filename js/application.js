
$('.twittler-stream').html('');

streams.users.visitor = [];

function domReady(tweet) {

  let $user = $('<button class="user" id="user-button">@</button>').append(tweet.user);
  let $time = $('<span class="created-at"></span>').append(tweet.created_at);
  let $message = $('<p class="message"></p>').append(tweet.message);

  return $('<div class="tweet"></div>').append($user, ' ', $time, $message);
}   

function renderTwittlerStream() {
  let index = streams.home.length - 1;
  for(index; index >= 0; index--) {
    domReady(streams.home[index]).appendTo('.twittler-stream');
  }
}

function resetTwittlerStream() {
  $('.twittler-stream').children().remove();
  
}

function createTweet() {
  let tweet = {};
  tweet.created_at = new Date;
  tweet.message = $('#twittle-box-input').val();
  tweet.user = "visitor";
  return tweet;
}
  
function addTweet() {
  let tweet = createTweet();
  streams.users.visitor.push(tweet);
  return tweet;
}



$(document).ready(function(){

  renderTwittlerStream();  

  $('#twittle-box-submit').on('click', function() {

    let tweet = addTweet();
    domReady(tweet).prependTo('.twittler-stream');

  });
  

  $('.twittler-stream').on('click','#user-button', function() {

    let tag = $(this).text().slice(1)    
    let index = streams.users[tag].length - 1;
    resetTwittlerStream();
    
    for(index; index >= 0; index--) {
      let tweet = streams.users[tag][index];
      domReady(tweet).appendTo('.twittler-stream');
    }

  });
      

  $('#refresh-button').on('click', function() {
    
    resetTwittlerStream();
    renderTwittlerStream();

  })  


});
