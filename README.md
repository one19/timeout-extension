#TIMEOUT!

### WHAAATS THIS NOW?
This is a _terrible_ **truly terrible** chrome extension. It allows you to set a timer for sometime in the future (or past, if you're some sicko like that). It allows you to set timers for **FAR** into the future. It also allows you to set timers for **RANDOM TIMES** into the future. They will go off as a notification. That is all.

It is not good. It is not meant to be used widely, but if you'd like to install it into your browser (and I haven't published, which, to be sure, I probably haven't), all you have to do is:
1. `git clone` this thing into a directory somplace
2. open up your `chrome://extensions/` tab
3. make sure that developer mode is on
4. run `yarn build` if you're worried that it's malicious, and have looked over the code elsewhise
5. drag the docs folder into your extensions
6. click on the icon, and set a timer!

### TODO:
*Probably not much (i use this as a utility for me, it most likely shouldn't be seen by anyone else):*

#### Generally:
1. Fix bundling so that background is also output into a minified `background.js` file
2. Strip the contextless console.logs

#### If I want to turn this into a chrome utility tutorial:
1. Add a more expressive git history
2. Add a whole boatload of documentation
3. Make a video series on how it was done, and add links to it
  1. Set up dev environment
  2. Set up webpack
  3. Set up app in react
  4. Set up some form components
  5. Set up the funky background dealie
  6. Set up the background js file
  7. Wire everything together

#### If I want to make it more mature:
1. Fix the selects to be inverted (correct) key navigation
2. Make the select not look like a barrel of butt
3. Make the Notification have a sensible `delay` button feature
4. Make the random selectors also accept a min-max range with multi-select
5. Make the random selectors smarter about `what is in the future`
6. Tests. lots of them.
