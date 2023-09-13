function DataIteration(props) {
  const { datas = [], startLength, endLength, children } = props;
  console.log(datas)

  const endLens = datas.length >= endLength ? endLength : datas.length;

  return (
    <>
      {datas &&
        datas
          .slice(startLength, endLens)
          .map((value) => children({ datas: value }))}
    </>
  );
}

export default DataIteration;
