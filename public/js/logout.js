
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

const logout = async () => {
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      initIziAlert('Logging Out')
    } else {
      initIziAlert(response.statusText);
    }
  };
  
  document
    .querySelector('#logout')
    .addEventListener('click', logout);
  