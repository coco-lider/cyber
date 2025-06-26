export default function ProductSpecs() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8">
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4 dark:text-white">Details</h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              Just as a note, a picture by its name, the Pro lineup you really want when you plan on a serious mobile
              device for the people. During workdays, business, because technology is the simplest way to get things
              done. And that's what iPhone Pro and iPhone Pro Max are designed for. For high-end and intense.
              Specifically built for professionals who need the most advanced camera system, the fastest performance,
              and the most durable design. Whether you're a photographer, videographer, or creative professional, the
              iPhone Pro series is designed to meet your needs. With its advanced camera system, powerful A16 Bionic
              chip, and premium materials, it's the ultimate tool for those who demand the best.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-6 dark:text-white">Screen</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-700 dark:text-gray-300">Screen diagonal</span>
                <span className="font-medium dark:text-white">6.7"</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-700 dark:text-gray-300">The screen resolution</span>
                <span className="font-medium dark:text-white">2796×1290</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-700 dark:text-gray-300">The screen refresh rate</span>
                <span className="font-medium dark:text-white">120 Hz</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-700 dark:text-gray-300">The pixel density</span>
                <span className="font-medium dark:text-white">460 ppi</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-700 dark:text-gray-300">Screen type</span>
                <span className="font-medium dark:text-white">OLED</span>
              </div>
              <div className="flex justify-between items-start py-2">
                <span className="text-gray-700 dark:text-gray-300">Additionally</span>
                <div className="text-right">
                  <div className="font-medium dark:text-white">Dynamic Island</div>
                  <div className="font-medium dark:text-white">Always-On display</div>
                  <div className="font-medium dark:text-white">HDR Display</div>
                  <div className="font-medium dark:text-white">True Tone</div>
                  <div className="font-medium dark:text-white">Wide color (P3)</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-6 dark:text-white">CPU</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-700 dark:text-gray-300">CPU</span>
                <span className="font-medium dark:text-white">A16 Bionic</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-700 dark:text-gray-300">Number of cores</span>
                <span className="font-medium dark:text-white">6</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center pt-6">
            <button className="px-8 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-white rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center space-x-2">
              <span>View More</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
