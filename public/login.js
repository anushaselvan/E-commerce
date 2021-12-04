// const $ = require('jquery');
function initIziAlert(title) {
  $("#modal-alert").iziModal('destroy')
  $("#modal-alert").iziModal({
    title,
    timeout: 1500,
    timeoutProgressbar: true,
    timeoutProgressbarColor: "rgba(255,255,255,0.5)",
    width: 300,
    onClosing: function () {
      document.location.reload();
    },
    
  });
  $("#modal-alert").iziModal('open')
}
window.onload = function () {

  $("#modal-custom").iziModal({
    tranitionOut: "comingOut",
  });


  // $("#modal-alert").iziModal({
  //   title: "Welcome Back",
  //   timeout: 1500,
  //   timeoutProgressbar: true,
  //   timeoutProgressbarColor: "rgba(255,255,255,0.5)",
  //   width: 300,
  //   onClosing: function () {
  //     document.location.reload();
  //   },
  // });
  // $(document).on('click', '#modal', function (event) {
  //   event.preventDefault();
  //   console.log('clicked');
  //   // $('#modal').iziModal('setZindex', 99999);
  //   // $('#modal').iziModal('open', { zindex: 99999 });
  //   // $('#modal').iziModal('open'//, {
  //   //    transitionIn: 'bounceInDown',
  //   //    transitionOut: 'bounceOutDown' // TransitionOut will be applied if you have any open modal.
  //   // }
  //   // );
  // });

  //

  $("#modal-custom").on("click", "header a", function (event) {
    event.preventDefault();
    const index = $(this).index();
    $(this).addClass("active").siblings("a").removeClass("active");
    $(this)
      .parents("div")
      .find("section")
      .eq(index)
      .removeClass("hide")
      .siblings("section")
      .addClass("hide");

    if ($(this).index() === 0) {
      $("#modal-custom .iziModal-content .icon-close").css(
        "background",
        "#ddd"
      );
    } else {
      $("#modal-custom .iziModal-content .icon-close").attr("style", "");
    }
  });

  $("#modal-custom").on("submit", "#signup-form", async function (event) {
    console.log(`clicked to signup`);
    event.preventDefault();
    // try {
    const name = document.querySelector("#username-signup").value.trim();
    const email = document.querySelector("#email-signup").value.trim();
    const password = document.querySelector("#password-signup").value.trim();

    if (name && email && password) {
      const response = await fetch("/api/users/signup", {
        method: "POST",
        body: JSON.stringify({ name, email, password }),
        headers: { "Content-Type": "application/json" },
      });
      console.log(`fetch response: `, response);
      if (response.ok) {
        $("#modal-custom").iziModal("close");
        initIziAlert('Welcome')
      } else {
      }
    } else {
      const fx = "wobble", //wobble shake
        $modal = $(this).closest(".iziModal");

      if (!$modal.hasClass(fx)) {
        $modal.addClass(fx);
        setTimeout(function () {
          $modal.removeClass(fx);
        }, 1500);
      }
    }
    // } catch (err) {
    //   console.error(err);
    // }
  });

  $("#modal-custom").on("submit", "#login-form", async function (event) {
    console.log(`clicked login`);

    event.preventDefault();
  
    const email = document.querySelector("#login-email").value.trim();
    const password = document.querySelector("#login-password").value.trim();

    if (email && password) {

      const response = await fetch("/api/users/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { "Content-Type": "application/json" },
      });
      console.log(response);
      if (response.ok) {
        $("#modal-custom").iziModal("close");
        initIziAlert('Welcome Back')
        // document.location.reload();
        // alert(`logged in`);
      } else {
        // alert(`sorry not logged in`);
        const fx = "wobble", //wobble shake
          $modal = $(this).closest(".iziModal");

        if (!$modal.hasClass(fx)) {
          $modal.addClass(fx);
          setTimeout(function () {
            $modal.removeClass(fx);
          }, 1500);
        }
      }
    } else {
      const fx = "wobble", //wobble shake
        $modal = $(this).closest(".iziModal");

      if (!$modal.hasClass(fx)) {
        $modal.addClass(fx);
        setTimeout(function () {
          $modal.removeClass(fx);
        }, 1500);
      }
    }
  });
};
/*


$('#modal').iziModal('setWidth', 800); // '800px', 100%, '100vw'...


$(document).on('click', '.trigger', function (event) {
    event.preventDefault();
    // $('#modal').iziModal('setZindex', 99999);
    // $('#modal').iziModal('open', { zindex: 99999 });
    $('#modal').iziModal('open');
});

const loginFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (email && password) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the profile page
        document.location.replace('/profile');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (name && email && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ name, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);
  
  document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);
  

    $(function(){

      $("#modal-custom").iziModal({
          overlayClose: false,
          overlayColor: 'rgba(0, 0, 0, 0.6)'
      });
    
      
    
      $("#modal-custom").on('click', 'header a', function(event) {
          event.preventDefault();
          var index = $(this).index();
          $(this).addClass('active').siblings('a').removeClass('active');
          $(this).parents("div").find("section").eq(index).removeClass('hide').siblings('section').addClass('hide');
    
          if( $(this).index() === 0 ){
              $("#modal-custom .iziModal-content .icon-close").css('background', '#ddd');
          } else {
              $("#modal-custom .iziModal-content .icon-close").attr('style', '');
          }
      });
    
      $("#modal-custom").on('click', '.submit', function(event) {
          event.preventDefault();
    
          var fx = "wobble",  //wobble shake
              $modal = $(this).closest('.iziModal');
    
          if( !$modal.hasClass(fx) ){
              $modal.addClass(fx);
              setTimeout(function(){
                  $modal.removeClass(fx);
              }, 1500);
          }
      }); 
      
    })
      */
