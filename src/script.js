// To showcase the demo of dark theme. Copy paste :)

document.addEventListener('DOMContentLoaded', () => {
	const toggleDark = document.getElementById('toggleDark');

	console.log(toggleDark.document.documentElement.classList.includes('dark'));

	// toggleDark.addEventListener('click', function () {
	// 	if (document.documentElement.classList.includes('dark')) {
	// 		document.documentElement.classList.remove('dark');
	// 	} else {
	// 		document.documentElement.classList.add('dark');
	// 	}
	// });
});
