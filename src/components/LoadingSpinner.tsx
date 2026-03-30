/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function LoadingSpinner() {
  return (
    <div className="h-screen flex items-center justify-center bg-white">
      <div className="flex flex-col items-center space-y-4">
        <div className="relative w-12 h-12">
          <div className="absolute inset-0 rounded-full border-4 border-rose-100" />
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-rose-600 border-r-rose-600 animate-spin" />
        </div>
        <p className="text-gray-600 font-medium">Loading...</p>
      </div>
    </div>
  );
}
