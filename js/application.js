
$('.twittler-stream').html('');


function domReady(tweet) {

  let $user = $('<a class="user" id="user-button" href=# >@</a>').append(tweet.user);
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

function Tweet() {
  let tweet = {};
  tweet.created_at = new Date;
  tweet.message = $('#twittle-box-input').val();
  tweet.user = 'visitor';
  return tweet;
}
  



$(document).ready(function(){
  console.log(streams.home)

  streams.users.visitor = [];

  renderTwittlerStream(); 

  $('#twittle-box-submit').on('click', function() {
    let tweet = new Tweet();
    streams.users.visitor.push(tweet);
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
