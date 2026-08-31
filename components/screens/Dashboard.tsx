//react-navigation

import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';

import styles from '../../styles';

type Props = NativeStackScreenProps<
  RootStackParamList,
  'Dashboard'
>;

export default function Dashboard({ navigation }: Props) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>

        {/* HEADER */}
        <View style={styles.header}>
          <Text style={styles.title}>
            Smart Home
          </Text>

          <TouchableOpacity
            onPress={() => navigation.navigate('Settings')}
          >
            <Image
              style={styles.icon}
              source={require('../../assets/icons/settings.png')}
            />
          </TouchableOpacity>
        </View>

        {/* TEMPERATURE */}
        <View style={styles.temperature}>
          <Image
            style={styles.tempIcon}
            source={require('../../assets/icons/low-temperature.png')}
          />

          <Text style={styles.temp}>
            26°C
          </Text>

          <Text style={styles.location}>
            Living Room
          </Text>
        </View>

        {/* FIRST ROW */}
        <View style={styles.deviceRow}>

          <View style={styles.card}>
            <Image
              style={styles.cardIcon}
              source={require('../../assets/icons/bulb.png')}
            />

            <Text style={styles.cardTitle}>
              Light
            </Text>

            <Text style={styles.cardStatus}>
              ON
            </Text>
          </View>

          <View style={styles.card}>
            <Image
              style={styles.cardIcon}
              source={require('../../assets/icons/air-conditioner.png')}
            />

            <Text style={styles.cardTitle}>
              AC
            </Text>

            <Text style={styles.cardStatus}>
              24°C
            </Text>
          </View>

        </View>

        {/* SECOND ROW */}
        <View style={styles.deviceRow}>

          <View style={styles.card}>
            <Image
              style={styles.cardIcon}
              source={require('../../assets/icons/locked.png')}
            />

            <Text style={styles.cardTitle}>
              Door
            </Text>

            <Text style={styles.cardStatus}>
              LOCKED
            </Text>
          </View>

          <View style={styles.card}>
            <Image
              style={styles.cardIcon}
              source={require('../../assets/icons/camera.png')}
            />

            <Text style={styles.cardTitle}>
              Camera
            </Text>

            <Text style={styles.cardStatus}>
              ON
            </Text>
          </View>

        </View>

        {/* VIEW DEVICES */}
        <TouchableOpacity
          style={styles.viewDevices}
          onPress={() => navigation.navigate('Devices')}
        >
          <Text style={styles.viewDevicesText}>
            View All Devices →
          </Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
}