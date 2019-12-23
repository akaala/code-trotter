import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import favicon from '../../images/favicon.png';

const SEO = ({ description, image, lang, url, title }) => (
  <Helmet
    htmlAttributes={{
      lang,
    }}
    title={title}
    titleTemplate={`%s | Code-trotter`}
    link={[
      { rel: 'shortcut icon', type: 'image/png', href: `${favicon}`  }
    ]}
    meta={[
      {
        name: 'google-site-verification',
        content: '1E806lu_l9hGS22xEiRG5Y-4iXNHwJqPYEUfwbbWixw',
      },
      {
        name: 'description',
        content: description,
      },
      {
        property: 'og:title',
        content: title,
      },
      {
        property: 'og:description',
        content: description,
      },
      {
        name: 'og:url',
        content: url,
      },
      {
        name: 'og:image',
        content: image,
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        name: 'twitter:card',
        content: 'summary',
      },
      {
        name: 'twitter:creator',
        content: 'Victor Gosse',
      },
      {
        name: 'twitter:image',
        content: image,
      },
      {
        name: 'twitter:url',
        content: url,
      },
      {
        name: 'twitter:title',
        content: title,
      },
      {
        name: 'twitter:description',
        content: description,
      },
    ]}
  />
)

SEO.defaultProps = {
  image: '',
  lang: 'fr',
  url: '',
}

SEO.propTypes = {
  description: PropTypes.string,
  image: PropTypes.string,
  lang: PropTypes.string,
  url: PropTypes.string,
  title: PropTypes.string.isRequired,
}

export default SEO
