import { SubtitlesProps } from "@/types"

export const Subtitles = ({text, variants}:SubtitlesProps) => {
  return (
    <h3 className={`subtitles ${variants}`}>{text}</h3>
  )
}
