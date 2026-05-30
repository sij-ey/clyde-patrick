import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function BackButton() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/#leadership-training");
  };

  return (
    <button
      onClick={handleBack}
      className="text-cyan-500 hover:text-cyan-400 transition mb-6"
      aria-label="Back to Leadership Training"
    >
      <FaArrowLeft size={28} />
    </button>
  );
}

export default BackButton;