import {
  Wrapper,
  Presentation,
  SocialNetworks,
  Description,
  Education,
  Projects,
  Image
} from '../styled-components/layoutHome.style'

export const LayoutHome = () => {
  return (
    <Wrapper>
      <Presentation>
        <Image />
        <Description />
        <SocialNetworks />
      </Presentation>
      <Projects />
      <Education />
    </Wrapper>
  )
}
