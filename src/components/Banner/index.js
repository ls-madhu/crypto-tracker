import styled from "styled-components";

import Carousel from "./Carousel";

const Banner = styled.div`
  text-align: center;
  padding: 0 1rem;
`;

const Heading = styled.h1`
  font-size: 4rem;
  font-weight: 800;
  margin: 1.5rem 0;
`;

const SubHeading = styled.p`
  color: var(--secondary-text-color);
  font-size: 1.2rem;
  margin-bottom: 4rem;
`;

Banner.Heading = Heading;
Banner.SubHeading = SubHeading;
Banner.Carousel = Carousel;

export default Banner;
