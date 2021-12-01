const logout = async () => {
  console.log(`clicked`);
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.reload();
      alert(`logged out`);
    } else {
      alert(response.statusText);
    }
  };
  
  document
    .querySelector('#logout')
    .addEventListener('click', logout);
  