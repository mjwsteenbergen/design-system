import { Decorator } from "@storybook/react"
import { PropsWithChildren } from "react"

export const StoryWrapper: Decorator = (Story) => <StoryWrapperComp><Story /></StoryWrapperComp>

const StoryWrapperComp = ({ children }: PropsWithChildren<any>) => {
    return <div className="flex items-center justify-center w-screen h-screen"><div className="max-w-2xl">{children}</div></div>
}