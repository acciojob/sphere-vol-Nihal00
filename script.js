function volume_sphere() {
    //Write your code here
	const radius = document.getElementById('radius');

	let volume = (4/3) * Math.PI * (radius*radius*radius);

	return volume;
}
window.onload = document.getElementById('MyForm').onsubmit = volume_sphere();
