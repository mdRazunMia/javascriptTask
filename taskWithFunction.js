
const data = { 
    "accounting" : [   
                       { "firstName" : "John",  
                         "lastName"  : "Doe",
                         "age"       : 23 },
  
                       { "firstName" : "Mary",  
                         "lastName"  : "Smith",
                          "age"      : 32 }
                   ],                            
    "sales"      : [ 
                       { "firstName" : "Sally", 
                         "lastName"  : "Green",
                          "age"      : 27 },
  
                       { "firstName" : "Jim",   
                         "lastName"  : "Galley",
                         "age"       : 41 }
                   ] 
  }
  
  
  const returnedData = function(){
    const newData = []
    for (const outerKey in data) {
    const internalObject = data[outerKey]
    // console.log(internalObject)
    for(const internalKey in internalObject){
    // console.log(internalObject[internalKey].firstName)
    // console.log(internalObject[internalKey].lastName)
    const name = internalObject[internalKey].firstName+ ' '+ internalObject[internalKey].lastName
    // console.log(`name: ${name}`)
    // console.log(`age: ${internalObject[internalKey].age}`)
    const age = internalObject[internalKey].age
    // console.log(`subject: ${outerKey}`)
    const subject = outerKey
    newData.push({name: name, age: age, subject: subject})
    }
    // console.log(newData)
  }
  
    return newData
  
  }
  
  // const newData = []
  
  // for (const outerKey in data) {
  //   const internalObject = data[outerKey]
  //   // console.log(internalObject)
  //   for(const internalKey in internalObject){
  //   // console.log(internalObject[internalKey].firstName)
  //   // console.log(internalObject[internalKey].lastName)
  //   const name = internalObject[internalKey].firstName+ ' '+ internalObject[internalKey].lastName
  //   // console.log(`name: ${name}`)
  //   // console.log(`age: ${internalObject[internalKey].age}`)
  //   const age = internalObject[internalKey].age
  //   // console.log(`subject: ${outerKey}`)
  //   const subject = outerKey
  //   newData.push({name: name, age: age, subject: subject})
  //   }
  //   // console.log(newData)
  // }
  
  // console.log(newData)
  
  
  const finalData = returnedData(data)
  console.log(finalData)