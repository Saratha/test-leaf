function printGender() {
    let color = "brown";

    if (genderType.startsWith("Female")) {
        var age = 30;
        let color = "pink";
        console.log("Color inside if-block:", color);
    }

    console.log("Age outside if-block:", age);
    console.log("Color outside if-block:", color);
}

let genderType = "Female";
printGender();

console.log("Global genderType:", genderType);

genderType = "male";
printGender();