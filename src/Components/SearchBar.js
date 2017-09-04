import React, { Component } from 'react'
import { InputText , ButtonSearch , SearchWrapper , CloseBtn } from './SearchBar.style'
import { Flex , Layout } from '../Theme/Grid'
import Result from './Result'
import axios from 'axios'

export default class SearchBar extends Component {
    constructor(props){
        super(props)
        this.state ={
            term:'',
            data:[],
            active:false
        }
        this.onSubmitValue = this.onSubmitValue.bind(this)
        this.onInputChange = this.onInputChange.bind(this)
    }
    onSubmitValue(e){
        e.preventDefault();
        if(this.props.term.length > 0 || this.props.term !== undefined){
            axios.get('https://api.punkapi.com/v2/beers/?beer_name=' + this.state.term)
            .then(res => this.setState({
                data:res.data,
            }))
        }
        else return 
    }
    

    onInputChange(e){
        this.setState({
            term : e.target.value
        })  
    }
    

    render() {
        

       console.log(this.state.term)
       console.log(this.state.term.length)
       console.log(this.state.data)

       const array = this.state.data

        return (
            <Layout>
            <div>
                <form onSubmit={this.onSubmitValue}>
                     <Flex>
                <InputText type='text' placeholder="" 
                   onChange={this.onInputChange}/>

                <ButtonSearch type='submit' icon='search'  onClick={() => this.setState({ active:!this.state.active }) }/>
                </Flex>
   
                </form>
            </div>
       
                       
                       <SearchWrapper active={this.state.active}>
                       <CloseBtn  onClick={() => this.setState({ active:!this.state.active }) }>
                    
                    {this.state.active ? 'X':''}
                  
                </CloseBtn>
                           <Result array={array}/>
                           </SearchWrapper>
            </Layout>
        )
    }
}
