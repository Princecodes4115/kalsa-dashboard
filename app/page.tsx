import React from 'react'
import Layout from "./components/Layout"
import SalesOverview from "./components/cards/SalesOverview"
// import Chart from "./components/cards/Charts"

const page = () => {
return (
    <div className=''>
      <Layout><SalesOverview/>
      {/* <Chart/> */}
      </Layout>
    </div>
  )
}

export default page
