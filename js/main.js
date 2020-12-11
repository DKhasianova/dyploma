$(document).ready(() => {

    $('.workers').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: false,
        arrows: true,
        responsive: [
            {
                breakpoint: 1201,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false,
                    arrows: true
                }
            }, {
                breakpoint: 780,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: true
                }
            },
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
let parent = document.querySelector('.choose')
    let timeSheet = parent.children;


    $(".choose ").click((e) => {
        let currentElement = $(e.target);
        $(".choose").removeClass("active");
        currentElement.addClass("active");
    });

    $(".day").click((e) => {
        let currentElement = $(e.target);
        $(".day").removeClass("active");
        currentElement.addClass("active");
    });


    $('.btn-rose').click(() => {
        $('#pop-up').css('display', 'flex')
        $('#open-pop-up').css('display','block');
    });
    $('#reservation-canceled, #pop-up').click((e) => {
        if (e.target.id === 'pop-up' || e.target.id === 'reservation-canceled-close') {
            $('#pop-up').hide();
            $('#open-pop-up').hide()
        }
    });

    $('#call-me-canceled, #call-me').click((e) => {
        if (e.target.id === 'call-me' || e.target.id === 'call-me-canceled-close') {
            $('#call-me').hide();
        }
    });
    $('#call-btn >button').click(() => {
        let name = $('.name')
        let phone = $('.phone')
        let parent = document.querySelector('.days')
        let daySheet = parent.children
        if (name.val() && phone.val() && timeSheet && daySheet  ) {
            $.ajax({
                type: 'post',
                url: 'mail.php',
                data: 'name=' + name.val() + '&phone=' + phone.val()  + timeSheet.active + daySheet.active ,
                success: () => {
                    $('#reservation-sent').show()
                    $('#reservation-content').hide()
                },
                error: () => {
                    $('#pop-up').hide();
                    $('#open-pop-up').hide();
                    alert('Ошибка бронирования. Свяжитесь, пожалуйста, по номеру телефона');
                }
            });
        } else {
            $('#reserve-error').show()
            if ((name.val() === '')) {
                $('.name').css("border-bottom", "red solid 1px")
            }
            if ((phone.val() === '')) {
                $('.phone').css("border-bottom", "red solid 1px")
            }
        }
    });
    $('#btn-form-id >button').click(() => {
        let surname = $('.surname')
        let contact = $('.contact')

        if (surname.val() && contact.val()) {
            //  $('#reservation-sent').show()
            //  $('#reservation-content').hide()
            $.ajax({
                type: 'post',
                url: 'mail.php',
                data: 'surname=' + surname.val() + '&contact=' + contact.val(),
                success: () => {
                    $('#reservation-sent').show()

                },
                error: () => {
                    alert('Ошибка бронирования. Свяжитесь, пожалуйста, по номеру телефона');
                }
            });
        } else {
            $('.reserve-form-error').show()
            if ((surname.val() === '')) {
                $('.surname').css("border-bottom", "red solid 1px")
            }
            if ((contact.val() === '')) {
                $('.contact').css("border-bottom", "red solid 1px")
            }
        }
    });
    $('#btn-call-me>button').click(() => {
        let call = $('.call')

        if (call.val()) {
            //  $('#reservation-sent').show()
            //  $('#reservation-content').hide()
            $.ajax({
                type: 'post',
                url: 'mail.php',
                data: 'call=' + call.val(),
                success: () => {
                    $('#call-me-sent').show()
                    $('#input-call-me').hide()
                    $('#call-me-text').hide()

                },
                error: () => {
                    alert('Ошибка бронирования. Свяжитесь, пожалуйста, по номеру телефона');
                    $('#call-me').hide()
                }
            });
        } else {
            $('.reserve-call-me-error').show()
            if ((call.val() === '')) {
                $('.call').css("border-bottom", "red solid 1px")
            }
        }
    });
    $('.order-btn').click(() => {
        $('#call-me').css('display', 'flex');
    });
    $('.btn-footer').click(() => {
        $('#call-me').css('display', 'flex');
    });

    $('#burger').click(() => {
        $('#header').toggleClass('menu-open');
    });
    $('#header #menu ul li').click(() => {
        $('#header').removeClass('menu-open');
    });
    $('#schedule .days .day.two').click(() => {
        $('.day-two').show()
        $('.day-seven').hide()
        $('.day-one').hide()
        $('.day-three').hide()
        $('.day-four').hide()
        $('.day-five').hide()
        $('.day-six').hide()
    });

    $('#schedule .days .day.one').click(() => {
        $('.day-one').show()
        $('.day-seven').hide()
        $('.day-two').hide()
        $('.day-three').hide()
        $('.day-four').hide()
        $('.day-five').hide()
        $('.day-six').hide()
    });

    $('#schedule .days .day.three').click(() => {
        $('.day-three').show()
        $('.day-seven').hide()
        $('.day-one').hide()
        $('.day-two').hide()
        $('.day-four').hide()
        $('.day-five').hide()
        $('.day-six').hide()
    });

    $('#schedule .days .day.four').click(() => {
        $('.day-four').show()
        $('.day-seven').hide()
        $('.day-two').hide()
        $('.day-three').hide()
        $('.day-one').hide()
        $('.day-five').hide()
        $('.day-six').hide()
    });
    $('#schedule .days .day.five').click(() => {
        $('.day-five').show()
        $('.day-seven').hide()
        $('.day-one').hide()
        $('.day-three').hide()
        $('.day-four').hide()
        $('.day-two').hide()
        $('.day-six').hide()
    });
    $('#schedule .days .day.six').click(() => {
        $('.day-six').show()
        $('.day-seven').hide()
        $('.day-one').hide()
        $('.day-three').hide()
        $('.day-four').hide()
        $('.day-five').hide()
        $('.day-two').hide()
    });
    $('#schedule .days .day.seven').click(() => {
        $('.day-seven').show()
        $('.day-two').hide()
        $('.day-one').hide()
        $('.day-three').hide()
        $('.day-four').hide()
        $('.day-five').hide()
        $('.day-six').hide()
    });

});