# Live Demo: [https://masonry-css-js.netlify.app/](https://masonry-css-js.netlify.app/)

![problem image](https://github.com/jessekorzan/masonry-css-js/blob/master/public/problem-css-masonry.png "the problem")

CSS column-count for masonry-style layouts is dead easy (couple lines of CSS and very minimal markup to get it going).

## The Problem
The problem (sometimes) is the way the content flows (see the diagram above). Typically, I want a left-to-right scan reading experience, i.e. cards of blog post summaries with the most recent posts to appear at the top of the view. I also don't want to use JS for the layout. Pure CSS... all the way.

## The Solution
The only "help" that JS provides is re-ordering the array before rendering to the view so that we can use CSS column-count for the layout. Again, for example, this array could be a feed of recent news posts.

Check the demo: [here](https://masonry-css-js.netlify.app/)

Check out the code: [react component](https://github.com/jessekorzan/masonry-css-js/blob/master/src/App.js)

Post on Medium: [Easy CSS Masonry Layout w/ Left-To-Right Content Flow](https://hackernoon.com/masonry-layout-technique-react-demo-of-100-css-control-of-the-view-e4190fa4296)

Special thanks to my Klue teammate [@nickb](https://twitter.com/nickb) for figuring out the array re-order (and in a way even I could understand).

---

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Here's the guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

