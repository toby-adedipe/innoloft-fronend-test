import React from 'react'
import DashboardLayout from '../../Layouts/Dashboard/Dashboard'

export default function MainPage() {
  return (
    <>
      <DashboardLayout>
        <main>
          <h3 className='font-semibold'>Welcome to the Main Page</h3>
          <p>This is the main page of the dashboard.</p>
          <p>Please navigate to the product page to view the rest of the web app</p>
        </main>
      </DashboardLayout>
    </>
  )
}
