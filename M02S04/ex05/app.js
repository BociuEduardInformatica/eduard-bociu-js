// domconentloaded, varianta jquery:
$(function () {
  let $personForm = $('#personForm');
  let $submitButton = $personForm.find('button[type="submit"]');

  if ($personForm.valid() === true) {
    $submitButton.prop('disabled', false);
  } else {
    $submitButton.prop('disabled', 'disabled');
  }

  $personForm.validate({
    errorElement: 'p',
  });

  $personForm.on('blur input', 'input[name]', (event) => {
    let isFormValid = $(event.delegateTarget).valid();

    if (isFormValid === true) {
      $submitButton.prop('disabled', false);
    } else {
      $submitButton.prop('disabled', 'disabled');
    }
  });
});
