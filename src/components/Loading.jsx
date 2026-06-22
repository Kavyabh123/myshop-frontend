function Loading() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">

      <h1 className="text-4xl font-bold text-yellow-500 mb-6">
        ElectroMart
      </h1>

      <div className="w-14 h-14 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin"></div>

      <p className="mt-4 text-gray-600">
        Loading Products...
      </p>

    </div>
  );
}

export default Loading;