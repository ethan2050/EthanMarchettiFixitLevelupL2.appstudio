let message = ["Wear a warm coat, hat, scarf and gloves.","Wear a warm coat, hat, scarf and gloves.","Wear a warm coat, hat and gloves. Maybe a scarf too.","Wear your warmest coat, a warm hat, a scarf, and warm gloves."]

let userName = prompt('Please enter your first name and capitalize the first letter')

let userState = prompt('Please enter the two letter abbreviation for your state, capitalize both letters')

let userTemp = prompt('Please enter the current outside temperature (in Fahrenheit)')

switch(true) {
 case 'userState == "NE" && userTemp <= "30"':
  NSB.MsgBox(userName ',' message[0])
  break;
 case (userState == "NE" && "32" >= userTemp <= "50"):
  NSB.MsgBox(userName ',' message[1])
  break;
 case (userState == "FL" && userTemp <= "30"):
  NSB.MsgBox(userName ',' message[2])
  break;
 case (userState == "FL" && "32" >= userTemp <= "50"):
  NSB.MsgBox(userName ',' message[3])
  break;
}   