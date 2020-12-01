const createTextCaptureInput = (placeholder = 'Adauga o valoare') => {
  const $widget = $('<div>', {
    class: 'text-widget',
  });

  $widget
    .append(
      $('<input>', {
        type: 'text',
        placeholder,
      }),
    )
    .append(
      $('<button>', {
        type: 'button',
        text: 'Salveaza',
        class: 'save',
      }),
    )
    .append(
      $('<button>', {
        type: 'button',
        text: 'Renunta',
        class: 'cancel',
      }),
    );

  return $widget;
};

const formId = 'personForm';
const createSkillUl = () => {
  const ulId = 'skills-list';
  let $ul = $(`#${ulId}`);

  if ($ul.length !== 1) {
    $ul = $('<ul>', {
      id: ulId,
    });

    $(`#${formId}`).after($ul);

    $ul.on('click', '.delete', (event) => {
      const $element = $(event.currentTarget);

      $element.parent().remove();
    });

    $ul.on('click', '.edit', (event) => {
      const $element = $(event.currentTarget);
      const $parentLi = $element.parent();
    });
  }

  return $ul;
};

const createPersonDetails = () => {
  const detailsId = 'person-details';
  let $p = $(`#${detailsId}`);

  if ($p.length < 1) {
    $p = $('<p>', {
      id: detailsId,
    });

    $(`#${formId}`).after($p);
  }

  return $p;
};

$(document).ready(() => {
  let $skillInput = $('#skills');
  // nextElementSibling <- DOM
  $skillInput.next().on('click', () => {
    const value = $skillInput.val(); // DOM -> elem.value
    const $skillsUl = createSkillUl();
    const $skillLi = $('<li>')
      .append(
        $('<span>', {
          class: 'skill-text',
          text: value,
        }),
      )
      .append(
        $('<button>', {
          text: '-',
          class: 'delete',
          // skill__button
        }),
      )
      .append(
        $('<button>', {
          text: 'Edit',
          class: 'edit',
        }),
      );

    $skillsUl.append($skillLi);

    $skillInput.val('');
  });

  // function version:
  $(`#${formId}`).on('submit', function (event) {
    let $form = $(this); // <-- function version this = dom element
    const data = $form.serializeArray();
    const desiredKeys = ['name', 'surname', 'age'];

    const userData = data.filter((key) => {
      if (desiredKeys.includes(key.name)) {
        return true;
      } else {
        return false;
      }
    });

    $personDetails = createPersonDetails();
    let message = `
      Numele meu este ${userData[0].value} ${userData[1].value} si am ${userData[2].value} ani.
    `;
    $personDetails.text(message);

    event.preventDefault();
  });
});
