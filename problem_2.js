// Calculate Cutoff for Given Marks
// Check Whether he/she is eligible to apply the course

/* Input */
const studentMarks = {
    "maths": 66,
    "physics": 87,
    "chemistry": 92,
    "biology": 90
};
/* Input */


/* Logic Implementation Function */
let cutoff = 0
function calculateCutoff(marksJson)
 {
   const mark=(studentMarks.maths+ studentMarks.physics+studentMarks.chemistry+studentMarks.biology);
    console.log(mark);
    var cutoff=mark/4;
    console.log('The cutoff is:'+ cutoff);
}
/* Logic Implementation Function */
/* Logic Implementation Function */
const eligibilityCutOff = 75
function checkEligibility(mark){

    if(eligibilityCutOff>=mark)
    {
        console.log("you are eligible");

    }
    else{
        console.log("not eligible")
    }
    /* Write your logic here --- Start */

    // this function should return message like "You are Eligible" or "You are not Eligible"

    /* Write your logic here --- End */
}
/* Logic Implementation Function */


/* Function Call */
calculateCutoff(studentMarks);
checkEligibility(cutoff);
/* Function Call */

/* Expected Output */

// The cutoff is: 77.80
// You are Eligible

/* Expected Output */
