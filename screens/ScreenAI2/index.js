import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const DashboardScreen = () => {
  const natGasData = [{
    id: "01",
    period: "2023-04",
    duoarea: "SIN",
    areaName: "USA-IN",
    product: "EPG0",
    productName: "Natural Gas",
    process: "FGW",
    processName: "Gross Withdrawals",
    series: "N9010IN2",
    seriesDescription: "Indiana Natural Gas Gross Withdrawals (MMcf)",
    value: null,
    units: "MMCF"
  }, {
    id: "02",
    period: "2023-04",
    duoarea: "SWY",
    areaName: "USA-WY",
    product: "EPG0",
    productName: "Natural Gas",
    process: "VGQ",
    processName: "Repressuring",
    series: "N9020WY2",
    seriesDescription: "Wyoming Natural Gas Repressuring (MMcf)",
    value: null,
    units: "MMCF"
  }, {
    id: "03",
    period: "2023-04",
    duoarea: "SNV",
    areaName: "USA-NV",
    product: "EPG0",
    productName: "Natural Gas",
    process: "VGQ",
    processName: "Repressuring",
    series: "N9020NV2",
    seriesDescription: "Nevada Natural Gas Repressuring (MMcf)",
    value: null,
    units: "MMCF"
  }, {
    id: "04",
    period: "2023-04",
    duoarea: "SCO",
    areaName: "COLORADO",
    product: "EPG0",
    productName: "Natural Gas",
    process: "VGV",
    processName: "Vented and Flared",
    series: "N9040CO2",
    seriesDescription: "Colorado Natural Gas Vented and Flared (MMcf)",
    value: null,
    units: "MMCF"
  }, {
    id: "05",
    period: "2023-04",
    duoarea: "SKY",
    areaName: "USA-KY",
    product: "EPG0",
    productName: "Natural Gas",
    process: "VGQ",
    processName: "Repressuring",
    series: "N9020KY2",
    seriesDescription: "Kentucky Natural Gas Repressuring (MMcf)",
    value: null,
    units: "MMCF"
  }, {
    id: "06",
    period: "2023-04",
    duoarea: "SSD",
    areaName: "USA-SD",
    product: "EPG0",
    productName: "Natural Gas",
    process: "FGW",
    processName: "Gross Withdrawals",
    series: "N9010SD2",
    seriesDescription: "South Dakota Natural Gas Gross Withdrawals (MMcf)",
    value: null,
    units: "MMCF"
  }, {
    id: "07",
    period: "2023-04",
    duoarea: "SKY",
    areaName: "USA-KY",
    product: "EPG0",
    productName: "Natural Gas",
    process: "FGW",
    processName: "Gross Withdrawals",
    series: "N9010KY2",
    seriesDescription: "Kentucky Natural Gas Gross Withdrawals (MMcf)",
    value: null,
    units: "MMCF"
  }, {
    id: "08",
    period: "2023-04",
    duoarea: "NUS",
    areaName: "U.S.",
    product: "EPG0",
    productName: "Natural Gas",
    process: "VRN",
    processName: "Removed from Natural Gas",
    series: "N9030US2",
    seriesDescription: "U.S. Nonhydrocarbon Gases Removed from Natural Gas (MMcf)",
    value: null,
    units: "MMCF"
  }, {
    id: "09",
    period: "2023-04",
    duoarea: "SKS",
    areaName: "USA-KS",
    product: "EPG0",
    productName: "Natural Gas",
    process: "FGO",
    processName: "Withdrawals from Oil Wells",
    series: "N9012KS2",
    seriesDescription: "Kansas Natural Gas Gross Withdrawals from Oil Wells (MMcf)",
    value: null,
    units: "MMCF"
  }, {
    id: "10",
    period: "2023-04",
    duoarea: "SAR",
    areaName: "USA-AR",
    product: "EPG0",
    productName: "Natural Gas",
    process: "FGG",
    processName: "Withdrawals from Gas Wells",
    series: "N9011AR2",
    seriesDescription: "Arkansas Natural Gas Withdrawals from Gas Wells (MMcf)",
    value: null,
    units: "MMCF"
  }];
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(natGasData);
  }, []);

  const renderCard = ({
    item
  }) => <View style={styles.card}>
      <Text style={styles.cardTitle}>{item.seriesDescription}</Text>
      <Text style={styles.cardSubtitle}>Process: {item.process}</Text>
      <Text style={styles.cardSubtitle}>Period: {item.period}</Text>
    </View>;

  return <View style={styles.container}>
      <View style={styles.column}>
        <Text style={styles.title}>Natural Gas Production Dashboard</Text>
        <FlatList data={data} renderItem={renderCard} keyExtractor={item => item.id} contentContainerStyle={styles.cardContainer} />
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16
  },
  cardContainer: {
    width: "100%",
    alignItems: "center"
  },
  card: {
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  cardImage: {
    height: 200,
    marginBottom: 8,
    borderRadius: 8
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4
  },
  cardSubtitle: {
    fontSize: 14,
    color: "#888"
  }
});
export default DashboardScreen;