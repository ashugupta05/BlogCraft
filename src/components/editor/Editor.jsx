import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { DocumentArrowDownIcon } from '@heroicons/react/24/outline';

const Editor = () => {
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const [isPreviewMode, setIsPreviewMode] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = async () => {
    if (!title || !content) {
      alert('Please add both title and content');
      return;
    }
    setIsSaving(true);
    // TODO: Implement actual save functionality
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSaving(false);
    alert('Post saved successfully!');
  };

  const exportToPDF = () => {
    // TODO: Implement PDF export
    alert('PDF export coming soon!');
  };

  const exportToCSV = () => {
    const csvContent = `Title,Content\n"${title}","${content}"`;
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${title.toLowerCase().replace(/\s+/g, '-')}.csv`;
    link.click();
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 dark:bg-gray-900 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-4 flex items-center justify-between">
          <input
            type="text"
            placeholder="Enter post title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="text-3xl font-bold bg-transparent border-none focus:outline-none focus:ring-0 w-full dark:text-white"
          />
          <div className="flex space-x-2">
            <div className="relative group">
              <button
                className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 rounded-md border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                <DocumentArrowDownIcon className="h-5 w-5" />
              </button>
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 hidden group-hover:block">
                <button
                  onClick={exportToPDF}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Export as PDF
                </button>
                <button
                  onClick={exportToCSV}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Export as CSV
                </button>
              </div>
            </div>
            <button
              onClick={() => setIsPreviewMode(!isPreviewMode)}
              className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 rounded-md border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              {isPreviewMode ? 'Edit' : 'Preview'}
            </button>
            <button
              onClick={handleSave}
              disabled={isSaving}
              className={`px-4 py-2 text-sm font-medium text-white rounded-md ${
                isSaving 
                  ? 'bg-primary-400 cursor-not-allowed' 
                  : 'bg-primary-600 hover:bg-primary-500'
              }`}
            >
              {isSaving ? 'Saving...' : 'Save Post'}
            </button>
          </div>
        </div>

        {/* Editor/Preview Area */}
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
          {isPreviewMode ? (
            <div className="prose dark:prose-invert max-w-none">
              <ReactMarkdown>{content}</ReactMarkdown>
            </div>
          ) : (
            <div className="flex flex-col h-full">
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Start writing your blog post... (Markdown supported)"
                className="w-full min-h-[500px] p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none font-mono bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
              />
              <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                <p>Markdown Supported:</p>
                <ul className="list-disc list-inside">
                  <li># Heading 1</li>
                  <li>## Heading 2</li>
                  <li>**Bold Text**</li>
                  <li>*Italic Text*</li>
                  <li>[Link](url)</li>
                  <li>- Bullet Points</li>
                  <li>```code blocks```</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Editor; 