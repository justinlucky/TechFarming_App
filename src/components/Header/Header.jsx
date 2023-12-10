import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import Profile from '../../../assets/Lucky.png'
import { Colors } from '../../../assets/color'
import Sidebar from '../SideBar/Sidebar'


const Header = () => {
    const [isBarsVisible, setIsBarsVisible] = useState(true);

    const handleToggleSidebar = () => {
        setIsBarsVisible(!isBarsVisible);
    };
    return (
        <View style={styles.top}>
            <TouchableOpacity onPress={handleToggleSidebar}>
                {isBarsVisible ? (
                    <View style={styles.bars}>
                        <View style={styles.bar}></View>
                        <View style={styles.bar}></View>
                        <View style={styles.bar}></View>
                    </View>
                ) : (
                    <View >
                        <TouchableOpacity onPress={handleToggleSidebar}
                            style={{
                                position:'absolute', 
                                marginLeft: 180, 
                                display: 'flex', 
                                flexDirection:'column',
                                }}>
                            <View 
                               style={{
                                height: 3, 
                                width: 19, 
                                backgroundColor: 
                                Colors.heading1white, 
                                transform: [{ rotate: '45deg' }],
                                position: 'absolute',
                                }}>
                            </View>
                            <View 
                               style={{
                                height: 3, 
                                width: 19, 
                                backgroundColor: Colors.heading1white, 
                                transform: [{ rotate: '-45deg' }],
                                position: 'absolute',
                                }}>
                            </View>
                        </TouchableOpacity>
                        <Sidebar />
                    </View>
                )}
            </TouchableOpacity>
            <TouchableOpacity>
                <Image
                    source={Profile}
                    style={styles.profile}
                />
            </TouchableOpacity>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    top: {
        display: 'flex',
        backgroundColor: Colors.primary2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    bars: {
        flexDirection: 'column',
        gap: 4,
    },
    bar: {
        height: 3,
        width: 20,
        borderRadius: 3,
        backgroundColor: Colors.heading1white,
    },
    profile: {
        height: 40,
        width: 40,
        backgroundColor: 'white',
        borderRadius: 50,
    },
});