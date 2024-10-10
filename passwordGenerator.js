/*
Задача 1. Написать программу по генерации пароля определенной длины.
Требования к паролю:
At least 8 characters long but 14 or more is better, максимальная длина 64.
A combination of uppercase letters, lowercase letters, numbers, and symbols.
Not a word that can be found in a dictionary or the name of a person, character, product, or organization.
символы не должны повторяться в пароле
Программа должна иметь возможность копирования пароля в буфер, чтобы в
будущем пользователь смог этот пароль сохранить или вставить в другую программу.
 */

//let string = 'abcdefghijklmnopqrstuvwxyz';
//let numbers = '0123456789';
//let symbols = '!@#$%^&*()_-+~`=:;<>?,.{}|[]\/';
//const allChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+~`=:;<>?,.{}|[]\/';
//const passwordGen = [];
// function generatePassword(length) {
//     if( length < 8) {
//         return "Length of the password should be no less than 8 symbols";
//     }else if (length > 64) {
//         return "Length of the password should be no more than 64 symbols";
//     }
//
//     while (passwordGen.length < length) {
//         const randomIndex = Math.floor(Math.random()*allChars.length);
//         const randomChar = allChars[randomIndex];
//         if (!passwordGen.includes(randomChar)) {
//             passwordGen.push(randomChar)
//         }
//     }
//     passwordGen.sort(() => Math.random() - 0.5);
//     const password = passwordGen.join('');
//     return password;
// }

// const passwordLength = 8; // Задайте желаемую длину пароля
// const generatedPassword = generatePassword(passwordLength);
// console.log(generatedPassword);

function generatePassword() {



    let string = 'abcdefghijklmnopqrstuvwxyz';
    let numbers = '0123456789';
    let symbols = '!@#$%^&*()_-+~`=:;<>?,.{}|[]\/';
    const allChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+~`=:;<>?,.{}|[]\/';
    let pswLength= 8 ;
    let password = '';
    for (let i = 0; i < pswLength; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars[randomIndex];
    }
    const passwordInput = document.getElementById('password');
    passwordInput.value = password;

    copy2Clipboard();
}
    function copy2Clipboard() {
        const passwordInput = document.getElementById('password');
        passwordInput.select();
       // document.execCommand("copy");
        navigator.clipboard.writeText(passwordInput.value)
            .then(() => {
                console.log('Password copied to clipboard!');
            })
            .catch((error) => {
                console.error('Failed to copy password to clipboard:', error);
            });
    }


    //passwordInput.select();




