/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function RouteLoader() {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="flex flex-col items-center space-y-3">
        <div className="relative w-8 h-8">
          <div className="absolute inset-0 rounded-full border-2 border-rose-100" />
          <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-rose-600 border-r-rose-600 animate-spin" />
        </div>
        <p className="text-sm text-gray-500 font-medium">Loading...</p>
      </div>
    </div>
  );
}
