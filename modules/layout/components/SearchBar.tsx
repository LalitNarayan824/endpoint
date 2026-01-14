import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";


export function SearchBar() {

  // implement some features in it




  return (
    <div className="flex w-full max-w-md items-center gap-2">
      <Input
        type="text"
        placeholder="to be done"
        className="flex-1"
      />
      <Button  >
        Search
      </Button>
    </div>
  );
}
