import SuggestResult = chrome.omnibox.SuggestResult;

function onInputChanged(text: string, suggest: (suggestResults: SuggestResult[]) => void) {
  console.log(text);

  const suggestions: any[] = Array(text.length).fill(null).map((_, idx) => ({
    content: 'https://www.google.com/search?q=' + encodeURIComponent(text + (idx+1)),
    description: 'Look in google for ' + text + (idx+1)
  }));

  suggest(suggestions);
}

chrome.omnibox.onInputChanged.addListener(onInputChanged);
