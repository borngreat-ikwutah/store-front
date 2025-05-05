



export const useDropdownPosition = (
    ref: React.RefObject<HTMLDivElement | null> | React.RefObject<HTMLDivElement>
) => {
    
    const getDropdownPosition = () => { 
        if(!ref.current) return { top: 0, left: 0 }

        const rect = ref.current.getBoundingClientRect()
        const dropdownWidth = 240;

        let left = rect.left + window.scrollX;
        const top = rect.bottom + window.scrollY;

        if (left + dropdownWidth > window.innerWidth) {
            left = rect.right + window.scrollX - dropdownWidth;

            // If it still goes out of bounds, set it to the right side 
            if(left < 0) {
                left = window.innerWidth - dropdownWidth - 16;
            }
        }

        if(left < 0) {
            left = 16;
        }

        return { top, left }
    }


    return { getDropdownPosition }
}