const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

//Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array

let languagesGreaterThanThree = users.filter(language => language.languages.length > 2)

console.log(languagesGreaterThanThree)

//Use .map to crate an array of strings where each element is a users email address

let usersEmails = users.map(emails => emails.email)

console.log(usersEmails)

//Use .reduce to get the total years of experience from the list of users.  Once you get the total of years you can use the result to calculate the average

let usersExperience = users.reduce((total, experience) => total + experience.yearsOfExperience, 0)

console.log(usersExperience)
console.log('The average years of experience is: ' + usersExperience/users.length)

//Use .reduce to get the longest email fromm the list of users.

// let longestEmail = users.reduce((startLength, addLetter) =>
//     startLength.email.length > addLetter.email.length ? startLength : addLetter)

let longestEmail = users.reduce((previous, current) => {
    if(previous.email.length > current.email.length){
        return previous;
    } else{
        return current;
    }
})


console.log(users[3].email.length)
console.log(longestEmail);


//Use .reduce to get the list of user's names in a single string.  Example: Your instructors are: ryan, luis, zach, fernando, justin.

let nameOfUsers = users.reduce((previousVal, currentVal) => `${previousVal} ${currentVal.name},`, 'Your instructors are: ');

console.log(nameOfUsers)

let instructors = users.reduce((finalString, user, index) => {
    if(index === users.length -1){
        return `${finalString} ${user.name}.`
    } else{
        return `${finalString} ${user.name},`
    }
}, 'Your instructors are:')

console.log(instructors)

//Bonus

// let uniqueLangs = users.reduce((langList, user) => {
//     for(let lang of user.language){
//         if(!langList.includes(lang)){
//             langList.push(lang);
//         }
//     }
//     return langList;
// }, []);
//
// console.log(uniqueLangs);