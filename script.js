let input = document.querySelector(".input");
let button = document.querySelector(".check-button");
let result = document.querySelector(".result");

function telephoneCheck() {
	let value = input.value;

	if (value === "") {
		result.classList.remove("opacity-0");

		result.innerHTML = `Please enter a phone number to check.`;
		result.classList.add("opacity-100");
    return;
	}
	let parts = value.split(/ |-/);
	for (let i = 0; i < parts.length; i++) {
		if (parts[i] != "1" && parts[i].length < 3) {
			result.classList.remove("opacity-0");

			result.innerHTML = `The number <span class = "font-bold text-green-800">${value}</span> is not valid.`;
			result.classList.add("opacity-100");
		}
	}

	if (value.match(/[^0-9-()\s]/)) {
		result.classList.remove("opacity-0");

		result.innerHTML = `The number <span class = "font-bold text-green-800">${value}</span> is not valid.`;
		result.classList.add("opacity-100");
	}

	if (value[0] === "-") {
		result.classList.remove("opacity-0");

		result.innerHTML = `The number <span class = "font-bold text-green-800">${value}</span> is not valid.`;
		result.classList.add("opacity-100");
	}

	if (value.indexOf("(") == -1 && value.indexOf(")") > 0) {
		result.classList.remove("opacity-0");

		result.innerHTML = `The number <span class = "font-bold text-green-800">${value}</span> is not valid.`;
		result.classList.add("opacity-100");
	}

	if (value.indexOf(")") - value.indexOf("(") >= 5) {
		result.classList.remove("opacity-0");

		result.innerHTML = `The number <span class = "font-bold text-green-800">${value}</span> is not valid.`;
		result.classList.add("opacity-100");
	}

	let regex = /-| /g;
	let cleanPhoneNum = value.replace(regex, "");

	if (cleanPhoneNum.indexOf("(") < cleanPhoneNum.indexOf(")")) {
		cleanPhoneNum = cleanPhoneNum.replace(/\(|\)/g, "");
	}

	if (cleanPhoneNum.length == 10) {
		result.classList.remove("opacity-0");

		result.innerHTML = `The number <span class = "font-bold text-green-800">${value}</span> is valid.`;
		result.classList.add("opacity-100");
	} else if (cleanPhoneNum.length == 11 && cleanPhoneNum[0] === "1") {
		result.classList.remove("opacity-0");

		result.innerHTML = `The number <span class = "font-bold text-green-800">${value}</span> is valid.`;
		result.classList.add("opacity-100");
	} else {
		result.classList.remove("opacity-0");
		result.innerHTML = `The number <span class = "font-bold text-green-800">${value}</span> is not valid.`;
		result.classList.add("opacity-100");
	}
}

button.addEventListener("click", telephoneCheck);
input.addEventListener("keypress", function (event) {
	if (event.key === "Enter") {
		telephoneCheck();
	}
});
