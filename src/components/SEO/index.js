import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

const SEO = ({ description, lang, keywords, title }) => (
  <Helmet
    htmlAttributes={{
      lang,
    }}
    title={title}
    titleTemplate={`%s | Code-trotter`}
    link={[
      { rel: 'shortcut icon', type: 'image/png', href: '' }
    ]}
    meta={[
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
        name: 'twitter:title',
        content: title,
      },
      {
        name: 'twitter:description',
        content: description,
      },
    ]
      .concat(
        keywords.length > 0
          ? {
              name: 'keywords',
              content: keywords.join(', '),
            }
          : []
      )}
  />
)

SEO.defaultProps = {
  lang: 'fr',
  keywords: [],
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
}

export default SEO
