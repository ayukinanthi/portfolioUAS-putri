import React from 'react';
import { MdDesktopMac, MdVideoLibrary, MdColorLens } from 'react-icons/md';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';

const ServicesItemsStyles = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function ServicesSection() {
  return (
    <ServicesItemsStyles>
      <div className="container">
        <SectionTitle
          subheading="What i will do for you by"
          heading="my Skills"
        />
        <div className="services__allItems">
          <ServicesSectionItem
            icon={<MdDesktopMac />}
            title="Android & Web Design"
            desc="I do ui/ux design for the website that helps website to get a unique look."
          />
          <ServicesSectionItem
            icon={<MdVideoLibrary />}
            title="Editing Video"
            desc="I also editing video. I made with high creativity."
          />
          <ServicesSectionItem
            icon={<MdColorLens />}
            title="Graphic Design"
            desc="I'm an internship student for Digital Creativity Marketing for sub-division Graphic Design to make creativity design"
          />
        </div>
      </div>
    </ServicesItemsStyles>
  );
}
