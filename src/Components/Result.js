import React, { Component } from 'react' 
import { List } from 'semantic-ui-react'
import { Img } from './Result.style'

export default class Result extends Component {

    


  render() {
    let beers = this.props.array 


    const beerName = beers.map( (beer,index)=> 
    <List.Header key={index}>{beer.name}</List.Header> )
     
    const beerImg = beers.map( (beer,index)=> 
    <Img key={index} src={beer.ing_url} /> )

    

    return (
        
        <List relaxed>
            <p>Search Result : {beers.length}</p>
        <List.Item>
        
          <List.Content>
            
            <List.Description>

            </List.Description>
          </List.Content>
        </List.Item>
        </List>

     
    )
  }
}


