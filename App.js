import React from 'react'
import { Provider as PaperProvider } from 'react-native-paper'
import HomePage from './app/containers/HomePage'

export default function App() {
  return (
    <PaperProvider>
      <HomePage />
    </PaperProvider>
  )
}
