import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../reducers";
import { fetchPeople } from "../list";

export const usePager = () => {
  const { prev, next } = useSelector((state: RootState) => state.people.pager);
  const dispatch = useDispatch();

  const goToPage = (url: string) => dispatch(fetchPeople(url));

  return { prev, next, goToPage };
};
