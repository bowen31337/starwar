import React from "react";
import { fetchPeople, TableList, useList } from "./people/list";
import { Pager, usePager } from "./people/pager";
import "./App.css";
import { useDispatch } from "react-redux";
import { Spinner } from "./loader";
import { Profile } from "./people/detail";

const App = () => {
  const { error, loading } = useList();
  const { next } = usePager();
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchPeople(next as string));
  }, []);

  if (loading) {
    return <Spinner />;
  }
  if (error !== "") {
    return <h1>Oops, An Error Happen.</h1>;
  }

  return (
    <main>
      <TableList />
      <Pager />
      <Profile />
    </main>
  );
};

export default App;
