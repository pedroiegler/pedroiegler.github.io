const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("sticky", window.scrollY > 80);
});


$(function(){

    /*==========================*/

    var a = $("nav a");

    a.click(function(){
        var href = $(this).attr('href');
        var offsetTop = ($(href).offset().top) - 85;

        $('html,body').animate({'scrollTop':offsetTop});

        return false;
    })

    /*==========================*/

    $(".menu-mobile i").click(() => {
        $(".menu-mobile ul").slideToggle(200);

        $('.menu-mobile a').click(() => {
            $(".menu-mobile ul").fadeOut(200);
        });
    });

    /*==========================*/

    function showMessageError(val,el){
        if(el == 1){
            applyMessage(val);
        }
        else if(el == 2){
            applyMessage(val);
        }
        else if(el == 3){
            applyMessage(val);
        }
    }

    function applyMessage(val){
        $(val).fadeIn(800);
        setTimeout(function(){
            $(val).fadeOut(800);
        },3000);
    }

    $(".wraper-contact form").submit(() => {


        let nome = $("#nome").val();
        let email = $("#email").val();
        let telefone = $("#telefone").val();

        if(validateNameForm(nome) == false){
            showMessageError($(".messageName p"),1);
            return false;
        }
        else if(validateEmailForm(email) == false){
            showMessageError($(".messageEmail p"),2);
            return false;
        }
        else if(validateTelForm(telefone) == false){
            showMessageError($(".messageTelefone p"),3);
            return false;
        }
        else{
            alert("Formulário enviado com sucesso!");
        }

        function validateNameForm(val){

            var amount = val.split(' ').length;
            var nameStr = val.split(' ')

            if(amount >= 2){
                for(var i = 0; i < amount; i++){
                    if(!nameStr[i].match(/^[A-Z]{1}[a-z]{1,}$/)){
                        return false;
                    }
                }
            }
            else{
                return false;
            }
        }

        function validateEmailForm(val){

            if(!val.match(/^([A-Za-z0-9.-_]{1,})+@+([a-zA-Z.]{1,})$/)){
                return false;
            }
        }

        function validateTelForm(val){

            if(!val.match(/^\([0-9]{2}\)[' '][0-9]{5}-[0-9]{4}$/)){
                return false;
            }
        }
    });
   
});

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '50px',
    duration: 2000,
    delay: 100,
});

sr.reveal('.img-home', {delay: 200});
sr.reveal('.name-profile', {delay: 250});
sr.reveal('.work-profile', {delay: 300});
sr.reveal('.social-single', {interval: 20, delay: 350});
sr.reveal('.cv', {delay: 400});

sr.reveal(".title-about", {delay: 250, distance: '30px'});
sr.reveal('.img-about', {delay: 200});
sr.reveal('.p', {delay: 300, distance: '20px'});

sr.reveal(".title-skills", {delay: 200});
sr.reveal(".title-singular", {delay: 250});
sr.reveal('.left', {interval: 100, delay: 300, origin: 'left', distance: '30px'});
sr.reveal('.right', {interval: 100, delay: 300, origin: 'right', distance: '30px'});

sr.reveal(".title-projects", {delay: 200});
sr.reveal('.project-single', {interval:50, delay: 150});
sr.reveal('.more-projects', {delay: 250});

sr.reveal(".title-contact", {delay: 200,  distance: '30px'});
sr.reveal('.inputForm', {interval: 50, delay: 250,  distance: '30px'});
/*==========================================================*/

var typed = new Typed('.work', {
    strings: ["Front-End", "Back-End", "Web", "Full Stack"],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 1000,
    loop: true
});

var p = new Typed('.name-profile > span', {
    strings: ['Iegler'],
    typeSpeed: 300,
    backSpeed: 300,
    loop: true
});

/*===============================================================*/

