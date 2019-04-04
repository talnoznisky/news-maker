# Personal news app
This is a personal project to develop a news aggregator app for my phone using React, Redux, and an API with Flask
## How it works
There are really only two states and an API:
### The API
I built a lightweight Flask API wrapper to call a news aggregation service. The API stores the news service's API key allows me to make cross-origin requests. Its code is saved in separate repo. The application itself is hosted on Heroku.
## Home state
On load, the Home component calls the wrapper API with a request for top headlines. It's a generic search. The articles it returns are push to the store and rendered through a nested Results component.
## Results states
On search (more below), the search term pushed as a parameter to the URL. The API is not yet called. The location change triggers a route switch switch to the results component. The results component will then grab the search parameter from the new URL and request it from the Heroku API. It dispatches the articles to the store. If the user searches again, the componentDidUpdate function will check if the search term has changed. If so, it will make a new query.
## To do
- create 'recently searched' buttons to quickly re-search for favorite/recent topics. Previous searches would be pulled from an array in the store and rendered into Button components. New rules are required for how many terms to save.
- pass previous searches array to Firebase. That way I can see my previous searches when I reopen from the last session
- handle errors from heroku app
- handle undefined/null searches

## Thanks
Brendan McIlhenny's [So you want to host your Single Page React App on GitHub Pages?](https://itnext.io/so-you-want-to-host-your-single-age-react-app-on-github-pages-a826ab01e48Â)

Rafael Pedicini's [spa-github-pages solution](https://github.com/rafrex/spa-github-pages)

These resources were essential. Hosting the app on github pages breaks the routing. Refreshing the page on a results route forces a 404. That's because github pages think I'm rendering the index.html page. Brendan detailed similar complications and led me to Rafael's repo. I copied Rafael's code into my own and it works now. Very thankful for both of their efforts. 
