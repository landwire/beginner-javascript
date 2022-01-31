const terms = document.querySelector('.terms-and-conditions');
const acceptButton = document.querySelector('.accept');

function createObserver() {
  let io;
  const options = {
    root: terms,
    threshold: 1,
  };

  function ioCallback(entries, observer) {
    // const isAtEndOfText = entries[0].isIntersecting; // already called when tiniest bit is visible!
    const isAtEndOfText = entries[0].intersectionRatio === 1; // fully visibile!
    if (isAtEndOfText) {
      acceptButton.disabled = false;
      observer.unobserve(terms.lastElementChild);
    }
  }

  // eslint-disable-next-line prefer-const
  io = new IntersectionObserver(ioCallback, options);
  io.observe(terms.lastElementChild);
}

window.addEventListener('load', createObserver);

function handleVisibilityChange() {
  const pageIsHidden = document.visibilityState === 'hidden';
  if (pageIsHidden) {
    // pause slider
    // pause video etc.
    console.log('Page is hidden!');
  } else {
    console.log('Page is visible!');
  }
}

document.addEventListener('visibilitychange', handleVisibilityChange);
