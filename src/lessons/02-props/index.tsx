import { PropsWithChildren } from "react";

type ComponentProps = PropsWithChildren<{
  name: string;
  age: number;
}>;

function Component({ name, age, children }: ComponentProps) {
  return (
    <div>
      <h2>React & Typescript</h2>
      <h2>{name}</h2>
      <h2>{age}</h2>
      {children}
    </div>
  );
}
export default Component;
