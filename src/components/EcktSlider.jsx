import React from 'react';
import { Slider, SliderTrack, SliderFilledTrack, SliderThumb } from "@chakra-ui/react";

const EcktSlider = ({ value, onChange }) => {
  return (
    <Slider value={value} onChange={onChange} min={0} max={5} step={0.1}>
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      <SliderThumb />
    </Slider>
  );
};

export default EcktSlider;