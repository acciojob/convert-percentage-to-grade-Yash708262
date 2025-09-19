function calculateGrade(percentage) {
	 if (isNaN(percentage)) {
        return "F";
    }
  let rounded = Math.round(percentage);

    if (rounded >= 90) {
        return 'A';
    } else if (rounded >= 80) {
        return 'B';
    } else if (rounded >= 70) {
        return 'C';
    } else if (rounded >= 60) {
        return 'D';
    } else {
        return 'F';
    }
}
const percentage = parseInt(prompt("Enter Percentage."));
alert(calculateGrade(percentage));
