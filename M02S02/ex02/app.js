const createSkillUl = () => {
  const ulId = 'skills-list';
  let $ul = $(`#${ulId}`);

  if ($ul.length !== 1) {
    $ul = $('<ul>', {
      id: ulId,
    });

    $('#personForm').after($ul);

    $ul.on('click', 'button', (event) => {
      const $element = $(event.currentTarget);

      $element.parent().remove();
    });
  }

  return $ul;
};

$(document).ready(() => {
  let $skillInput = $('#skills');
  // nextElementSibling <- DOM
  $skillInput.next().on('click', () => {
    const value = $skillInput.val(); // DOM -> elem.value
    const $skillsUl = createSkillUl();
    const $skillLi = $('<li>', {
      text: value,
    }).append(
      $('<button>', {
        text: '-',
      }),
    );

    $skillsUl.append($skillLi);

    $skillInput.val('');
  });
});
