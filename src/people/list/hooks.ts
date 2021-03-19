import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../reducers";
import { selectPeople } from "../detail";
import { PeoplePayload } from "./types";

export const useList = () => {
  const { results, error, loading } = useSelector(
    (state: RootState) => state.people.list
  );

  const { name } = useSelector(
    (state: RootState) => state.people.selectedPeople
  );
  const dispatch = useDispatch();
  const selectRow = (rowData: Partial<PeoplePayload>) => {
    dispatch(selectPeople(rowData));
  };

  return { results, error, loading, selectRow, selectedName: name };
};
