$(document).ready(function(){
  
    $.validator.setDefaults({
    errorClass: 'help-block',
    highlight: function(element) {
      $(element)
        .closest('.form-group')
        .addClass('has-error');
    },
    unhighlight: function(element) {
      $(element)
        .closest('.form-group')
        .removeClass('has-error');
    }
});

  $.validator.addMethod('strongPassword', function(value, element) {
    return this.optional(element) 
      || value.length >= 6
      && /\d/i.test(value)
      && /[a-z]/i.test(value);
}, 'Your password must be at least 6 characters long and contain at least one number and one char\'.')
  $(".regform").validate({
  	rules:{
  		email:{
            required:true,
            email:true
  		},
  		password:{
         required:true,
         strongPassword:true
  		},
  		repassword:{
  			required:true,
  			equalTo:"#passwrd"
  		},
  		fname:{
  			required:true,
  			lettersonly:true,
  			nowhitespace:true
  		},
  		lname:{
  			required:true,
  			lettersonly:true,
  			nowhitespace:true
  		}

  	},
  		messages:
  		{
  			email:{
  				required:" *required field",
  				email:"Please enter correct email"
  			}
  		}
  });
});