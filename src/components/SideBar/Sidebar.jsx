import React from 'react'
import { TouchableOpacity, StyleSheet, Text, View, FlatList } from 'react-native'
import { Colors } from '../../../assets/color'


const ListItem = ({ item }) => {
   
    return (
        <TouchableOpacity style={styles.button}>
            <Text>{item.title}</Text>
        </TouchableOpacity>
    );
};


const Sidebar = () => {
    const data = [
        { id: '1', title: 'Home', screenName: 'Home' },
        { id: '2', title: 'About', screenName: 'About'},
        { id: '3', title: 'Products', screenName: 'Products'},
    ];
    return (
        <View style={styles.sidebar}>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <ListItem item={item} />}
            >
            </FlatList>
        </View>
    )
}

export default Sidebar

const styles = StyleSheet.create({
    sidebar: {
        backgroundColor: Colors.primary3,
        position: 'absolute',
        width: 180,
        left: 0,
        top: 0,
        flex: 1,
        marginTop: -20,
        paddingHorizontal: 5,
        paddingVertical: 5,
    },
    button: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: Colors.primary2,
      },
});