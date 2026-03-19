import React, { Suspense } from 'react'
import Greting from './Greeting'
import { GreetinObj } from './GreetinObj'
import UseRef from './UseRef'
import UseState from './UseState'
import './gobal.css'
import Prop from './Prop'

import CompBasedStyling from './CompBasedStyling'
import ConditanalRendering from './ConditanalRendering'
import UseEffect from './UseEffect'
import UseMemo from './UseMemo'
import UseCallBackAndReactMemo from './UseCallBackAndReactMemo'
import OldForm from './Forms/OldForm'
import NewForm from './Forms/NewForm'
import NestedForm from './Forms/NestedForm'
import OptimitcFomsByUseOptimetic from './Forms/OptimitcFomsByUseOptimetic'
import SmartFeedBackform from './Forms/SmartFeedBackform'
import OldwayFetch from './fech/OldwayFetch'
import NewwayFetch from './fech/NewwayFetch'
function App() {
  return (<>
    <Greting name="ritik"/>
    <GreetinObj data={{name:"ritik"}}/>
    <UseRef/>
    <UseState/>
    <CompBasedStyling/>
    <Prop data={{name:"ritik"}}/>
    <ConditanalRendering Isloged={true}/>
    <UseEffect/>
    <UseMemo/>
    <UseCallBackAndReactMemo/>
    <OldForm/>
    <NewForm/>
    <NestedForm/>
    <OptimitcFomsByUseOptimetic/>
    <SmartFeedBackform/>
    <OldwayFetch/>
    <Suspense fallback={<p>Loading...</p>}>
    <NewwayFetch/> 
    </Suspense>
    </>
  ) 
}

export default App