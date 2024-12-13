export default function Minibrowser({ url, title }) {
  // console.log(url);
  return (

    <div
      style={{
        width: "100%",
        height: "500px",
        border: "1px solid black",
      }}
    >
      <iframe
        src={url}
        title={title}
        allowFullScreen
        style={{
          width: "100%",
          height: "100%",
          border: "none",
        }}
        frameBorder="0"
      ></iframe>
    </div>
  );
}
