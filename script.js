function submitForm(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    
    var form = document.querySelector('form');
    var formData = new FormData(form);
    var xhr = new XMLHttpRequest();
    
    xhr.open("POST", form.action, true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        // Handle the successful response, if needed
        console.log(xhr.responseText);
      }
      alert("response shared");
      form.reset();
    };
    
    xhr.send(formData);
  }
  