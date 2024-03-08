$(document).ready(function() {
    // process bar
    setTimeout(function() {
        firstQuestion();
        $('.spinner').fadeOut();
        $('#preloader').delay(350).fadeOut('slow');
        $('body').delay(350).css({
            'overflow': 'visible'
        });
    }, 600);
})

function init(){
    $('#title').text(CONFIG.title)
    $('#desc').text(CONFIG.desc)
    $('#yes').text(CONFIG.btnYes)
    $('#no').text(CONFIG.btnNo)
}

function firstQuestion(){
    $('.content').hide();
    Swal.fire({
        title: CONFIG.introTitle,
        text: CONFIG.introDesc,
        imageUrl: 'data:image/jpeg;base64,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',
        imageWidth: 300,
        imageHeight: 300,
        background: '#fff url("img/iput-bg.jpg")',
        imageAlt: 'Custom image',
        confirmButtonText: CONFIG.btnIntro
      }).then(function(){
        $('.content').show(200);
      })
}

 // switch button position
 function switchButton() {
    var audio = new Audio('sound/duck.mp3');
    audio.play();
    var leftNo = $('#no').css("left");
    var topNO = $('#no').css("top");
    var leftY = $('#yes').css("left");
    var topY = $('#yes').css("top");
    $('#no').css("left", leftY);
    $('#no').css("top", topY);
    $('#yes').css("left", leftNo);
    $('#yes').css("top", topNO);
}
// move random button póition
function moveButton() {
    var audio = new Audio('sound/Swish1.mp3');
    audio.play();
    var x = Math.random() * ($(window).width() - $('#no').width()) * 0.9 ;
    var y = Math.random() * ($(window).height() - $('#no').height()) * 0.9;
    var left = x + 'px';
    var top = y + 'px';
    $('#no').css("left", left);
    $('#no').css("top", top);
}

init()

var n = 0;
$('#no').mousemove(function() {
    if (n < 1)
        switchButton();
    if (n > 1)
        moveButton();
    n++;
});
$('#no').click(() => {
    if (screen.width>=900)
        switchButton();
})

// generate text in input
function textGenerate() {
    var n = "";
    var text = " " + CONFIG.reply;
    var a = Array.from(text);
    var textVal = $('#txtReason').val() ? $('#txtReason').val() : "";
    var count = textVal.length;
    if (count > 0) {
        for (let i = 1; i <= count; i++) {
            n = n + a[i];
            if (i == text.length + 1) {
                $('#txtReason').val("");
                n = "";
                break;
            }
        }
    }
    $('#txtReason').val(n);
    setTimeout("textGenerate()", 1);
}

// show popup
$('#yes').click(function() {
    var audio = new Audio('sound/tick.mp3');
    audio.play();
    Swal.fire({
        title: CONFIG.question,
        html: true,
        width: 900,
        padding: '3em',
        html: "<input type='text' class='form-control' id='txtReason' onmousemove=textGenerate()  placeholder='Whyyy'>",
        background: '#fff url("img/iput-bg.jpg")',
        backdrop: `
              rgba(0,0,123,0.4)
              url("img/giphy2.gif")
              left top
              no-repeat
            `,
        confirmButtonColor: '#3085d6',
        confirmButtonColor: '#fe8a71',
        confirmButtonText: CONFIG.btnReply
    }).then((result) => {
        if (result.value) {
            Swal.fire({
                width: 900,
                confirmButtonText: CONFIG.btnAccept,
                background: '#fff url("img/iput-bg.jpg")',
                title: CONFIG.mess,
                text: CONFIG.messDesc,
                confirmButtonColor: '#83d0c9',
                onClose: () => {
                    window.location = CONFIG.messLink;
                  }
            })
        }
    })
})

