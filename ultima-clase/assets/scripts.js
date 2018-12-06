
// You can start by saving your tweets here
var tweets = [];

// And the selected avatar
var userAvatar;

const _pages = {
    Login: '#login-page',
    AvatarChooser: '#avatar-chooser-page',
    Main: '#main-page'
}

$(function() {
    // Put all your initializers here
    displayPage(_pages.Main);//ACA VA LOGIN
    
    // Event listeners
    $("#formLogin").on("submit", function(event){
        var isValid = validateForm(this, event);
        if ( isValid ){
            displayPage(_pages.Main);
        };
    });
    
    // Tweet loading
    $("#formWriteTweet").on("submit", function(event){
        var isValid = validateForm(this, event);
        
        if (isValid){
            
            //var text = getFormField(this, "tweet");
            //renderTweet("batman", text);




            var textTweetValue = $("#inputTweetText").val();
            $("#tweet-template").prepend("<div class='tweet-box'><div class='user-avatar'><img src='assets/batman.jpg' class='img-fluid'/></div><p class='tweet-text-value'>" + textTweetValue + "</p></div>");
            /*
                <div class="tweet-box">
              <div class="user-avatar">
                <img src="assets/batman.jpg" class="img-fluid" />
              </div><!-- /user-avatar -->
              <p class="tweet-text-value">NotBatman</p>
            </div><!--/tweet-box -->
            */

        };


    });




});


// It will display a page
function displayPage (page) {
    $('.page').fadeOut(250);
    
    setTimeout(function () {
        $(page).fadeIn(250);
    }, 300);
}

function validateForm (form, event) {
    // This will prevent our form from submitting
    event.preventDefault();
    event.stopPropagation();

    $(form).addClass('was-validated');

    // This will validate the current form
    return form.checkValidity();
}

function getFormField (form, fieldName) {
    const data = $(form).serializeArray();

    return data.find(function(field) {
        return field.name = fieldName;
    }).value;
}



function saveTweet (user, text){
    tweets.push({
        user : user,
        text : text
    });
    $(".tweet-feed").empty();
    tweets.forEach(function(tweet){
        renderTweet(tweet.user, tweet.text);
    });

    /*
    
    postTweet(user, text)
        .done(loadTweets);
    
    */

};


/*
function postTweet(user, text){
    $.ajax(){
    url: 'https://tweet-api-esdi.herokuapp.com/tweets',
    method: 'POST',
    dataTpe : 'jason',
    contentType: 'application/jason',
    data: JSON.stringify({
            user,
            text
        })
    };
};




*/


