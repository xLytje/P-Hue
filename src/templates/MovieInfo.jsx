import styled from "styled-components";
import Bookmark from "../components/Bookmark";
import Heading from "../components/Heading";
import Label from "../components/Label";
import Rating from "../components/Rating";

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
const StyledGridSection = styled.section`
  display: grid;
  grid-template-columns: 25vw 25vw 25vw;
`;
const StyledFlexSection = styled.section`
  display: flex;
  flex-wrap: wrap;

  gap: 8px;
`;
const StyledP = styled.p`
  margin-top: 5px;
  font-weight: 500;
  font-size: 12px;
`;
const MovieInfo = ({ data }) => {
  return (
    <StyledSection>
      <div className="flexContainer justify-space-between">
        <Heading title={data.title} size="20" as="h1" />
        <Bookmark />
      </div>
      <Rating voteAverage={data.vote_average} />
      <StyledFlexSection>
        {data.genres.map((id) => (
          <Label title={id.name} key={id.name}></Label>
        ))}
      </StyledFlexSection>
      <StyledGridSection className="dark:text-white">
        <Heading title="Length" size="12" as="h4" />
        <Heading title="Langauge" size="12" as="h4" />
        <Heading title="Vote counts" size="12" as="h4" />
        <StyledP>{data.runtime} min.</StyledP>
        <StyledP>{data.original_language}</StyledP>
        <StyledP>{data.vote_count}</StyledP>
      </StyledGridSection>
    </StyledSection>
  );
};

export default MovieInfo;
