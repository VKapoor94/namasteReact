const parent = React.createElement(
  "div",
  { id: "parent" },
  [
    React.createElement("div", { id: "child" }, [
        React.createElement("h1", {}, "I am heading tag"),
        React.createElement("h1", {}, "I am heading tag"),
      ]),
      React.createElement("div", { id: "child2" }, [
        React.createElement("h1", {}, "I am heading tag"),
        React.createElement("h1", {}, "I am heading tag"),
      ])
  ]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
