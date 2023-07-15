import { cva } from "class-variance-authority";
import { PropsWithChildren, ReactElement, ReactNode } from "react";

type Props = {
    header?: ReactNode,
    content: ReactElement,
    contained?: boolean;
}

const variants = cva("rounded overflow-hidden", {
    variants: {
        contained: {
            true: ["shadow border-2 border-gray-50 rounded-lg"]
        }
    }
    
})

const childVariant = cva("py-2", {
    variants: {
        contained: {
            true: ["px-4"]
        }
    }
})

export const Card = ({ contained, children, header, content, className, ...rest }: PropsWithChildren<Props & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>>) => {
    
    return <div {...rest} className={variants({ contained,className })}>
        {header}

        {content}
        <div className={childVariant({contained})}>
            {children}
        </div>
    </div>
}