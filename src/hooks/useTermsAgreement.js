import { useState } from "react";

const useTermsAgreement = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleAgreement = () => {
    setIsChecked((prev) => !prev);
  };

  return { isChecked, toggleAgreement };
};

export default useTermsAgreement;
