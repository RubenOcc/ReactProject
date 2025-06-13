props = read-only properties that are shared between components.
        A parent component can send data to a child component.
        <Component key = value />

propsTypes = a mechanism that ensures that the passed value
        is of the correct datatype.
        age: PropTypes.number

defaultProps = default values for props in case they are not
                passed from the parent component
                name: "Guest"