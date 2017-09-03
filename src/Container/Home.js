import React, { Component } from 'react'
import SearchBar from '../Components/SearchBar'
import { Header , P } from './Home.style'
import { Layout , Container } from '../Theme/Grid'

export default class Home extends Component {
  
 
  
  render() {
    return (
      <div>
        <Container >
        <Layout justify={'center'}>
              <Header>Are you looking some beers?</Header>
            
         </Layout>
         <Layout justify={'center'}>
         <P >Insert your beer name's here</P>
           </Layout>
        <Layout justify={'center'}>
            <SearchBar/>
         </Layout>
       
         </Container>
      </div>
    )
  }
}
