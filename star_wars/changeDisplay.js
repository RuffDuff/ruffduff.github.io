var b = 0;

function changeDisplay() {
	b = b+1;
	if (b == 2) {
		b = 0
	}
	if (b==1) {
		/* 
		On click the text should be english
		*/
		document.getElementById('toggleButton').innerHTML = "Aurebesh"
		document.getElementById('message').style.fontFamily = "Univers"
	}
	if (b == 0) {
		/*
		English --> Aurebesh
		*/
		document.getElementById('toggleButton').innerHTML = "English"
		document.getElementById('message').style.fontFamily = "Aurebesh"
	}
	
}