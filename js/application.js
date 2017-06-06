
$('.twittler-stream').html('');
const $twittlerStream = $('.twittler-stream');
let index = streams.home.length - 1;
streams.users.user = [];

function domReady(tweet) {

  let $user = $('<button class="user" id="user-button">@</button>').append(tweet.user);
  let $time = $('<span class="created-at"></span>').append(tweet.created_at);
  let $message = $('<p class="message"></p>').append(tweet.message);

  return $('<div class="tweet"></div>').append($user, ' ', $time, $message);
}   

function renderTwittlerStream() {
  for(index; index >= 0; index--) {
    let tweet = streams.home[index];
    domReady(tweet).appendTo($twittlerStream);
  }
}

function createTweet() {
  let tweet = {};
  tweet.created_at = new Date;
  tweet.message = $('#twittle-box-input').val();
  tweet.user = "user";
  return tweet;
}
  
function addTweet() {
  let tweet = createTweet();
  streams.users.user.push(tweet);
  return tweet;
}


$(document).ready(function(){

  renderTwittlerStream();  

  $('#twittle-box-submit').on('click', function() {
    let tweet = addTweet();
    domReady(tweet).prependTo($twittlerStream);
  });

  /*
  upon selecting a users name, the twittler stream should remove all the current 
  tweets, look at the the users stream, and render to the page all the of tweets
  the user has.
  */

  $('#user-button').closest('.tweet').on('click', function() {
    alert('I work!')

    // let user = $(this).val()
    // index = streams.users.user.length;

    // renderTwittlerStream(); 

  });

  $('#refresh-button').on('click', function() {
    alert('I also work!')


    
    //refresh button should remove all the tweets from the existing stream, and replace them with new
    //tweets
  });

});
