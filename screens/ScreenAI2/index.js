import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';

const DashboardScreen = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://api.eia.gov/v2/natural-gas/prod/sum/data/?frequency=monthly&data[0]=value&sort[0][column]=period&sort[0][direction]=desc&offset=0&length=50&api_key=qt5rjkrW6cBKnbUpuDtAwAsYpdfjURuD1fIy6gD8');
      const json = await response.json();
      setData(json.data);
    } catch (error) {
      console.error(error);
    }
  };

  const renderCard = ({
    item
  }) => <View style={styles.card}>
      <Image source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} style={styles.cardImage} />
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text style={styles.cardSubtitle}>{item.subtitle}</Text>
    </View>;

  return <View style={styles.container}>
      <Text style={styles.title}>Natural Gas Production Dashboard</Text>
      <FlatList data={data} renderItem={renderCard} keyExtractor={item => item.id.toString()} contentContainerStyle={styles.cardContainer} />
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16
  },
  cardContainer: {
    alignItems: 'center'
  },
  card: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  cardImage: {
    width: '100%',
    height: 200,
    marginBottom: 8,
    borderRadius: 8
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#888'
  }
});
export default DashboardScreen;