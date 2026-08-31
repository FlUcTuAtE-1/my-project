import React from 'react';
import { View, Text, Switch } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from '../screens/Setting.styles';

export default function Settings() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>

        <Text style={styles.title}>
          Settings
        </Text>

        <View style={styles.settingRow}>
          <Text style={styles.settingText}>
            Notifications
          </Text>

          <Switch />
        </View>

        <View style={styles.settingRow}>
          <Text style={styles.settingText}>
            Temperature Unit
          </Text>

          <Text>°C</Text>
        </View>

      </View>
    </SafeAreaView>
  );
}