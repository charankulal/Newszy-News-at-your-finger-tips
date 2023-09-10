# Notes
## React Component LifeCycle

The series of events that happen from the mounting of a React component to its unmounting

- **Mounting** - Birth of Component
- **Update**  - Growth of component
- **Unmount** - Death of component

### Methods used

- `render()` : It is used to render HTML of component in the react. This method is required for a class based component to render the DOM. It runs during the mounting and updating the component. Render() method should be pure (cannot modify state inside it).
- `componentDidMount()` : Runs after the component output has been rendered to the DOM. 
- `componentDIdUpdate()` : It is invoked as the updating happens. The most common use case for the `componentDIdUpdate()` method is updating the DOM in response to prop or state charges.
- `componentWillUnmount()` life cycle method is called just before the component is unmounted as destroyed. Usually used to perform cleanups. 

![](https://miro.medium.com/v2/resize:fit:740/1*6fpdTXUVt1sQuLA9KthEQQ.png)

## React Hooks:

Features of class based components in function based components.

It allows you to use state and other react features without writing a class

Hooks arethe functions which hook into react state and life cycle from function components.

### Commoly used react hooks

- useState
- useEffect
- useContext
- useRef