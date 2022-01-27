import styled from 'styled-components'

const Container = styled.div`
  display: block;
  width: 100%;
  padding: 0 16px;
  margin: 0 auto;
  box-sizing: border-box;

  @media(min-width: 576px) {
      max-width:540px
  }

  @media(min-width: 768px) {
      max-width:720px
  }

  @media(min-width: 992px) {
      max-width:960px
  }

  @media(min-width: 1200px) {
      max-width:1140px
  }

  @media(min-width: 1400px) {
      max-width:1440px
  }
`

export { Container }