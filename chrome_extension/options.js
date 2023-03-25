function onInput() {
  let newUrl = document.querySelector('input').value;
  chrome.storage.sync.set({ url: newUrl });
}

function loadOptions() {
  chrome.storage.sync.get('url', (data) => {
    let url = data.url;
    document.querySelector('input').value = url;
  });
}

loadOptions();
