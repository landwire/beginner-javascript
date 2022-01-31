const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = tabs.querySelectorAll('[role="tabpanel"]');

function handleTabClick(e) {
  const currentTab = e.currentTarget;
  // Method 1
  // const currentPanel = tabs.querySelector(
  //   `[aria-labelledby="${currentTab.id}"]`
  // );

  // Method 2 - faster than using querySelector again!!!
  const tabPanelsArray = Array.from(tabPanels);
  // Array.find returns first matching element!
  const currentPanel = tabPanelsArray.find(
    (panel) => panel.getAttribute('aria-labelledby') === currentTab.id
  );

  // mark all tabs as unselected
  tabButtons.forEach((tab) => {
    tab.setAttribute('aria-selected', false);
  });

  // hide all panels
  tabPanels.forEach((panel) => {
    panel.hidden = true;
  });

  // select current tab
  currentTab.setAttribute('aria-selected', true);

  // show current panel
  currentPanel.hidden = false;
}

tabButtons.forEach((tabButton) => {
  tabButton.addEventListener('click', handleTabClick);
});
