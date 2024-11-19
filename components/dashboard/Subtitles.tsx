import { SubtitlesProps } from "@/types"

export const Subtitles = ({text}:SubtitlesProps) => {
  return (
    <h3 className="subtitles">{text}</h3>
  )
}
