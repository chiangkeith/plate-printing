var progressBar, max, value, width;
$(document)
  .ready(function() {

    // var getMax = function() {
    //   return $(document).height() - $(window).height();
    // }

    // var getValue = function() {
    //   return $(window).scrollTop();
    // }

    // progressBar = $('.progress'),
    //   max = getMax(),
    //   value, width;

    // var getWidth = function() {
    //   // Calculate width in percentage
    //   value = getValue();
    //   width = (value / max) * 100;
    //   width = width;
    //   return width;
    // }

    // var setWidth = function() {
    //   console.log(width);
    //   progressBar.progress({
    //     percent: getWidth()
    //   });
    // }

    // $(document).on('scroll', setWidth);
    // $(window).on('resize', function() {
    //   // Need to reset the Max attr
    //   max = getMax();
    //   setWidth();
    // });

    // Reading Progress Indicator
    var updateProgress = function () {
      // calculate values
      var scroll = $(window).scrollTop();
      var height = $(document).height() - $(window).height();
      var percent = Math.round(scroll * 100 / height);

      // update progress count
      $('.progress').progress({
        percent: percent
      });
    }
    updateProgress();

    // toggle logo when scroll
    if($(document).scrollTop() > 140){
      $('.logo.centered').css('display','none');
      $('.logo.item').css('display','flex');
      $('.sharing.item').css('display','flex');
    }else{
      $('.logo.centered').css('display','block');
      $('.logo.item').css('display','none');
      $('.sharing.item').css('display','none');
    }

    $(window).scroll(function(){
      updateProgress();

      // toggle logo when scroll
      if($(document).scrollTop() > 140){
        $('.logo.centered').css('display','none');
        $('.logo.item').css('display','flex');
        $('.sharing.item').css('display','flex');
      }else{
        $('.logo.centered').css('display','block');
        $('.logo.item').css('display','none');
        $('.sharing.item').css('display','none');
      }
    });

    // fix main menu to page on passing
    $('.main.menu').visibility({
      type: 'fixed',
      silent: true
    });
    $('.overlay').visibility({
      type: 'fixed',

      silent: true
    });

    // lazy load images
    $('.image').visibility({
      type: 'image',
      transition: 'vertical flip in',
      duration: 500
    });

    // bind menu button
    $('.openSidebar').click(function() {
      var direction = $(this).data('direction');
      $('.ui.'+direction+'.sidebar')
        .sidebar({
          dimPage: false,
          exclusive: true,
          scrollLock: true,
          transition: 'overlay',
          mobileTransition: 'overlay',
          onVisible: function() {
            $('.ui.'+direction+'.sidebar').scrollLock();
          },
          onHidden: function() {
            $('.ui.'+direction+'.sidebar').scrollLock();
          }
        })
        .sidebar('toggle')
      ;

    });
    $('.closeSidebar').click(function() {
      $(this).parent('.ui.sidebar')
        .sidebar('toggle')
      ;
    });

    $('.openSearchbar').click(function() {
      $('.second-menu').css('display','block');

    });
    $('.closeSearchbar').click(function() {
      $('.second-menu').css('display','none');
    });

    // silent debug messages
    $.site('change setting', 'silent', true);
  });