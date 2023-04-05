//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.
import React from 'react'
import ReactDom from 'react-dom'

const fullName = 'Manoel Viturino'
const date = new Date().getFullYear()

ReactDom.render(
  <div>
    <p>Created by {fullName}</p>
    <p>copyright {date}</p>
  </div>,
  document.getElementById('root')
)