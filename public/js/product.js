function initIziAlert(title) {
  // clear any previous instance of the alert modal
  $("#modal-alert").iziModal('destroy')
  // initialize a fresh alert modal with title passed through
  $("#modal-alert").iziModal({
    title,
    timeout: 3000,
    timeoutProgressbar: true,
    timeoutProgressbarColor: "rgba(255,255,255,0.5)",
    width: 300,    
    onClosing: function () {  // reloads page
      document.location.reload();
    },
    
  });
  $("#modal-alert").iziModal('open')
}
// Error handler
function initIziError(title) {
  // clear any previous instance of the alert modal
  $("#modal-alert").iziModal('destroy')
  // initialize a fresh alert modal with title passed through
  $("#modal-alert").iziModal({
    title,
    timeout: 4000,
    timeoutProgressbar: true,
    timeoutProgressbarColor: "rgba(255,255,255,0.5)",
    headerColor: '#BD5B5B',
    width: 300,    
    // onClosing: function () {  // reloads page
    //   document.location.reload();
    // },
    
  });
  $("#modal-alert").iziModal('open')
}

const addToCartFormHandler = async (event) => {
    // Stop the browser from submitting the form so we can do so with JavaScript
    event.preventDefault();
  
    // Gather the data from the form elements on the page
    const productId = document.querySelector('#productId').getAttribute('data-id');
    const size = document.querySelector('#size').value.trim();
    const quantity = document.querySelector('#quantity').value.trim();
    
    if (size && quantity) {
      const response = await fetch(`/api/cart`, {
        method: 'POST',
        body: JSON.stringify({ productId, size, quantity }),
        headers: { 'Content-Type': 'application/json' },
    
      });
      // console.log(`here here`, response);
      if (response.ok) {
        // document.location.replace('/');
        initIziAlert('added to cart')
      } else {
        console.error(response);
        initIziError(response.statusText);
      }
    }
  };
  
  document
    .querySelector('#addToCartForm')
    .addEventListener('submit', addToCartFormHandler);
  