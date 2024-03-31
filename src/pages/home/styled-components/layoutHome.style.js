import { styled } from 'styled-components'
import {
  SocialNetworks as SocialNetworksComponent,
  Description as DescriptionComponent,
  Education as EducationComponent
} from '../components'

export const Wrapper = styled.div`
    // Box model
    margin: 22px;
    height: calc(100vh - 44px);
    display: grid;
    grid-template-columns: 1.3fr 0.2fr 1.5fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 18px 18px;
    grid-auto-flow: row;
    grid-template-areas:
        "projects description description"
        "projects description description"
        "education education education";
`

export const Presentation = styled.section`
    // Box model
    display: grid;
    grid-template-columns: 1fr 1fr 1.5fr;
    grid-template-rows: 1fr 1.2fr 0.8fr;
    gap: 18px 18px;
    grid-template-areas:
        "image description description"
        "image description description"
        "social-media description description";
    grid-area: description;
`

export const SocialNetworks = styled(SocialNetworksComponent)`
    // Box model
    border-radius: 10px;
    grid-area: social-media;

    // Visual
    background-color: #161625;
    border: 3px solid #1e202f;
`

export const Description = styled(DescriptionComponent)`
    // Box model
    border-radius: 10px;
    grid-area: description;

    // Visual
    background-color: #161625;
    border: 3px solid #1e202f;
`

export const Image = styled.img`
    // Box model
    border-radius: 10px;
    grid-area: image;

    // Visual
    background-color: #161625;
    border: 3px solid #1e202f;
`

export const Projects = styled.section`
    // Box model
    border-radius: 10px;
    grid-area: projects;

    // Visual
    background-color: #161625;
    border: 3px solid #1e202f;
`

export const Education = styled(EducationComponent)`
    // Box model
    border-radius: 10px;
    grid-area: education;

    // Visual
    background-color: #161625;
    border: 3px solid #1e202f;
`
