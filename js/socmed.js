/* Inspired by Mehmet Guler at https://codepen.io/mehmetgulerxyz/pen/XqqzVy 
& Benjamin Vilina at https://codepen.io/BenjaminVilina/pen/XJwPEM */

var contentArr = [
    {title: 'company website', href: ''},
    {title: 'github', href: 'https://github.com/Afante-Studios-AGC'},
    {title: 'codepen', href: ''},
    {title: 'facebook', href: 'https://www.facebook.com/astroxpofficial'},
    {title: 'google+', href: ''},
    {title: 'twitter', href: 'https://twitter.com/astroxpofficial'},
    {title: 'discord', href: 'https://discord.gg/astroxpofficial'},
    {title: 'instagram', href: ''}
  ]
  
  let instagramColor = 'radial-gradient(circle at 35% 90%, rgb(254, 197, 100), transparent 50%), radial-gradient(circle at 0px 140%, rgb(254, 197, 100), transparent 50%), radial-gradient(at 0px -25%, rgb(82, 88, 207), transparent 50%), radial-gradient(at 20% -50%, rgb(82, 88, 207), transparent 50%), radial-gradient(at 100% 0px, rgb(137, 61, 194), transparent 50%), radial-gradient(at 60% -20%, rgb(137, 61, 194), transparent 50%), radial-gradient(at 100% 100%, rgb(217, 49, 122), transparent), rgba(0, 0, 0, 0) linear-gradient(rgb(101, 89, 202), rgb(188, 49, 143) 30%, rgb(227, 63, 95) 50%, rgb(247, 118, 56) 70%, rgb(254, 198, 109) 100%)';
  
  var items = $('.social-item');
  var container = $('.social-container');
  var title = $(".social-title");
  var link = $('.link');
  
  var prevElement = null;
  
  items.on('mouseenter', function(e) {
    var itemTrigger = $(this);
    
    // only trigger anim when diff item
    if(this !== prevElement) {
      prevElement = this;
  
      var data = contentArr[$(e.currentTarget).attr('id')];
      var getTitle = data.title;
      title.text(getTitle);
      link.attr('href', data.href).addClass('link--visibility')
  
      items.removeClass('current');
      itemTrigger.addClass('current');
  
      var ripple = $("<span unselectable='on' class='ripple'></span>");
      container.append(ripple);
  
      var x = e.pageX - container.offset().left - ripple.width()/2;
      var y = e.pageY - container.offset().top - ripple.height()/2;
      
       let iconColor = getIconColor(getTitle, this);
  
      ripple.css({
        'background': iconColor,
        width: 0,
        height: 0,
        left: x + 'px',
        top: y + 'px',
        'margin-left': 0,
        'margin-top': 0,
      });
  
      // Set Ripple Boundaries
      var r = Math.max(container.outerWidth(), container.outerHeight());
  
      ripple.animate({
        width: (r * 2),
        height: (r * 2),
        'margin-left': -r,
        'margin-top': -r
      }, {
        duration: 800,
        easing: "easeInOutCubic",
        queue: false,
        complete: function() {
          ripple.parent().css('background', iconColor);
  
          if(getTitle != 'instagram') {
            ripple.detach();
          } else {
            ripple.fadeOut(500);
            setTimeout(function() {
              ripple.detach();
            }, 500);
          }
        }
      });
  
      colorInstagram(getTitle);
    }
  });
  
  function getIconColor(getTitle, that) {
    if(getTitle === 'instagram') {
      return instagramColor;
    }
    // if not instagram icon, return bg-color of the icon
    return $(that).css('background-color');
  }
  
  function colorInstagram(getTitle) {
    if(getTitle === 'instagram') {
      setTimeout(function() {$('.instagram-color').css('background', 'transparent')}, 164);
    }
    else if($('.instagram-color').css('background-color') == 'rgba(0, 0, 0, 0)' || 'transparent') {
      $('.instagram-color').css('background', instagramColor);
    }
  }