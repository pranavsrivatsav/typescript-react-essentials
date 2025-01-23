import { useState } from "react";

type Log = {
  input: string;
  time: EpochTimeStamp;
};

function Component() {
  const [text, setText] = useState("");
  const [clickCount, setClickCount] = useState(0);
  const [sampleArr, setSampleArr] = useState<string[]>([]);
  const [logs, setLogs] = useState<Log[]>([]);
  return (
    <div>
      <h2>React & Typescript</h2>
      <input
        placeholder="Enter text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          setClickCount((prevCount) => prevCount + 1);
          setSampleArr((prevSampleArr) => [...prevSampleArr, text]);
          setLogs((prevLogs) => [
            ...prevLogs,
            {
              input: text,
              time: Date.now(),
            },
          ]);
        }}
      >
        Click Me
      </button>
      <p>Click Counter: {clickCount}</p>
      <p>Inputs provided: {JSON.stringify(sampleArr)}</p>
      <h3>History</h3>
      {logs.map((log) => {
        return (
          <>
            <p>input: {log.input}</p>
            <p>Time: {new Date(log.time).toUTCString()}</p>
          </>
        );
      })}
    </div>
  );
}
export default Component;
