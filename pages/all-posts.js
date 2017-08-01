
import React from 'react'

import withPosts, { inCategory, sortByDate } from 'nextein/posts'

import PostListEntry from '../components/post-list-entry'
import NexteinHello from '../components/nextein-hello'
import Navigation from '../components/navigation'

const Index = ({ posts }) => {
  
  posts.sort(sortByDate)

  return (
    <main style={styles.main}>
      <Navigation style={styles.navigation} />
      <NexteinHello/>
      <section style={styles.section}>  
        {
          posts
          .map((post, idx) => <PostListEntry key={idx} {...post}/>)
        }
      </section>
    </main>
  )
}

export default withPosts(Index)

const styles = {
  main: {    
    fontFamily: '-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',
    fontWeight: 100,
    display: 'flex',
    flexDirection: 'column'
  },
  section: {
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    width: '60vw' 
  },
  navigation: {
    position: 'absolute',
    alignSelf: 'center',
    width: '60vw'
  }
}