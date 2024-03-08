import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ResultPage = ({ route }) => {
  const { prediction, cropDetails } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crop Recommendation</Text>
      <Text>{prediction}</Text>

      {/* Displaying Crop Details */}
      <Text style={styles.subtitle}>Crop Details</Text>
      <View style={styles.formContainer}>
        <Text style={styles.label}>Crop:</Text>
        <Text style={styles.resultText}>{cropDetails.Crop}</Text>

        <Text style={styles.label}>Water Requirement:</Text>
        <Text style={styles.resultText}>{cropDetails["Water Requirement"]}</Text>

        <Text style={styles.label}>Total Investment per Acre:</Text>
        <Text style={styles.resultText}>{cropDetails["Total Investment per Acre"]}</Text>

        <Text style={styles.label}>Second Best Crop:</Text>
        <Text style={styles.resultText}>{cropDetails["Second Best Crop"]}</Text>

        <Text style={styles.label}>Third Best Crop:</Text>
        <Text style={styles.resultText}>{cropDetails["Third Best Crop"]}</Text>

        <Text style={styles.label}>Duration of Cultivation:</Text>
        <Text style={styles.resultText}>{cropDetails["Duration of Cultivation"]}</Text>

        <Text style={styles.label}>Soil Health Improvement Suggestions:</Text>
        <Text style={styles.resultText}>{cropDetails["Soil Health Improvement Suggestions"]}</Text>

        <Text style={styles.label}>Market Analysis:</Text>
        <Text style={styles.resultText}>{cropDetails["Market Analysis"]}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 16,
  },
  formContainer: {
    alignSelf: 'stretch',
    marginHorizontal: 20,
  },
  label: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 8,
  },
  resultText: {
    fontSize: 14,
    marginBottom: 8,
  },
});


export default ResultPage;
