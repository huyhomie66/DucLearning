import "./App.css";
import { useContext, useEffect, useState } from "react";
import { search, providers } from "./service/search";

function App() {
  const [providerValue, setProviderValue] = useState("");
  const [districtValue, setDistrictValue] = useState();
  const [totalValue, setTotalValue] = useState("");
  const [suggestion, setSuggestion] = useState(providers);

  const providerProps = {
    value: providerValue,
    onChange: (e) => setProviderValue(e.target.value),
  };

  const districtProps = {
    value: districtValue,
    onChange: (e) => setDistrictValue(e.target.value),
  };

  useEffect(() => {
    const suggestion = search(providerValue);
    console.log(suggestion);
    setSuggestion(suggestion);
  }, [providerValue]);

  // const suggestion = searchResult;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <input placeholder="Tìm kiếm tỉnh" {...providerProps} />

      <div>
        {suggestion.map((e) => (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div>{e.name}</div>
          </div>
        ))}
      </div>
      {/* <input placeholder="Tìm kiếm quận huyện " {...districtProps} />
      <div>
        {suggestion.map((e) => (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div>{e.name}</div>
          </div>
        ))}
      </div> */}
    </div>
  );
}

export default App;
