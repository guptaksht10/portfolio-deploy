import React from 'react'
import styled, { useTheme } from 'styled-components'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { experiences } from '../../data/constants';
import ExperienceCard from '../Cards/ExperienceCard';

const Container = styled.div`
    margin-top:20px;
  display: flex;
  flex-direction: column;
  justify-contnet: center;
  position: rlative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 40px;
  text-align: center;
  font-weight: 600;
  margin-top: 40px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
    padding: 25px;
  }
`;

const HorizontalRuler = styled.div`
    width: 20%;
    height: 1px;
    color: ${({theme})=> theme.primary + 99};
    margin: 32px 12px;
`


const Experience = ()=>{
  const theme  = useTheme();
    return (
            <Container id="Experience">
                <Wrapper>
                    <Title>Experience</Title>
                    <Desc style={{
                        marginBottom: "40px",
                    }}>
                        Here is a brief overview of my professional experiences...
                    </Desc>
                    <VerticalTimeline>
                      {experiences.map((experience, index) => {
                        return <ExperienceCard key={`experience-${index}`} experience={experience} />
                      })}
                    </VerticalTimeline>
                   
                </Wrapper>
                {/* <HorizontalRuler><hr style={{ border: `1px solid ${theme.text_primary}99` }} /></HorizontalRuler> */}
            </Container>
        )
}

export default Experience