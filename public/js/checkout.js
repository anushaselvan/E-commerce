const checkoutFormHandler = async (event) => {
    // Stop the browser from submitting the form so we can do so with JavaScript
    event.preventDefault();
  
    // Display product details, price and quantity from cart
    
      const response = await fetch('/api/cart', {
        method: 'GET',
        body: JSON.stringify({ product_name, product_quantity  }),
        headers: { 'Content-Type': 'application/json' },
      });

  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('checkout.js error');
      }
    };
  
  document
    .querySelector('.checkoutForm')
    .addEventListener('submit', checkoutFormHandler);
  