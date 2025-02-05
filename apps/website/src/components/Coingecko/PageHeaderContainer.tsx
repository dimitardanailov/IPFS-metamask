'use client'

import {FC} from 'react'

import styled from 'styled-components'

import BasicButton from '@/styled-components/Buttons/BasicButton'

const Wrapper = styled.div`
  position: relative;

  display: flex;
  flex-direction: row;
  flex-direction: center;
  justify-content: space-end;
  align-items: center;
  margin: 0 auto;
`

const StyledButton = styled(BasicButton)`
  margin-left: auto;

  @media (max-width: 768px) {
    width: 100%;
    margin: 0.25rem auto;
  }
`

export interface Props {
  apiRequest: () => void
}

const PageHeaderContainer: FC<Props> = ({apiRequest}) => {
  const onClickHandler = () => {
    apiRequest()
  }

  return (
    <Wrapper>
      <StyledButton
        type="button"
        fontSize="1.2rem"
        padding="0.6rem 1.2rem"
        onClick={onClickHandler}
      >
        Refresh
      </StyledButton>
    </Wrapper>
  )
}

export default PageHeaderContainer
