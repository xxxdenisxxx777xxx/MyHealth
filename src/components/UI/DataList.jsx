const DataList =({ data, item }) => {
    return <>{data?.length ? data.map(item) : null}</>;
  };
  export default DataList;