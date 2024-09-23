export default function Card({ name, cuisine, image, menuLink }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={image} alt={name} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
        <p className="text-gray-600">{cuisine}</p>
        <a 
          href={menuLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="mt-4 inline-block bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
        >
          View Menu
        </a>
      </div>
    </div>
  )
}