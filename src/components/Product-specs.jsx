export default function ProductSpecs() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-[840px] mx-auto px-4">
        <div className="bg-white rounded-lg shadow-sm p-8">
          {/* Details Section */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Details</h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Just as a note, a picture by its name, the Pro lineup you really want when you plan on a serious mobile
              device for the people. During workdays, business, because technology is the simplest way to get things
              done. And that's what iPhone Pro and iPhone Pro Max are designed for. For high-end and intense.
              Specifically built for professionals who need the most advanced camera system, the fastest performance,
              and the most durable design. Whether you're a photographer, videographer, or creative professional, the
              iPhone Pro series is designed to meet your needs. With its advanced camera system, powerful A16 Bionic
              chip, and premium materials, it's the ultimate tool for those who demand the best.
            </p>
          </div>

          {/* Screen Section */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-6">Screen</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-700">Screen diagonal</span>
                <span className="font-medium">6.7"</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-700">The screen resolution</span>
                <span className="font-medium">2796×1290</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-700">The screen refresh rate</span>
                <span className="font-medium">120 Hz</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-700">The pixel density</span>
                <span className="font-medium">460 ppi</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-700">Screen type</span>
                <span className="font-medium">OLED</span>
              </div>
              <div className="flex justify-between items-start py-2">
                <span className="text-gray-700">Additionally</span>
                <div className="text-right">
                  <div className="font-medium">Dynamic Island</div>
                  <div className="font-medium">Always-On display</div>
                  <div className="font-medium">HDR Display</div>
                  <div className="font-medium">True Tone</div>
                  <div className="font-medium">Wide color (P3)</div>
                </div>
              </div>
            </div>
          </div>

          {/* CPU Section */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-6">CPU</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-700">CPU</span>
                <span className="font-medium">A16 Bionic</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-700">Number of cores</span>
                <span className="font-medium">6</span>
              </div>
            </div>
          </div>

          {/* View More Button */}
          <div className="flex justify-center pt-6">
            <button className="px-8 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-2">
              <span>View More</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
