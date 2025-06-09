const NameList = ({ names }) => {
  return (
    <div>
      <h2>Hello</h2>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default NameList;
