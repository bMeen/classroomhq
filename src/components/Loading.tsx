import { Loader2 } from "lucide-react";

function Loading() {
  return (
    <div className="grid h-screen place-items-center">
      <Loader2 className="h-12 w-12 animate-spin" />
    </div>
  );
}

export default Loading;
