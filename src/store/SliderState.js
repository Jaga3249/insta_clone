import { create } from "zustand";

const useSliderState = create((set) => {
  return {
    isSelected: false,
    currentSlider: null, // New state: currentSlider
    setSliderState: (selected) => {
      set({ isSelected: selected });
    },
    setCurrentSlider: (selectedSlider) => {
      set({ currentSlider: selectedSlider }); // Update currentSlider state
    },
  };
});

export default useSliderState;
