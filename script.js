window.onload = () => {
  const button = document.querySelector("#btn");
  button.addEventListener("click", calculateBmi);
};

function calculateBmi() {
  const heightFeet = parseFloat(document.querySelector("#height").value);
  const weight = parseFloat(document.querySelector("#weight").value);
  const result = document.querySelector("#result");

  if (isNaN(heightFeet) || heightFeet <= 0) {
    result.innerText = "Please provide a valid height in feet";
    return;
  } else if (isNaN(weight) || weight <= 0) {
    result.innerText = "Please provide a valid weight";
    return;
  }

  // Calculate BMI using height in feet
  const bmi = (weight / ((heightFeet * heightFeet) / 10.7639)).toFixed(2);

  if (bmi < 18.5) {
    result.innerText = `Under Weight: ${bmi}`;
  } else if (bmi >= 18.5 && bmi < 24.9) {
    result.innerText = `Normal: ${bmi}`;
  } else if (bmi >= 25 && bmi < 29.9) {
    result.innerText = `Over Weight: ${bmi}`;
  } else if (bmi >= 30 && bmi < 34.9) {
    result.innerText = `Obesity (Class I): ${bmi}`;
  } else if (bmi >= 35 && bmi < 39.9) {
    result.innerText = `Obesity (Class II): ${bmi}`;
  } else {
    result.innerText = `Extreme Obesity: ${bmi}`;
  }
}

