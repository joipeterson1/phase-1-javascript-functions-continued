function saturdayFun(activity = "roller-skate"){
  if (activity === "roller-skate")
    return "This Saturday, I want to roller-skate!"
else if (activity === "bathe my dog")
return "This Saturday, I want to bathe my dog!"

}


function mondayWork(activity2 = "go to the office."){
    if (activity2 === "go to the office.")
      return "This Monday, I will go to the office."
  else (activity2 === "work from home.")
  return "This Monday, I will work from home."
  
  }
  function wrapAdjective(highlight = "*") {
    return function(adjective) {
      return `You are ${highlight}${adjective}${highlight}!`;
    }
  }