/*The following line puts the messages into an array*/
let message = ["Wear a warm coat, hat, scarf and gloves.","Wear a warm coat, hat, scarf and gloves.","Wear a warm coat, hat and gloves. Maybe a scarf too.","Wear your warmest coat, a warm hat, a scarf, and warm gloves."]

/*The following lines create variables and thier accompanying questions.*/
let userName = prompt('Please enter your first name and capitalize the first letter') /*figure out the string function to make sure first letter is capitalized*/

let userState = prompt('Please enter the two letter abbreviation for your state, capitalize both letters') /*same as above*/

let userTemp = prompt('Please enter the current outside temperature (in Fahrenheit)')

/*The following block checks the state and whether the temp is below 32 degrees farenheit*/
if (userState == "NE" && userTemp <= "32")
 NSB.MsgBox(userName ',' message[0])     

/*The following block checks the state and whether the temp is between 32 degrees and 50 degrees farenheit*/
else if (userState == "NE" && "32" >= userTemp <= "50")
 NSB.MsgBox(userName ',' message[1])

/*The following block checks the state and whether the temp is below 32 degrees farenheit*/
else if (userState == "FL" && userTemp <= "30")
 NSB.MsgBox(userName ',' message[2])

/*The following block checks the state and whether the temp is between 32 degrees and 50 degrees farenheit*/
else if (userState == "FL" && "32" >= userTemp <= "50")
 NSB.MsgBox(userName ',' message[3])    