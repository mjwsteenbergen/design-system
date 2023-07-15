import { ComponentProps, PropsWithChildren, useEffect, useRef, useState } from "react"
import { Card } from "."
import { cva } from "class-variance-authority"

type Props = {
    src: string;
}

const videoVariant = cva(["grayscale group-hover:grayscale-0"], {
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

export const HoverVideoCard = ({ contained, src, children }: PropsWithChildren<Props & Omit<ComponentProps<typeof Card>, "content">>) => {
    const [isPlaying, setIsPlaying] = useState(false);
    useEffect(() => {
        if (isPlaying) {
            ref.current?.play()  
        } else {
            ref.current?.pause()
        }
    }, [isPlaying])
    const ref = useRef<HTMLVideoElement>(null);

    return <Card
        className="group"
        contained={contained}
        onMouseOver={() => setIsPlaying(true)}
        onMouseLeave={() => setIsPlaying(false)}
        content={<video className={videoVariant({ contained })} loop={true} src={src} ref={ref} />}>
            {children}
    </Card>
}