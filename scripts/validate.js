// MOSTRAR ERROR DEL CAMPO

function showInputError(formElement, inputElement, errorMessage) {
  const errorElement = formElement.querySelector(
    `.${inputElement.id}-input-error`,
  );

  inputElement.classList.add("popup__input_type_error");

  errorElement.textContent = errorMessage;

  errorElement.classList.add("popup__input-error_active");
}

// OCULTAR ERROR DEL CAMPO

function hideInputError(formElement, inputElement) {
  const errorElement = formElement.querySelector(
    `.${inputElement.id}-input-error`,
  );

  inputElement.classList.remove("popup__input_type_error");

  errorElement.textContent = "";

  errorElement.classList.remove("popup__input-error_active");
}

// VALIDAR CADA CAMPO

function checkInputValidity(formElement, inputElement) {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
}

// COMPROBAR SI HAY ALGÚN CAMPO INVÁLIDO

function hasInvalidInput(inputList) {
  return inputList.some(function (inputElement) {
    return !inputElement.validity.valid;
  });
}

// ACTIVAR O DESACTIVAR EL BOTÓN SUBMIT

function toggleButtonState(inputList, buttonElement) {
  buttonElement.disabled = hasInvalidInput(inputList);
}

// AGREGAR LOS EVENTOS DE VALIDACIÓN AL FORMULARIO

function setEventListeners(formElement) {
  const inputList = Array.from(formElement.querySelectorAll(".popup__input"));

  const buttonElement = formElement.querySelector(".popup__button");

  toggleButtonState(inputList, buttonElement);

  inputList.forEach(function (inputElement) {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement);

      toggleButtonState(inputList, buttonElement);
    });
  });
}

// RESTABLECER LA VALIDACIÓN DEL FORMULARIO

function resetValidation(formElement) {
  const inputList = Array.from(formElement.querySelectorAll(".popup__input"));

  const buttonElement = formElement.querySelector(".popup__button");

  inputList.forEach(function (inputElement) {
    hideInputError(formElement, inputElement);
  });

  toggleButtonState(inputList, buttonElement);
}

// EXPORTAR FUNCIONES PARA INDEX.JS

export { setEventListeners, resetValidation };
