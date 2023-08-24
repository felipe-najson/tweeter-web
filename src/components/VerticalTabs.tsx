import { Tab, Tabs } from '@nextui-org/react'

export default function VerticalTabs() {
  return (
    <Tabs
      variant="underlined"
      aria-label="Tabs variants"
      aria-orientation="vertical"
    >
      <Tab key="photos" title="Photos" />
      <Tab key="music" title="Music" />
      <Tab key="videos" title="Videos" />
    </Tabs>
  )
}
