// function that reinitializes an alert modal
//  with the text passed through
function initIziAlert(title) {
  // clear any previous instance of the alert modal
  $("#modal-alert").iziModal('destroy')
  // initialize a fresh alert modal with title passed through
  $("#modal-alert").iziModal({
    title,
    timeout: 1500,
    timeoutProgressbar: true,
    timeoutProgressbarColor: "rgba(255,255,255,0.5)",
    width: 300,    
    onClosing: function () {  // reloads page
      document.location.reload();
    },
    
  });
  $("#modal-alert").iziModal('open')
}
// force the file to wait for page to load
// then jQuery can be used
window.onload = function () {
// init login modal
  $("#modal-custom").iziModal({
    tranitionOut: "comingOut",
  });


// click events for login/signup header
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
// click events for signing up
  $("#modal-custom").on("submit", "#signup-form", async function (event) {
    event.preventDefault();
    try {
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
    } catch (err) {
      console.error(err);
    }
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