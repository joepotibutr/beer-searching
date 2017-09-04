import React, { Component } from 'react'
import SearchBar from '../Components/SearchBar'
import { Header , P , BackgroundImage } from './Home.style'
import { Layout , Container } from '../Theme/Grid'

export default class Home extends Component {
    
  
  render() {
    return (
      <div>
        <BackgroundImage >
        <Container >
        <Layout justify={'center'}>
             <Header>CHEERS <span style={{color:'lightslategray'}}>!</span></Header>
        
         </Layout>
         <Layout justify={'center'}>
            <P >SEARCH YOUR FAVORITE BEERS</P>
            </Layout>
        <Layout justify={'center'}>
            <SearchBar/>
         </Layout>
       
         </Container>
         </BackgroundImage>
      </div>
    )
  }
}
