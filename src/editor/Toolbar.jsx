// src/components/editor/Toolbar.jsx
export default function Toolbar() {
  const tools = ['Bold', 'Italic', 'Link', 'Image', 'List', 'Quote'];

  return (
    <div className="bg-white rounded-lg shadow-sm p-2 flex flex-wrap gap-2">
      {tools.map((tool) => (
        <button
          key={tool}
          className="px-3 py-1.5 text-sm border rounded-md hover:bg-gray-50 transition-colors"
        >
          {tool}
        </button>
      ))}
    </div>
  );
}
