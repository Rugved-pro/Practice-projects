


const Text=document.getElementById("Password");
function passwordGen(passwordLength,includeLowercase,includeNumbers,includeSymbols,includesUppercase,){
        const lowcaseChars="abcdefghijklmnopqrstuvwxyz";
        const uppercaseChars="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const nums="0123456789";
        const symmbols="@!#$&*"; 
        let allowedchars= ""; 
        let password="";
        allowedchars+=includeLowercase?lowcaseChars:"";
        allowedchars+=includeNumbers?nums:"";
        allowedchars+=includesUppercase?uppercaseChars:"";
        allowedchars+=includeSymbols?symmbols:"";
        console.log(` ${allowedchars}`);
        if(passwordLength<=0){
            return "password length must be atleast 1";
        }
        if(allowedchars.length<=0){
            return "password length must be atleast 1";
        }
        for(let i=0;i<passwordLength;i++){
            const randomIndex = Math.floor(Math.random()*allowedchars.length);
            password+=allowedchars[randomIndex];
        }
        Text.textContent=`Generated Password: ${password}`; 
}
function password(){
    const includesUppercase=document.getElementById("includeUppercase").checked;
    const includeLowercase=document.getElementById("includeLowercase").checked;
    const includeNumbers=document.getElementById("includeNumbers").checked;
    const includeSymbols=document.getElementById("includeSymbols").checked;
    const passwordLength=document.getElementById("Length").value;
    const password=passwordGen(passwordLength,includeLowercase,includeNumbers,includeSymbols,includesUppercase);
}
console.log(` ${password}`);