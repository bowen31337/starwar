import { useSelector } from "react-redux";
import { RootState } from "../../reducers";

export const useDetail = () => {
  const { name, filmNames, birthYear, gender } = useSelector(
    (state: RootState) => state.people.selectedPeople
  );

  return { name, filmNames, birthYear, gender };
};
