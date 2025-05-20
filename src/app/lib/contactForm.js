
var mndFileds = new Array('Last\x20Name', 'Mobile', 'Email', 'Description');
var fldLangVal = new Array('Name', 'Mobile', 'Email', 'Description');
var wfInnerWidth = window.innerWidth;
if (wfInnerWidth <= 768) {
	document.forms['BiginWebToRecordForm941958000000410997'].setAttribute('data-ux-form-alignment', 'top');
}
function removeError(fieldObj) {
	var parentElement = fieldObj.closest('.wf-field'),
		childEle = parentElement.getElementsByClassName('wf-error-parent-ele')[0];
	if (childEle) {
		parentElement.classList.remove('wf-field-error-active');
		parentElement.removeChild(parentElement.getElementsByClassName('wf-error-parent-ele')[0]);
	}
}
function setError(fieldObj, label) {
	var parentElement = fieldObj.closest('.wf-field'),
		childEle = parentElement.getElementsByClassName('wf-error-parent-ele')[0];
	if (!childEle) {
		var errorParentEle = document.createElement('DIV'),
			spanEle = document.createElement('SPAN'),
			viewMoreEle = document.createElement('SPAN');
		spanEle.setAttribute('class', 'wf-field-error wf-field-error-long');
		spanEle.innerHTML = label;
		errorParentEle.classList.add('wf-error-parent-ele');
		errorParentEle.appendChild(spanEle);
		parentElement.append(errorParentEle);
		parentElement.classList.add('wf-field-error-active');
		if (spanEle.scrollWidth > parentElement.offsetWidth) {
			viewMoreEle.innerHTML = 'View More';
			viewMoreEle.classList.add('wf-error-view-more');
			errorParentEle.append(viewMoreEle);
			viewMoreEle.addEventListener('click', function () {
				errorParentEle.removeChild(viewMoreEle);
				spanEle.classList.remove('wf-field-error-long');
			});
		} else {
			spanEle.classList.remove('wf-field-error-long')
		}
	}
}
function validateFields941958000000410997() {
	var isReturn = true;
	var form = document.forms['BiginWebToRecordForm941958000000410997'];
	var validateFld = form.querySelectorAll('[fvalidate=true]');
	var i;
	for (i = 0; i < validateFld.length; i++) {
		var validateFldVal = validateFld[i].value;
		if (validateFldVal !== '') {
			var fLabel = validateFld[i].parentElement.parentElement.parentElement.getElementsByClassName('wf-label')[0].innerHTML;
			switch (validateFld[i].getAttribute('ftype')) {
				case 'string_rest_number':
				case 'string':
					var isError = false,
						errorKey = 'Only letters are allowed.';
					if (validateFld[i].getAttribute('ftype') === 'string_rest_number' && validateFldVal.match((/\d/g)) !== null) {
						isError = true;
					} else if (validateFld[i].hasAttribute('fmin')) {
						if (validateFldVal.length < parseInt(validateFld[i].getAttribute('fmin'))) {
							errorKey = 'Your input must be at least ' + validateFld[i].getAttribute('fmin') + ' character(s).';
							isError = true;
						} else if (validateFldVal.length > parseInt(validateFld[i].getAttribute('fmax'))) {
							errorKey = 'Your input should not exceed ' + validateFld[i].getAttribute('fmax') + ' character(s).';
							isError = true;
						}
					}
					if (isError) {
						setError(validateFld[i], errorKey);
						isReturn = false;
					}
					break;
				case 'email':
					if (validateFldVal.match(/^([A-Za-z0-9-._%'+/]+@[A-Za-z0-9.-]+.[a-zA-Z]{2,22})$/) === null) {
						setError(validateFld[i], 'Enter valid ' + fLabel);
						isReturn = false;
					}
					break;
				case 'number':
				case 'double':
					var isError = false,
						errorKey = 'Enter valid ' + fLabel;
					if ((validateFld[i].getAttribute('ftype') === 'number' && validateFldVal.match(/^[0-9]+$/) === null)
						|| (validateFld[i].getAttribute('ftype') === 'double' && validateFldVal.match(/^[0-9]*(\.[0-9]{0,2})?$/) === null)) {
						isError = true;
					} else if (validateFld[i].hasAttribute('fmin')) {
						if (validateFldVal < parseInt(validateFld[i].getAttribute('fmin'))) {
							errorKey = 'Enter a number greater than or equal to ' + validateFld[i].getAttribute('fmin');
							isError = true;
						} else if (validateFldVal > parseInt(validateFld[i].getAttribute('fmax'))) {
							errorKey = 'Enter a number less than or equal to ' + validateFld[i].getAttribute('fmax');
							isError = true;
						}
					}
					if (isError) {
						setError(validateFld[i], errorKey);
						isReturn = false;
					}
					break;
				case 'mobile':
					if (validateFldVal.match(/^[0-9a-zA-Z+.()\-;\s]+$/) === null) {
						setError(validateFld[i], 'Enter valid ' + fLabel);
						isReturn = false;
					}
					break;
			}
		}
	}
	return isReturn;
}

function checkMandatory941958000000410997() {
	var isReturn = true;
	var isNotCaptcha = false;
	for (i = 0; i < mndFileds.length; i++) {
		var fieldObj = document.forms['BiginWebToRecordForm941958000000410997'][mndFileds[i]];
		if (fieldObj) {
			if (((fieldObj.value).replace(/^\s+|\s+$/g, '')).length == 0) {
				if (fieldObj.type == 'file') {
					setError(fieldObj, 'Please select a file to upload.');
					isReturn = false;
				}
				else {
					setError(fieldObj, fldLangVal[i] + ' cannot be empty');
					isReturn = false;
				}
			} else if (fieldObj.nodeName == 'SELECT') {
				if (fieldObj.options[fieldObj.selectedIndex].value == '-None-') {
					setError(fieldObj, fldLangVal[i] + ' cannot be none.');
					isReturn = false;
				}
			} else if (fieldObj.type == 'checkbox') {
				if (fieldObj.checked == false) {
					setError(fieldObj, 'Please accept  ' + fldLangVal[i]);
					isReturn = false;
				}
			}
		}
	}
	isNotCaptcha = true;
	if (!validateFields941958000000410997()) { isReturn = false; }
	if (!isReturn) {
		var errEle = document.getElementsByClassName('wf-field-error');
		if (errEle && errEle.length > 0) {
			var inputEle = errEle[0].closest('.wf-field').getElementsByTagName('input');
			if (inputEle && inputEle.length == 0) {
				inputEle = errEle[0].closest('.wf-field').getElementsByTagName('select');
			}
			if (inputEle && inputEle.length > 0) {
				inputEle[0].focus();
			}
		}
	} else if (isNotCaptcha) {
		document.getElementById('formsubmit').disabled = true;
	}
	return isReturn;
}


document.getElementById('hidden941958000000410997Frame').addEventListener('load', function () {
	try {
		var doc = arguments[0].currentTarget.contentWindow.document;
		if (doc.body.childElementCount !== 0) {
			arguments[0].currentTarget.style.display = 'block';
			document.getElementById('BiginWebToRecordFormParent941958000000410997').style.display = 'none';
		}
	} catch (error) {
		arguments[0].currentTarget.style.display = 'block';
		document.getElementById('BiginWebToRecordFormParent941958000000410997').style.display = 'none'
	}
});

