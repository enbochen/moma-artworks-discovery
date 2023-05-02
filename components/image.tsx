export const ImageContainer = ({ children }) => (
  <div className="flex flex-wrap mx-[-10px]">{children}</div>
)

export const ImageItem = ({ src, width, height }) => (
  <div className="w-full p-1">
    <img
      src={src}
      className="object-cover w-full h-full rounded shadow-md"
      width={width}
      height={height}
    />
  </div>
)
