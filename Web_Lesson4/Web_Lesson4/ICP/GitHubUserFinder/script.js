function getGithubInfo(user) {
    //1. Create an instance of XMLHttpRequest class and send a GET request using it.
    // The function should finally return the object(it now contains the response!)

    //creating request and using user inputted value and github api
    //sending the request and receiving the response.
    var htttp = new XMLHttpRequest();
    url = 'https://api.github.com/users/' + String(user);
    htttp.open("GET", url);
    htttp.send();
    var myobject = htttp;
    console.log(myobject);
    //console.log(myobject.responseText);
    return (myobject);
}

function showUser(user) {
    //2. set the contents of the h2 and the two div elements in the div '#profile' with the user content

    //settting an alert - the function currently is broken
    alert();
    //appending location, name, and date account was created
    box = document.getElementById('profile');
    box.innerhtml=user.login;
    box.innerhtml=user.created_at;
    box.innerhtml=user.location;
}

function noSuchUser(username) {
    //3. set the elements such that a suitable message is displayed

    //displays message if user input invalid value
    box = document.getElementById('profile');
    box.innerHTML='No User With that ID Found!';
}

$(document).ready(function () {
    $(document).on('keypress', '#username', function (e) {
        //check if the enter(i.e return) key is pressed
        if (e.which == 13) {
            //get what the user enters
            username = $(this).val();
            //reset the text typed in the input
            $(this).val("");
            //get the user's information and store the respsonse
            response = getGithubInfo(username);
            //if the response is successful show the user's details
            if (response.status == 200) {
                showUser(JSON.parse(response.responseText));
                //else display suitable message
            } else {
                noSuchUser(username);
            }
        }
    })
});
