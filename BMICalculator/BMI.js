document.getElementById('bmiForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const resultElement = document.getElementById('result');

    if (isNaN(height) || height <= 0) {
        resultElement.innerHTML = 'Enter valid height.';
    } else if (isNaN(weight) || weight <= 0) {
        resultElement.innerHTML = 'Enter valid weight.';
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        resultElement.innerHTML = `Your BMI is: ${bmi}`;
    }
});
