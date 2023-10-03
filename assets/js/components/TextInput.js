/**
   * @param {object} props
   * @param {HTMLElement} props.$root
   * @param {string} props.emptyErrorMessage
   * @param {string} props.invalidErrorMessage
   * @param {(input: string) => boolean} props.validate
   */
  function TextInput({$root, validate, emptyErrorMessage, invalidErrorMessage}) {
    const classNames = {
      error: 'text_input--error'
    };
    const selectors = {
      input: '.text_input__input',
      message: '.text_input__message'
    };
    const $input = $root.querySelector(selectors.input);
    const $message = $root.querySelector(selectors.message);

    function init() {
      $input.addEventListener('focusout', (e) => {
        // 1. 빈값을 체크해라
        //  1-1 빈값이면 그걸 화면에 표시해라
        // 2. 유효한 값인지 체크해라
        // 3. 유효한 값이 아니면 그걸 화면에 표시해라
        const value = e.target.value;
        const isValid = validate(value);
        toggleErrorState(isValid);
        $message.innerHTML = getStateMessage(value, isValid)
      });
    }
    function isValid() {
      return validate($input.value);
    }
    function getData() {
      return {
        name: $input.getAttribute('name'),
        value: $input.value
      }
    }

    return {
      init,
      isValid,
      getData
    };

    function toggleErrorState(isValid) {
      $root.classList.toggle(classNames.error, !isValid);
    }

    function getStateMessage(value, isValid) {
      if (value === '') {
        return emptyErrorMessage;;
      }

      if (!isValid) {
        return invalidErrorMessage;
      }
      
      return ''
    }
  }
