import * as React from "react"
import Svg, { Path } from "react-native-svg"

function TrophyIcon() {
  return (
    <Svg
      height={52}
      viewBox="0 0 480 480"
      width={52}
    >
      <Path fill="#99a2c9" d="M91 147v8h-16v-8c0-22.398-17.602-40-40-40V91c22.398 0 40-17.602 40-40v-8h16v8c0 22.398 17.602 40 40 40v16c-22.398 0-40 17.602-40 40zm-8-67.2c-4.8 8-11.2 14.4-19.2 19.2 8 4.8 14.4 11.2 19.2 19.2 4.8-8 11.2-14.4 19.2-19.2-8-4.8-14.4-11.2-19.2-19.2zm0 0M443 307v8h-16v-8c0-22.398-17.602-40-40-40v-16c22.398 0 40-17.602 40-40v-8H443v8c0 22.398 17.602 40 40 40v16c-22.398 0-40 17.602-40 40zm-8-67.2c-4.8 8-11.2 14.4-19.2 19.2 8 4.8 14.4 11.2 19.2 19.2 4.8-8 11.2-14.4 19.2-19.2-8-4.8-14.4-11.2-19.2-19.2zm0 0M391.8 179.8l-16.8 1.598c6.398-8 12-17.597 16-27.199L402.2 127c12.8 6.398 18.402 20.8 13.6 34.398-3.198 10.403-12.8 17.602-24 18.403zm0 0M376.602 148.602c-12 31.199-40.801 52.796-73.602 55.199L267 207l-8 20-28.8-12 7.198-19.2-24.796-28.8c-20-23.2-26.403-56-16.801-84.8L213.398 29.397c.801-1.597 2.403-3.199 4-4.796 1.602-.801 4-.801 6.403 0L392.6 85.398c4 1.602 6.399 6.403 4.797 10.403zM236.602 47c-1.602 3.2-43.204 69.602.796 113.602l11.204-11.204c-35.204-35.199.796-93.597.796-94.398zm0 0M175.8 99.8l-9.6-12c-8.802-11.198-8-27.198 3.198-36.8 1.602-1.602 4-3.2 6.403-4 4.8-2.398 10.398-2.398 15.199-1.602l-10.398 31.204c-2.403 7.199-4 15.199-4.801 23.199zm0 0M186.2 377.398 123 346.2c-4-1.597-5.602-6.398-4-9.597l4-10.403L160.602 339l4.796-15.2-36.796-12 9.597-25.6 38.403 12.8 4.796-15.2-37.597-12.8 9.597-25.602 39.204 12.801L197.398 243l-39.199-12.8 6.403-16.802c1.597-4 6.398-6.398 10.398-4.796L263.8 247c2.4.8 4 3.2 4.802 5.602L275 282.199 245.398 371 191 377.398c-1.602 1.602-3.2.801-4.8 0zm0 0M191.8 394.2l-10.402 30.402L152.602 415l12.796-29.602L179 391.801c4 2.398 8.8 3.199 12.8 2.398zm0 0M110.2 429.398h32l34.402 11.204 27.199 25.597c2.398 2.403 3.199 5.602 1.597 8.801l-1.597 4.8L101.398 439 103 434.2c1.602-3.2 4-4.802 7.2-4.802zm0 0M320.602 305.398l-20.801 63.204 14.398 4.796L335 311l18.398 7.2-28 84-64.796-28 27.199-80.802zm0 0M467 360.602V463l-126.398-54.398 28-84.801zm0 0M43 211v-8h16v8c0 22.398 17.602 40 40 40v16c-22.398 0-40 17.602-40 40v8h-16v-8c0-22.398-17.602-40-40-40v-16c22.398 0 40-17.602 40-40zm8 67.2c4.8-8 11.2-14.4 19.2-19.2-8-4.8-14.4-11.2-19.2-19.2-4.8 8-11.2 14.4-19.2 19.2 8 4.8 14.4 11.2 19.2 19.2zm0 00" />
    </Svg>
  )
}

const MemoSvgComponent = React.memo(TrophyIcon)
export default MemoSvgComponent
