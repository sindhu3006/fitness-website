document.getElementById('registerForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    try {
      const response = await axios.post('/register', { username, email, password });
      alert('Registration successful!');
    } catch (error) {
      alert('Error: ' + error.response.data.message);
    }
  });
  