$(document).ready(function() {
    $(".choose_to_token").click(function (e) {
        $("#to_token").html($(this).attr('data-name'))
        $("#token_type").val($(this).attr('data-type'))
        $('body').removeClass("modal-to_modal");
    })
    $(".meta_mask_connect").click(function (e) {
        $('body').addClass("modal-metamask");
        
    })

    // $(".choose_from_token").click(function (e) {
    //     $("#from_token").html($(this).attr('data-name'))
    //     $('body').removeClass("modal-open");
    // })
    $('header .right img.tx-list-icon').click(function(e) {
        e.stopPropagation();
        $('body').toggleClass("show");
    });

    $('ul.left-menu li').click(function(e) {
        e.stopPropagation();
        $('body').toggleClass("show");
    });

    $('body').click(function(e) {
        $('button.tablinks').removeClass('active');
    });

    $('.chains span').click(function() {
        $('.chains span').removeClass('active');
        $(this).addClass('active'); 
    });

    // $('.select_from_token').click(function() {
    //     $('body').addClass("modal-open");
    // });
    // $('.select_to_token').click(function() {
    //     $('body').addClass("modal-to_modal");
    // });
    $('.setting-group img').click(function() {
        $('body').addClass("modal-open1");
    });
    
    $('.custom-modal .modal-content .header img.close').click(function() {
        $('body').removeClass("modal-open");
        $('body').removeClass("modal-open1");
        $('body').removeClass("modal-to_modal");
        $('body').removeClass("modal-metamask");
        $('body').removeClass("modal-sucess_modal");
    });

    $('.risk-tip img.close').click(function() {
        $('.risk-tip').toggleClass("d-none");
    });

    
    $(window).on('load', function () {
        $("#overlay").fadeOut(300);
      })
});
