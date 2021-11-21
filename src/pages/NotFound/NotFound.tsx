import React from 'react'

import { Page, PageTitle, PageSubTitle } from '@components/Page'

const NotFound: React.FC = () => {
  return (
    <>
      <Page>
        <PageTitle>Error 404</PageTitle>
        <PageSubTitle>Oops! The page you’re looking for doesn’t exist.</PageSubTitle>
      </Page>
    </>
  )
}

export default NotFound
