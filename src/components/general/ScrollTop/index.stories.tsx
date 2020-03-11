import React from 'react'
import ScrollTop from '.'
import styled from 'styled-components'

export default {
  title: 'General',
  component: ScrollTop,
}

const Container = styled.div`
  position: relative;
  /* width: 620px; */
  /* height: 300px; */
  overflow: auto;
  border: 1px solid #ebebeb;
  padding: 24px;
`
const StyledLorem = styled.p`
  margin-bottom: 120px;
`

export const scrolltop = () => {
  return (
    <Container>
      <ScrollTop />
      <h1>Scroll Top</h1>
      <StyledLorem>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae
        sunt a te dicta? Refert tamen, quo modo.
      </StyledLorem>
      <StyledLorem>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae
        sunt a te dicta? Refert tamen, quo modo.
      </StyledLorem>
      <StyledLorem>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae
        sunt a te dicta? Refert tamen, quo modo.
      </StyledLorem>
      <StyledLorem>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae
        sunt a te dicta? Refert tamen, quo modo.
      </StyledLorem>
      <StyledLorem>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae
        sunt a te dicta? Refert tamen, quo modo.
      </StyledLorem>
      <StyledLorem>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae
        sunt a te dicta? Refert tamen, quo modo.
      </StyledLorem>
      <StyledLorem>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae
        sunt a te dicta? Refert tamen, quo modo.
      </StyledLorem>
      <StyledLorem>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae
        sunt a te dicta? Refert tamen, quo modo.
      </StyledLorem>
      <StyledLorem>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae
        sunt a te dicta? Refert tamen, quo modo.
      </StyledLorem>
      <StyledLorem>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae
        sunt a te dicta? Refert tamen, quo modo.
      </StyledLorem>
      <StyledLorem>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae
        sunt a te dicta? Refert tamen, quo modo.
      </StyledLorem>
    </Container>
  )
}
