const form = document.querySelector(".signup-form");
const checkAll = document.querySelector("#checkAll");
const checkboxes = document.querySelectorAll(".form-group input");
const submitButton = document.querySelector("button");

const agreements = {
	termsOfService: false,
	privacyPolicy: false,
	allowPromotions: false,
};

function toggleCheckbox(e) {
	// 체크되어있으면 checkbox의 아이디에 해당하는 agreements의 property 값이 true로 바뀌어야됨
	const { checked, id } = e.currentTarget;
	if (!checked) {
		checkAll.checked = false;
	}
	agreements[id] = checked;
	toggleSubmitButton();
}

function toggleSubmitButton() {
	const { termsOfService, privacyPolicy } = agreements;
	if (termsOfService && privacyPolicy) {
		submitButton.disabled = false;
	} else {
		submitButton.disabled = true;
	}
}

// form 제출 시 새로고침 방지
form.addEventListener("submit", function (e) {
	e.preventDefault();
});

checkboxes.forEach(item => {
	item.addEventListener("input", toggleCheckbox);
});

checkAll.addEventListener("click", e => {
	const { checked } = e.currentTarget;
	if (checked) {
		checkboxes.forEach(item => {
			item.checked = true;
			agreements[item.id] = true;
		});
	} else {
		checkboxes.forEach(item => {
			item.checked = false;
			agreements[item.id] = false;
		});
	}
	toggleSubmitButton();
});
