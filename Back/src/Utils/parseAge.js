function parseAge(dateOfBirth){
    const yearOfBirth = new Date(dateOfBirth).getFullYear();
    const age = new Date().getFullYear() - yearOfBirth;
    return age;
}

module.exports = parseAge;