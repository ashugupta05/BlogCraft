// src/components/editor/Editor.jsx
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import Toolbar from './Toolbar';

export default function Editor() {
  const [content, setContent] = useState('');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Toolbar />
      <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-sm p-4">
          <textarea
            className="w-full h-[calc(100vh-300px)] resize-none focus:outline-none"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write your story..."
          />
        </div>
        <div className="bg-white rounded-lg shadow-sm p-4 prose max-w-none">
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
