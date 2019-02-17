<img src="http://www.danijelgrabez.com/public-links/github/react-native-withPressAnimation/react-native-withPressAnimation.gif" width="320" alt= "Example usage of withPressAnimation higher order component on Button component">

# React Native `withPressAnimation`

A higher order component which provides onPress animation for React Native component. 
Demo 👉[Expo Snack](https://snack.expo.io/@danijelgrabez/withpressanimation).

### Props which will be received from the component
- `onPress`
- `disabled`


### Usage

```
import withPressAnimation from './path/to/file';

const Button = props => (
  ...
)

export default withPressAnimation(Button);
```
