import { Progress } from "@nextui-org/react";

const LoadingProgress = () => {
  return (
    <Progress
      aria-label="Downloading..."
      size="md"
      value={value}
      color="success"
      showValueLabel={true}
      className="max-w-md"
    />
  );
};
export default LoadingProgress;
