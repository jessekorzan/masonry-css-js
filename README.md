# Live Demo: [https://masonry-css-js.netlify.com/](https://masonry-css-js.netlify.com/)

![problem image](https://github.com/jessekorzan/masonry-css-js/blob/master/public/problem-css-masonry.png "the problem")

CSS column-count for masonry-style layouts is dead easy (couple lines of CSS and very minimal markup to get it going).

The problem (sometimes) is the way the content flows. Typically, I want a left-to-right scan reading experience, i.e. cards of blog post summaries with the most recent posts to appear at the top of the view. I also don't want to use JS for the layout. Pure CSS... all the way.

The only "help" that JS provides is re-ordering the array before rendering to the view so that we can use CSS column-count for the layout. Again, for example, recent blog posts from a JSON feed.

Check the demo: [here](https://masonry-css-js.netlify.com/)
Check out the code: [react component](https://github.com/jessekorzan/masonry-css-js/blob/master/src/App.js)

Special thanks to my Klue teammate [@nickb](https://twitter.com/nickb) for the algo.

---

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Here's the guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

