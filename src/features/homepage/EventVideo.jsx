import Section from '../../ui/Section'

function EventVideo() {
  return (
    <Section type="video">
      <iframe
        src="https://www.youtube.com/embed/tRmqK1lW_k4"
        width="100%"
        height="100%"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture full"
      ></iframe>
    </Section>
  )
}

export default EventVideo
