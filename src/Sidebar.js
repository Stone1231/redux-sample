import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Counter } from './features/counter/Counter';
import Counter2 from './features/counter2/index';
import Todos from './features/todos/components/App';
import Todomvc from './features/todomvc/components/App';
import TodoUndo from './features/todos-with-undo/components/App';
import Shopping from './features/shopping-cart/index';
import Node from './features/tree-view/index'

function SidebarTitle(props) {
  let style = { color: "blue" };
  if (props.style != null) {
    style = props.style;
  }
  return <div style={style}>{props.children}</div>;
}

const data = [
  {
    name: "Samples",
    routes: [
      {
        path: "/counter",
        title: "Counter",
        main: () => <Counter />,
      },
      {
        path: "/counter2",
        title: "Counter 2",
        main: () => <Counter2 />,
      },
      {
        path: "/todos",
        title: "Todos",
        main: () => <Todos />,
      },
      {
        path: "/todomvc",
        title: "Todos MVC",
        main: () => <Todomvc />,
      },
      {
        path: "/todoundo",
        title: "Todos undo",
        main: () => <TodoUndo />,
      },
      {
        path: "/Shopping",
        title: "Shopping Cart",
        main: () => <Shopping />,
      },
      {
        path: "/tree",
        title: "Tree View",
        main: () => Node,
      }
    ],
  },
];

export default function SidebarExample() {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <div
          style={{
            padding: "10px",
            width: "16%",
            background: "#f0f0f0",
          }}
        >
          {data.map((m) => (
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li>
                <b>{m.name}</b>
              </li>
              {m.routes.map((route, index) => (
                <li>
                  <Link to={route.path} style={route.style}>
                    {route.title}
                  </Link>
                </li>
              ))}
            </ul>
          ))}
        </div>

        <div style={{ flex: 1, padding: "10px" }}>
          <Switch>
            {data.map((m) =>
              m.routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  children={
                    <SidebarTitle style={route.style}>
                      {route.title}
                    </SidebarTitle>
                  }
                />
              ))
            )}
          </Switch>
          <Switch>
            {data.map((m) =>
              m.routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  children={<route.main />}
                />
              ))
            )}
          </Switch>
        </div>
      </div>
    </Router>
  );
}
