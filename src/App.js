const Pizza = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, props.name),
    React.createElement("p", {}, props.description),
  ])
}

const App = () => {
  return React.createElement(
    "div",
    {},
    [
      React.createElement("h1", {}, "Concern LLC"),
      React.createElement(Pizza,
        {
          name: "Dookie Pizza",
          description: "A pizza with dookie on it"
        }),
      React.createElement(Pizza,
        {
          name: "Another Pizza",
          description: "A pizza with Another on it"
        }),
      React.createElement(Pizza,
        {
          name: "foofie Pizza",
          description: "A pizza with foofie on it"
        }),
    ]
  )
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
