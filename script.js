// Grade to Grade Points Mapping
const gradeToPoints = {
    "O": 10,
    "A+": 9,
    "A": 8,
    "B+": 7,
    "B": 6,
    "C": 5,
    "U": 0,
  };
  
  // Function to calculate CGPA
  function calculateCGPA() {
    const subjects = [
      document.getElementById("subject1").value,
      document.getElementById("subject2").value,
      document.getElementById("subject3").value,
      document.getElementById("subject4").value,
      document.getElementById("subject5").value,
      document.getElementById("subject6").value,
      document.getElementById("subject7").value,
      document.getElementById("subject8").value,
      document.getElementById("subject9").value,
      document.getElementById("subject10").value,
      document.getElementById("subject11").value,
    ];
  
    let totalPoints = 0;
    let validSubjects = 0;
  
    subjects.forEach((grade) => {
      if (grade in gradeToPoints) {
        totalPoints += gradeToPoints[grade];
        validSubjects++;
      }
    });
  
    if (validSubjects === 0) {
      alert("Please select valid grades for at least one subject.");
      return;
    }
  
    const cgpa = (totalPoints / validSubjects).toFixed(2);
    document.getElementById("cgpa-result").textContent = cgpa;
  }
  
  // Event Listener for Calculate Button
  document.getElementById("calculate-btn").addEventListener("click", calculateCGPA);