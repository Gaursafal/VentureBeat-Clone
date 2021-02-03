import React from 'react'
import { Route } from 'react-router-dom';
import { CradItem } from '../Component/CardItem';
import { Discover } from '../Pages/Discover';
import { MachinsPage } from '../Pages/MachinsPage';


export const Routes = ()=>{
    return(
        <div>
            <Route path = "/" exact render = {()=><MachinsPage/>}/>
            <Route path = "/ai/:id" exact render = {(props)=><CradItem {...props}/>}/>
            <Route path = "/machin/discover" exact render = {()=><Discover/>}/>
        </div>
    )
}