import React from 'react';
import { Image } from 'react-bootstrap';

import ewhitedrac from '../images/keyboardbuilder/60/ewhitedrac.png'
import ewhitemuted from '../images/keyboardbuilder/60/ewhitemuted.png'
import obsidiandrac from '../images/keyboardbuilder/60/obsidiandrac.png'
import obsidianmuted from '../images/keyboardbuilder/60/obsidianmuted.png'

import tklewhitedrac from '../images/keyboardbuilder/tkl/tklewhitedract.png'
import tklewhitemuted from '../images/keyboardbuilder/tkl/tklewhitemuted.png'
import tklobsidiandrac from '../images/keyboardbuilder/tkl/tklobsidiandrac.png'
import tklobsidianmuted from '../images/keyboardbuilder/tkl/tlkobsidianmuted.png'

const BuilderImage = (props) => {

  if (props.color === 'obsidian' && props.layout === '60%' && props.keycaps === 'dracula') {
    return <Image src={obsidiandrac} fluid />
  } else 
  if (props.color === 'obsidian' && props.layout === '60%' && props.keycaps === 'muted') {
    return <Image src={obsidianmuted} fluid />
  } else
  if (props.color === 'ewhite' && props.layout === '60%' && props.keycaps === 'dracula') {
    return <Image src={ewhitedrac} fluid />
  } else
  if (props.color === 'ewhite' && props.layout === '60%' && props.keycaps === 'muted') {
    return <Image src={ewhitemuted} fluid />
  } else

  if (props.color === 'obsidian' && props.layout === 'TKL' && props.keycaps === 'dracula') {
    return <Image src={tklobsidiandrac} fluid />
  } else 
  if (props.color === 'obsidian' && props.layout === 'TKL' && props.keycaps === 'muted') {
    return <Image src={tklobsidianmuted} fluid />
  } else
  if (props.color === 'ewhite' && props.layout === 'TKL' && props.keycaps === 'dracula') {
    return <Image src={tklewhitedrac} fluid />
  } else
  if (props.color === 'ewhite' && props.layout === 'TKL' && props.keycaps === 'muted') {
    return <Image src={tklewhitemuted} fluid />
  } 
  return (
    <></>
  )
}

export default BuilderImage