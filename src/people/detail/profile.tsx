import { useDetail } from ".";

export const Profile = () => {
  const { name, filmNames, birthYear } = useDetail();

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
            <li key={name}>{name}</li>
          ))}
        </ul>
      </li>
    </ul>
  );
};
