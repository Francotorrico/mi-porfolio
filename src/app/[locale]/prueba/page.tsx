export default function TestPage() {
  return (
    
    <div className="min-h-screen p-10 flex flex-col gap-10 bg-gray-100">
      
      <h1 className="text-2xl font-bold mb-4">Light + Dark en la misma página</h1>

      {/* 🌞 Modo Claro */}
      <div>
        <h2 className="font-semibold mb-2">Modo Claro</h2>

        <div className="bg-white rounded-lg px-6 py-8 shadow-xl ring ring-gray-900/5 max-w-md">
          <div>
            <span className="inline-flex items-center justify-center rounded-md bg-indigo-500 p-2 shadow-lg">
              <svg
                className="h-6 w-6 stroke-white"
                fill="none"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
            </span>
          </div>
          <h3 className="text-gray-900 mt-5 text-base font-medium tracking-tight">
            Writes upside-down
          </h3>
          <p className="text-gray-500 mt-2 text-sm">
            The Zero Gravity Pen can be used to write in any orientation.
          </p>
        </div>
      </div>

      {/* 🌚 Modo Oscuro */}
      <div className="dark">
        <h2 className="font-semibold mb-2">Modo Oscuro</h2>

        <div className="bg-white dark:bg-gray-800 rounded-lg px-6 py-8 shadow-xl ring ring-gray-900/5 max-w-md">
          <div>
            <span className="inline-flex items-center justify-center rounded-md bg-indigo-500 p-2 shadow-lg">
              <svg
                className="h-6 w-6 stroke-white"
                fill="none"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
            </span>
          </div>
          <h3 className="text-gray-900 dark:text-white mt-5 text-base font-medium tracking-tight">
            Writes upside-down
          </h3>
          <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm">
            The Zero Gravity Pen works even in outer space.
          </p>
        </div>
      </div>
    </div>
  );
}
