export const Validation = (value) => {

    const errors = {}

    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;
    const phone_number = /^[0-9]{10}$/

    if (value.name === " ") {
        errors.message = "Name is Require"
    }

    if (value.email === " ") {
        errors.message = "Email Is Require"
    }else if(!email_pattern.test(value.email)){
        errors.message = "Enter email Properly"
    }

    if(value.phoneNumber === ""){
        errors.message = "Name is Require"
    }else if(!phone_number.test(value.phoneNumber)){
        errors.message = "Enter a valid phone number"
    }

    return errors
}