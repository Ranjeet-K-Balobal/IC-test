import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TextInput,
  ScrollView,
  ActivityIndicator,
  Alert,
} from "react-native";
import * as DocumentPicker from "expo-document-picker";

const FormPage = ({ navigation }) => {
  const [N, setN] = useState("");
  const [P, setP] = useState("");
  const [K, setK] = useState("");
  const [ph, setPh] = useState("");
  const [temperature, setTemperature] = useState("");
  const [humidity, setHumidity] = useState("");
  const [rainfall, setRainfall] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const _pickDocument = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({});
      // Handle document picking result
      console.log(result);
    } catch (error) {
      console.error("Error picking document:", error);
    }
  };

  const submitForm = async () => {
    try {
      setLoading(true);

      // Prepare the data in the required format
      const requestData = {
        N: parseFloat(N),
        P: parseFloat(P),
        K: parseFloat(K),
        temperature: parseFloat(temperature),
        humidity: parseFloat(humidity),
        ph: parseFloat(ph),
        rainfall: parseFloat(rainfall),
      };

      // Make an API call to your backend with the prepared data using fetch
      const response = await fetch("http://172.21.10.138:4000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      // Check if the response is successful (status code in the range 200-299)
      if (response.ok) {
        const responseData = await response.json();
        const { prediction, cropDetails } = responseData;

        // Log the details for now
        console.log("Prediction:", prediction);
        console.log("Crop Details:", cropDetails);

        // Navigate to the ResultPage with the response data
        navigation.navigate("ResultPage", { prediction, cropDetails });
      } else {
        // Handle errors when the response status is not in the range 200-299
        console.error("Server responded with error status:", response.status);

        // Parse and log the error message from the response body
        const errorMessage = await response.text();
        console.error("Response data:", errorMessage);

        setError("Error processing data. Please try again.");
      }
    } catch (error) {
      // Log detailed error information
      console.error("Error submitting form:", error);

      setError("Error processing data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Upload Document :</Text>
        <Pressable style={styles.DocButton} onPress={_pickDocument}>
          <Text style={styles.buttonText}>Select Doc</Text>
        </Pressable>
        <Text style={styles.divider}>
          - - - - - - - - - - - - - - - - - - OR - - - - - - - - - - - - - - - -
          -{" "}
        </Text>
        <Text style={styles.title}>Enter Manually : </Text>
        <View style={styles.inputboxes}>
          <Text style={styles.refinput}>Nitrogen value</Text>
          <TextInput
            style={styles.input}
            placeholder="e.g :70, 95, 85"
            keyboardType="numeric"
            value={N}
            onChangeText={(val) => setN(val)}
          />
          <Text style={styles.refinput}>Phosphorus</Text>
          <TextInput
            style={styles.input}
            placeholder="e.g :80, 90, 99"
            keyboardType="numeric"
            value={P}
            onChangeText={(val) => setP(val)}
          />
          <Text style={styles.refinput}>Potassium value</Text>
          <TextInput
            style={styles.input}
            placeholder="e.g :90, 95, 97"
            keyboardType="numeric"
            value={K}
            onChangeText={(val) => setK(val)}
          />
          <Text style={styles.refinput}>pH value</Text>
          <TextInput
            style={styles.input}
            placeholder="Include decimal values"
            keyboardType="numeric"
            value={ph}
            onChangeText={(val) => setPh(val)}
          />
          <Text style={styles.refinput}>Temperature (C)</Text>
          <TextInput
            style={styles.input}
            placeholder="e.g : 25, 30, 38"
            keyboardType="numeric"
            value={temperature}
            onChangeText={(val) => setTemperature(val)}
          />
          <Text style={styles.refinput}>Humidity</Text>
          <TextInput
            style={styles.input}
            placeholder="e.g : 82.0027"
            keyboardType="numeric"
            value={humidity}
            onChangeText={(val) => setHumidity(val)}
          />
          <Text style={styles.refinput}>Rainfall (cm) </Text>
          <TextInput
            style={styles.input}
            placeholder="e.g :202.936"
            keyboardType="numeric"
            value={rainfall}
            onChangeText={(val) => setRainfall(val)}
          />
        </View>
        {loading ? (
          <ActivityIndicator size="large" color="#34bca7" />
        ) : (
          <Pressable style={styles.DocButton} onPress={submitForm}>
            <Text style={styles.buttonText}>Generate Report</Text>
          </Pressable>
        )}

        {error && <Text style={{ color: "red" }}>{error}</Text>}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
    marginBottom: 50,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "right",
  },
  DocButton: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 6,
    elevation: 3,
    backgroundColor: "black",
    marginTop: 15,
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  divider: {
    fontSize: 15,
    lineHeight: 90,
    color: "grey",
    fontWeight: "500",
  },
  input: {
    width: 200,
    height: 40,
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 6,
    padding: 10,
    marginBottom: 15,
  },
  inputboxes: {
    justifyContent: "space-between",
  },
  refinput: {
    paddingBottom: 10,
    fontSize: 15,
  },
});

export default FormPage;
