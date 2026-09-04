import useLockStore from "@store/lock.js";

const PowerScreen = () => {
  const { powerState, turnOn } = useLockStore();

  if (powerState === "on") return null;

  return (
    <section
      id="power-screen"
      onClick={powerState === "off" ? turnOn : undefined}
    >
      {powerState === "restarting" && <p>Restarting…</p>}
      {powerState === "off" && <p className="power-hint">Click to turn on</p>}
    </section>
  );
};

export default PowerScreen;
