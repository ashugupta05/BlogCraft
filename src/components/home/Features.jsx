// src/components/home/Features.jsx
import { PencilSquareIcon, UserGroupIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline';

export default function Features() {
  const features = [
    {
      name: 'Rich Markdown Editor',
      description: 'Write beautiful posts with full markdown support and real-time preview.',
      icon: PencilSquareIcon,
    },
    {
      name: 'Team Collaboration',
      description: 'Flexible user roles and permissions for seamless team management.',
      icon: UserGroupIcon,
    },
    {
      name: 'Easy Export',
      description: 'Export your content to multiple formats including PDF and CSV.',
      icon: ArrowDownTrayIcon,
    },
  ];

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Everything you need to create amazing content
          </h2>
        </div>
        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-primary-500 rounded-md shadow-lg">
                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                      {feature.name}
                    </h3>
                    <p className="mt-5 text-base text-gray-500">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
