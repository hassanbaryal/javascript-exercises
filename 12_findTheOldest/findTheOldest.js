const findTheOldest = function(people) {
    const currentYear = (new Date()).getFullYear()

    const peopleAgeSorted = people.sort((personA, personB) => {
        if(!(personA.yearOfDeath)) {
            
            personA.yearOfDeath = currentYear
        }

        if(!(personB.yearOfDeath)) {
            personB.yearOfDeath = currentYear
        }
        personAAge = personA.yearOfDeath - personA.yearOfBirth
        personBAge = personB.yearOfDeath - personB.yearOfBirth
        return (personAAge - personBAge)
    })
    console.log(peopleAgeSorted)
    return peopleAgeSorted[peopleAgeSorted.length - 1]
};

// Do not edit below this line
module.exports = findTheOldest;
