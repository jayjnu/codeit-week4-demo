/**
 * @param {object} props 
 * @param {HTMLElement} props.$root
 * @param {TextInput[]} props.inputs
 * @param {LoginService} props.loginService
 */
function SignInForm({$root, inputs, loginService}) {
  function init() {
    $root.addEventListener('submit', (e) => {
      e.preventDefault();
      //1. 모든 input의 유효성이 검증되었는지 본다
      //  검증됐음 -> /folder
      //  안됨 -> alert('바보')
      const formData = getFormData();

      if (isAllInputsValid() && loginService.login(formData)) {
        location.href = '/folder';
      } else {
        alert('바보');
      }
    });
  }
  /**
   * @returns {boolean}
   */
  function isAllInputsValid() {
    return inputs.every((textInput) => textInput.isValid());
  }

  function getFormData() {
    return inputs.reduce((acc, curr) => {
      const data = curr.getData();
      return Object.assign({}, acc, {
        [data.name]: data.value
      })
    }, {});
  }

  return {
    init
  };
}