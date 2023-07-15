import { ComponentProps, PropsWithChildren } from "react"
import { Card } from "."
import { cva } from "class-variance-authority"

type ImageProps = {
    src: string,
    alt: string
}

const imageVariant = cva([], {
    variants: {
        contained: {
            true: [""],
            false: ["rounded"]
        }
    },
    defaultVariants: {
        contained: false
    }
})

export const ImageCard = ({ src, alt, children, contained, ...rest }: PropsWithChildren<ImageProps & Omit<ComponentProps<typeof Card>, "content">>) => {
    return <Card
        content={<img src={src} alt={alt} className={imageVariant({ contained })} />}
        contained={contained}
        {...rest}
    >
        {children}
    </Card>
}