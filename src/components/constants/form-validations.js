const messages = {
    firstname:{
        required:'This field is required',
        wrong:'Only letters and spaces'
    }
};

const patterns = {
    //expresion regural 
    onlyLetters:/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/
}

const nameValidation = {
    required:messages.firstname.required,
    pattern:{
        value: patterns.onlyLetters,
        message:messages.firstname.wrong
    }
}

export const FORM_VALIDATIONS = {
    NAME:nameValidation
}