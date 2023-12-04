import React, { useState, useEffect } from "react";

// Core Components
import { Text, View, StyleSheet, Button } from "react-native";

// Libraries
import { BarCodeScanner } from "expo-barcode-scanner";

const QrCodeReader = () => {
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

const borderRadius = 50;
const borderWidth = 5;
const width = 80;
const height = 80;
const borderColor = "#fff";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  innerContainer: {
    position: "relative",
    width: 300,
    height: 300,
    backgroundColor: "transparent",
  },
  topLeftBorder: {
    position: "absolute",
    top: 0,
    left: 0,
    height: height,
    width: width,
    borderColor: borderColor,
    borderLeftWidth: borderWidth,
    borderTopWidth: borderWidth,
    borderTopLeftRadius: borderRadius,
  },
  topRightBorder: {
    position: "absolute",
    top: 0,
    right: 0,
    height: height,
    width: width,
    borderColor: borderColor,
    borderRightWidth: borderWidth,
    borderTopWidth: borderWidth,
    borderTopRightRadius: borderRadius,
  },
  bottomLeftBorder: {
    position: "absolute",
    bottom: 0,
    left: 0,
    height: height,
    width: width,
    borderColor: borderColor,
    borderLeftWidth: borderWidth,
    borderBottomWidth: borderWidth,
    borderBottomLeftRadius: borderRadius,
  },
  bottomRightBorder: {
    position: "absolute",
    bottom: 0,
    right: 0,
    height: height,
    width: width,
    borderColor: borderColor,
    borderRightWidth: borderWidth,
    borderBottomWidth: borderWidth,
    borderBottomRightRadius: borderRadius,
  },
  actionContainer: {
    marginTop: 30,
  },
  actionText: {
    color: "#fff",
    fontSize: 20,
    textAlign: "center",
  },
});

export default QrCodeReader;
