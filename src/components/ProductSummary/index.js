import React from 'react'
import Img from 'gatsby-image'

import {Item, Label} from 'semantic-ui-react'

import AddToCart from '../AddToCart'

export default ({
  id,
  name,
  meta,
  sku,
  mainImage,
  description
}) => (
  <Item.Group>
    <Item style={{alignItems: 'center'}}>
      <Item.Image size="medium">
        <Img
          style={{width: '250px'}}
          sizes={image}
          alt={name}
        />
      </Item.Image>
      <Item.Content>
        <Item.Header>{name}</Item.Header>
        <Item.Description>
          <p>{description}</p>
          <Label>{`SKU: ${sku}`}</Label>
        </Item.Description>
        <Item.Extra>
          <AddToCart productId={id} />
        </Item.Extra>
      </Item.Content>
    </Item>
  </Item.Group>
)
