import withIconContainer from "./withIconContainer";

export default withIconContainer(function Clock() {
  return (
    <>
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 6 12 12 16 14"></polyline>
    </>
  );
});
