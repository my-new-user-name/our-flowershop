// JavaScript to handle tab switching

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
  
    // Hide all tab content
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Remove "active" class from all buttons
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the selected tab and mark the button as active
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  // By default, open the "Account" tab when the page loads
  document.addEventListener('DOMContentLoaded', function() {
    document.getElementsByClassName("tablinks")[0].click();
  });
  
  // Handling form submission (basic alert for now)
  document.getElementById('account-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Account settings saved!');
  });
  
  document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Sign Up successfully! Log in account');
  });
  
  
  