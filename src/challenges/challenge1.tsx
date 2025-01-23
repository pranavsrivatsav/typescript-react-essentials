type propsObject1 = {
  type: "Basic";
  name: string;
};
type propsObject2 = {
  type: "Advanced";
  name: string;
  email: string;
};

type propsObject = propsObject1 | propsObject2;

function challenge1(props: propsObject) {
  const { type, name } = props;
  if (type === "Basic") {
    return (
      <article className="alert alert-success">
        <h2>name: {name}</h2>
      </article>
    );
  }

  return (
    <article className="alert alert-danger">
      <h2>name: {name}</h2>
      <h2>email: {props.email}</h2>
    </article>
  );
}

export default challenge1;
