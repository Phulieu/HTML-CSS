function Validator(options) {
    function getParent(element,selector) {
        while (element.parentElement) {
            if (element.parentElement.matches(selector)) {
                return element.parentElement;
            }
            element = element.parentElement;
        }
    }
    var selectorRules = {};
    // Ham thuc hien validate
    function validate(inputElement, rule) {
        var errrorMessage = rule.test(inputElement.value);
        var errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector);
        var rules = selectorRules[rule.selector];
        for (var i = 0; i < rules.length; i++) {
            errrorMessage = rules[i](inputElement.value);
            if (errrorMessage) break;
        }
        if (errrorMessage) { 
            errorElement.innerText = errrorMessage;
            getParent(inputElement, options.formGroupSelector).classList.add('invalid');
        }
        else {
            errorElement.innerText = '';
            getParent(inputElement, options.formGroupSelector).classList.remove('invalid');

        }
        return !errrorMessage;
    }
    // Lay element
    var formElement = document.querySelector(options.form);
    if (formElement) {
        // khi submit form
        formElement.onsubmit = function (e) {
            e.preventDefault();
            var isFormValid = true;
            // validate tat ca truoc khi submit
            options.rules.forEach(rule => { 
                var inputElement = formElement.querySelector(rule.selector);
                var isvalid = validate(inputElement, rule); 
                if (!isvalid) {
                    isFormValid = false;
                }
            });
            if (isFormValid) {
                if (typeof options.onSubmit === 'function') {
                    var enableInput = formElement.querySelectorAll('[name]');
                    var formValues = Array.from(enableInput).reduce(function (values, input) {
                        values[input.name] = input.value
                        return  values;
                    }, {});
                    options.onSubmit(formValues);
                }

            }
        }
    }
    if (formElement) { 
        options.rules.forEach(rule => { 
            // Luu lai cac s cho moi input
            if (Array.isArray(selectorRules[rule.selector])) {
                selectorRules[rule.selector].push(rule.test);
            }
            else {
                selectorRules[rule.selector] = [rule.test];
            }

            var inputElement = formElement.querySelector(rule.selector);
            
            if (inputElement) { 
                // Xu ly blue khoi input
                inputElement.onblur = function () {
                   validate(inputElement, rule); 
                }
                // Xu ly nhap
                inputElement.oninput = function () {
                    var errorElement = getParent(inputElement, options.formGroupSelector).querySelector('.form-message');
                    errorElement.innerText = '';
                    getParent(inputElement, options.formGroupSelector).classList.remove('invalid');
                }
            }
        })
    }
}

Validator.IsRequired = function (selector, message) {
    return {
        selector: selector,
        test: function (value) {
            return value.trim() ? undefined : message ||'Please enter this field.';
        }
    }

}
Validator.IsEmail = function (selector, message) {
    return {
        selector: selector,
        test: function (value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            return regex.test(value) ? undefined : message ||'Please enter right email address.';
        }
    }
}
Validator.minLength = function (selector, min, message) {
    return {
        selector: selector,
        test: function (value) {
            return value.length >= min ? undefined : message ||`Please enter more than ${min} characters.`;
        }
    }

}
Validator.isConfirm = function (selector, getConfirmValue, message) {
    return {
        selector: selector,
        test: function (value) {
            return value === getConfirmValue() ? undefined : message ||`Please enter right characters.`;
        }
    }

}

Validator({
    form: '#form-1',
    formGroupSelector: '.form-group',
    errorSelector: '.form-message',
    rules: [
        Validator.IsRequired('#fullname'),
        Validator.IsEmail('#email'),
        Validator.minLength('#password', 6),
        Validator.isConfirm('#password_confirmation',function () {
            return document.querySelector('#form-1 #password').value;
        })
    ],
    onSubmit: function (data) {
        console.log(data);
    }

})