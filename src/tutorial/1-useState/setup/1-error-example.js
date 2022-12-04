const ErrorExample = () => {
  let title = "random title";
  const handleClick = () => {
    title = "hello people";
  };
  return (
    <>
      <h2>useState error example</h2>
      <button type="button" className="btn" onClick={handleClick}>
        Change title
      </button>
    </>
  );
};

export default ErrorExample;
