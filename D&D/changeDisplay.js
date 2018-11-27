var b = 1;

function changeDisplay() {
	if (b==0) {
		/* 
		On click the window should reappear.
		*/
		document.getElementById('historyDiv').style.height = '40%';
		document.getElementById('historyDiv').style.width = '80%';
		document.getElementById('historyDiv').style.opacity = 1;
	}
	var a;
	if (b==1)
		a = 1;
	while (a > 0) {
	document.getElementById('historyDiv').style.opacity = a;
	a = (a-0.01)
	}
	if (b == 1) {
		/*
		Window should disappear
		*/
		document.getElementById('historyDiv').style.height = '0%';
		document.getElementById('historyDiv').style.width = '0%';
		b = -1;
	}
	b = (b+1)
}
