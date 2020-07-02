/* eslint-disable */
import React from 'react'
import SEO from '../components/SEO'
import ProductSummary from '../components/ProductSummary'
import ProductAttributes from '../components/ProductAttributes'
import Layout from '../components/Layout'
import talksJSON from '../contents/talks.json';
class ProductPageTemplate extends React.PureComponent {
  render() {
    const product = {
      ...talksJSON[0],
    }
    return (
      <Layout location={this.props.location}>
        <SEO title={product.name} />
        <ProductSummary {...product} />
        <ProductAttributes {...product} />
      </Layout>
    )
  }
}

export default ProductPageTemplate
