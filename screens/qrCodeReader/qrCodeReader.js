import { useState, useEffect } from "react";

// Core Components
import { Text, View, StyleSheet, Button } from "react-native";

// Libraries
import { BarCodeScanner } from "expo-barcode-scanner";

// Styles
import styles from "./styles";

const QrCodeReader = () => {
  // States
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      <View style={styles.innerContainer}>
        <View style={styles.topLeftBorder}></View>
        <View style={styles.topRightBorder}></View>
        <View style={styles.bottomLeftBorder}></View>
        <View style={styles.bottomRightBorder}></View>
      </View>
      <View style={styles.actionContainer}>
        <Text style={styles.actionText}>
          Inquadra il QR Code per ottenere la ricompensa
        </Text>
      </View>
      {scanned && (
        <Button title={"Tap to Scan Again"} onPress={() => setScanned(false)} />
      )}
    </View>
  );
};

export default QrCodeReader;
