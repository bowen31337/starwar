import { useList } from "./hooks";

export const TableList = () => {
  const { results, error, loading, selectRow, selectedName } = useList();

  if (loading) {
    return <h1>loading...</h1>;
  }
  if (error !== "") {
    return <h1>Oops, An Error Happen.</h1>;
  }
  return (
    <table className="styled-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Height</th>
          <th>Mass</th>
        </tr>
      </thead>
      <tbody>
        {results.map((result) => (
          <tr
            onClick={() => selectRow(result)}
            key={result.name}
            className={result.name === selectedName ? "active" : ''}
          >
            <td>{result.name}</td>
            <td>{result.height}</td>
            <td>{result.mass}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
