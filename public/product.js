const addToCartFormHandler = async (event) => {
    // Stop the browser from submitting the form so we can do so with JavaScript
    event.preventDefault();
  
    // Gather the data from the form elements on the page
    const size = document.querySelector('#size').value.trim();
    const quantity = document.querySelector('#quantity').value.trim();
  
    if (size && quantity) {
      // Send the e-mail and password to the server
      const response = await fetch('/api/Cart', {
        method: 'POST',
        body: JSON.stringify({ size, quantity }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to log in');
      }
    }
  };
  
  document
    .querySelector('#addToCartForm')
    .addEventListener('submit', addToCartFormHandler);
  