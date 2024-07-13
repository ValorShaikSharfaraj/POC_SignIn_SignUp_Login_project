import toast from 'react-hot-toast';

// validate login page username
export async function usernameValidatevalues(values) {
  const errors = usernameVerify({}, values);

  return errors;
}


// validate username

function usernameVerify(error = {}, values) {
  if (!values.username) {
    error.username = toast.error('Username required...!');
  } else if (values.username.includes(" ")){
    error.username = toast.error('Invalid Username...!');
  }

  return error;
}

//validate password
export async function passwordValidateValues(values) {
  const errors = passwordVerify({}, values);

  return errors
}

//validate password 

function passwordVerify(error = {}, values) {
  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  if (!values.password) {
    error.password = toast.error('Password required...!');
  } else if (values.password.includes(" ")){
    error.password = toast.error('Wrong Password...!');
  } else if (values.password.length < 4) {
    error.password = toast.error('Password must be more than 4 characters!');
  } else if (!specialChars.test(values.password)) {
    error.password = toast.error('Password must have speacial characters!');
  }

  return error;
}

// Validate reset password

export async function resetPasswordValidate(values) {
  const errors = passwordVerify({}, values);

  if (values.password !== values.confirmPassword){
    errors.exist = toast.error('Password not matching...!')
  }

  return errors
}