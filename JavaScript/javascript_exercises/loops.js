//loop labels

labelName: for(let i=0; i<10; i++){
	while(true){
		alert("only once");
		break labelName;
	}
}
alert("see?");

//switch statements
let x = prompt('value1 or value2?', 'value');
switch(x){
	case 'value1':
		alert("value1");
		break;
	case 'value' + '2': //expressions can be cases or switches
		alert('value2');
		break;
	case 'value3':
	case 'value4':
		alert('hhmmm sneaky sneaky');
		break;
	default:
	alert("whatchugonnado");
}