import { LegacyRef, useEffect, useRef, useState } from "react";

function MainPage() {
  const [currentValue, setCurrentValue] = useState("");
  let isClicked = false;
  const searchInputRef = useRef() as any;

  if (!!searchInputRef.current?.value) {
    setCurrentValue(searchInputRef.current?.value);
  }

  useEffect(() => {
    console.log(1111, searchInputRef.current.value);
  }, [isClicked]);

  const onClick = () => {
    console.log(2222);
    isClicked = !isClicked;
  };
  return (
    <>
      {/* Search Input */}
      <div className="flex flex-col">
        <div className="flex flex-row">
          <div className="flex  mx-8">
            <input type="text" id="name" ref={searchInputRef} />
          </div>
          {/* Search Button*/}
          <div className="flex  mx-8">
            <button onClick={onClick}>Click/translate</button>
          </div>
        </div>
        {/* Search Result */}
        <div className="flex gap-2">Result Area -- {currentValue}</div>
      </div>
    </>
  );
}

export default MainPage;
