import React from 'react'
import ReactDOM from 'react-dom'
import singleSpaReact from 'single-spa-react'
import Card from './Card'

const lifecycle = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Card,
  errorBoundary(err, info, props) {
    return (
      <>
        err: {JSON.stringify(err)} | info: {JSON.stringify(info)} | props: {JSON.stringify(props)}
      </>
    )
  },
})

export const { bootstrap, mount, unmount } = lifecycle
