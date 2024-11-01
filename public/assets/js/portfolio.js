$(function(){
    $('#Container').mixItUp();

    $('#Cols1').click(function() {
        $('.mix').removeClass('col-lg-4');
        $('.mix').removeClass('col-lg-3');
        $('.mix').removeClass('col-lg-6');
        $('.mix').addClass('col-lg-12');
        $('#Cols1').addClass('active');
        $('#Cols2').removeClass('active');
        $('#Cols3').removeClass('active');
        $('#Cols4').removeClass('active');
    });
    $('#Cols2').click(function() {
        $('.mix').removeClass('col-lg-4');
        $('.mix').removeClass('col-lg-3');
        $('.mix').addClass('col-lg-6');
        $('.mix').removeClass('col-lg-12');
        $('#Cols1').removeClass('active');
        $('#Cols2').addClass('active');
        $('#Cols3').removeClass('active');
        $('#Cols4').removeClass('active');
    });
    $('#Cols3').click(function() {
        $('.mix').addClass('col-lg-4');
        $('.mix').removeClass('col-lg-3');
        $('.mix').removeClass('col-lg-6');
        $('.mix').removeClass('col-lg-12');
        $('#Cols1').removeClass('active');
        $('#Cols2').removeClass('active');
        $('#Cols3').addClass('active');
        $('#Cols4').removeClass('active');
    });
    $('#Cols4').click(function() {
        $('.mix').removeClass('col-lg-4');
        $('.mix').addClass('col-lg-3');
        $('.mix').removeClass('col-lg-6');
        $('.mix').removeClass('col-lg-12');
        $('#Cols1').removeClass('active');
        $('#Cols2').removeClass('active');
        $('#Cols3').removeClass('active');
        $('#Cols4').addClass('active');
    });

    $('#portShow').click(function() {
       $('.portfolio-item-caption').removeClass('d-none');
   });
   $('#portHide').click(function() {
       $('.portfolio-item-caption').addClass('d-none');
   });

    $('#port-show').click(function() {
        if (this.checked) {
            $('.portfolio-item-caption').removeClass('d-none');
        }
        else {
            $('.portfolio-item-caption').addClass('d-none');
        }
    });
});
