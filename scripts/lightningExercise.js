// Exercises in creating factory functions to create new objects w/ different value types in key/value pair.

// const createDoctor = (name, specialty, address) => {
//   return {
//     "Name": name,
//     "Specialty": specialty,
//     "Address": address
//   }
// };

// console.log(createDoctor("John", "X-Rays", "942 minnesota st"));

const createPet = (name, breed) => {
  return {
    "Name": name,
    "Breed": breed
  }
}

// BowWowKennels.forEach( pet => {
//   console.log(pet)})

const BowWowKennels = []

BowWowKennels.push(createPet("Bonzo", "Weenie"))
BowWowKennels.push(createPet("Murphy", "Australian Shephard"))
BowWowKennels.push(createPet("Charizard","Beagle"))

BowWowKennels.forEach(pet => {
  console.log(pet)
  }  
)