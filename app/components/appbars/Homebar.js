import * as React from 'react'
import { Appbar, Title } from 'react-native-paper'
import { StyleSheet } from 'react-native'

const MyComponent = () => (
    <Appbar style={styles.top}>
        <Appbar.Action
            icon="code-brackets"
            onPress={() => console.log('Pressed menu')}
        />
        <Title style={styles.header}>AutoShopping</Title>
    </Appbar>
)

export default MyComponent

const styles = StyleSheet.create({
    top: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        backgroundColor: 'black',
    },
    header: {
        color: 'white'
    }
})
