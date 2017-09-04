import React, { Component } from 'react'
import { ButtonSearch , SearchWrapper , CloseBtn } from './SearchBar.style'
import { Flex , Layout } from '../Theme/Grid'
import Result from './Result'
import axios from 'axios'
import { Input } from 'semantic-ui-react'

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
        if(this.state.term.length){
            axios.get('https://api.punkapi.com/v2/beers/?beer_name=' + this.state.term)
            .then(res => this.setState({
                data:res.data,
                term:''
            }))
            
        }
        
        else return console.log('pls insert any key')
            
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
                        <Input size='massive' value={this.state.term}  placeholder="Search..." 
                        onChange={this.onInputChange}/>

                        <ButtonSearch type='submit' icon='search'  onClick={() => this.setState({ active:!this.state.active }) }/>
                    </Flex>
   
                </form>
            </div>
       
                       
                       <SearchWrapper active={this.state.active}>
                             <CloseBtn  onClick={() => this.setState({ active:!this.state.active , data:[] }) }>{this.state.active ? 'X':''} </CloseBtn>
                           <Result array={array} active={this.state.active}/>
                        </SearchWrapper>
            </Layout>
        )
    }
}
