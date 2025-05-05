import { SearchIcon } from "lucide-react";
import { Input } from "../ui/input";

interface SearchInputProps {
    disabled?: boolean;
}


export const SearchInput = ({ disabled }: SearchInputProps) => {
    return (
       <div className="flex items-center gap-2">
            <div className="relative w-full">
                <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-neutral-500"/>
                <Input className="pl-8" placeholder="Search for Products" disabled={disabled}/>

            </div>
                {/* TODO: Add Category View All Button */}
                {/* TODO: Add Library Button */}
       </div>
    );
}
