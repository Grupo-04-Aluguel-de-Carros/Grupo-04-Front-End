import { CardArea, CarImg, Title, SubTitle } from "./styles.jsx";

export function GroupCard({ data }) {
  console.log(data);

  return (
    <CardArea>
      <CarImg src={data.image} />
      <Title>{data.title}</Title>
      <SubTitle>{data.descriptionSimilar}</SubTitle>
    </CardArea>
  );
}
