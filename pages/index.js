
import React from 'react'

import NexteinHello from '../components/home'
import Navigation from '../components/navigation'

const Index = () => {

  return (
    <main style={styles.main}>
      <Navigation style={styles.navigation}/>
      <NexteinHello/>
    </main>
  )
}

export default Index

const styles = {
  main: {    
    fontFamily: '-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',
    fontWeight: 100,
    display: 'flex',
    flexDirection: 'column'
  },
  navigation: {
    position: 'absolute',
    alignSelf: 'center',
    width: '60vw'
  }
}