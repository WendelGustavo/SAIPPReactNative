import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import data from './api';

export default function Controle() {
  const [currentIndex, setCurrentIndex] = React.useState(null);
  const ref = React.useRef();


  return (
    <View
      ref={ref}
      style={styles.container}
    >
      <StatusBar hidden />
      {data.map(({ bg, color, Item, subItems }, index) => {
        return (
          <TouchableOpacity
            key={Item}
            onPress={() => {
              setCurrentIndex(index === currentIndex ? null : index);
            }}
            style={styles.cardContainer}
            activeOpacity={0.9}
          >
            <View 
            style={[styles.card, { backgroundColor: bg }]}>
              <Text 
              style={[styles.heading, { color }]}>{Item}</Text>
              {index === currentIndex && (
                <View 
                style={styles.subItems}>
                  {subItems.map((subItem) => (
                    <Text 
                     key={subItem} 
                     style={[styles.body, { color }]}>
                      {subItem}
                    </Text>
                  ))}
                </View>
              )}
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  cardContainer: {
    flexGrow: 1,
  },
  card: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 38,
    fontWeight: '900',
    textTransform: 'uppercase',
    letterSpacing: -2,
  },
  body: {
    fontSize: 20,
    lineHeight: 20 * 1.5,
    textAlign: 'center',
  },
  subCategoriesList: {
    marginTop: 20,
  },
});