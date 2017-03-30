var b = 1;

function changeDisplay() {
	if (b==0) {
		document.getElementById('historyText').innerHTML = 'Vulgaris was originally home to the elves. Eventually they were driven off the land, allowing for humans to dominate the continent. Eventually the Elves came back to reclaim their land. After a long and bloody battle, a settlment was agreed and now a half elf half human counsel runs the country. ';
		document.getElementById('historyDiv').style.height = '40%';
		document.getElementById('historyDiv').style.width = '80%';
		document.getElementById('historyDiv').style.opacity = 1;
		document.getElementById('historyDiv').style.background = 'rgba(0, 0, 0, 0.4)';
	}
	var a;
	if (b==1)
		a = 1;
	while (a > 0) {
	document.getElementById('historyDiv').style.opacity = a;
	a = (a-0.01)
	}
	if (b == 1) {
		document.getElementById('historyText').innerHTML = '';
		document.getElementById('historyDiv').style.height = 0;
		document.getElementById('historyDiv').style.width = 0;
		b = -1;
	}
	b = (b+1)
}