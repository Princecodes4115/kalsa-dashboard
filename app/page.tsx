import React from 'react'
import Layout from "./components/Layout"
import SalesOverview from "./components/cards/SalesOverview"
// import Chart from "./components/cards/Charts"
import PanChart from "./components/cards/PanChart"

const page = () => {
return (
    <div className=''>
      <Layout><SalesOverview/>
      {/* <Chart/> */}
      <PanChart/>
      </Layout>
    </div>
  )
}

export default page
