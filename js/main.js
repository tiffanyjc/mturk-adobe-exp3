document.getElementById('gs').value = Math.random() * 100; 
document.getElementById('blur').value = Math.random() * 10; 
document.getElementById('br').value = Math.random() * 200; 
document.getElementById('ct').value = Math.random() * 200; 
document.getElementById('huer').value = Math.random() * 360;
document.getElementById('opacity').value = Math.random() * 100;
document.getElementById('invert').value = Math.random() * 100; 
document.getElementById('saturate').value = Math.random() * 500; 
document.getElementById('sepia').value = Math.random() * 100; 

document.getElementById('gs_i').value = document.getElementById('gs').value;
document.getElementById('blur_i').value = document.getElementById('blur').value; 
document.getElementById('br_i').value = document.getElementById('br').value; 
document.getElementById('ct_i').value = document.getElementById('ct').value; 
document.getElementById('huer_i').value = document.getElementById('huer').value; 
document.getElementById('opacity_i').value = document.getElementById('opacity').value; 
document.getElementById('invert_i').value = document.getElementById('invert').value; 
document.getElementById('saturate_i').value = document.getElementById('saturate').value;
document.getElementById('sepia_i').value = document.getElementById('sepia').value; 

// adding an image via url box
function addImage(e) {
    var imgUrl = $("#imgUrl").val();
    if (imgUrl.length) {
        $("#imageContainer img").attr("src", imgUrl);
        document.getElementById('pic').value = document.getElementById('imgUrl').value;
        document.getElementById('next').disabled = false; 
        document.getElementById('next').style.opacity = 1; 
    }
    e.preventDefault();
}

//on pressing return, addImage will be called
$("#urlBox").submit(addImage);


// function to count the number of clicks a user does to an image
function increaseClick() {
    var clicks = Number(document.getElementById('clicks').value);  
    document.getElementById('clicks').value = clicks + 1; 
    console.log(document.getElementById('clicks').value); 
}
// editing image via css properties
function editImage() {
    var gs = $("#gs").val(); // grayscale
    var blur = $("#blur").val(); // blur
    var br = $("#br").val(); // brightness
    var ct = $("#ct").val(); // contrast
    var huer = $("#huer").val(); //hue-rotate
    var opacity = $("#opacity").val(); //opacity
    var invert = $("#invert").val(); //invert
    var saturate = $("#saturate").val(); //saturate
    var sepia = $("#sepia").val(); //sepia

    $("#imageContainer img").css("filter", 'grayscale(' + gs+
                                 '%) blur(' + blur +
                                 'px) brightness(' + br +
                                 '%) contrast(' + ct +
                                 '%) hue-rotate(' + huer +
                                 'deg) opacity(' + opacity +
                                 '%) invert(' + invert +
                                 '%) saturate(' + saturate +
                                 '%) sepia(' + sepia + '%)');

    $("#imageContainer img").css("-webkit-filter", 'grayscale(' + gs+
                                 '%) blur(' + blur +
                                 'px) brightness(' + br +
                                 '%) contrast(' + ct +
                                 '%) hue-rotate(' + huer +
                                 'deg) opacity(' + opacity +
                                 '%) invert(' + invert +
                                 '%) saturate(' + saturate +
                                 '%) sepia(' + sepia + '%)'); 

}

//When sliders change image will be updated via editImage() function
$("input[type=range]").change(editImage).mousemove(editImage);

// Reset sliders back to their original values on press of 'reset'
$('#imageEditor').on('reset', function () {
    setTimeout(function() {
        editImage();
    },0);
});

// Proceed to feedback questions once user is satisfied with their image
$('#imageEditor').on('next', function () {
    document.getElementById('sliders').style.display = 'none'; 
    document.getElementById('urlBox').style.display = 'none'; 
})

function nextPage() {
    document.getElementById('sliders').style.display = 'none'; 
    document.getElementById('urlBox').style.display = 'none'; 
    document.getElementById('feedbackPage').style.display = 'block';
    document.getElementById('submit').style.display = 'block';
}

function validate() {
    var toCheck = ['expectations1', 'satisfaction', 'creativecontrol1', 'creativecontrolamount', 'creativeself', 'expectations2', 'creativecontrol2', 'ownership'];
    var numQuestions = toCheck.length; 
    var canSend = false;

    // loop through all questions 
    for (var i = 0; i < numQuestions; i++) {
        var answered = false; 
        var radiobutton = toCheck[i]
        var id = document.getElementsByName(radiobutton)
        // loop through each question 
        for (var j = 0; j < 5; j++) {
            if (id[j].checked) {
                answered = true;
                break;
            }
        }

        if (!answered) {
            break; 
        } else if (answered && ((i + 1) == numQuestions)) {
            document.getElementById('submit').disabled = false;
            document.getElementById('submit').style.opacity = 1; 
        }
    }
}

function makeid() {
    document.getElementById('submit').innerHTML = "Loading..."
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 7; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    document.getElementById('code').innerHTML = text; 
    document.getElementById('id').value = text; 

}