import React from 'react';
import { Link } from 'react-router-dom';
import { PencilIcon, TrashIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const Dashboard = () => {
  // Dummy data for demonstration
  const posts = [
    {
      id: 1,
      title: 'Getting Started with React',
      excerpt: 'Learn the basics of React and how to create your first component...',
      date: '2024-05-13',
      status: 'published'
    },
    {
      id: 2,
      title: 'Understanding Hooks',
      excerpt: 'Deep dive into React Hooks and their practical applications...',
      date: '2024-05-12',
      status: 'draft'
    }
  ];

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      // TODO: Implement delete functionality
      console.log('Deleting post:', id);
    }
  };

  const handleDownloadPDF = async () => {
    const table = document.querySelector('table');
    const canvas = await html2canvas(table);
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save('my-posts.pdf');
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900">My Posts</h1>
          <div className="flex gap-2">
            <button
              onClick={handleDownloadPDF}
              className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-500 flex items-center gap-2"
            >
              <ArrowDownTrayIcon className="h-5 w-5" />
              Download PDF
            </button>
            <Link
              to="/editor"
              className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-500"
            >
              New Post
            </Link>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Title
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {posts.map((post) => (
                <tr key={post.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-gray-900">{post.title}</span>
                      <span className="text-sm text-gray-500">{post.excerpt}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      post.status === 'published' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {post.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {new Date(post.date).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 text-right text-sm font-medium">
                    <div className="flex justify-end space-x-2">
                      <Link
                        to={`/editor/${post.id}`}
                        className="text-primary-600 hover:text-primary-900"
                      >
                        <PencilIcon className="h-5 w-5" />
                      </Link>
                      <button
                        onClick={() => handleDelete(post.id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        <TrashIcon className="h-5 w-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 