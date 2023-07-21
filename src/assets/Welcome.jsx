function Welcome({name}) {
    return <p>Welcom {name}</p>;
  }
  Welcome.defaultProps = {
    name: "Luciano",
  };
  export default Welcome;