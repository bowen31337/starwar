import { useDetail } from ".";

export const Profile = () => {
  const { name, filmNames, birthYear, gender } = useDetail();

  if (name === "") {
    return null;
  }

  return (
    <ul>
      <li>Name: {name}</li>
      <li>Birth Year: {birthYear}</li>
      <li>
        List of films:
        <ul>
          {filmNames?.map((name) => (
            <li>{name}</li>
          ))}
        </ul>
      </li>
    </ul>
  );
};
