import React from 'react'
import Button from '@mui/material/Button'
import Walkabout from  'react-walkabout'
import AddIcon from '@mui/icons-material/Add';

import 'react-walkabout/dist/index.css'

const App = () => {
  const links =[
    {linkName:'insights', texts:['Select Insights tab to analyze quantity or purcahse','Select Item/s Or/And Purcahse Date','test', 'test1'], pointers:['insights','insightfilters','test', 'test1'],
    labels:['INSIGHTS ','Select','test', 'test1'], images:{1:'test.gif',0:'insights.png'},
    closingId: 'insights'}
  ]
  return (
    <div >
      <Walkabout links = {links} animateType ={'blink'}/>
      <Button id='insights' >INSIGHTS </Button>
      <Button id='insightfilters'> Select </Button>
      <Button id='test'> Test </Button>
      <Button >INSIGHTS </Button>
      <Button >INSIGHTS </Button>

      <Button id='test1'> <AddIcon  />Test1 </Button>
      <Button >INSIGHTS </Button>
      <Button > Select </Button>
      <Button > Test </Button>
      <Button > <AddIcon  />Test1 </Button>
      <Button  >INSIGHTS </Button>
      <Button > Select </Button>
      <Button > Test </Button>
      <Button > <AddIcon  />Test1 </Button>
      <Button  >INSIGHTS </Button>
      <Button > Select </Button>
      <Button > Test </Button>
      <Button > <AddIcon  />Test1 </Button>
      <Button >INSIGHTS </Button>
      <Button > Select </Button>
      <Button > Test </Button>
      <Button > <AddIcon  />Test1 </Button>
      <Button  >INSIGHTS </Button>
      <Button > Select </Button>
      <Button > Test </Button>
      <Button > <AddIcon  />Test1 </Button>
      <Button>INSIGHTS </Button>
      <Button > Select </Button>
      <Button > Test </Button>
      <Button > <AddIcon  />Test1 </Button>
      
    </div>
  )
}

export default App
