// const cards = document.querySelectorAll('.card');
const modal = document.querySelector('.modal');
const modalInner = modal.querySelector('.modal__inner');
const buttons = document.querySelectorAll('button');
console.log(buttons);

function openModal(e) {
  console.log(e);
  const button = e.currentTarget;
  const card = button.closest('.card');
  const img = card.querySelector('img');
  const imgSrc = img.src;
  const { description } = card.dataset;
  const name = img.alt;
  console.log(imgSrc, description, name);

  modalInner.innerHTML = `
    <span class="spinner">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: none; display: block; shape-rendering: auto;" width="224px" height="224px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
        <g transform="rotate(0 50 50)">
          <rect x="49" y="15.5" rx="0" ry="0" width="2" height="15" fill="#000000">
            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.639344262295082s" begin="-1.553062985332183s" repeatCount="indefinite"></animate>
          </rect>
        </g><g transform="rotate(18.94736842105263 50 50)">
          <rect x="49" y="15.5" rx="0" ry="0" width="2" height="15" fill="#000000">
            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.639344262295082s" begin="-1.4667817083692838s" repeatCount="indefinite"></animate>
          </rect>
        </g><g transform="rotate(37.89473684210526 50 50)">
          <rect x="49" y="15.5" rx="0" ry="0" width="2" height="15" fill="#000000">
            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.639344262295082s" begin="-1.380500431406385s" repeatCount="indefinite"></animate>
          </rect>
        </g><g transform="rotate(56.8421052631579 50 50)">
          <rect x="49" y="15.5" rx="0" ry="0" width="2" height="15" fill="#000000">
            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.639344262295082s" begin="-1.2942191544434858s" repeatCount="indefinite"></animate>
          </rect>
        </g><g transform="rotate(75.78947368421052 50 50)">
          <rect x="49" y="15.5" rx="0" ry="0" width="2" height="15" fill="#000000">
            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.639344262295082s" begin="-1.2079378774805867s" repeatCount="indefinite"></animate>
          </rect>
        </g><g transform="rotate(94.73684210526316 50 50)">
          <rect x="49" y="15.5" rx="0" ry="0" width="2" height="15" fill="#000000">
            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.639344262295082s" begin="-1.1216566005176878s" repeatCount="indefinite"></animate>
          </rect>
        </g><g transform="rotate(113.6842105263158 50 50)">
          <rect x="49" y="15.5" rx="0" ry="0" width="2" height="15" fill="#000000">
            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.639344262295082s" begin="-1.0353753235547887s" repeatCount="indefinite"></animate>
          </rect>
        </g><g transform="rotate(132.6315789473684 50 50)">
          <rect x="49" y="15.5" rx="0" ry="0" width="2" height="15" fill="#000000">
            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.639344262295082s" begin="-0.9490940465918896s" repeatCount="indefinite"></animate>
          </rect>
        </g><g transform="rotate(151.57894736842104 50 50)">
          <rect x="49" y="15.5" rx="0" ry="0" width="2" height="15" fill="#000000">
            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.639344262295082s" begin="-0.8628127696289906s" repeatCount="indefinite"></animate>
          </rect>
        </g><g transform="rotate(170.52631578947367 50 50)">
          <rect x="49" y="15.5" rx="0" ry="0" width="2" height="15" fill="#000000">
            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.639344262295082s" begin="-0.7765314926660914s" repeatCount="indefinite"></animate>
          </rect>
        </g><g transform="rotate(189.47368421052633 50 50)">
          <rect x="49" y="15.5" rx="0" ry="0" width="2" height="15" fill="#000000">
            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.639344262295082s" begin="-0.6902502157031924s" repeatCount="indefinite"></animate>
          </rect>
        </g><g transform="rotate(208.42105263157896 50 50)">
          <rect x="49" y="15.5" rx="0" ry="0" width="2" height="15" fill="#000000">
            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.639344262295082s" begin="-0.6039689387402933s" repeatCount="indefinite"></animate>
          </rect>
        </g><g transform="rotate(227.3684210526316 50 50)">
          <rect x="49" y="15.5" rx="0" ry="0" width="2" height="15" fill="#000000">
            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.639344262295082s" begin="-0.5176876617773943s" repeatCount="indefinite"></animate>
          </rect>
        </g><g transform="rotate(246.31578947368422 50 50)">
          <rect x="49" y="15.5" rx="0" ry="0" width="2" height="15" fill="#000000">
            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.639344262295082s" begin="-0.4314063848144953s" repeatCount="indefinite"></animate>
          </rect>
        </g><g transform="rotate(265.2631578947368 50 50)">
          <rect x="49" y="15.5" rx="0" ry="0" width="2" height="15" fill="#000000">
            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.639344262295082s" begin="-0.3451251078515962s" repeatCount="indefinite"></animate>
          </rect>
        </g><g transform="rotate(284.2105263157895 50 50)">
          <rect x="49" y="15.5" rx="0" ry="0" width="2" height="15" fill="#000000">
            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.639344262295082s" begin="-0.25884383088869717s" repeatCount="indefinite"></animate>
          </rect>
        </g><g transform="rotate(303.1578947368421 50 50)">
          <rect x="49" y="15.5" rx="0" ry="0" width="2" height="15" fill="#000000">
            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.639344262295082s" begin="-0.1725625539257981s" repeatCount="indefinite"></animate>
          </rect>
        </g><g transform="rotate(322.10526315789474 50 50)">
          <rect x="49" y="15.5" rx="0" ry="0" width="2" height="15" fill="#000000">
            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.639344262295082s" begin="-0.08628127696289906s" repeatCount="indefinite"></animate>
          </rect>
        </g><g transform="rotate(341.05263157894734 50 50)">
          <rect x="49" y="15.5" rx="0" ry="0" width="2" height="15" fill="#000000">
            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.639344262295082s" begin="0s" repeatCount="indefinite"></animate>
          </rect>
        </g>
      </svg>
    </span>
    <img width="600" height="600" hidden src="${imgSrc.replace(
      200,
      600
    )}" alt="${name}">
    <h3>${name}</h3>
    <p>${description}</p>
  `;

  modal.classList.add('open');

  const modalImg = modalInner.querySelector('img');
  const modalSpinner = modalImg.previousElementSibling;
  modalImg.addEventListener('load', () => {
    modalSpinner.remove();
    modalImg.removeAttribute('hidden');
  });
}

function closeModal() {
  modal.classList.remove('open');
}

//
buttons.forEach((button) => {
  button.addEventListener('click', openModal);
});

modal.addEventListener('click', (e) => {
  const isOutside = !e.target.closest('.modal__inner');

  if (isOutside) {
    closeModal();
  }
});

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal();
  }
});
