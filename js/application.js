$(document).ready(function(){
  $('.twittler-stream').html('');

  const $twittlerStream = $('.twittler-stream');

  let index = streams.home.length - 1;

  streams.users.user = [];

  function domReady(tweet) {

    let $user = $('<a href="#">@</a>').wrap('<span class="user"></span>').append(tweet.user);
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
    let tweet = {}
    tweet.created_at = new Date
    tweet.message = $('#twittle-box-input').val();
    tweet.user = "user";
    return tweet;
  }
  
  function addTweet(message) {
    let tweet = createTweet();
    streams.users.user.push(tweet);
    return tweet;
  }
  //Users should be able to enter characters into a the user entry box, and upon clicking or pressing enter
  //should be able to display tweet as the first item on the stream.
    //this should append the tweet to their own stream


  $('#twittle-box-submit').on('click', function() {
    let tweet = addTweet();
    domReady(tweet).prependTo($twittlerStream);
    //select the text entered in the twittle-box-input
    //create a tweet with the users name, and time created
    //append the tweet to the users stream
    //
  });

  // $('#refresh-button').on('click', function() {
  //   renderTwittlerStream();
  //   //refresh button should remove all the tweets from the existing stream, and replace them with new
  //   //tweets
  // });

renderTwittlerStream();  

});
