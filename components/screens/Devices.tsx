import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './Devices.styles';

export default function Devices() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>

        <Text style={styles.title}>
          My Devices
        </Text>

        <View style={styles.device}>
          <View>
            <Text style={styles.deviceName}>
              Light
            </Text>
            <Text>Living Room</Text>
          </View>

          <Text>ON</Text>
        </View>

        <View style={styles.device}>
          <View>
            <Text style={styles.deviceName}>
              Air Conditioner
            </Text>
            <Text>Living Room</Text>
          </View>

          <Text>24°C</Text>
        </View>

      </View>
    </SafeAreaView>
  );
}