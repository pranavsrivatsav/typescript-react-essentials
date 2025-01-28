import { useState, useEffect } from "react";
import { TourSchema, Tour } from "./type";
const url = "https://www.course-api.com/react-tours-project";

/**
 * Component that fetches and displays tour data.
 *
 * This component uses the `useState` and `useEffect` hooks to manage the state of the data,
 * loading status, and error messages. It fetches data from a specified URL, validates the data
 * using a schema, and displays the data or an error message based on the fetch result.
 *
 * @component
 * @example
 * return (
 *   <Component />
 * )
 *
 * @returns {JSX.Element} The rendered component.
 */
function Component() {
  const [data, setData] = useState<Tour[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(url)
      .then(async (response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data: Tour[] = await response.json();
        return data;
      })
      .then((data) => {
        const validatedData = TourSchema.array().safeParse(data);

        if (!validatedData.success) {
          throw new Error();
        } else {
          setData(validatedData.data);
        }
        setLoading(false);
      })
      .catch((error) => {
        const errorMsg =
          error instanceof Error ? error.message : "An error occured";
        setError(errorMsg);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Error: {error}</h2>;
  }

  return (
    <div>
      <h2>React & Typescript</h2>
      <h2>Fetch Data</h2>
      {data?.map((tour) => (
        <h2>{tour.name}</h2>
      ))}
    </div>
  );
}

export default Component;
