# REACT : JS library for building UI.

### React runs on the clients as a SPA (Single Page App)

## WHy to use REACT ?

MVC {
Model: "Model Deals with Data",
Controller: "COntroller deals with the requests & the routing",
View: "View is the UI- User Interface- which user sees"
}

### MVC.View = " **REACT** ";

- Structure the 'view' layer of your application
- Reusable components wih their own state
- JSX - Dynamic markup - JavaScript XML- JSX allows us to write HTML in React.
- Interactive UIs with Virtual DOM
- Performance & testing
- One way data binding

## Components - Function & Classes

> Function based Component:

      export const Header = () => {
        return (
          <div>
            <h1> My Header </h1>
          </div>
        )
      }

> Class based Component:

      export default class Header extends React.Component {
        render()
        {
          retunr  (
            <div>
            <h1> My Header </h1>
            </div>
          )
        }
      }

- Components render / return JSX (Javascript Syntax Extension)
- Componenets can also take in "props"
  Example: <Header **title = "My Props"** />
- Components are not static markup, instead they are DYNAMIC and they contain **"state"**.

## Working with State

### Components can have **"state"** which is an object that determines how a compnent renders and behaves.

- **"App"** oe **"global"** state refers to state that is available to the entire UI, not just a single component.

- > NOTE: Prior to React 16.8, we had to use Class based components to use state. But Now we can use **FUNCTIONAL COMPONENTs** with **Hooks**.

```
// Earlier, Functional Components were called- Dumb components (Stateless components) - A functional(a.k.a. stateless) component is **(was)** just a plain javascript function which takes props as an argument and returns a react element.

-  Class based Components are Stateful components. It has a state, lifecycle hooks and it is a javascript class which means that React creates instances of it. React should initialise the component class in order to call lifecycle hooks, call a constructor, initialise state and more.

// Earlier > Stateless functional components are useful for dumb/presentational components. Presentational components focus on the UI rather than behavior, so it’s important to avoid using state in presentational components. Instead, state should be managed by higher-level “container” components, or via Flux/Redux/etc. Stateless functional components don’t support state or lifecycle methods.

```

> This (Above) was before React 16.8, but now we support state and other things in Functional Components also. They are not Dumb anymore B-)

## React Hooks

**React Hooks** are functions that let us **hook** into the **React** state and lifecycle features from function components.
OR in other words------

- ### Hooks - They let you use state and other React features without writing a class.

- useState - returns a stateful value and a function to update it
- [useEffect](https://reactjs.org/docs/hooks-effect.html) - perform side effects in function components
- useContext, useReducer, useRed ... many more (You can create your own custom hooks also :)

```
import React, { useState } from 'react';

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

Here, **useState** is a Hook (we’ll talk about what this means in a moment). We call it inside a function component to add some **local state** to it. React will preserve this state between re-renders. **useState returns a pair: the current state value and a function that lets you update it.** You can call this function from an event handler or somewhere else. It’s similar to this.setState in a class, except it doesn’t merge the old and new state together.
The only argument to useState is the initial state. The initial state argument is only used during the first render.

For more : https://reactjs.org/docs/hooks-intro.html
// > -------------------------------------------------------
Let's begin

1.  npx create-react-app <your-app-name> // This will setup everything required to start/create a project with essential core dependencies
2.  cd <your-app-name>
    yarn start or npm start ( to start dev server on local machine)

3.  Install JSON-Server (to host backend server to connect to )
    in 'package.json'-debug-
    "server": "json-server --watch db.json --port 5000"
    > npm run server

// ----------------------------------------------------

# React Notes:

## JSX : JSX element should/Must have only OjNE PARENT Element !! (You can put any number of child elements inside the single Parent element) inside the return value of the class/functional component. [ If you don't want to use any element, then use empty brackets <> </> to enclose child elements in it]

# Props (to Pass stuff in the Components)

# React - States (useState) - Hooks
