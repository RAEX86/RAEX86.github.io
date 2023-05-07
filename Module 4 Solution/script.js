var names=new Array();
names[0]="Yuvraj";
names[1]="John";
names[2]="Jimmy";
names[3]="jason";
names[4]="payal";
names[5]="faruk";
names[6]="lara";
names[7]="priya";
names[8]="linda";
names[9]="jack";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}