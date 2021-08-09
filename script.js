const answer = document.getElementById("answer");
const form = document.getElementById('value');

form.addEventListener("submit", e=>{
	e.preventDefault();

	// Value Variables
	const principle = document.getElementById("principle").value;
	const rate = document.getElementById("rate").value;
	const time = document.getElementById("time").value;
	
	// array for values
	values = [principle, rate, time];

	// for loop to iterate value and to check whether there are numbers
	for (var i = 0; i < values.length; i++) {
		if(isNaN(values[i])){
			alert("Please input a valid Number");
		}else{
			let result = (principle * rate * time) / 100;
			answer.innerHTML = `K${result}`;
		}
	}
	
})

