import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decremenl, increment } from './counterSlice'
import  styles from './Counter.module.css'

export function Counter() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    
}