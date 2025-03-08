import React from 'react'
import { routingArray } from '../description/routing.description'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

export default function Routing() {
    
    const router = createBrowserRouter(routingArray)

    return <RouterProvider router={router}/>
}
