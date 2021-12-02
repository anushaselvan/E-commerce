var modal = $('#modal').iziModal();


$(document).on('click', '#modal', function (event) {
  event.preventDefault();
  // $('#modal').iziModal('setZindex', 99999);
  // $('#modal').iziModal('open', { zindex: 99999 });
  $('#modal').iziModal('open', {
    transitionIn: 'bounceInDown',
    transitionOut: 'bounceOutDown' // TransitionOut will be applied if you have any open modal.
});
});

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