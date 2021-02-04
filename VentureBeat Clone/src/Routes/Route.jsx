import React from 'react'
import { Route } from 'react-router-dom';
import { CradItem } from '../Component/CardItem';
import PageHead from '../Component/JobsPageHeading';
import Login from '../Component/Login/model';
import Navpage from '../Component/NavePage';
import Posts from '../Component/Posts';
import { Discover } from '../Pages/Discover';
import { GamesPage } from '../Pages/GamesPage';
import { HomePage } from '../Pages/HomePage';
import { MachinsPage } from '../Pages/MachinsPage';


export const Routes = ()=>{
    return(
        <div>
            <Route path = "/" exact render = {()=><HomePage/>}/>
            <Route path = "/machin" exact render = {()=><MachinsPage/>}/>
            <Route path = "/jobs" exact render = {()=><PageHead/>}/>
            <Route path = "/games" exact render = {()=><GamesPage/>}/>
            <Route path = "/ai/:id" exact render = {(props)=><CradItem {...props}/>}/>
            <Route path = "/machin/discover" exact render = {()=><Discover/>}/>
            <Route path = "/signin" exact render = {()=><Login/>}/>
        </div>
    )
}