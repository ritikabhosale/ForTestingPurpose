import React from 'react';
import {StyleSheet} from 'react-native';
import {Text, View, Button} from 'react-native';

export const Counter = () => {
  const [count, setCount] = React.useState(0);

  return (
    <View>
      <Text style={styles.counterText} testID="counter">
        {count}
      </Text>
      <Button
        testID="incremental-btn"
        onPress={() => setCount(_count => _count + 1)}
        title="press me"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  counterText: {
    color: 'blue',
  },
});
