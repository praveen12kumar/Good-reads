const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z\d])[A-Za-z\d@$!%*?&#^]{8,}$/;

function passwordValidator(string) {
    if(!regex.test(string)) {
        return false;
    }
    return true;
}

export default passwordValidator;