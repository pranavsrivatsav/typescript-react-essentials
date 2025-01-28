import { ThemeProvider, useTheme } from "./context";

function ParentComponent() {
  return (
    <ThemeProvider defaultTheme="system">
      <h2>React & Typescript</h2>
      <h2>Context</h2>
      <ChildComponent />
    </ThemeProvider>
  );
}

function ChildComponent() {
  const context = useTheme();
  const { theme, setTheme } = context;

  const onClickHandler = () => {
    const newTheme = theme === "system" ? "dark" : "system";
    setTheme(newTheme);
  };

  return (
    <>
      <h2>Current Theme: {theme}</h2>
      <button onClick={onClickHandler}>Toggle Theme</button>
    </>
  );
}

export default ParentComponent;
