/* 
Rupak Kannan Jan 25 2021
*/

// email form
//You will see ctx in this script. It is another way of saying 'context'
//create a canvas object fro HTML element


    var frmvalidator  = new Validator("contactform");
    frmvalidator.addValidation("name","req","Please provide your name");
    frmvalidator.addValidation("email","req","Please provide your email");
    frmvalidator.addValidation("email","email",
      "Please enter a valid email address");