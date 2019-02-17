import React from 'react';
import { Animated, TouchableWithoutFeedback } from 'react-native';
import PropTypes from 'prop-types';

const withPress = Component => class WithPress extends React.Component {
    static propTypes = {
      /**
       * Pass onPress handler
      */
      onPress: PropTypes.func,
      /**
       * Pass disabled handler
      */
      disabled: PropTypes.bool,
    };

    static defaultProps = {
      onPress: () => {},
      disabled: false,
    };

    state = {
      animatedStartValue: new Animated.Value(1),
    }

    handlePressIn = () => {
      const { animatedStartValue } = this.state;
      Animated.timing(
        animatedStartValue,
        {
          toValue: 0.8,
          duration: 200,
          useNativeDriver: true,
        },
      ).start();
    }

    handlePressOut = () => {
      const { animatedStartValue } = this.state;
      Animated.timing(
        animatedStartValue,
        {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        },
      ).start();
    }

    render() {
      const { onPress, disabled } = this.props;
      const { animatedStartValue } = this.state;
      const animatedStyle = {
        transform: [{ scale: animatedStartValue }],
      };

      return (
        <Animated.View style={animatedStyle}>
          <TouchableWithoutFeedback
            onPress={onPress}
            onPressIn={this.handlePressIn}
            onPressOut={this.handlePressOut}
            disabled={disabled}
          >
            <Component {...this.props} {...this.state} />
          </TouchableWithoutFeedback>
        </Animated.View>
      );
    }
};

export default withPress;
