function sendEmail(event) {
  event.preventDefault();

  const email_1 = 'drywallkingston@outlook.com'; // mailto
  const email_2 = 'J3ldrywall@gmail.com'; // cc
  
  let optional_email_3 = undefined;
  optional_email_3 = 'j3lconstruction@gmail.com'; // cc
  let optional_email_4 = undefined;
  // optional_email_4 = 'earnanswers@outlook.com';


  var name = document.getElementById('contact_name').value;
  var email = document.getElementById('contact_email').value;
  var phone = document.getElementById('contact_phone').value;
  var message = document.getElementById('contact_message').value;

  console.log(name, email)
  // console.log(phone, message)

  // Build the recipient list
  let recipientList = email_1;  
  let ccList = email_2;

  if (optional_email_3) {
    ccList += ',' + optional_email_3;
  }

  if (optional_email_4) {
    ccList += ',' + optional_email_4;
  }

  // Construct the mailto link
  var mailtoLink = 'mailto:' + recipientList +
    '?cc=' + encodeURIComponent(ccList) +
    '&subject=' + encodeURIComponent('Drywall Kingston: Quote Request') +
    '&body=' + encodeURIComponent(
      'Name: ' + name + '\n' +
      'Phone: ' + phone + '\n' +
      'Email: ' + email + '\n' +
      'Message: ' + message
    );

  // Open the mailto link in the default email client
  window.location.href = mailtoLink;
  return;
}

const form = document.getElementById("tmContactForm");
console.log(form)
form.addEventListener("submit", sendEmail);