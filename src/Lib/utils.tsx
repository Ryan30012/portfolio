import { twMerge } from 'tailwind-merge'
import { clsx } from 'clsx'

const cn = (...inputs: any[]) => {
    return twMerge(clsx(inputs));
}

export default cn;