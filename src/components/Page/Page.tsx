import React from 'react'
import styled from 'styled-components'

export const Page: React.FC = ({ children }) => {
  return <Root>{children}</Root>
}

const Root = styled.div`
  padding: 20px;
  color: var(--text-dark);

  align-items: center;
`

export const PageTitle = styled.h1`
  margin: 8px 0 10px;
  text-align: center;
  font-weight: bold;
  font-size: 2.8rem;
  color: var(--text-dark);
`

export const PageContent = styled.div`
  text-align: center;
  margin-top: 30px;
  font-size: 1.5rem;
`

export const PageSubTitle = styled.h2`
  display: flex;
  flex-direction: column;
  text-align: center;

  margin: 0;

  line-height: 1.5;
  font-size: 1.5rem;
  font-weight: normal;
`
