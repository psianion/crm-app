import React, { useContext, useEffect } from "react";

import { CCsContext } from "../../contexts/ccsContext";

export const CCList = () => {
  const { ccs, getCCs } = useContext(CCsContext);

  useEffect(() => {
    getCCs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <ul id="list" className="list">
        {ccs.map((cc) => (
          <li key={cc.id}>{cc.name}</li>
        ))}
      </ul>
    </>
  );
};
