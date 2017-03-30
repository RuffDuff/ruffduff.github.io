function changeDisplay() {
	var b;
	b =1;
	var messageOne;
	messageOne = 'Vulgaris was originally home to the elves. Eventually they were driven off the land, allowing for humans to dominate the continent. Eventually the Elves came back to reclaim their land. After a long and bloody battle, a settlment was agreed and now a half elf half human counsel runs the country. ';
	var a;
	a = 1;
	while (a > 0) {
	document.getElementById('historyDiv').style.opacity = a;
	a = (a-0.01)
	}
	if (b == 1) {
		document.getElementById('historyText').innerHTML = '';
		document.getElementById('historyDiv').style.height = 0;
		document.getElementById('historyDiv').style.width = 0;
	}
}