$(document).ready(function(){
  
  var sellers = [
    { name: "Rachel Chasteen", artistUrl: "http://www.rachelchasteen.com/", photo: "rachelc.png"},
    { name: "Deniz Ozaslan Sikora", artistUrl: "http://www.dkdknit.com", photo: "denizs.png"},
    { name: "Barbara Tomkins", artistUrl: "https://www.etsy.com/shop/ForagedDecor", photo: "barbarat.png"},
    { name: "Sara Morris", artistUrl: "http://www.notedcandles.com/", photo: "saram.png"},
    { name: "Jennifer Carland (Carland Cartography)", artistUrl: "http://www.carlandcartography.com/", photo: "jenniferc.png"},
    { name: "Shariann Lewitt", artistUrl: "", photo: "shariannl.png"},
    { name: "Elnara Eynullayeva", artistUrl: "http://www.dilauranaturals.com", photo: "elnarae.png"},
    { name: "Kimberley Pendleton", artistUrl: "https://www.etsy.com/shop/TheWaughdrobe", photo: "kimberleyp.png"},
    { name: "Elaine Kassam (eKnits4U)", artistUrl: "http://www.etsy.com/shop/eKnits4U", photo: "elainek.png"},
    { name: "Maya Yair", artistUrl: "http://cargocollective.com/mayaya", photo: "mayay.png"},
    { name: "Emily Garfield", artistUrl: "http://www.emilygarfield.com/", photo: "emilyg.png"},
    { name: "Will Weygint", artistUrl: "http://wweygint.portfoliobox.io", photo: "willw.png"},
    { name: "Susan Fudim", artistUrl: "http://www.susanfudim.com", photo: "susanf.png"},
    { name: "Bessie Blum", artistUrl: "http://www.square-bears.com/", photo: "bessieb.png"},
    { name: "Deborah Bix", artistUrl: "http://debixart.com", photo: "deborahb.png"},
    { name: "Lisa Hayden", artistUrl: "http://www.meltedtheory.com", photo: "lisah.png"},
    { name: "Laura Wilhelm", artistUrl: "http://www.collaborativeartworks.org/", photo: "lauraw.png"},
    //{ name: "Jodie Dow", artistUrl: "", photo: "jodied.png"}, /************************* NO PHOTO OR WEBSITE **************/
    { name: "Rusty & Ingrid Creative Company", artistUrl: "http://www.rustyandingrid.com", photo: "rustyk.png"},
    { name: "Dominique Custeau", artistUrl: "https://www.etsy.com/shop/creationdominique?ref=profile_shopname", photo: "dominiquec.png"},
    { name: "Miss Mantis", artistUrl: "http://jgklausner.com/", photo: "judithk.png"},
    { name: "Becky Carpenter", artistUrl: "http://rebecky.net/", photo: "beckyc.png"},
    { name: "yeiou {paper objects}", artistUrl: "http://www.yeiou.com/", photo: "abigailm.png" },
    { name: "Sarah Morrison", artistUrl: "http://tashari.org/", photo: "sarahm.png" },
    { name: "Hacker Creations", artistUrl: "http://www.melissasglick.com/", photo: "melissag.png" },
    { name: "Barbara Marder", artistUrl: "http://barbaramarder.com", photo: "barbaram.png" },
    { name: "Seeds of Joi", artistUrl: "http://barbaramarder.com", photo: "chiey.png" },
    { name: "Winter Hill Jewelry", artistUrl: "https://www.etsy.com/shop/WinterHillJewelry", photo: "christ.png" },
    { name: "Suzanne Ahrens", artistUrl: "http://verdecosi.com/", photo: "suzannea.png" },
    { name: "Saphron", artistUrl: "https://www.behance.net/faetea", photo: "allisons.png" },
    { name: "Miles Donovan", artistUrl: "https://www.etsy.com/shop/TheDailyRobot", photo: "milesd.png" }
    //{ name: "Steve Pomeroy", artistUrl: "http://staticfree.info/", photo: "stevep.png" }
    //{ name: "Liz Pixel", artistUrl: "", photo: "lizp.png" } /************************* NO PHOTO OR WEBSITE **************/
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
