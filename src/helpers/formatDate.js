import dayjs from 'dayjs'
import relativeTimePlugin from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTimePlugin)

export default function formatDate(timeUntilAiring) {
  const timeUntilAiringToMs = dayjs().add(timeUntilAiring * 1000, 'ms')
  const relativeTime = dayjs().to(timeUntilAiringToMs, true)
  const absoluteTime = dayjs(timeUntilAiringToMs).format('DD-MM-YYYY HH:mm')

  return { relTime: relativeTime, absTime: absoluteTime }
}