function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

function addToCart(productName) {
  alert(productName + " added to cart!");
}

function subscribe() {
  const email = document.getElementById("email").value;
  // Basic email regex pattern
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email) {
    alert("Please enter an email address.");
  } else if (!emailPattern.test(email)) {
    alert("Incorrect format. Please enter a valid email address.");
  } else {
    alert("Thank you for subscribing, " + email + "!");
  }
}