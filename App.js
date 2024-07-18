// ------ CORE REACT  ---------------

const headingContent = React.createElement("h2", {}, "Hello World!");
// { } is the place where attributes related to tag/html element can be added.

const paragraph = React.createElement(
  "p",
  { className: "content", custom: "content-one" },
  "Lorem ipsum!"
);

console.log(paragraph); // React Element ( object )

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(paragraph); // render() takes the react element , converts into react element (object) into html and puts into the DOM

// -------------------------- Nested React Elements  ---------------------------

const parentStr = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "H1 Heading")
  )
);

console.log(parentStr);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parentStr);  // render (react element) => HTML (browser understands) => final DOM rendered.

// ----------------- To give sibling elements in nested react element structure ---------------

const parentStr1 = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "H1 Heading"),
    React.createElement("h2", {}, "H2 Heading"),
  ])
);

const parentStr2 = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "H1 Heading"),
    React.createElement("h2", {}, "H2 Heading"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "H1 Heading"),
    React.createElement("h2", {}, "H2 Heading"),
  ]),
]);

console.log(parentStr2);

// const root = ReactDOM.createRoot(document.getElementsByClassName("root"));
const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(root, "root");

root.render(parentStr2);
