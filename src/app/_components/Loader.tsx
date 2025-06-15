import React from 'react'

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <picture>
        <img
          src="/loader.gif"
          alt="Loading..."
          className="w-96 h-96 object-contain"
        />
      </picture>
    </div>
  );
}

export default Loader
