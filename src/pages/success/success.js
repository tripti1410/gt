import React from "react";
import Button from "../../components/button/button";

const Success = ({content}) => {
  return (
    <div>
      <h2>Success! Congratulations on Finding Falcone. King Shan is mighty pleased.</h2>
      <p>Time Taken: 200</p>
      <p>Planet found: Donlon</p>
      <Button primary >Start Again</Button>
    </div>
  )
}

export default Success;