import { useCallback } from "react";
import Particles from "react-particles";
import { loadStarsPreset } from "tsparticles-preset-stars";
import type { Engine } from "tsparticles-engine";

const StarParticles = () => {
  const onInit = useCallback(async (engine: Engine) => {
    await loadStarsPreset(engine);
  }, []);

  return (
    <Particles
      options={{
        preset: "stars",
        background: {
          color: "#1e1e1e",
        },
      }}
      init={onInit}
    />
  );
};

export default StarParticles;
