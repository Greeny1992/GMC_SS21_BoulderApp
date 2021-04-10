import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, FlatList } from 'react-native';

export default function AddBoulder({ route, navigation }: any) {
    const { passingParams } = route.params;
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
  
    useEffect(() => {
      fetch('https://reactnative.dev/movies.json')
        .then((response) => response.json())
        .then((json) => setData(json.movies))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }, []);

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Add Boulder Screen</Text>
        {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Text>{item.title}, {item.releaseYear}</Text>
          )}
        />
      )}
      </View>
    )
}