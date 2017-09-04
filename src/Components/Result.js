import React, { Component } from 'react' 

import { Img , Grid , Grids , BeerName , BeerImg , BeerDescription , Header } from './Result.style'


export default class Result extends Component {

    


  render() {
    let beers = this.props.array 


    const beer = beers.map( (beer,index)=> 

    <Grid key={beer.id}>
        <BeerImg justify={'center'} align={'center'}><Img src={beer.image_url}/></BeerImg>
        <BeerName align={'center'}><h5>{beer.name}</h5></BeerName>
        <BeerDescription align={'center'}><p>{beer.description}</p></BeerDescription>
    </Grid>
)
   
    return (
        <div>
            <Header active={this.props.active} justify={'center'}align={'center'}><h1>Search Result : {beers.length} </h1>
            </Header>
            
         <Grids>
                 {beer} 
                
                 </Grids>
                 </div>
    )
  }
}


