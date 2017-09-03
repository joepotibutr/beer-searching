import React, { Component } from 'react'
import { InputText , ButtonSearch } from './SearchBar.style'
import { Flex } from '../Theme/Grid'
import { Icon , Form } from 'semantic-ui-react'
import axios from 'axios'

export default class SearchBar extends Component {
    constructor(props){
        super(props)
        this.state ={
            term:'',
            data:[],
        }
        this.onSubmitValue = this.onSubmitValue.bind(this)
        this.onInputChange = this.onInputChange.bind(this)
    }
    onSubmitValue(){
    
        axios.get('https://api.punkapi.com/v2/beers/?beer_name=' + this.state.term)
        .then(res => this.setState({
            data:res.data,
            term:''
        }))
    }
    

    onInputChange(e){
        this.setState({
            term : e.target.value
        })  
    }
    

    render() {
     

       console.log(this.state.term)
       console.log(this.state.data)
        return (
           
                <Form onSubmit={this.onSubmitValue}>
                     <Flex>
                <InputText type='text' placeholder="" value={this.state.term}
                   onChange={this.onInputChange}/>

                <ButtonSearch type='submit' icon='search'/>
                </Flex>
                </Form>
                
         
        )
    }
}
