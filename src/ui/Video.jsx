/* eslint react/prop-types: 0 */
function Video({ code }) {
  return (
    <iframe
      src={`https://www.youtube.com/embed/${code}`}
      width="100%"
      height="100%"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture full"
    ></iframe>
  )
}

export default Video
