//Progression 1:
//We've got some basic info about Karen's home
//Debug the type of data provided
//Return the types concatenated in a single variable
let  moreAboutHome = (address, distanceFromTown, hasNeighbours) => {
    let addressType= typeof address, distanceType = typeof distanceFromTown, neighboursType = typeof hasNeighbours;
    return addressType+distanceType+neighboursType;
};
//Progression 2:
//Check if the data given is of the right type
//parents = String, noOfSiblings = Number, isNuclearFamily = Boolean
let moreAboutKaren = (parents, noOfSiblings, isNuclearFamily) => {
    //Checking variables type 
    let parentType = (typeof parents === "string"), siblingsType = (typeof noOfSiblings === 'number'), familyType = (typeof isNuclearFamily === 'boolean');
    //Checking if all passed the condition
    return (parentType && siblingsType && familyType);
}
//Progression 3:
//Lily is suspicious about Karen's new friend
//Karen tells her friend's age and even writes it down
//Check which one those is not a number (NaN) and return that value
let doesFriendExist = (ageInText, ageInNumber) => {
    // let ageType = typeof ageInText, agenumType = typeof ageInNumber;
    return isNaN(ageInNumber)? ageInNumber : isNaN(ageInText)? ageInText : false;
}
//Progression 4:
//Lily gave Karen x sweets
//Karen ate y sweets herself
//On her way to the river, she ate another z sweets every n meters travelled
//Her friend divided the remaining sweets into 2 parts for each
//How many sweets did her friend get to eat?
let sweetTooth = (totalNoOfSweets = "default", sweetsConsumedByKaren, sweetsConsumedInNMeters, metersToTravel) =>{
    let sweetsShared = 0;
    let ele1= typeof totalNoOfSweets, ele2 = typeof sweetsConsumedByKaren, ele3 = typeof sweetsConsumedInNMeters, ele4 = typeof metersToTravel;
    if (ele1 != "number" || ele2 != "number" || ele3 != "number" || ele4 != "number")
        sweetsShared = "No sweets for Karen's friend";
    
    else if(totalNoOfSweets)
        sweetsShared = (totalNoOfSweets -(sweetsConsumedByKaren + (sweetsConsumedInNMeters * metersToTravel)))/2;
    
    return sweetsShared;
}
//Progression 5:
//As Lily moves closer, it gets colder. She checks the temperature on her mobile
//It only shows in fahrenheit. Convert the data to celsius and return it.
let convertToCelsius = fahrenheit => {
    let output = 0;
    if(typeof fahrenheit !== "number")
        output = 'Technical Error!';
    else
        output = (fahrenheit -32) *5/9;
    return output;
}
//Progression 6:
//Lily can now do multiple things to deal with this
//1. Take her daughter to a doctor
//2. Talk to her husband about it
//3. Counsel her daughter herself
//4. Lock her daughter in her room
//Given a value, return which of these above actions Lily would take
let aDifficultChoice = (choice) => {
    return choice === 1 ? "Take her daughter to a doctor" :
           choice === -1 ? "Break down and give up all hope" :
           choice ==='I give up' ? "Refused to do anything for Karen" :
           "Wasn't able to decide";
}
//Progression 7:
//Lily realized that she'd hurt her daughter
//All she wants now is for her to stop crying
//She refuses to talk to her but Lily doesn't stop trying
//She tries out multiple things hoping for the best
//Take all of Lily's strategies and concatenate them to a single var
//Separate the strategies by a single space
//Return the length of the complete strategy
let consoleKaren = strategies => {
    let result = '';
    result = strategies.reduce((a,b) => {
        return a+b;;
    },'')
}