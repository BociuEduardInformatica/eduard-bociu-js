$(() => {
  const buildPersonList = () => {
    const ulClass = 'person-list';

    fetch('http://localhost:8080/persons', {
      method: 'GET',
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        let $ul = $(`.${ulClass}`);
        $ul.remove();

        if ($ul.length === 0) {
          $ul = $('<ul>', {
            class: ulClass,
          });
        }

        $ul.empty();

        response.persons.forEach((person) => {
          const $li = $('<li>', {
            text: person.name,
          });
          const $skillsUl = $('<ul>');
          person.skills.forEach((skill) => {
            $('<li>', {
              text: skill,
            }).appendTo($skillsUl);
          });
          $li.append($skillsUl);
          $ul.append($li);
        });
        $ul.appendTo('body');
      });
  };

  buildPersonList();

  const $form = $('#personForm');
  let requestBody = {
    person: {
      name: '',
      skills: [],
    },
  };

  $form
    .on('click', '.addSkill', (event) => {
      const $delegateTarget = $(event.currentTarget);
      const $buttonParent = $delegateTarget.parent(); // parentElement <- DOM
      const skillValue = $delegateTarget.prev().val();

      if (skillValue.length < 1) {
        return;
      }

      requestBody.person.skills.push(skillValue);

      let $skillsUl = $('.skillsUl');
      let $skillLi = $('<li>', {
        text: skillValue,
      });

      if ($skillsUl.length < 1) {
        $skillsUl = $('<ul>', {
          class: 'skillsUl',
        });

        $skillsUl.append($skillLi).appendTo($buttonParent);
      } else {
        $skillsUl.append($skillLi);
      }

      $delegateTarget.prev().val(''); // domNode.value='' <- DOM
    })
    .on('submit', (event) => {
      event.preventDefault();
      const $nameInput = $(event.target).find('input[name="name"]');
      requestBody.person.name = $nameInput.val();

      fetch('http://localhost:8080/persons', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      }).then(() => {
        $nameInput.val('');
        $('.skillsUl').empty();
        requestBody = {
          person: {
            name: '',
            skills: [],
          },
        };
        buildPersonList();
      });
    });
  // $form[0].addEvenListener
});
