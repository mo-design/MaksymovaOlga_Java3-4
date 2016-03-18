function checkRez() {
alert ('Тебе двойка, иди учи');		
}

// -------------------- Добавляем заголовок ---------------------
var temp = document.createElement('h1');
temp.innerHTML = 'Тест по программированию';
document.body.appendChild(temp);

// -------------------- Добавляем ul  ---------------------

temp = document.createElement('ul');
document.body.appendChild(temp);


// -------------------- Добавляем li в цикле  ---------------------


temp = document.querySelector('ul');

// temp = ul	

for (var i=1; i<4; i++) {
	
	var inTemp = document.createElement('li');
	temp.appendChild(inTemp);
	
	// inTemp = текущее li

	
	var tempTitle = document.createElement('h2');
	tempTitle.innerHTML = i + '. Вопрос №' + i;
	inTemp.appendChild(tempTitle);
	

	var tempForm = document.createElement('form');
	tempForm.setAttribute('name', 'qForm');
	inTemp.appendChild(tempForm);
	
	for ( var j=1; j<4; j++) {
		
		var tempId = "qForm__" + i + j;
		
		var tempLabel = document.createElement('label');
		tempLabel.setAttribute('for', tempId);
		tempLabel.setAttribute('class', 'qForm__ch');
		tempLabel.innerHTML = 'Вариант ответа №' + j;
		tempForm.appendChild(tempLabel);
		
		var tempInput = document.createElement('input');
		tempInput.setAttribute('type', 'checkbox');
		tempInput.setAttribute('id', tempId);
		var tempText = tempLabel.firstChild;
		tempLabel.insertBefore(tempInput, tempText);
			
	}
}



// -------------------- Добавляем кнопочку ---------------------
temp = document.createElement('form');
temp.setAttribute('name', 'rez')
document.body.appendChild(temp);


temp = document.createElement('input');
temp.setAttribute('type', 'button');
temp.setAttribute('class', 'rez__button');
temp.setAttribute('value', 'Проверить мои результаты');
temp.setAttribute('onClick', 'checkRez()');
var temp2 = document.getElementsByName('rez');
temp2[0].appendChild(temp);