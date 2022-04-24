// @vendors
import { useState } from "react";

// @components
import { Button } from "../components/UI/Button";
import { Input } from "../components/UI/Input";
import { Section } from "../components/UI/Section";
import { getNames } from "../components/api/fetchs";

export const Home = () => {
  const [showInfo, setShowInfo] = useState(false);
  const [searchText, setSearchText] = useState("");
  console.log("SEARCHTEXT", searchText);

  const handleOnClick = async () => {
    try {
      const response = await getNames(searchText);
      console.log("Home Resp", response);
    } catch (error) {
      console.log("Error getting info from API", error);
    }
  };

  return (
    <div>
      <Section>
        <Input text={searchText} setText={setSearchText} />

        <Button name="Search" click={handleOnClick} />
      </Section>

      {showInfo && <Section></Section>}
    </div>
  );
};
