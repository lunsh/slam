$(document).ready(function(){

  var sellers = [
    { name: "Deniz Ozaslan Sikora", artistUrl: "http://www.dkdknit.com", photo: "denizs.jpg"},
    { name: "Barbara Tomkins", artistUrl: "https://www.etsy.com/shop/ForagedDecor", photo: "barbarat.jpg"},
    { name: "Jennifer Carland (Carland Cartography)", artistUrl: "http://www.carlandcartography.com/", photo: "jenniferc.jpg"},
    { name: "Shariann Lewitt", artistUrl: "", photo: "shariannl.jpg"},
    { name: "Elnara Eynullayeva", artistUrl: "http://www.dilauranaturals.com", photo: "elnarae.jpg"},
    { name: "Kimberley Pendleton", artistUrl: "https://www.etsy.com/shop/TheWaughdrobe", photo: "kimberleyp.jpg"},
    { name: "Elaine Kassam (eKnits4U)", artistUrl: "http://www.etsy.com/shop/eKnits4U", photo: "elainek.jpg"},
    { name: "Maya Yair", artistUrl: "http://cargocollective.com/mayaya", photo: "mayay.jpg"},
    { name: "Emily Garfield", artistUrl: "http://www.emilygarfield.com/", photo: "emilyg.jpg"},
    { name: "Will Weygint", artistUrl: "http://wweygint.portfoliobox.io", photo: "willw.jpg"},
    { name: "Susan Fudim", artistUrl: "http://www.susanfudim.com", photo: "susanf.jpg"},
    { name: "Bessie Blum", artistUrl: "http://www.square-bears.com/", photo: "bessieb.jpg"},
    { name: "Deborah Bix", artistUrl: "http://debixart.com", photo: "deborahb.jpg"},
    { name: "Lisa Hayden", artistUrl: "http://www.meltedtheory.com", photo: "lisah.jpg"},
    { name: "Laura Wilhelm", artistUrl: "http://www.collaborativeartworks.org/", photo: "lauraw.jpg"},
    //{ name: "Jodie Dow", artistUrl: "", photo: "jodied.jpg"}, /************************* NO PHOTO OR WEBSITE **************/
    { name: "Rusty & Ingrid Creative Company", artistUrl: "http://www.rustyandingrid.com", photo: "rustyk.jpg"},
    { name: "Dominique Custeau", artistUrl: "https://www.etsy.com/shop/creationdominique?ref=profile_shopname", photo: "dominiquec.jpg"},
    { name: "Miss Mantis", artistUrl: "https://www.etsy.com/shop/CuriousCryptidCurios", photo: "judithk.jpg"},
    { name: "Becky Carpenter", artistUrl: "http://rebecky.net/", photo: "beckyc.jpg"},
    { name: "yeiou {paper objects}", artistUrl: "http://www.yeiou.com/", photo: "abigailm.jpg" },
    { name: "Sarah Morrison", artistUrl: "http://tashari.org/", photo: "sarahm.jpg" },
    { name: "Hacker Creations", artistUrl: "http://www.melissasglick.com/", photo: "melissag.jpg" },
    { name: "Barbara Marder", artistUrl: "http://barbaramarder.com", photo: "barbaram.jpg" },
    { name: "Seeds of Joie", artistUrl: "https://www.etsy.com/people/SeedsOfJoie", photo: "chiey.jpg" },
    { name: "Winter Hill Jewelry", artistUrl: "https://www.etsy.com/shop/WinterHillJewelry", photo: "christ.jpg" },
    { name: "Suzanne Ahrens", artistUrl: "http://verdecosi.com/", photo: "suzannea.jpg" },
    { name: "Saphron", artistUrl: "https://www.behance.net/faetea", photo: "allisons.jpg" },
    { name: "Miles Donovan", artistUrl: "https://www.etsy.com/shop/TheDailyRobot", photo: "milesd.jpg" },
    //{ name: "Steve Pomeroy", artistUrl: "http://staticfree.info/", photo: "stevep.jpg" }
    { name: "Liz Pixel", artistUrl: "http://www.lizpixel.com/", photo: "lizp.jpg" }
  ];
  
  $('.about-info').find('h1').addClass('fadeInDown');
  $('.about-info').find('p').addClass('fadeInDown');
 
  $(document).scroll(function() {
    if ( $(document).scrollTop() >= 300) {
      $('.header-wrapper').addClass('header-fixed');
    } else {
      $('.header-wrapper').removeClass('header-fixed');
    }
  });
  $('.about').waypoint(function() {
      $('.about').removeClass('fadeOut').addClass('fadeInLeft');
  }, { offset: '50%' });
  $('.artists-section').waypoint(function() {
      $('.artists-section').removeClass('fadeOut').addClass('fadeInRight');
  }, { offset: '50%' });
  
  
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - $('.header-wrapper').outerHeight()
        }, 1000);
        return false;
      }
    }
  });
  
  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
  }
  
  var artistTemplate   = $("#artist-template").html();
  var template = Handlebars.compile(artistTemplate);
  var artistsList = "";
  $.each(shuffleArray(sellers), function(index, sellerObj) {
    console.log(sellerObj);
    artistsList += template(sellerObj);
  });
  $('.artists-list').html(artistsList);
 
});
