document.addEventListener("DOMContentLoaded", function () {
	const btn1 = document.getElementById("btn-collapse1");
	const btn2 = document.getElementById("btn-collapse2");
	const btn3 = document.getElementById("btn-collapse3");

	const collapse1El = document.getElementById("collapse1");
	const collapse2El = document.getElementById("collapse2");
	const collapse3El = document.getElementById("collapse3");

	const collapse1 = new bootstrap.Collapse(collapse1El, { toggle: false });
	const collapse2 = new bootstrap.Collapse(collapse2El, { toggle: false });
	const collapse3 = new bootstrap.Collapse(collapse3El, { toggle: false });

	// Mostra o primeiro por padrão
	collapse1.show();
	collapse2.hide();
	collapse3.hide();

	btn1.addEventListener("click", function (e) {
		e.preventDefault();
		if (!collapse1El.classList.contains("show")) {
			collapse1.show();
			collapse2.hide();
			collapse3.hide();
		}
	});
	btn2.addEventListener("click", function (e) {
		e.preventDefault();
		if (!collapse2El.classList.contains("show")) {
			collapse2.show();
			collapse1.hide();
			collapse3.hide();
		}
	});
	btn3.addEventListener("click", function (e) {
		e.preventDefault();
		if (!collapse3El.classList.contains("show")) {
			collapse3.show();
			collapse1.hide();
			collapse2.hide();
		}
	});
});

document.addEventListener("DOMContentLoaded", function () {
	const toastTrigger = document.getElementById("liveToastBtn");
	const toastLive = document.getElementById("liveToast");
	if (toastTrigger && toastLive) {
		toastTrigger.addEventListener("click", function () {
			const toast = new bootstrap.Toast(toastLive);
			toast.show();
		});
	}
});
