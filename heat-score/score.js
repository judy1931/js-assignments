const gender = prompt(`Are you a (1)boy or a (2)girl?`);

if (gender === "1") {
  let num1 = prompt(`annual income?`);
  let num2 = prompt(`Rate your personality in 1 to 10`);
  let num3 = prompt(`Rate your hair amount in 1 to 10`);

  let finalScore = 0;
  if (num1 >= 1000000) {
    finalScore = finalScore + 3
  } else if (num1 >= 600000 && num1 < 1000000) {
    finalScore = finalScore + 2
  } else if (num1 < 600000 && num1 >= 360000) {
    finalScore = finalScore + 1
  }else if (num1<360000){
    finalScore= finalScore+0
  }
  if (num2 >=9) {
    finalScore = finalScore + 3
  } else if (num2 >= 6 && num2 < 9) {
    finalScore = finalScore + 2
  } else if (num2>=3&&num2<6) {
    finalScore = finalScore + 1
  }else if (num2<3){
    finalScore= finalScore+0
  }
  if (num3 >=9) {
    finalScore = finalScore + 3
  } else if (num3 >=6 && num3 < 9) {
    finalScore = finalScore + 2
  } else if (num3>=3&&num3<6) {
    finalScore = finalScore + 1
  }else if (num3<3){
    finalScore= finalScore+0
  }
  if(finalScore>=7){
    console.log ("Your final score is "+finalScore+"!"+"A perfect date!");
    document.write("Your final score is "+finalScore+"!" +"<br>"+"A perfect date!")
    document.write("<img src='img1.jpeg'>");
  }else if (finalScore>=4&&finalScore<7){
    console.log ("Your final score is "+finalScore+"!"+"50% match");
    document.write("Your final score is "+finalScore+"!" +"<br>"+"50% match")
    document.write("<img src='img2.jpeg'>");
  }else if(finalScore<=3){
    console.log ("Your final score is "+finalScore+"!"+"0% match");
    document.write("Your final score is "+finalScore+"!" +"<br>"+"0% match")
    document.write("<img src='img3.jpeg'>");
  }
  
} else {
  let num4 = prompt(`annual income?`);
  let num5 = prompt(`Rate your looks in 1 to 10`);
  let num6 = prompt(`Rate your hair amount in 1 to 10`);
  let finalScore = 0;
  if (num4 >= 1000000) {
    finalScore = finalScore + 3
  } else if (num4 >= 600000 && num4 < 1000000) {
    finalScore = finalScore + 2
  } else if (num4 < 600000 && num4 >= 360000) {
    finalScore = finalScore + 1
  }else if (num4<360000){
    finalScore= finalScore+0
  }
  if (num5 >=9) {
    finalScore = finalScore + 3
  } else if (num5 >= 6 && num5 < 9) {
    finalScore = finalScore + 2
  } else if (num5>=3&&num5<6) {
    finalScore = finalScore + 1
  }else if (num5<3){
    finalScore= finalScore+0
  }
  if (num6 >=9) {
    finalScore = finalScore + 3
  } else if (num6 >=6 && num6 < 9) {
    finalScore = finalScore + 2
  } else if (num6>=3&&num6<6) {
    finalScore = finalScore + 1
  }else if (num6<3){
    finalScore= finalScore+0
  }
  if(finalScore>=7){
    console.log ("Your final score is "+finalScore+"!"+"A perfect date!");
    document.write("Your final score is "+finalScore+"!" +"<br>"+"A perfect date!")
    document.write("<img src='img1.jpeg'>");
    
  }else if (finalScore>=4&&finalScore<7){
    console.log ("Your final score is "+finalScore+"!"+"50% match");
    document.write("Your final score is "+finalScore+"!" +"<br>"+"50% match")
    document.write("<img src='img2.jpeg'>");
  }else if(finalScore<=3){
    console.log ("Your final score is "+finalScore+"!"+"0% match");
    document.write("Your final score is "+finalScore+"!" +"<br>"+"0% match")
    document.write("<img src='img3.jpeg'>");
  }
}



// create a finalScore variable that holds the actual score
// each num1, num2, num3 will contribute to the finalScore
// for example, if income > 1000000 then add 5 to finalScore
// if personality is 10, add 5 more to finalScore
// if hair is 4 add 2 to final score.
// finalScore is 15 total max points

// once you have a finalScore
// make an if else statement to show whether you should date or not

// repeat for girl version